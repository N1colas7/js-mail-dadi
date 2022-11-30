let user = Math.floor(Math.random() * 6)+1;
let computer = Math.floor(Math.random() * 6)+1;

console.log(`Il numero dell'utente è ${user}`);
console.log(`Il numero del computer è ${computer}`);

if (user == computer) {
    console.log('Pareggio');
} else if (user > computer) {
    console.log('Utente ha vinto');
} else {
    console.log('Computer ha vinto');
}