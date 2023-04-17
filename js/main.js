
const contenitore = document.getElementById("container")

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

    // contenitore.innerHTML += `<div class="box">${risultato}</div>`;

    const nuovoElementoDiv = document.createElement('div'); 
    nuovoElementoDiv.append(risultato); 
    contenitore.append(nuovoElementoDiv); 

    nuovoElementoDiv.innerHTML = `<div class="box">${risultato}</div>`;
}