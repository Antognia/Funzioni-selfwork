

// Lancio Dadi
function lancioDado() {
    
    let numLanci = parseInt(prompt('Quante volte devo lanciare il Dado?'));  
    
// Array lanci dado
let risultatiUtente_1 = [];
let risultatiUtente_2 = [];

// Ciclo Lanci
for( let i = 0; i <= numLanci; i++ ){
    
    let numCasuale = Math.floor(Math.random() * (6 - 1) + 1);
    
    risultatiUtente_1.push(numCasuale);
}

for( let i = 0; i <= numLanci; i++ ){
    
    let numCasuale = Math.floor(Math.random() * (6 - 1) + 1);
    
    risultatiUtente_2.push(numCasuale);
}


// Somma dei risultati 
let sommaRisultati_1 = risultatiUtente_1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let sommaRisultati_2 = risultatiUtente_2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);



// Ciclo per Giocatore vincente

if (sommaRisultati_1 > sommaRisultati_2) {
    console.log(`Utente 1 ha totalizzato più punti : ${sommaRisultati_1}`);
}else if (sommaRisultati_1 < sommaRisultati_2){
    console.log(`Utente 2 ha totalizzato più punti : ${sommaRisultati_2}`);
}else if(sommaRisultati_1 = sommaRisultati_2){
    console.log(`Utente 1 e 2 hanno totalizzato lo stesso punteggio : ${sommaRisultati_2}`);
}

}

lancioDado();



