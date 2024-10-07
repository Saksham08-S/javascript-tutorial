// stack(primitive data types) , Heap(non primitive)
let myYoutubename="saksham@gmail.com"   // stack 
let name=myYoutubename
name="aashi"
console.log(name);                // copy is passed in stack memory so changing the value of one variable will not affect other
console.log(myYoutubename)        // have different value
let user={
    email:"user@gmail.com",          
    upi: "user@ybl"                 //  heap memory
}
let user2=user                      // here reference directly from heap is passed so the changing the value of one will affect other
user2.email="hello@gmail.com"
console.log(user.email);            // both have same value hello@gmail.com
console.log(user2.email);
