

for(let i = 1; i <= 100; i++){
    
    let risultato = i

    if(i % 3 == 0){
        risultato = "Fizz"
    } else if (i % 5 == 0){
       risultato = "Buzz"
    }  
    
    if(i % 3 == 0 && i % 5 == 0){
        risultato ="FizzBuzz"
    }

    console.log(risultato)
}