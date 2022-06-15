import React, {useState} from 'react';
import { addDoc } from 'firebase/firestore';
import { colRef } from '../firebase';

const AddBook = () => {
    
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [date, setDate] = useState(1800);
    const [rate, setRate] = useState(0);
    const [isbn, setIsbn] = useState('');

    const addBook = (e) => {
        e.preventDefault();
        if (date < 1800 || date > 2022){
            return alert('Год публикации должен быть не раньше 1800 года.')
        }
        if (rate < 0 || rate > 10){
            return alert('Рейтинг книги должен быть от нуля до 10ти')
        }
        if (authors.length <= 0){
            return alert('Книга должна содержать не менее одного автора.')
        }
        addDoc(colRef, {title, authors, date, rate, isbn})
            .catch(e => console.log(e.message));
    }
    
    return (
        <form 
                style={{width: "300", height: "300", display: "flex", flexDirection: "column"}}
                onSubmit={addBook}
            >
            <h3>Добавить кингу:</h3>
            <input required placeholder={"Название"} maxLength={100} value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
            <input placeholder={"Авторы"} value={authors} type="text" onChange={(e) => setAuthors(e.target.value)}/>
            <input placeholder={"Год публикации"} value={date}  min="1800" type="number" onChange={(e) => setDate(e.target.value)}/>
            <input placeholder={"Рейтинг"} type={"number"} min="0" max="10" value={rate} onChange={(e) => setRate(parseInt(e.target.value) ,10)}/>
            <input placeholder={"Код ISBN"} value={isbn} type="text" onChange={(e) => setIsbn(e.target.value)}/>
            <button type="submit" >Добавить кингу</button>
        </form>
    )
};

export default AddBook;