let books;

function loadDescription() {
  const xhr = new XMLHttpRequest();

  xhr.open(
    'GET',
    'https://api.retailrocket.net/api/2.0/recommendation/saleByPopular/5805d2845a65884e9c0e120c/?&categoryIds=1,3,7&format=json',
    false
  );

  xhr.send();
  books = this.JSON.parse(xhr.responseText);

  console.log(books);
  console.log(books.length);

  return books;
}

document.addEventListener('DOMContentLoaded', function(event) {
  loadDescription();
  console.log(books);
  console.log(books.length);

  const description = {
    Name: 0,
    Params: 0,
    Price: 0,
  };

  const oldPrice = {
    OldPrice: 0,
  };

  const img = {
    PictureUrl: 0,
  };

  function addInfo() {
    const parentContainer = document.getElementsByClassName('main')[0];

    for (let i = 0; i < books.length; i++) {
      oldPrice.OldPrice = books[i].OldPrice;
      img.PictureUrl = books[i].PictureUrl;

      description.Name = books[i].Name;
      description.Params = books[i].Params['Производитель'];
      description.Price = `${books[i].Price} ₽`;

      const label = document.createElement('img');
      const info = document.createElement('div');
      const old = document.createElement('div');
      const sale = document.createElement('div');

      const prices = document.createElement('div');

      label.className = 'Label';
      label.src = img.PictureUrl;

      info.appendChild(label);

      old.innerHTML = `${oldPrice.OldPrice} P`;
      old.className = 'Oldprice';
      sale.className = 'Sale';
      sale.innerHTML = `Скидка ${Math.floor(
        100 - (parseInt(description.Price) * 100) / oldPrice.OldPrice
      )}%`;
      prices.className = 'Prices';

      for (const key in description) {
        const desc = document.createElement('div');

        desc.className = key;
        desc.innerHTML = description[key];

        info.appendChild(desc);
      }

      info.appendChild(prices);
      prices.appendChild(old);
      prices.appendChild(sale);
      info.className = 'Square';

      parentContainer.appendChild(info);
    }
  }

  addInfo();
});
