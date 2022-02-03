import { checkError, client } from './client';

export const getArtists = async () => {
  const data = client
    .from('artists')
    .select();
  return checkError(data);
};
export const getBeatles = async () => {
  const data = client
    .from('beatles')
    .select();
  return checkError(data);
};
export const getBooks = async () => {
  const data = client
    .from('books')
    .select();
  return checkError(data);
};
export const getCannabis = async () => {
  const data = client
    .from('cannabis')
    .select();
  return checkError(data);
};