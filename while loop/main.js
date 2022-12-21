let too = 1
while(too <=10){
    console.log(too)
    too++
}
console.log('2 daalgavar')
for(let i = 1; i < 11; i++){
    if(i % 2 == 1){
        console.log(i)
    }  
}
console.log('3 daalgavr')
for(let j = 1; j < 11; j++){
    if(j % 2 == 0){
        console.log(j)
    }
}
console.log('4 daalgavar')
let output = 0
for(let k = 1; k < 101; k++){
    output = output + k
}
console.log(output)
console.log('5 daalgavar')
 let n = prompt('too oruulna uu')
 Number(n)
 let niilber = 0
 for(let h = 1; h <= n ; h++){
    niilber = niilber + h
    console.log(h)
 }
 console.log(niilber)
 console.log('6 daalgavar')
let input = prompt('too oruulna uu')
let count = false
Number(input)
if(input == 1){
    console.log(input ,'it is not prime number')
}else if(input > 1){
    for(let i = 2 ; i < input ; i++){
       if(input % i == 0){
        count = true
        break
       }
    }
    if(count == true){
        console.log(input,'anhnii too bish')
    }else{
        console.log(input, 'anhnii too mon')
    }
}
else{
    console.log(input,'anhnii too bish')
}
console.log('daalgavar 7')
let prime1 = 2
let prime = 2
let shalgah 
while(prime < 50 ){
    while(prime1 < prime){
        if(prime % prime1 == 0){
            shalgah = true
        }else[
            shalgah = false
        ]
        prime1++
    }
    if(shalgah ==true){
        console.log(prime)
    }
    prime++
}
