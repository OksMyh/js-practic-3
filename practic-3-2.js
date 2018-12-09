// - створити дві форми , по два інпути в кожній
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих форм

let form1 = document.createElement('form');
let input1Form1 = document.createElement('input');
let input2Form1 = document.createElement('input');
form1.setAttribute('id', 'form1');
document.body.appendChild(form1);
input1Form1.setAttribute('class','input1');
input2Form1.setAttribute('class','input2');
form1.insertBefore(input1Form1,null);
form1.insertBefore(input2Form1,null);

let form2 = document.createElement('form');
let input1Form2 = document.createElement('input');
let input2Form2 = document.createElement('input');
form2.setAttribute('id', 'form2');
document.body.appendChild(form2);
input1Form2.setAttribute('class','input1');
input2Form2.setAttribute('class','input2');
form2.insertBefore(input2Form2,null);
form2.insertBefore(input1Form2,input2Form2);

let button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'click me';
button.onclick = function (input1f1,input2f1,input1f2,input2f2) {
    input1f1 = input1Form1.value;
    console.log(input1f1);
    input2f1 = input2Form1.value;
    console.log(input2f1);
    input1f2 = input1Form2.value;
    console.log(input1f2);
    input2f2 = input2Form2.value;
    console.log(input2f2);
}
