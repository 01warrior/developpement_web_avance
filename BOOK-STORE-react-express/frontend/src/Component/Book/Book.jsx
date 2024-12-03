 import axios from "axios";
 import { useNavigate } from 'react-router-dom';
 
 function Book({book})
 {
    const navigate = useNavigate();

    async function deleteBook(id)
    {
        // Delete the book from the database 
        await axios.delete(`http://localhost:9090/api/books/${id}`)
        //l'id dans la bd cest _id généré auto pour chaque livre
    }
    
    return ( <tr>
        <td>{book.title}</td>
        <td>{book.price}</td>
        <td>{book.author}</td>
        <td>{book.date_publication}</td>
        
        <td><button onClick={()=>deleteBook(book._id)} >Supprimer</button> <button onClick={() => navigate(`/edit/${book._id}`)}>Modifier</button>  <button>Details</button></td>
    </tr>)
 }

 export default Book;