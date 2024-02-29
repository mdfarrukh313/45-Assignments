//task 24
const string1: string ="Apple";
const string2: string ="orange";
console.log(string1 === string2); //false strings are not equal
console.log(string1 !== string2);
//2
const mixCaseString: string ="Helloworld";
console.log(mixCaseString.toLocaleLowerCase() === "helloworld")
//3
const num1:number = 10;
const num2:number = 5;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//4
const condition1: boolean = true;
const condition2: boolean =false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

const Fruits: string[]=["Apple","Orange","Banana","Grapes"]
console.log(Fruits.indexOf("Apple"))
console.log(Fruits.indexOf("apple"))
