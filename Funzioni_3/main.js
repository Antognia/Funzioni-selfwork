
function indicatore(num) {
    if (num > 9999){
        console.log('Numero troppo grande');
    }
    return String(num).length;
}

console.log(indicatore(127784)); 
