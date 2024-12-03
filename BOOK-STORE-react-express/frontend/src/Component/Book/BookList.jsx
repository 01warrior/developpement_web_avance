import {useEffect, useState} from "react";
import Book from "./Book";
import './BookList.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function BookList()
{
    
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState(""); //variable d'etat Mot-clé de recherche  qui vas être utilisé pour filtrer les livres
    const navigate=useNavigate();

    useEffect (() => fetchBooks )

    async function fetchBooks() {
        const result=await axios.get("http://localhost:9090/api/books")
        console.log(result.data);
        setBooks(result.data);
    }

    // Filtrer les livres en fonction du mot-clé de recherche
    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
    );

    //a chaque fois que la valeur du form change ,on met a jour dans la variable d'etat et la 
    //variable d'etat est mise a jour dans le state de l'application vue quil est utilisé dans les livre filtré la liste de livre filtré changera egalement

    //donc je retourne filteredBook qui es par defaut normal vue que search est vide donc filteredBook est egal a books
    return (
        <div>
            <h1>Liste des livres</h1>
        
            <button onClick={()=>{navigate("/")}} >Nouveau livre</button>

            
            <input
                type="text"
                placeholder="Rechercher un livre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Prix</th>
                        <th>Auteur</th>
                        <th>Date de publication</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                {filteredBooks.map((b, index) => (
                        <Book key={index} book={b} />
                ))}


                </tbody>
            </table>


        </div>
    )
    
}

export default BookList;