// Define a function called show_magicians that takes an array of magician names and prints each name
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician names
let magicians: string[] = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];

// Call the function show_magicians and pass the array of magician names
show_magicians(magicians);
