
function contatore(N) {
for (let i = 1; i <= N; i++) {   
    if (i % 15 == 0) {
        scala.push('fizzBuzz');
    } else if(i % 3 == 0) {
        scala.push('Fizz');
    }else if(i % 5 == 0){
        scala.push('Buzz');
    }else {
        scala.push(i);
    }
}

 console.log(i);
}

contatore(150);

