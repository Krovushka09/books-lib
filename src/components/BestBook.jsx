import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const BestBook = () => {
  
  const [rateBook, setRateBook] = useState(0);
  const books = useSelector(state => state.bookAction.books);

  const dateNow = new Date();
  let sortBooks = books.filter(book => book.date < (dateNow.getFullYear() - 3));
  sortBooks = sortBooks.sort((a, b) => (
      b.rate > rateBook ? setRateBook(b.rate): null,
      a.rate < b.rate ? 1 : -1
  ));
  sortBooks = sortBooks.filter(book => book.rate >= rateBook);
  
  let index = Math.floor(Math.random() * sortBooks.length);
  let book = sortBooks[index];

  return (
    <> 
    {
      book !== undefined ? 
        (<div>
          <h3>Рекомендованная книга:</h3>
          <div className='card-book'>
              <div>Название: <b>{book.title}</b></div>
              <div>Автор: {book.authors}</div>
              <div>Год публикации: {book.date}</div>
              <div>Рейтинг: {book.rate}</div>
              <div>Код ISBN: {book.isbn}</div>
          </div>
        </div>) : (<div>
        <h3>Рекомендованная книга:</h3>
          <div>Отсутсвует</div>
        </div>)
    }
    </>
  )
};

export default BestBook;