// Užduotis 1
// Faile pateiktos dienos oro temperatūros.
// Parašykite programą kuri surastų ir išvestų didžiausią
// ir mažiausią temperatūrą, bei dienas kuriomis buvo šios temperatūros.

// Failo pavyzdys:
// 1 2 7 3 4 6 - 1 2 4 - 3 - 3 - 5 1 5 6 7 5 9 2 3 6 7 8 6 3 6 7 5 6 7 1

const fs = require('fs');
let data = fs.readFileSync('temp.txt').toString().split('').map(Number);

console.log(temp);

let dataArray = [];

data.forEach((d) => {
    dataArray.push(Number(d));
});




