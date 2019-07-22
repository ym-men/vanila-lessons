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

  const description = {
    Name: 0,
    Params: 0,
    Price: 0,
  };

  const oldPrice = {
    OldPrice:0
  }

  const img = {
    PictureUrl: 0
  };

  const parentContainer = document.getElementsByClassName('main')[0];

  function addInfo() {

    const addElement = (parentContainer, className, innerHTML) => {
      const elem = document.createElement('div');
      elem.className = className;
      elem.innerHTML = innerHTML;

      parentContainer.appendChild(elem);
    }

    books.forEach(function(element)
    {
      const label = document.createElement('img');
      img.PictureUrl = element.PictureUrl;
      label.className = 'Label';
      label.src = img.PictureUrl;

      const info = document.createElement('div');

      description.Name = element.Name;
      description.Params =element.Params['Производитель'];
      description.Price = element.Price + " ₽";

      oldPrice.OldPrice = element.OldPrice;

      const prices = document.createElement('div');
      prices.className = "Prices";

      info.appendChild(label);

      for (const key in description) {
        addElement(info,key,description[key]);

      }
      addElement(prices,"Oldprice",oldPrice.OldPrice +" ₽");
      addElement(prices,'Sale',"Скидка " + Math.floor(100 -(parseInt(description.Price)*100/oldPrice.OldPrice)) + "%");



      info.appendChild(prices);
      info.className = 'Square';
      parentContainer.appendChild(info);


    });
  }

  addInfo();
});
