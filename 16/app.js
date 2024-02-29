var guestArr = ["Alishba", "Haseeb", "Ali", "Hamza"];
var canNotAttend = "Ali";
var newGuest = "wajahat";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//guestArr.map((items) =>
//console.log(`Dear ${items}, I  found a bigger dinner table so I am invited more peoples.`)
//);
//part 2
var guestbeg = "muizz";
guestArr.unshift(guestbeg);
console.log(guestArr);
// part 3
var middleGuest = "Fatima";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//part 4
guestArr.push("Zeeshan");
console.log(guestArr);
//part5
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are inited in the more people list on dinner"));
});
