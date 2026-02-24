console.log("hello world")

var num = 10
console.log(num)
console.log(typeof num)
num = true
console.log(num)
console.log(typeof num)
num = "hello"
console.log(num)
console.log(typeof num)
num = null
console.log(num)
console.log(typeof num)
num = undefined
console.log(num)
console.log(typeof num)
//function
var sayHello = function(){
    console.log("hello " )
}
sayHello()
//array
var arr = [1,2,3,4,5]
console.log(arr)
//object
var person = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person)
//symbol
var sym1 = Symbol(1)
var sym2 = Symbol(1)
if(sym1 === sym2){
    console.log("sym1 and sym2 are equal")
}else{
    console.log("sym1 and sym2 are not equal")
} 
//loop
for(var i = 0; i < 10; i++){
    console.log(i)
}