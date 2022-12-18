let itCompanies = [ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let j =[]
for(let i = 0; i < 3; i++){
    j += itCompanies[i]
    j += ' '
}
console.log(j)
// suuliin 3
let k = []
for(let j = 4 ; j < 7 ; j++){
    k += itCompanies[j]
    k += ' '
}
console.log(k)
// 3 daalgavar
for(let k = 0 ; k < 7 ; k++){
    console.log(itCompanies[k])
}
itCompanies[0]  = ''
console.log(itCompanies)
itCompanies[0] = 'Facebook'
itCompanies[7] = ''
console.log(itCompanies);
