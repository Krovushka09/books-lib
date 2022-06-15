//функция сортировки книг по параметру.
//Функция принимает массив книг: books и параметр: param

function getSortedData(books, param) {
    let listParams = books.map((book) => book[param]);
    let sortParams = new Set(listParams.sort((a, b) => (a > b ? 1 : -1)));
    let resultData = [];
    sortParams.forEach((item) => {
      resultData.push({
        field: item,
        books: books.filter((book) => book[param] === item),
      });
    });
    return resultData;
  }

export default getSortedData;