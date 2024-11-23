const express=require("express");

const app=express();

//pour utiliser lencodage du body urlencoded
app.use(express.urlencoded()) 

const bookRouter=require("./routes/books.routes")

app.use("/",bookRouter)


//si ya requete get venant de la racine renvoyer ca
app.get("/",)

//---------------------------------------------------------------------------

//app.get("/books",)

//si ya requete avec un id renvoyer le livre correspondant avec req.params
//app.get("/book/:id",)

//modifier
//app.post("/books",)

//app.delete("/book/:id",)

//app.patch("/book/:id",)

//----------------------------------------------------------------------


//lancer le serveur sur le port 3000 
app.listen(9090,(req,res)=>{
    console.log("le serveur est en marche sur le port 9090");
})


