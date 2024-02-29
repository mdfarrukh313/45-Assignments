// Define a function called show_magicians that takes an array of magician names and prints each name
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define a function called make_great that modifies the array of magicians by adding "the Great" to each magician's name
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("".concat(magician, " the Great"));
    }
    return great_magicians;
}
// Define an array of magician names
var magicians = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
// Call the function make_great to modify the array of magicians
var great_magicians = make_great(magicians);
// Call the function show_magicians to see that the list has been modified
show_magicians(great_magicians);
