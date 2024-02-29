// Choose a color for the alien
let alien_color: 'green' | 'yellow' | 'red' = 'green';

// If-else chain to handle different alien colors
if (alien_color === 'green') {
    console.log("The alien's colour is green. The player just earned 5 points!");
} else if (alien_color === 'yellow') {
    console.log("The alien's colour is yellow. The player just earned 10 points!");
} else if (alien_color === 'red') {
    console.log("The alien's colour is red. The player just earned 15 points!");
} else {
    console.log("Invalid alien colour!"); // This will execute if the alien colour is neither green, yellow, nor red
}
//2
// Assume alien_color has been assigned a value previously
let aliencolor: 'green' | 'yellow' | 'red' = 'green';

// Check if the alien's colour is green
if (alien_color === 'green') {
    // Print a statement that the player earned 5 points for shooting the alien
    console.log("The player just earned 5 points for shooting the alien!");
}
//3
// Assume alien_color has been assigned a value previously
let aliencolors: 'green' | 'yellow' | 'red' = 'yellow'; // Example colour

// Check if the alien's colour is not green
if (alien_color !== 'green') {
    // Print a statement that the player earned 10 points
    console.log("The player just earned 10 points.");
}

// Assume alien_color has been assigned a value previously
let alien_colors : 'green' | 'yellow' | 'red' = 'green'; // Example colour

// Check if the alien's colour is not green
if (alien_colors !== 'green') {
    // Print a statement that the player earned 10 points
    console.log("The player just earned 10 points.");
} else {
    // Print a statement that the player earned 5 points for shooting the alien
    console.log("The player just earned 5 points for shooting the alien!");
}


