for (let numero = 1; numero <= 100; numero++) {
  
    if(numero % 3 === 0 && numero % 5 === 0){
      console.log(numero, 'Fizz Buzz');
    }
    else if(numero % 3 === 0){
      console.log(numero, 'Fizz');
    }
    else if(numero % 5 === 0){
      console.log(numero, 'Buzz');
    }else{
      console.log(numero);
    }
  }


  // Detecta cuando un numero sea divisible entre 3 escribir la palabra "Fizz"
  // cuando el numero sea divisible entre 5 escribir la palabra "Buzz"
  // Cuando el numero sea divisible entre 3 y también entre 5 escribir la palabra "FizzBuzz"