import BooksList from './BooksList';
import { useSelector } from 'react-redux';
import getSortedData from '../dbFunctions';

const SectionsList = ({param}) => {
  const books = useSelector(state => state.bookAction.books);
  const sortedBooks = getSortedData(books, param);
  
  return (
    <div className='container'>
      {
        sortedBooks.map(item => (
          <BooksList 
            key={item.books[0][param]}
            param={param}
            {...item}
          />
        ))
      }
    </div>
  )
};

export default SectionsList;