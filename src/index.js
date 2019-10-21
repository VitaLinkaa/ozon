'use strict';

// -----------------------------------------------------------------------------
// ставим и убираем галочку в CHECKBOX
// foreach


function toggleCheckbox() {
  const checkbox = document.querySelectorAll('.filter-check_checkbox');

  checkbox.forEach(element => {
    element.addEventListener('change', function () {
      if (this.checked) {
        this.nextElementSibling.classList.add('checked');
      } else {
        this.nextElementSibling.classList.remove('checked');
      }
    });
  });
};
// for
// const checkbox = document.querySelectorAll('.filter-check_checkbox');

// for (let i = 0; i < checkbox.length; i++) {
//   checkbox[i].addEventListener('change', function () {
//     if (this.checked) {
//       this.nextElementSibling.classList.add('checked');
//     } else {
//       this.nextElementSibling.classList.remove('checked');
//     }
//   });
// }

// КОРЗИНА - ОТКРЫТЬ И ЗАКРЫТЬ
// -----------------------------------------------------------------------------

function toggleBasket() {
  const btnCart = document.getElementById('cart'); // кнопка открытия корзины
  const openCart = document.querySelector('.cart'); // сама корзина, где display = none
  const cartClose = document.querySelector('.cart-close'); // закрываем корзину на крестик

  btnCart.addEventListener('click', () => {
    openCart.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // чтобы body не скролился
  });

  cartClose.addEventListener('click', () => {
    openCart.style.display = 'none';
    document.body.style.overflow = '';
  });
};

function addCart() {
  const cards = document.querySelectorAll('.goods .card');
  // получаем все карточки в обертки .goods (только те, что на главной странице)
  const cartWrapper = document.querySelector('.cart-wrapper');
  // находим обертку корзины, куда должны попадать заказы
  const cardEmpty = document.getElementById('cart-empty');
  // находим подпись, что корзина пуста
  const count = document.querySelector('.counter');
  // счетчик в корзине

  cards.forEach((card) => {
    const btn = card.querySelector('.btn');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);
      // делаем клонирование карты co всеми вложенными елементами, клон попадае в корзину
      showData();

      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Удалить из корзины';
      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      });
    });
  });
  // перебираем все карточки, создаем переменную для кнопки добавления карточки в 
  // корзину, при нажатии на эту кнопу срабатывает обработчик - создаем клон карточки
  // со всеми вложеными элементами и присобачиваем как ребенка в обертку корзины.
  // Удаляем надписть  - "Корзина пуста"
  // Запускаем функцию подсчета товаров в корзине


  // ФУНКЦИЯ - ПОДСЧЕТ И ВЫВОД К-ВА ТОВАРА В КОРЗИНЕ
  // -----------------------------------------------------------------------------
  function showData() {
    const countCards = cartWrapper.querySelectorAll('.card');
    // Находим переменную количество карточек в обертке корзины
    // Создаем переменную счетчик (const count = document.querySelector('.counter'),
    // навешиваем метод textContent и вываливаем в него длинну(к-во элементов в корзине)

    const cardsPrice = cartWrapper.querySelectorAll('.card-price');
    // Находим цены в карточках

    const cardsTotal = document.querySelector('.cart-total span');
    // Находим total в cardWrapper
    let total = 0;
    count.textContent = countCards.length;
    // навешиваем метод textContent и вываливаем в него длинну(к-во элементов в корзине)

    cardsPrice.forEach((cardPrice) => {

      let price = parseFloat(cardPrice.textContent);
      // получаем цену каждой карточки товара
      total += price;
      console.log(total);
    });

    cardsTotal.textContent = total;

    if (countCards.length !== 0) {
      cardEmpty.remove();
    } else {
      cartWrapper.appendChild(cardEmpty);
    }
  }

  // ПОДСЧЕТ ОБЩЕЙ СУММЫ В КОРЗИНЕ
  // -----------------------------------------------------------------------------
  // Получаем переменнную с ценной товара в карточке
  // Переходи в функцию showData() 
  // УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ
  // -----------------------------------------------------------------------------
  // 
}

// ФУНКЦИЯ ПОИСКА ПО ФИЛЬТРE АКЦИОННЫХ ТОВАРОВ
// -----------------------------------------------------------------------------
//
function filterSearch() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.getElementById('discount-checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');

    discountCheckbox.addEventListener('click', () =>{
      cards.forEach((card) => {
        if (discountCheckbox.checked) {
          if (!card.querySelector('.card-sale')){
            card.parentNode.style.display = 'none';
          }
        } else {
          card.parentNode.style.display = '';
        }
      });
    });

    // проверка по цене
  function filterPrice () {
    cards.forEach((card) => {
      const cardPrice = card.querySelector('.card-price');
      const price = parseFloat(cardPrice.textContent);
      
      if (min.value && (price < min.value) || (max.value && price > max.value)) {
        card.parentNode.style.display = 'none';
      } else {
        card.parentNode.style.display = '';      

      }
    });
  }

  min.addEventListener('change', filterPrice);
  max.addEventListener('change', filterPrice);

}

toggleCheckbox();
toggleBasket();
addCart();
filterSearch();


// ФИЛЬТР
// -----------------------------------------------------------------------------