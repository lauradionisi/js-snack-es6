// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var cycles = [
 {
  "nome": "Wilier",
  "peso": 6,
 },
 {
  "nome": "Cannodale",
  "peso": 8,
 },
 {
  "nome": "Trek Emonda",
  "peso": 4,
 },
 {
  "nome": "Sava Phantom",
  "peso": 9,
 },
 
];

var ligther = cycles[0];

for (var i = 0; i < cycles.length; i++) {
 if (cycles[i].peso < ligther.peso) {
  ligther = cycles[i];
 }
}
 console.log(`La bici più leggera pesa ${ligther.peso} kg`);

// // Creare un array di oggetti di squadre di calcio.
// // Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// // Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

 
var teams = [
 {
  "nome": "Roma",
  "punti": 0,
  "falli": 0,
 },
 {
  "nome": "Napoli",
  "punti": 0,
  "falli": 0,
 },
 {
  "nome": "Torino",
  "punti": 0,
  "falli": 0,
 },
 {
  "nome": "Crotone",
  "punti": 0,
  "falli": 0,
 },
];

teams.forEach((element) => {
 element.punti = Math.floor((Math.random() * 100) + 1);
 element.falli = Math.floor((Math.random() * 10) + 1);
});


var secondArray = [];
teams.forEach((element) => {
 var {nome, falli} = element;
 console.log(nome, falli);
 secondArray.push({nome, falli});
});

console.log(secondArray);


// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter


var firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function numbersPosition (arr, a, b) {
  var arr2 = [];
   arr.forEach((element, index) => {
    if ((index >= a) && (index <= b)) {
     arr2.push(element);
 }
 });
    console.log(arr2);
}

numbersPosition(firstArray, 2, 7);
