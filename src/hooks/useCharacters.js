import { useState, useEffect } from 'react';

export function useCharacters(filterName) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${filterName}`);
        const data = await response.json();
        // Si no hay resultados, la API devuelve error, manejamos con array vacío
        setCharacters(data.results || []);
      } catch (error) {
        console.error("Error al cargar datos", error);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [filterName]); // Se vuelve a ejecutar cuando el filtro cambia

  return { characters, loading };
}