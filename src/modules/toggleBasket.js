export default function toggleBasket() {
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
}