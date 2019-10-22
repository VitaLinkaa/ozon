
import filterPrice from './filterPrice';

export default function filterSearch() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.getElementById('discount-checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');

  discountCheckbox.addEventListener('click', () => {
    cards.forEach((card) => {
      if (discountCheckbox.checked) {
        if (!card.querySelector('.card-sale')) {
          card.parentNode.style.display = 'none';
        }
      } else {
        card.parentNode.style.display = '';
      }
    });
  });

  // ФИЛЬТР ПО ЦЕНЕ -----------------------------------------
  // function filterPrice () {
  //   cards.forEach((card) => {
  //     const cardPrice = card.querySelector('.card-price');
  //     const price = parseFloat(cardPrice.textContent);

  //     if (min.value && (price < min.value) || (max.value && price > max.value)) {
  //       card.parentNode.style.display = 'none';
  //     } else {
  //       card.parentNode.style.display = '';      
  //     }
  //   });
  // }

  min.addEventListener('change', filterPrice);
  max.addEventListener('change', filterPrice);

  // ПОИСК -----------------------------------------

  searchBtn.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'i'); //trim(пробелы), 'i' убрать зависимость от регистра
    cards.forEach((card) => {
      const title = card.querySelector('.card-title');

      if (!searchText.test(title.textContent)) {
        card.parentNode.style.display = 'none';
        // Метод test проверяет строку на наличие совпадений с регулярным выражением. Метод возвращает true, если совпадения были найдены.
      } else {
        card.parentNode.style.display = '';
      }
    });
    search.value = '';
  });
  // Создали searchText, в переменно поиска(ее value + не учитывать пробели trim().
  // Перебрали карточки и в них нашли пенеменную загаловка карточки
  // Условие - если регулярка не включает контент title, то
  // не выводи ничего, если включает = выведи title 


  // function filter() {
  //   const cards = document.querySelectorAll('.goods .card');
  //     cards.forEach((card) => {
  //       const cardPrice = card.querySelector('.card-price');
  //       const price = parseFloat(cardPrice.textContent);
  //       const discount = card.querySelector('.card-sale');

  //       if (min.value && (price < min.value) || (max.value && price > max.value)) {
  //         card.parentNode.style.display = 'none';
  //       } else if (discountCheckbox.checked && !discount) {
  //         card.parentNode.style.display = 'none'; 
  //       } else {
  //         card.parentNode.style.display = '';
  //       }

  //     });
  // }

}
