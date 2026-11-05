import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import CharacterTable from '../CharacterTable/CharacterTable'; // Asumiendo que los guardaste en Components/UI
import Pagination from '../Pagination/Pagination';
import './Users.css';

export default function Users() {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    const fetchRickAndMorty = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        
        if (!response.ok) throw new Error('Error al traer personajes');

        const json = await response.json();
        setCharacters(json.results || []);
        setTotalPages(json.info.pages || 1); 
      } catch (error) {
        console.error('Error al traer los personajes:', error.message);
      }
    };

    fetchRickAndMorty();
  }, [page]);

  return (
    <Container className="page-container py-4">
      <Card className="dark-card">
        <Card.Body>
          <h2 className="section-title text-center mb-4">Personajes de Rick and Morty</h2>

          
          <CharacterTable characters={characters} />

          <Pagination 
            currentPage={page} 
            totalPages={totalPages} 
            onPrev={() => setPage(page - 1)} 
            onNext={() => setPage(page + 1)} 
          />
          
        </Card.Body>
      </Card>
    </Container>
  );
}