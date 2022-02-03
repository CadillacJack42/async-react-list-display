import { checkError, client } from './client';

export const getArtists = async () => {
  const response = await client
    .from('artists')
    .select();
  return checkError(response);
};
export const getBeatles = async () => {
  const response = await client
    .from('beatles')
    .select();
  return checkError(response);
};
export const getBooks = async () => {
  const response = await client
    .from('books')
    .select();
  return checkError(response);
};
export const getCannabis = async () => {
  const response = await client
    .from('cannabis')
    .select();
  return checkError(response);
};