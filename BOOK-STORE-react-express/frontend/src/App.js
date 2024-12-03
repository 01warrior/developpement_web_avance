import './App.css';
import BookForm from './Component/Book/BookForm';
import BookList from './Component/Book/BookList';

import {Routes,Route,Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
  

    <Routes>
      <Route path="/" element={<BookForm />} />
      <Route path="/booklist" element={<BookList />} />
      <Route path="/edit/:id" element={<BookForm />} /> {/* Route pour modification quand je clique je navigue vers le formulaire avec l'id en param*/}
    </Routes>

      
    </div>
  );
}

export default App;
