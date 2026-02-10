for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        alert(i)
    }
}

//while
let i = 0;
while(i<3){
    alert(i);
    i++;
}

//until >100
let num;
do {
    num = +prompt("type number", '');
    if (num <= 100) {
        alert("try more");
    }
} while (num <= 100);

alert("Nice!");

//prime num
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  alert( i ); // простое число
}