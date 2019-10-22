



export default function filterPrice() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.getElementById('discount-checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');

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