if (age >= 14 && age <= 90);

if (age < 14 || age > 90);


let userName = prompt("Who is dat?", '');

if (userName == "Admin"){
    let pass = prompt("Password", '');

    if(pass == "TheMaster"){
        alert("Ur welcome!");
    }else if(pass == null || pass == ''){
        alert("Cancelled");
    }
    else{
        alert("wrong password");
    }
}else if(userName == '' || userName==null){
    alert("Cancelled");
}else{
    alert("who is that?!?!?!?!")
}
