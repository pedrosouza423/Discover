const div = document.createElement('div');
div.innerHTML = 'Hello'

const body = document.querySelector('body');
body.insertBefore(div, body.firstChild)

console.log(body);

button = document.querySelector('.botao');
// console.log(button);
button.addEventListener('click', () =>{
    console.log('Fui clicado')
});