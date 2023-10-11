// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Library {
    struct Book {
        address ISBN; // Perubahan tipe data ISBN menjadi address
        string title;
        uint256 year;
        string author;
    }
    mapping (address =>Book) public bookDetail;

    Book[] private books;
    address public admin;

    struct Log {
        string action;
        address ISBN; // Juga perubahan tipe data ISBN menjadi address
        bool success;
    }

    Log[] private logs;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this operation");
        _;
    }

    function addBook(
        address _ISBN, // Perubahan parameter _ISBN menjadi address
        string calldata _title,
        uint256 _year,
        string calldata _author
    ) public onlyAdmin {
        require(_ISBN != address(0), "ISBN cannot be empty");
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(_year > 0, "Year must be greater than 0");
        require(bytes(_author).length > 0, "Author cannot be empty");

        books.push(Book(_ISBN, _title, _year, _author));

        // Tambahkan log operasi
        logs.push(Log("Add Book", _ISBN, true));
    }

    function updateBook(
        address _ISBN, // Perubahan parameter _ISBN menjadi address
        string calldata _title,
        uint256 _year,
        string calldata _author
    ) public onlyAdmin {
        require(_ISBN != address(0), "ISBN cannot be empty");
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(_year > 0, "Year must be greater than 0");
        require(bytes(_author).length > 0, "Author cannot be empty");

        // Cari buku dengan ISBN yang sesuai dalam array
        for (uint256 i = 0; i < books.length; i++) {
            if (books[i].ISBN == _ISBN) { // Perubahan cara membandingkan ISBN
                // Temukan buku yang sesuai, lalu perbarui detailnya
                books[i] = Book(_ISBN, _title, _year, _author);

                // Tambahkan log operasi
                logs.push(Log("Update Book", _ISBN, true));
                return;
            }
        }

        // Jika buku tidak ditemukan
        logs.push(Log("Update Book", _ISBN, false));
        revert("Book with this ISBN does not exist");
    }

    function removeBook(address _ISBN) public onlyAdmin { // Perubahan parameter _ISBN menjadi address
        require(_ISBN != address(0), "ISBN cannot be empty");

        // Cari buku dengan ISBN yang sesuai dalam array
        for (uint256 i = 0; i < books.length; i++) {
            if (books[i].ISBN == _ISBN) { // Perubahan cara membandingkan ISBN
                // Temukan buku yang sesuai, lalu hapus
                if (i < books.length - 1) {
                    books[i] = books[books.length - 1];
                }
                books.pop();

                // Tambahkan log operasi
                logs.push(Log("Remove Book", _ISBN, true));
                return;
            }
        }

        // Jika buku tidak ditemukan
        logs.push(Log("Remove Book", _ISBN, false));
        revert("Book with this ISBN does not exist");
    }

    function getBookByISBN(address _ISBN) // Perubahan parameter _ISBN menjadi address
        public
        view
        returns (address, string memory, uint256, string memory)
    {
        for (uint256 i = 0; i < books.length; i++) {
            if (books[i].ISBN == _ISBN) { // Perubahan cara membandingkan ISBN
                Book memory book = books[i];
                return (book.ISBN, book.title, book.year, book.author);
            }
        }

        revert("Book with this ISBN does not exist");
    }

    // Mendapatkan log operasi
    function getLogs() public view returns (Log[] memory) {
        return logs;
    }

    // Mendapatkan jumlah buku dalam perpustakaan
    function getLibraryLength() public view returns (uint256) {
        return books.length;
    }
}
