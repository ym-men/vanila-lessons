function loadDescription() {
  // 1. Создаём новый объект XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // 2. Конфигурируем его: GET-запрос на URL
  xhr.open('GET', 'https://api.retailrocket.net/api/2.0/recommendation/saleByPopular/5805d2845a65884e9c0e120c/?&categoryIds=1,3,7&format=json', false);

  // 3. Отсылаем запрос
  xhr.send();

  // 4. Если код ответа сервера не 200, то это ошибка
  if (xhr.status !== 200) {
    // обработать ошибку
    alert(`${xhr.status}: ${xhr.statusText}`); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    var books = this.JSON.parse(xhr.responseText);
    console.log(books);
  }
  return books;
}
