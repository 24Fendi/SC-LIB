import { ethers } from "hardhat";
import chai from "chai";
import { Library__factory, Library } from "../typechain"; 
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

const { expect } = chai;

describe("Books contract", () => {
    let library: Library;
    let owner: HardhatEthersSigner; 
    let Book1: HardhatEthersSigner; 
    let notBook: HardhatEthersSigner; 

    beforeEach(async () => {
        // Get signers
        const accounts = await ethers.getSigners();
        owner = accounts[0];
        Book1 = accounts[1];
        notBook = accounts[2];

        // Deploy contract
        const LibraryFactory = (await ethers.getContractFactory(
            "Library",
            owner
        )) as Library__factory;
        library = await LibraryFactory.deploy(); 
    });

    describe("Happy Path", () => {
        it("Admin menambahkan buku", async () => {
            const ownerAddress = await library.admin();
            const newTitle = "New Book Title";
            const year = 2023;
            const author = "Fendi";

            console.log("Alamat ISBN yang digunakan dalam pengujian:", ownerAddress);
    // ...

            const result = await library
                .connect(owner)
                .addBook(ownerAddress, newTitle, year, author);

            expect(result)
                .to.emit(library, "LogBookAdded")
                .withArgs(ownerAddress, newTitle, year, author);
        });

        it("Admin mengupdate buku", async () => {
            const ownerAddress = await library.admin();
            const newTitle = "Updated Book Title";
            const year = 2023;
            const author = "John Doe";

            console.log("Alamat ISBN yang digunakan dalam pengujian:", ownerAddress);
    // ...

            const result = await library
                .connect(owner)
                .updateBook(ownerAddress, newTitle, year, author);

            expect(result)
                .to.emit(library, "LogBookUpdated")
                .withArgs(ownerAddress, newTitle);
        });

        it("Admin menghapus buku", async () => {
            const ownerAddress = await library.admin();

            console.log("Alamat ISBN yang digunakan dalam pengujian:", ownerAddress);
    // ...

            const result = await library
                .connect(owner)
                .removeBook(ownerAddress);
            expect(result)
                .to.emit(library, "LogBookRemoved")
                .withArgs(ownerAddress);
        });
    });

    describe("Sad Path", () => {
        it("Bukan Admin tidak bisa menambahkan buku", async () => {
            const ISBN = owner.address; // Menggunakan alamat admin sebagai ISBN
            const title = "Sample Book";
            const year = 2023;
            const author = "Fendi";

            try {
                await library
                    .connect(Book1)
                    .addBook(ISBN, title, year, author);

                expect.fail("Harapkan error tetapi tidak menerimanya");
            } catch (error) {
                if (typeof error === "string") {
                    expect(error).to.include("Only admin can perform this operation");
                } else {
                    expect(error).to.be.an("Error");
                }
            }
        });

        it("Bukan Admin tidak bisa mengupdate buku", async () => {
            const ISBN = owner.address;
            const newTitle = "Updated Book Title";
            const year = 2023;
            const author = "Bambang";

            try {
                await library
                    .connect(Book1)
                    .updateBook(ISBN, newTitle, year, author);

                expect.fail("Harapkan error tetapi tidak menerimanya");
            } catch (error) {
                if (typeof error === "string") {
                    expect(error).to.include("Only admin can perform this operation");
                } else {
                    expect(error).to.be.an("Error");
                }
            }
        });

        it("Bukan Admin tidak bisa meghapus buku", async () => {
            const ISBN = owner.address;

            try {
                await library.connect(Book1).removeBook(ISBN);
                expect.fail("Harapkan error tetapi tidak menerimanya");
            } catch (error) {
                if (typeof error === "string") {
                    expect(error).to.include("Only admin can perform this operation");
                } else {
                    expect(error).to.be.an("Error");
                }
            }
        });
    });
});
