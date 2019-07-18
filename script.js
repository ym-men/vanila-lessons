/*
1) сделать массив обЪектов
каждый объект содержит 3 поля айди фио телефон
2) этот массив нужно отрисовтаь в виде таблички
3) напротив каждого элемента таблички сделать крестик. по нажатию на крестик сотрудник должен удаляться из таблички.
 должен происхиодть ререндер
4)сделать два поля для ввода имени и телефона/ Кнопку confirm , по нажатию на которую сохраняется и отрисовывается в таблицу введеная инфа
! 5) Добавить фильтр: под табличкой сделать еще один инпут и кнопку серч, в нем написать  "серч бай фон набре".
Пишешь телефон,нажимаешь на кнопку серч,фрмируется еще одна табличка с результами, которые соответствуют попаданию номера телефона/
 */

let persons = [
  {
    id: '1',
    name: 'Mr First',
    phone: '+39161212321',
  },
  {
    id: '2',
    name: 'Mr Second',
    phone: '+39161212322',
  },
  {
    id: '3',
    name: 'Mr Third',
    phone: '+39161212323',
  },
  {
    id: '4',
    name: 'Mr Fourth',
    phone: '+39161212324',
  },
  {
    id: '5',
    name: 'Mr Fifth',
    phone: '+39161212325',
  },
  {
    id: '6',
    name: 'Mr Sixth',
    phone: '+39161212326',
  },
  {
    id: '7',
    name: 'Mr Seventh',
    phone: '+39161212327',
  },
  {
    id: '8',
    name: 'Mr Eighth',
    phone: '+39161212328',
  },
  {
    id: '9',
    name: 'Mr Ninth',
    phone: '+39161212329',
  },
  {
    id: '10',
    name: 'Mr Tenth',
    phone: '+39161212301',
  },
];

const createRemoveBtn = (id) => {
  const removeBtn = document.createElement('button');

  removeBtn.innerHTML = 'X';

  removeBtn.onclick = evt => {
    const el = evt.target.parentNode;

    el.parentNode.removeChild(el);

    persons = persons.filter(person => person.id !== id);
  };

  return removeBtn;
};

document.addEventListener('DOMContentLoaded', function(event) {
  const tableBody = document.getElementById('table_body');
  const buttonAdd = document.getElementById('buttonAdd');
  const filterInput = document.getElementById('filter');

  function createTable(data) {
    tableBody.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
      const row = document.createElement('tr');

      for (const key in data[i]) {
        const cell = document.createElement('td');

        cell.innerHTML = data[i][key];
        row.appendChild(cell);
      }

      const removeBtn = createRemoveBtn(data[i].id);

      row.appendChild(removeBtn);

      tableBody.appendChild(row);
    }
  }

  createTable(persons);

  // Other Buttons

  buttonAdd.onclick = () => {
    const inputData = {
      id: Math.floor(Math.random() * 100),
      name: 0,
      phone: 0,
    };

    inputData.name = document.getElementById('input').value;
    inputData.phone = document.getElementById('inputSecond').value;

    if (inputData.name && inputData.phone) {
      persons.push(inputData);
    }

    document.getElementById('input').value = '';
    document.getElementById('inputSecond').value = '';

    createTable(persons);
  };

  filterInput.onkeyup = () => {
    const searchValue = filterInput.value;

    if (searchValue) {
      const tempData = persons.filter(person => person.phone.indexOf(searchValue) > -1);

      createTable(tempData);
    } else {
      createTable(persons);
    }
  };
});
