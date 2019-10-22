'use strict';

import addCart from './modules/addCart';
import filterPrice from './modules/filterPrice';
import filterSearch from './modules/filterSearch';
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleBasket from './modules/toggleBasket';
import toggleCheckbox from './modules/toggleCheckbox';

getData().then((data) => {
  renderCards(data);
  filterPrice();
  toggleCheckbox();
  toggleBasket();
  addCart();
  filterSearch();
  renderCatalog();
});
