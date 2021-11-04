let btnOpen = document.querySelector('.button');
let input = document.querySelector('.input');

btnOpen.addEventListener('click', () => {
    window.open(input.value, 'black');
});

