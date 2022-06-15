import './App.css';
import AddBook from './components/AddBook';
import BestBook from './components/BestBook';
import SelectBook from './components/SeletBook';
import SectionsList from './components/SectionsList';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import {updateBooks} from './store/addBookSlice';
import { onSnapshot} from 'firebase/firestore'
import { colRef } from './firebase';

function App() {

  const dispatch = useDispatch();

  const [books, setBooks] = useState([]);
  const [param, setParam] = useState('date');

  useEffect(() => {
      onSnapshot(colRef, snapshot => 
        {
          setBooks(snapshot.docs.map(doc => {
              return {...doc.data(), id: doc.id}
            }
          ))
        }
      )
    }, []);  

  useEffect(() => {
    dispatch(updateBooks(books));
  }, [books]);

  return (
    <div className='App'>
      <div className='info-container'>
        <BestBook/>
        <AddBook/>
      </div>
      <SelectBook handleChange={setParam}/>
      <SectionsList param={param} />
    </div>
  );
}

export default App;
