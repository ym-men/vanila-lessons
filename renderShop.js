document.addEventListener('DOMContentLoaded', function(event) {

     document.querySelector('[href="#openModal"]').addEventListener('click', function() {
         document.getElementById('itemsWrapper').style.display = 'none';
         document.getElementById('openModal').style.display = 'block';
         document.getElementById('PayPage').style.display = 'none';


         window.renderBasket();
     });

     document.querySelector('[href="#close"]').addEventListener('click', function() {
         document.getElementById('itemsWrapper').style.display = 'block';
         document.getElementById('openModal').style.display = 'none';
         document.getElementById('PayPage').style.display = 'none';

         window.chosenBooks = [];

     });

    document.querySelector('[href="#finishOrder"]').addEventListener('click', function() {
        document.getElementById('itemsWrapper').style.display = 'none';
        document.getElementById('openModal').style.display = 'none';
        document.getElementById('PayPage').style.display = 'block';


    });

})