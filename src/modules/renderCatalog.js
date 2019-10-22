
// import filterPrice from './filterPrice';

export default function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card');
  const catalogList = document.querySelector('.catalog-list');
  const catalogBtn = document.querySelector('.catalog-button');
  const allLi = catalogList.querySelectorAll('li');
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

    if (event.target.tagName === 'LI') {
      cards.forEach((card) => {
        if (card.dataset.category === event.target.textContent) {
          card.parentNode.style.display = '';
        } else {
          card.parentNode.style.display = 'none';
        }
      });
      allLi.forEach((elem) => {
        if (elem === event.target) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      });
      // навешали активный класс выбранной рубрике, чтобы в ней видить акции
    }
  });

}