// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 146.26 ;
    // Retornamos el valor en Yen
    return valueInYen;

}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.00556;
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

