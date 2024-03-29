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

document.addEventListener("DOMContentLoaded", function(event) {

var persons = [{
    id: "1",
    name: "Mr First",
    phone: "+39161212321"
  },
  {
    id: "2",
    name: "Mr Second",
    phone: "+39161212322"
  },
  {
    id: "3",
    name: "Mr Third",
    phone: "+39161212323"
  },
  {
    id: "4",
    name: "Mr Fourth",
    phone: "+39161212324"
  },
  {
    id: "5",
    name: "Mr Fifth",
    phone: "+39161212325"
  },
  {
    id: "6",
    name: "Mr Sixth",
    phone: "+39161212326"
  },
  {
    id: "7",
    name: "Mr Seventh",
    phone: "+39161212327"
  },
  {
    id: "8",
    name: "Mr Eighth",
    phone: "+39161212328"
  },
  {
    id: "9",
    name: "Mr Ninth",
    phone: "+39161212329"
  },
  {
    id: "10",
    name: "Mr Tenth",
    phone: "+39161212301"
  },
];

var tableBody = document.getElementById('table_body');

/*var createRemoveButton = () => {
  var btn = document.createElement("button");
  btn.innerHTML = "X";


  btn.onclick = (evt) => {
    var el = evt.target.parentNode;
    el.parentNode.removeChild(el);

  }

  return btn;
}*/

function createTable() {

  for (var i = 0; i < persons.length; i++) {

    var row = document.createElement("tr");

    for (var key in persons[i]) {

      var cell = document.createElement("td");

      cell.innerHTML = persons[i][key];
      row.appendChild(cell);
    }

    const id = persons[i].id;
    var btn = document.createElement("button");
    btn.innerHTML = "X";

    btn.onclick = (evt) => {
      var el = evt.target.parentNode;
      el.parentNode.removeChild(el);

      persons = persons.filter(person => person.id !== id);
    }

    row.appendChild(btn);

    tableBody.appendChild(row);

  }

  buttonConfirm.onclick = () => {
    var inputData = {
      "id": Math.floor(Math.random() * 100),
      "name": 0,
      "phone": 0

    };

    inputData.name = document.getElementById("input").value;

    inputData.phone = document.getElementById("inputSecond").value;
    if (inputData.name != "" && inputData.phone != "") {
      persons.push(inputData);
    }


    var inputData = {};
    document.getElementById("input").value = "";
    document.getElementById("inputSecond").value = "";

    tableBody.innerHTML = "";
    renderTable();

  }

}

function renderTable() {

  createTable();

}

renderTable();

function createResultTable(tempData) {

  var tableBody = document.getElementById('tableResult_body');

  for (var i = 0; i < tempData.length; i++) {
    var row = document.createElement("tr");

    for (var key in tempData[i]) {
      var cell = document.createElement("td");

      cell.innerHTML = tempData[i][key];
      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }

}

buttonSearch.onclick = () => {
  if (document.getElementById("filter").value != "") {
   var tempData = persons.filter(
      function(person) {
        return person.phone.indexOf(document.getElementById("filter").value) != -1;
      })
    console.log(tempData);
    document.getElementById('tableResult_body').innerHTML = "";
    createResultTable(tempData);
  }

  document.getElementById("filter").value = "";

}





  });

