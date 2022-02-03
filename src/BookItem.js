import React from 'react';
import './Book.css';

export default function BookItem({
  title,
  publisher,
  isbn,
  author,
  image,
}) {
  return <div>
    <h2>{title}</h2>
    <h4>Written by: {author.map((person, i) => <p key={person + i}>{person}</p>)}</h4>
    <p>Published by: {publisher}</p>
    <p>ISBN: {isbn}</p>
    <img src={image} className='pic'></img>
  </div>;
}
