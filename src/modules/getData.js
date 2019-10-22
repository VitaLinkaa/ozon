export default function getData(data) {
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