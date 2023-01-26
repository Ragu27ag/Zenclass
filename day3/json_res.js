var obj = {
    "name" : "AGR",
    "AGE" : "24",
    "ROLE" : "Developer",
    "salary" : "200000",
    "HOBBIES" : ["cricket","webseries","fb"]
}
//for loop
var objkey = Object.keys(obj);
for(var i = 0;i < objkey.length;i++){
    console.log(obj[objkey[i]]);
}

//for in loop
for(var i in obj){
    console.log(obj[i]);
}



