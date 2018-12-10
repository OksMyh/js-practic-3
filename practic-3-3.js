// - Створити функцію, яка генерує таблицю, перший аргумент визначає кількість строк,
//     а другий параметр визначає кліькіть ячеєк в кожній строці.
//     третій параметр визначає елемент в який потрібно таблицю додати

// function ganereteTable(row,cell,callback) {
//     let table = document.createElement('table');
//     callback('p').appendChild(table);
//     for (let i=0;i<row;i++){
//         let newRow = table.insertRow();
//         for (let j=0;j<cell;j++){
//             newRow.insertCell();
//         }
//     }
//
// }
// ganereteTable(5,8,function (element) {
//     let p = document.createElement(element);
//    return document.body.appendChild(p);
//
// });

// second method

// function generateTable(row,cell,element) {
//     let table = document.createElement('table');
//     element.appendChild(table);
//     for (let i=0;i<row;i++){
//         let newRow = table.insertRow();
//         for (let j=0;j<cell;j++){
//             newRow.insertCell();
//         }
//     }
//
// }
// generateTable(8,3,document.getElementsByTagName('div')[0]);

//third method

function generateTable(row,cell,element) {
    let table = document.createElement('table');
    document.body.appendChild(element);
    element.insertBefore(table,null);
    for (let i=0;i<row;i++){
        let newRow = table.insertRow();
        for (let j=0;j<cell;j++){
            newRow.insertCell();
        }
    }

}
generateTable(8,3,document.createElement('p'));
