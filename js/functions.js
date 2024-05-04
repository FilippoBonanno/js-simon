

// CASUAL NUMBER
//Numero casuale tra due numeri max e minimo
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creiamo una funzione che compari due array , deve:
// chiedere se array[0] è contenuto in array2;
// con un ciclo for da 0 a fine array1.leght
function compair(array1, array2) {
    let score = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            score++;
        }
    }

    return score;
}






