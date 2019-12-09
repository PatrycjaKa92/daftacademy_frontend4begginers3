const someButton = document.querySelector('.hamburger');

const header = document.querySelector('.page-header');

someButton.addEventListener('click', () => {
    header.style.display = 'flex';

});



const przycisk1 = document.querySelector('#button1');
console.log(przycisk1.textContent);
przycisk1.addEventListener('click', () => {
    przycisk1.textContent = 'Have fun';
});


const przycisk2 = document.querySelector('#button2');
console.log(przycisk2.textContent);
przycisk2.addEventListener('click', () => {
    przycisk2.textContent = 'Have fun';

});


const przycisk3 = document.querySelector('#button3');
console.log(przycisk3.textContent);
przycisk3.addEventListener('click', () => {
    przycisk3.textContent = 'Have fun';
});


const przycisk4 = document.querySelector('#button4');
console.log(przycisk4.textContent);
przycisk4.addEventListener('click', () => {
    przycisk4.textContent = 'Have fun';
});



const logowanie = document.querySelector('.button button--contact');
console.log(przycisk4.textContent);
const dane = document.querySelector('.form__input')
logowanie.addEventListener('click', () => {
    const dataToSend = new FormData();
    dane.forEach(el => dataToSend.append(el.name, el.value));
});