document.addEventListener('DOMContentLoaded', function(event) {
  const parentContainer = document.getElementsByClassName('modal-body')[0];

  const tableBody = document.getElementById('table_body');

  let chosenBooksO = [
    {
      OldPrice: 2800,
      Price: 1385,
      Weight: 57,
      ItemId: 266554,
      CategoryIds: [537],
      CategoryPathsToRoot: [[537, 103, 3]],
      Regions: null,
      CategoryNames: ['Картины, плакаты и карты'],
      Params: {
        'Бесплатная доставка': 'Нет',
        Наличие: 'В наличии',
        'Номер варианта': '728734',
        Производитель: '1DEA.me',
        'Страница производителя': 'https://www.respublica.ru/brands/1dea-me',
        Article: '395852',
      },
      GroupId: null,
      StockId: null,
      Size: null,
      Color: null,
      Algorithm: 'p',
      BuyUrl: null,
      Vendor: null,
      Description:
        'Уникальная и стильная скретч карта мира "Black World" от Travel Map ™ – для тех, кто имеет чувство стиля и любит изысканные вещи. Сочетание черного цвета и золота...',
      TypePrefix: null,
      Model: null,
      Url:
        'https://www.respublica.ru/dom/interier-i-uyut/kartiny-plakaty-i-karty/395852-skretch-karta-mira-black',
      PictureUrl: 'https://www.respublica.ru/uploads/00/00/00/6k/t6/large_d102571679032e62.jpg',
      Name: 'Скретч-карта мира Travel Map ',
    },
    {
      OldPrice: 360,
      Price: 305,
      Weight: 56,
      ItemId: 337581,
      CategoryIds: [22],
      CategoryPathsToRoot: [[22, 21, 1]],
      Regions: null,
      CategoryNames: ['Психология'],
      Params: {
        'Бесплатная доставка': 'Нет',
        Наличие: 'В наличии',
        'Номер варианта': '799832',
        Производитель: 'Марк Мэнсон',
        'Страница производителя': 'https://www.respublica.ru/authors/37820',
        Article: '461972',
      },
      GroupId: null,
      StockId: null,
      Size: null,
      Color: null,
      Algorithm: 'p',
      BuyUrl: null,
      Vendor: null,
      Description:
        'Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее — будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал...',
      TypePrefix: null,
      Model: null,
      Url:
        'https://www.respublica.ru/knigi/gumanitarnye-i-obschestvennye-nauki/psihologiya/461972-tonkoe-iskusstvo-pofigizma',
      PictureUrl: 'https://www.respublica.ru/uploads/01/00/00/6e/23/large_551020aa86327c3e.jpg',
      Name: 'Тонкое искусство пофигизма',
    },
    {
      OldPrice: 2800,
      Price: 1385,
      Weight: 57,
      ItemId: 266554,
      CategoryIds: [537],
      CategoryPathsToRoot: [[537, 103, 3]],
      Regions: null,
      CategoryNames: ['Картины, плакаты и карты'],
      Params: {
        'Бесплатная доставка': 'Нет',
        Наличие: 'В наличии',
        'Номер варианта': '728734',
        Производитель: '1DEA.me',
        'Страница производителя': 'https://www.respublica.ru/brands/1dea-me',
        Article: '395852',
      },
      GroupId: null,
      StockId: null,
      Size: null,
      Color: null,
      Algorithm: 'p',
      BuyUrl: null,
      Vendor: null,
      Description:
        'Уникальная и стильная скретч карта мира "Black World" от Travel Map ™ – для тех, кто имеет чувство стиля и любит изысканные вещи. Сочетание черного цвета и золота...',
      TypePrefix: null,
      Model: null,
      Url:
        'https://www.respublica.ru/dom/interier-i-uyut/kartiny-plakaty-i-karty/395852-skretch-karta-mira-black',
      PictureUrl: 'https://www.respublica.ru/uploads/00/00/00/6k/t6/large_d102571679032e62.jpg',
      Name: 'Скретч-карта мира Travel Map ',
    },
    {
      OldPrice: 2800,
      Price: 1385,
      Weight: 57,
      ItemId: 266554,
      CategoryIds: [537],
      CategoryPathsToRoot: [[537, 103, 3]],
      Regions: null,
      CategoryNames: ['Картины, плакаты и карты'],
      Params: {
        'Бесплатная доставка': 'Нет',
        Наличие: 'В наличии',
        'Номер варианта': '728734',
        Производитель: '1DEA.me',
        'Страница производителя': 'https://www.respublica.ru/brands/1dea-me',
        Article: '395852',
      },
      GroupId: null,
      StockId: null,
      Size: null,
      Color: null,
      Algorithm: 'p',
      BuyUrl: null,
      Vendor: null,
      Description:
        'Уникальная и стильная скретч карта мира "Black World" от Travel Map ™ – для тех, кто имеет чувство стиля и любит изысканные вещи. Сочетание черного цвета и золота...',
      TypePrefix: null,
      Model: null,
      Url:
        'https://www.respublica.ru/dom/interier-i-uyut/kartiny-plakaty-i-karty/395852-skretch-karta-mira-black',
      PictureUrl: 'https://www.respublica.ru/uploads/00/00/00/6k/t6/large_d102571679032e62.jpg',
      Name: 'Скретч-карта мира Travel Map ',
    },
    {
      OldPrice: 460,
      Price: 384,
      Weight: 51,
      ItemId: 319412,
      CategoryIds: [25],
      CategoryPathsToRoot: [[25, 21, 1]],
      Regions: null,
      CategoryNames: ['Филология'],
      Params: {
        'Бесплатная доставка': 'Нет',
        Наличие: 'В наличии',
        'Номер варианта': '781638',
        Производитель: 'Максим Ильяхов',
        'Страница производителя': 'https://www.respublica.ru/authors/32397',
        Article: '444113',
      },
      GroupId: null,
      StockId: null,
      Size: null,
      Color: null,
      Algorithm: 'p',
      BuyUrl: null,
      Vendor: null,
      Description:
        'Авторы на конкретных примерах показывают, что такое хорошо и что такое плохо в информационных, рекламных, журналистских и публицистических текстах. Как писать письма, на...',
      TypePrefix: null,
      Model: null,
      Url:
        'https://www.respublica.ru/knigi/gumanitarnye-i-obschestvennye-nauki/filologiya/444113-pishi-sokraschay-kak-sozdavat-silnye-teksty',
      PictureUrl: 'https://www.respublica.ru/uploads/01/00/00/6e/ov/large_888e55eb57676e2d.jpg',
      Name: 'Пиши, сокращай. Как создавать сильные тексты',
    },
    {
      OldPrice: 460,
      Price: 384,
      Weight: 51,
      ItemId: 319412,
      CategoryIds: [25],
      CategoryPathsToRoot: [[25, 21, 1]],
      Regions: null,
      CategoryNames: ['Филология'],
      Params: {
        'Бесплатная доставка': 'Нет',
        Наличие: 'В наличии',
        'Номер варианта': '781638',
        Производитель: 'Максим Ильяхов',
        'Страница производителя': 'https://www.respublica.ru/authors/32397',
        Article: '444113',
      },
      GroupId: null,
      StockId: null,
      Size: null,
      Color: null,
      Algorithm: 'p',
      BuyUrl: null,
      Vendor: null,
      Description:
        'Авторы на конкретных примерах показывают, что такое хорошо и что такое плохо в информационных, рекламных, журналистских и публицистических текстах. Как писать письма, на...',
      TypePrefix: null,
      Model: null,
      Url:
        'https://www.respublica.ru/knigi/gumanitarnye-i-obschestvennye-nauki/filologiya/444113-pishi-sokraschay-kak-sozdavat-silnye-teksty',
      PictureUrl: 'https://www.respublica.ru/uploads/01/00/00/6e/ov/large_888e55eb57676e2d.jpg',
      Name: 'Пиши, сокращай. Как создавать сильные тексты',
    },
  ];

  const addCell = (container, className, innerHTML) => {
    const el = document.createElement('td');

    el.className = className;
    el.innerHTML = innerHTML;
    container.appendChild(el);
  };

  window.chosenBooks = [];
  var preAmountCountValue = 0;
  var fullAmountCountValue = 0;

  function renderBasket() {

    document.getElementsByClassName("table").innerHTML = ' ';

    let chosenBooks = window.chosenBooks;

    chosenBooks.forEach(function(element) {
      const repeatable = chosenBooks.filter(function(el) {
        return element.ItemId === el.ItemId;
      });

      if (repeatable.length !== 0) {
        const row = document.createElement('tr');

        const image = document.createElement('img');

        image.className = 'LabelBasket';
        image.src = element.PictureUrl;
        row.appendChild(image);

        addCell(row, 'NameBasket', element.Name);
        addCell(row, 'ArticleBasket', element.Params.Article);

        addCell(row, 'AmountBasket', `${repeatable.length}шт`);
        addCell(row, 'PriceBasket', `${element.Price} ₽`);

        const btn = document.createElement('button');

        btn.className = 'DeleteBtnBasket';
        btn.innerHTML = 'X';

        btn.onclick = evt => {
          const el = evt.target.parentNode;

          el.parentNode.removeChild(el);

          window.chosenBooks = chosenBooks.filter(book => book.ItemId !== element.ItemId);
          console.log(chosenBooks);
          console.log(1);
        };

        row.appendChild(btn);

        tableBody.appendChild(row);

        chosenBooks = chosenBooks.filter(function(el) {
          return element.ItemId !== el.ItemId;
        });
      }

      preAmountCountValue += element.Price*repeatable.length;

      preAmountCount.innerHTML = `${preAmountCountValue}₽`;

      fullAmountCountValue +=element.Price*repeatable.length;
      FullAmountCount.innerHTML = `${fullAmountCountValue}₽`;
    });


  }
  window.renderBasket = renderBasket;

  renderBasket();
});
