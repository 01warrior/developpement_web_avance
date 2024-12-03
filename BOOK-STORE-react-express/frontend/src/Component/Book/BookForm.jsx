import './BookForm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

//importer usenavigate avec useParams : useParams est utilisé pour récupérer les paramètres dynamiques d'une route. 
//vue que dans route je redirige avec des parametres que je souhaite recuperer pour fetcher les information 
import { useNavigate ,useParams } from 'react-router-dom';

function BookForm()
{
    //je declare les variable d'etat a fetcher
    const [title, setTitle] =useState("");
    const [author, setAuthor] =useState("");
    const [price, setPrice] =useState(0);

    //------------------------------

    //je recupere le parametre de la route avec useParams qui es l'id de lement a modifier
    const { id } = useParams();

    //-----------------------------

    const navigate = useNavigate();

    useEffect(()=>{
        //si l'id est defini c'est a dire quon a specifié ca dans le lien alors je veux recuperer les informations du livre
        if(id)
            fetchBookDetails()
    },[id])

    async function fetchBookDetails() {
        try {
            //recuperer les informations du livre avec l'id passé en param
            const result = await axios.get(`http://localhost:9090/api/books/${id}`);
            //et je met a jour les variable
            setTitle(result.data.title);
            setPrice(result.data.price);
            setAuthor(result.data.author);
        } catch (error) {
            console.error("Erreur lors du chargement des détails du livre :", error);
        }
    }

    //handle form avec condition si une id est defini ou non
    async function handleForm(e)
    {
        e.preventDefault();

        if (!title || !author || price <= 0) {
            alert("Veuillez remplir correctement tous les champs.");
            return;
        }

        //si un id est associé je doit modifier le livre corespndant si non je dois ajouter un nouveau livre
        try {
            if (id) {
                // Mettre à jour un livre existant avec le chemein patch
                await axios.patch(`http://localhost:9090/api/books/${id}`, { title, price, author });
                alert("Livre mis à jour avec succès !");
            } else {
                // Ajouter un nouveau livre
                await axios.post(`http://localhost:9090/api/books`, { title, price, author });
                alert("Livre ajouté avec succès !");
            }
            navigate("/booklist");
        } catch (error) {
            console.error("Erreur lors de la sauvegarde du livre :", error);
            alert("Une erreur est survenue.");
        }
    }

    //les value de mes input seront les variable d'etat par defaut
    //et le texte value sera affiché en fonction de la condition si ya id ou pas : si oui modifier et non ajouter
    return <form onSubmit={handleForm}>
        <label htmlFor="title">Title:</label>
        <input type="text" value={title} required id="title" name="title" onChange={(e)=>setTitle(e.target.value)}></input><br/>

        <label htmlFor="price">Prix</label>
        <input type="number" value={price} required id="price" name="price" onChange={(e)=> setPrice(e.target.value)}></input><br/>

        <label htmlFor="author">Auteur</label>
        <input type="text" value={author} required id="author" name="author" onChange={(e)=> setAuthor(e.target.value)}></input><br/>


        <input type="submit" value={id ?"Modifier":"Ajouter"}/>
        <input type="reset" />
         

    </form>
}

export default BookForm;