import React from 'react';
import BookItem from './BookItem';

export default function BooksList({ books }) {
  return <div>
    {books.map((book, i) => {
      return (
        <BookItem 
          key={book.title + i}
          title={book.title}
          publisher={book.publisher}
          isbn={book.isbn}
          author={book.author}
          image={book.image}
        />
      );
    })}
  </div>;
}
