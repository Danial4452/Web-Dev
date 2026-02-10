function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

//min 

function Min(a,b){
    if(a < b){
        return a;
    }
    else if(b > a){
        return b;
    }
    else{
        return "they are da same!";
    }
}

//pow
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert('there is a mistake');
}