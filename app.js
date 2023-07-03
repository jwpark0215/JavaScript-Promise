function sort(number){
   for(let i = 0; i < number.length; i++){
    for(let k = i + 1; k < number.length; k++){
        if(number[k].price > number[i].price){
            let value = number[i]
            number[i] = number[k]
            number[k] = value
        }
    }
   }
   return number
}

console.log(sort([ 
    {id: 1,price: 50},
    {id: 2,price: 30},
    {id: 3,price: 60},
    {id: 4,price: 10}
]))