import { useState, useEffect } from 'react';
import { getArtists } from './services/fetch-utils';

export const useFetch = () => {
  const [artists, setArtists] = useState([]);

  const fetchArtists = async () => {
    const data = await getArtists();
    console.log(data);
    setArtists(data);
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return { artists, setArtists };
};
