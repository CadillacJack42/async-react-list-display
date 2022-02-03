import { useState, useEffect } from 'react';
import { getArtists, getCannabis } from './services/fetch-utils';

export const useFetch = () => {
  const [artists, setArtists] = useState([]);
  const [cannabis, setCannabis] = useState([]);

  const fetchArtists = async () => {
    const data = await getArtists();
    setArtists(data);
  };

  const fetchCannabis = async () => {
    const data = await getCannabis();
    setCannabis(data);
  };

  useEffect(() => {
    fetchArtists();
    fetchCannabis();
  }, []);

  return { artists, cannabis };
};

