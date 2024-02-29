// Array to store pizza names
let pizzas: string[] = ['Margherita', 'Pepperoni', 'Vegetarian'];

// Loop through the array of pizza names
for (let i = 0; i < pizzas.length; i++) {
    // Determine the proper ordinal ending for the current index
    let ordinalEnding: string;
    if (i + 1 === 1) {
        ordinalEnding = 'st';
    } else if (i + 1 === 2) {
        ordinalEnding = 'nd';
    } else if (i + 1 === 3) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }

    // Print the pizza name with its ordinal ending
    console.log(`${i + 1}${ordinalEnding} ${pizzas[i]}`);
}
