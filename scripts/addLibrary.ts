import { ethers } from "hardhat";
import { Library } from "../typechain";

async function main() {
    //contract instance
    const library = await ethers.getContract<Library>("Library");

    let bookLength = await library.getLibraryLength();
    console.log("bookLength=", Number(bookLength));

    //getSigners
    const [owner, isbn1] = await ethers.getSigners();

    //addLibrary
    const addLibrary = await library.connect(owner).addBook(isbn1.address,"mencari hutang", 2045,"Fendi");
    await addLibrary.wait();

    bookLength = await library.getLibraryLength();
    console.log("bookLength=", Number(bookLength));

    const bookDetail = await library.getBookByISBN(isbn1.address);
    console.log ('booksDetail=', bookDetail);
    
};

main().catch((err)=>{
    console.log("error=", err);
    process.exitCode = 1;
}) 