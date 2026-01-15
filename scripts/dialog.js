const dialog = document.querySelector('#dialog-id');
const openButton = document.querySelector('.button-remember');
const closeButton = document.querySelector('.button-save');

openButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close());
