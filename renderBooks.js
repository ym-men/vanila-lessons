function loadBooks() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    'GET',
    'https://api.retailrocket.net/api/2.0/recommendation/saleByPopular/5805d2845a65884e9c0e120c/?&categoryIds=1,3,7&format=json',
    false
  );

  xhr.send();

  return this.JSON.parse(xhr.responseText);
}

let chosenBooks = [];

document.addEventListener('DOMContentLoaded', function(event) {
  let pickedBooks = [];

  const books = loadBooks();

  const parentContainer = document.getElementsByClassName('main')[0];

  const addElement = (container, className, innerHTML) => {
    const elem = document.createElement('div');

    elem.className = className;
    elem.innerHTML = innerHTML;

    container.appendChild(elem);
  };

  function renderBooks() {
    books.forEach(function(element) {
      const info = document.createElement('div');

      info.className = 'Square';

      const image = document.createElement('img');

      image.className = 'Label';
      image.src = element.PictureUrl;

      info.appendChild(image);

      addElement(info, 'Name', element.Name);
      addElement(info, 'Params', element.Params['Производитель']);

      // Кнопка покупки
      const price = document.createElement('div');

      price.className = 'Price';
      price.innerHTML = `${element.Price} ₽`;

      price.onclick = function() {
        pickedBooks = books.filter(el => parseInt(price.innerHTML, 10) === el.Price);
        window.chosenBooks.push(pickedBooks[0]);
        console.log(pickedBooks[0]);
        circle.innerHTML = window.chosenBooks.length;
         console.log(window.chosenBooks);

      };

      info.appendChild(price);

      // addElement(info, 'Price', `${element.Price} ₽`);

      const prices = document.createElement('div');

      prices.className = 'Prices';

      addElement(prices, 'OldPrice', `${element.OldPrice} ₽`);

      addElement(
        prices,
        'Sale',
        `Скидка ${Math.floor(100 - (element.Price * 100) / element.OldPrice)}%`
      );

      info.appendChild(prices);

      parentContainer.appendChild(info);
    });
  }

  renderBooks();


});
