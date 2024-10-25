let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())    
console.log(typeof mydate);                 // object

// let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());

// let my1CreatedDate=new Date(2023,0,23,5,3)
// console.log(my1CreatedDate.toLocaleString());

let dates=new Date("2023-01-14")
console.log(dates.toLocaleString());

let mytime=Date.now()
console.log(mytime);
console.log(dates.getTime());

// converting mytime into seconds
console.log(Math.floor(mytime/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long"
})