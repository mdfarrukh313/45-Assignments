// Define a function called show_magicians that takes an array of magician names and prints each name
function show_magicians(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define an array of magician names
var magicians = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
// Call the function show_magicians and pass the array of magician names
show_magicians(magicians);
