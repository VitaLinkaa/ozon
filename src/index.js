'use strict';

// -----------------------------------------------------------------------------
// ставим и убираем галочку в CHECKBOX
// foreach

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

const btnCart = document.getElementById('cart');
// кнопка открытия корзины

const openCart = document.querySelector('.cart');
// сама корзина, где display = none

const cartClose = document.querySelector('.cart-close');
// закрываем корзину на крестик

  btnCart.addEventListener('click', () => {
    openCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // чтобы body не скролился
  });

  cartClose.addEventListener('click', () => {
    openCart.style.display = 'none';
    document.body.style.overflow = '';
  });


// ДОБАВЛЕНИЕ ТОВАРОВ В КОРЗИНУ
// -----------------------------------------------------------------------------

const cards = document.querySelectorAll('.goods .card');
// получаем все карточки в обертки .goods (только те, что на главной странице)

const cartWrapper = document.querySelector('.cart-wrapper');
// находим обертку корзины, куда должны попадать заказы

const cardEmpty = document.getElementById('cart-empty');
// находим подпись, что корзина пуста

const count = document.querySelector('.counter');
// счетчик в корзине

  cards.forEach((card) =>{
    const btn = card.querySelector('.btn');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);
      // делаем клонирование карты co всеми вложенными елементами, клон попадае в корзину
      cardEmpty.remove();
      showData();
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
  count.textContent = countCards.length;
  console.log(countCards.length);
// Находим переменную количество карточек в обертке корзины
// Создаем переменную счетчик (const count = document.querySelector('.counter'),
// навешиваем метод textContent и вываливаем в него длинну(к-во элементов в корзине)
}

