//nome 

const nome = prompt("Qual è il tuo nome?");

//cognome

const cognome = prompt("Qual è il tuo cognome?");

//colore preferito

const colore = prompt("Qual è il tuo colore preferito?");

// generazione PW

let password = nome + cognome + colore + 23;

document.getElementById("password").innerHTML = `${password}`;