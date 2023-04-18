
const contenitore = document.getElementById("container")

for(let i = 1; i <= 100; i++){
    
    let risultato = i
    let classe = "";

    if(i % 3 == 0 && i % 5 == 0){
        risultato ="FizzBuzz"
        classe = "blu";
    } else if (i % 5 == 0){
       risultato = "Buzz"
       classe = "rosso"
    } else if (i % 3 == 0){
       risultato = "Fizz"
       classe = "verde" 
    }
    

    console.log(risultato)

    contenitore.innerHTML += `<div class="box ${classe}">${risultato}</div>`;

    
}

const box = document.querySelector(".box")

console.log(box.style)

box.style.backgroundcolor = 'green'