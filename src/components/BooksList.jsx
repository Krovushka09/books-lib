import React from 'react';
import BookCard from './BookCard';

const BooksList = ({books, param}) => {
  
  books.sort((a, b) => (a.title > b.title ? 1 : -1));
  
  return (
    <section className='list-books'>
      <h3>{books[0][param]}</h3>
      <div>
      {
        books.map(book => (
            <BookCard
              key={book.id}
              {...book}  
            />
        ))
      }
      </div>
    </section>
  )
};

export default BooksList;