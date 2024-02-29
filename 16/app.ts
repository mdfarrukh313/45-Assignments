let guestArr: string[] = ["Alishba","Haseeb","Ali","Hamza"];
let canNotAttend : string = "Ali"
 let newGuest : string = "wajahat"
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)
//guestArr.map((items) =>
//console.log(`Dear ${items}, I  found a bigger dinner table so I am invited more peoples.`)
//);
//part 2
let guestbeg : string = "muizz"
guestArr.unshift(guestbeg);
console.log(guestArr)
// part 3
let middleGuest : string = "Fatima"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)
//part 4
guestArr.push("Zeeshan")
console.log(guestArr)
//part5
guestArr.map((items) =>
console.log (`Dear ${items}, you are inited in the more people list on dinner`)); 