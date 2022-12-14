let input = prompt('too oruulna uu')
Number(input)
let output = false
if(input == 1){
    console.log('1 bol anhnii too ch bish yuch bish')
}else if(input > 1){
    for(let i = 2 ; i < input ; i++){
       if(input % i == 0){
        output = true
        break
       }
    }
    if(output == true){
        console.log(input,'anhnii too bish')
    }else{
        console.log(input, 'anhnii too mon')
    }
}
else{
    console.log(input,'anhnii too bish')
}

