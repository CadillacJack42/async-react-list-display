import { useState, useEffect } from 'react';
import { getArtists, getBeatles, getBooks, getCannabis } from './services/fetch-utils';

export const useFetch = () => {
  const [artists, setArtists] = useState([]);
  const [cannabis, setCannabis] = useState([]);
  const [books, setBooks] = useState([]);
  const [beatles, setBeatles] = useState([]);

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

  const fetchBeatles = async () => {
    const data = await getBeatles();
    setBeatles(data);
  };

  useEffect(() => {
    fetchArtists();
    fetchCannabis();
    fetchBooks();
    fetchBeatles();
  }, []);

  return { artists, cannabis, books, beatles };
};

