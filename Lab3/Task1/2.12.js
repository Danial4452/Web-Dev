alert(undefined ?? NaN ?? null ?? "" ?? " "); //NaN cause it defined value


let num1 = 10, num2 = 20;
let result;

result ??= num1 ?? num2;
alert(result); //10
