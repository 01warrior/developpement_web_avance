//pour pas tout fourer dans index.js donc je separe les requete dans des fonction qui vont traiter les requete

const listelives=[

    {"id":1,"nom":"belier noir","cnb":"ousmanesam"},
    {"id":2,"nom":"belier rouge","cnb":"ousmanesam"},
    {"id":3,"nom":"larousse","cnb":"ousmanesam"},
    {"id":4,"nom":"gourou noir","cnb":"ousmanesam"},
    {"id":5,"nom":"belier noir","cnb":"ousmanesam"},

]

function home(req,res){
    res.send("Hello Bienvenu sur lapi de livres");
}

function getAllBooks(req,res){
    //si une requete est passé avec mot clé en query, filtrer et renvoyer les livre qui contiennent ce mot
    if(req.query.q)
    {
        //req.query est lobjet qui contient les paramètres de la requete
        const books=listelives.filter(e=>e.nom.includes(req.query.q))
        res.json(books)
    }
    else
    {
        //envoyer sous format json au lieu de send qui es global
        res.json(listelives);
    }
    
}

function getbookById(req,res){
    // le livre dont lid corespond au param passé
    //generalement le parametre id est passé avec lurl et les argument dans le corp
    book=listelives.find(e=>e.id==req.params.id)
    res.json(book);
}

function addBook(req,res){
    //les argument du body vienne en comme un objet que je peux stocker dans une var et traiter
    const book=req.body
    listelives.push(book)
    res.send("Livre ajouté avec succes")
}

function deleteBook(req,res){
    const book=listelives.find(e=>e.id==req.params.id)
    res.send("Le livre l'id "+req.params.id+" a été supprimé avec succes");
}

function editBook(req,res){
    //trouver l'indice de l'objet a modifier
    const index=listelives.findIndex(e=>e.id==req.params.id)
    //modifier a l'index
    listelives[index].nom=req.body.nom
    listelives[index].cnb=req.body.cnb
    res.send("Le livre l'id "+req.params.id+" a été mis a jour avec succes")
}

module.exports={home,getAllBooks,addBook,deleteBook,getbookById,editBook}