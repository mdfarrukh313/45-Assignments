var guestArr = ["Muniza", "Tayyba", "Saba", "Kinza"];
var canNotAttend = "Muniza";
//console.log(canNotAttend + " " "can not attend the dinner .")
var newGuest = "MAham";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ",you are inited to the dinner."));
});
