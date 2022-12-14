let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]
let output = 0
for(let i = 0; i < arrayOfNumbers.length;i++){
    output = output + arrayOfNumbers[i]
}
console.log(output)
for(let k = 0 ; k <arrayOfNumbers.length; k++){
    if(arrayOfNumbers[k] > 600){
        console.log(arrayOfNumbers[k], 'hamgiin ih utga')
    }
}
for(let j = 0 ; j < arrayOfNumbers.length ; j++){
    if(arrayOfNumbers[j] < 12){
        console.log(arrayOfNumbers[j], 'hamgiin baga utga')
    }
}
arrayOfNumbers = 12 +',' + arrayOfNumbers + ',' + 12345
console.log(arrayOfNumbers)

