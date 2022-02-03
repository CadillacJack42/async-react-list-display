import { useState, useEffect } from 'react';
import { getArtists, getBooks, getCannabis } from './services/fetch-utils';

export const useFetch = () => {
  const [artists, setArtists] = useState([]);
  const [cannabis, setCannabis] = useState([]);
  const [books, setBooks] = useState([]);

  const fetchArtists = async () => {
    const data = await getArtists();
    setArtists(data);
  };

  const fetchCannabis = async () => {
    const data = await getCannabis();
    setCannabis(data);
  };

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    fetchArtists();
    fetchCannabis();
    fetchBooks();
  }, []);

  return { artists, cannabis, books };
};

