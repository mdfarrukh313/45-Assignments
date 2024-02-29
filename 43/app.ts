// Define a function called show_magicians that takes an array of magician names and prints each name
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function called make_great that modifies a copy of the array of magicians by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

// Define an array of magician names
let magicians: string[] = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];

// Call the function make_great with a copy of the array of magicians' names
let great_magicians: string[] = make_great([...magicians]); // Using spread operator to create a shallow copy

// Call the function show_magicians to show the original array of magician names
show_magicians(magicians);

// Call the function show_magicians to show the modified array of magician names with "the Great" added
show_magicians(great_magicians);
