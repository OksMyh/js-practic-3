// створити блок з id, class та текстом в середені. Зчитати окремо цей текст за селекторів по
// id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - створити функцію яка змінюватиме розміри та колір цього блоку згідно з визначиними аргументами
//

let div = document.createElement('div');
div.innerText = 'Block that I created in javascript ';
div.setAttribute('id', 'idblock');
div.setAttribute('class', 'classblock');
document.body.appendChild(div);
document.getElementById('idblock').innerText = 'change text with ID';

if (div.id === 'idblock' || div.className ==='classblock') {
    changeDiv('#029900', '450px', '100px')
}else {
    div.innerText = 'You have another argument';
}
function changeDiv(color, width, height) {
    console.log(7777);
    div.style.backgroundColor = color;
    div.style.height = height;
    div.style.width = width;

};

