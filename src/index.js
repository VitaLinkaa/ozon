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
}

// ФУНКЦИЯ ПОИСКА ПО ФИЛЬТРE АКЦИОННЫХ ТОВАРОВ
// -----------------------------------------------------------------------------
//
function filterSearch() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.getElementById('discount-checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');

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

// ФИЛЬТР ПО ЦЕНЕ -----------------------------------------
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


// ПОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА -----------------------------------------

function getData() {
  const gootsWrap = document.querySelector('.goods');

  return fetch('../db/db.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Данные не были получены, ошибка:' + response.status);
      }
    })
    .then((data) => {
      return data;
    })
    // обработка данных

    .catch(err => {
      console.warn(err);
      gootsWrap.innerHTML = '<div style="color:red; font-size: 20px;">Что-то пошло не так!</div>';
    });
    // обработка ошибки
  
}

// ВЫВОДИМ КАРТОЧКИ ТОВАРА
function renderCards(data) {
  const goodsWrap = document.querySelector('.goods');
  data.goods.forEach((good)=> {
    const card = document.createElement('div');
    card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
    card.innerHTML = `
                <div class="card" data-category="${good.category}">
                  ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
                  
									<div class="card-img-wrapper">
										<span class="card-img-top"
											style="background-image: url('${good.img}')"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price" style ="${good.sale ? 'color: #D21D1D' : ''}" >${good.price} p.</div>
										<h5 class="card-title">${good.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
    `;
  goodsWrap.appendChild(card);
  });
}

function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogBtn = document.querySelector('.catalog-button');
    const catalogWrap = document.querySelector('.catalog');
    const categories = new Set();

    cards.forEach((card) => {
      categories.add(card.dataset.category);
    });
    // перебор категорий

    categories.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      catalogList.appendChild(li);
    });
  // перебор уникальных категорий

    catalogBtn.addEventListener('click', (event) => {
      if (catalogWrap.style.display) {
        catalogWrap.style.display = '';
      } else {
      catalogWrap.style.display = 'block';
      }

      if(event.target.tagName === 'LI') {
        cards.forEach((card) => {
          if (card.dataset.category === event.target.textContent) {
            card.parentNode.style.display = '';
          } else {
            card.parentNode.style.display = 'none';
          }
        });
      }
    });
}


getData().then((data) => {
  renderCards(data);
  toggleCheckbox();
  toggleBasket();
  addCart();
  filterSearch();
  renderCatalog();
});
