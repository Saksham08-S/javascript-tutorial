const mysym=Symbol("key1")
const obj={
    name:"saksham",
    gen:true,
    [mysym]:"key 2",                            // symbol is represented by square brackets
    age: 18,
    last_login: ["monday","wednesday"]
}

// accessing the object members
console.log(obj["last_login"]);
console.log(obj.last_login);

console.log(obj[mysym]);                // quotes are not needed in symbols
//Object.freeze(obj)                      // object becomes unchangable by freeze function
console.log(obj);

obj.greeting= function(){
    console.log("hello world");             // functions can also used in objects 
}

console.log(obj.greeting());

