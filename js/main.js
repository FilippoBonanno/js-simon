
const numbers = []

let lista = document.getElementById ("lista"); 
  
// genero 5 numeri casuali da 1 a 100 tramite una funzione 

 let i = 1;
 while (numbers.length < 5) {
        
       // stampo il numero PC in cosole
    let casualNumber = getRandomNumber(1, 100);

    if (numbers.includes(casualNumber)) {

    } else {

         numbers.push (casualNumber);
    };

       i++;
    lista.innerHTML += (`<li>${casualNumber}</li>`);

}

console.log (numbers);



const userInput = [];

setTimeout(function() {
    lista.classList.add("remove");
    
    
}, 3000);


setTimeout (function () {


    for (let i = 0; i <= 4; i++) {
        let numberUser = parseInt(prompt("Inserisci un numero"));
        userInput.push (numberUser);
    }

    let score = compair(numbers, userInput);

    console.log ("Numeri indovinati:", score);
    
}, 4000);
console.log(userInput);






