let user = {};

user.name = "john";
user.surname = "Bulatkin";
user.name = "Pete";

delete(user.surname);

alert(user);


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

//sum

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
function sum(salaries){
    let summ = 0;
    for (let key in salaries) {
    summ += salaries[key];
}
return summ;

}

alert(sum(salaries));

//multiplyNumeric(obj)

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    for(let key in obj){
        obj[key] *= 2;
    }
    return obj;

}
multiplyNumeric(menu);
alert(menu);