var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define a function called show_magicians that takes an array of magician names and prints each name
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define a function called make_great that modifies a copy of the array of magicians by adding "the Great" to each magician's name
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
// Call the function make_great with a copy of the array of magicians' names
var great_magicians = make_great(__spreadArray([], magicians, true)); // Using spread operator to create a shallow copy
// Call the function show_magicians to show the original array of magician names
show_magicians(magicians);
// Call the function show_magicians to show the modified array of magician names with "the Great" added
show_magicians(great_magicians);
