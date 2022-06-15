import React from "react";

const SelectBook = ({handleChange}) => {
  
    const onChange = (e) => {
        handleChange(e.currentTarget.value);
    };

  return (
  <div>
    <div>Сортировка книг по:</div>
    <select defaultValue="date" name="select" onChange={onChange}>
        <option value="rate">Рейтинг</option>
        <option value="authors">Автор</option>
        <option value="date">Дата публикации</option>
      </select>
  </div>
);
};

export default SelectBook;
