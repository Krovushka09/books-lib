import React from 'react';
import {
  deleteDoc,
  doc
} from 'firebase/firestore';
import { db } from '../firebase';


const BookCard = ({id, title, authors, date, rate, isbn}) => {
  
  const deleteBook = () => {
    const docRef = doc(db, 'bookslib', id);
    deleteDoc(docRef)
      .then(console.log('del'))
      .catch(e => console.log(e.message));
  };

  return (
  <div className='card-book' key={id}>
    <span>Название: <b>{title}</b></span>
    <span>Автор: {authors}</span>
    <span>Год публикации: {date}</span>
    <span>Рейтинг: {rate}</span>
    <span>Код ISBN: {isbn}</span>
    <span 
      className='delete'
      onClick={() => deleteBook()}
    >
      &times;
    </span>
  </div>
);
};

export default BookCard;