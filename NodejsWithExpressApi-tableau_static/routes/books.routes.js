//ici je defini toutes les routes necessaires dans le projet : lorsque je recoit requete dans chaqun deu jassoci une fonction du controleur

const express=require("express")

//importer le controleur pour utiliser les function

const bookController=require("../doss_controleur/book.controller")

//permet de definir des routes
const router=express.Router()

router.route("/books").get(bookController.getAllBooks).post(bookController.addBook)

router.route("/book/:id").get(bookController.getbookById).delete(bookController.deleteBook).patch(bookController.editBook)

router.route("/").get(bookController.home)

//exporter le router pour lutiliser dans dautres fichiers

 module.exports=router;