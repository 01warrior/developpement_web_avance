import  BookModel from "../models/Book.js"

export async function getAllBooks() {
    return await BookModel.find();
}
export async function getBookByID(idB) {
    return await BookModel.findById(idB);
}

export async function addBook(book){
    return await BookModel.create(book);
}

export async function deleteBook(idB) {
    return await BookModel.findByIdAndDelete(idB);
}
export async function updateBook(idB,book) {
    return await BookModel.findByIdAndUpdate(idB,book);
}

