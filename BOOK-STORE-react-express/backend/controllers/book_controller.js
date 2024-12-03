
import * as bookService from "../services/book_service.js";

export async function getAllBooks(req,res){
   try{
    const books=await bookService.getAllBooks();
    res.status(200).json(books);
   } catch(error){
      res.status(500).json({error})
   }
   
}    

export async function getBookById(req,res){
    try{
        const book=await bookService.getBookByID(req.params.id);
        res.status(200).json(book);
    }catch(error){
        res.status(500).json({error});
    }
    
}
export async function addBook(req,res){
    try{
        const book=await bookService.addBook(req.body)
        res.status(201).json(book);
    }catch(error){
        res.status(500).json({error});
    }
   
}

export async function deleteBookById(req,res){
    try{
        const book=await bookService.deleteBook(req.params.id);
        res.status(200).json(book);
    }catch(error){
        res.status(500).json(error);
    }

}

export async function updateBook(req,res){
    try{
        const book=await bookService.updateBook(req.params.id,req.body);
        res.status(200).json(book);
    }catch(error){
        res.status(500).json({error});
    }
    
}

