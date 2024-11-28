import express from "express";
const router=express.Router();
import { addBook, deleteBookById, getAllBooks, getBookById, updateBook } from "../controllers/book_controller.js";
router.route("/").get(getAllBooks)
                      .post(addBook);
router.route("/:id").get(getBookById)    
                        .delete(deleteBookById)
                        .patch(updateBook)

export default router;
                        
                        
