export default function addCart() {
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