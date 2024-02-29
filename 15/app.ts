let guestArr : string[] = ["Muniza","Tayyba","Saba","Kinza"];
let canNotAttend : string = "Muniza"
//console.log(canNotAttend + " " "can not attend the dinner .")
let newGuest : string = "MAham"
guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map((items) => 
console.log(`Dear ${items},you are inited to the dinner.`)
)
