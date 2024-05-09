const number1 = 500;
const date = 800;
const pluss = number1 / (date /2)
const intervalle = document.getElementById('count');

let count = 0;
let stopall;

function updatecount() {
    intervalle.textContent = Math.ceil(count);
    count += pluss;
    if (count > number1) {
        clearInterval(stopall);
        intervalle.textContent = number1;
    }
}
stopall = setInterval(updatecount, 1);

const number2 = 17148;
const delai = 2000;
const plus = number2 / (delai /5)
const inter = document.getElementById('count1');

let count1 = 0;
let arret;

function update() {
    inter.textContent = Math.ceil(count1);
    count1 += plus;
    if (count1 > number2) {
        clearInterval(arret);
        inter.textContent = number2;
    }
}
arret = setInterval(update, 1);

const number3 = 1500;
const delais = 2000;
const increment = number3 / (delais /5)
const interv = document.getElementById('count2');

let count2 = 0;
let stoptout;

function up() {
    interv.textContent = Math.ceil(count2);
    count2 += increment;
    if (count2 > number3) {
        clearInterval(stoptout);
        interv.textContent = number3;
    }
}
stoptout = setInterval(up, 1);