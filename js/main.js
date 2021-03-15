// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var biciclette = [
 {
  nome: "Wilier",
  peso: 10,
 },
 {
  nome: "Cannodale",
  peso: 8,
 },
 {
  nome: "Trek Emonda",
  peso: 4,
 },
 {
  nome: "Sava Phantom",
  peso: 9,
 },
 
];

for(var i= 0; i < biciclette.length; i++) {
 var [{nome, peso}] = biciclette;
 };
console.log(`${peso}`);

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

 
var teams = [
 team1 = {
  "nome": "Roma",
  "punti": 0,
  "falli": 0,
 },
 team2 = {
  "nome": "Napoli",
  "punti": 0,
  "falli": 0,
 },
 team3 = {
  "nome": "Torino",
  "punti": 0,
  "falli": 0,
 },
 team4 = {
  "nome": "Crotone",
  "punti": 0,
  "falli": 0,
 },
];


for (var key in teams) {
 var tmp = Math.floor(Math.random()* 100);
 var tmp2 = Math.floor(Math.random()* 10);

 team1.punti = tmp; 
 team2.punti = tmp;
 team3.punti = tmp;
 team4.punti = tmp;
 team1.falli = tmp2;
 team2.falli = tmp2;
 team3.falli = tmp2;
 team4.falli = tmp2;
 console.log(teams[key]);
}

