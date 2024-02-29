// Array to store pizza names
var pizzas = ['Margherita', 'Pepperoni', 'Vegetarian'];
// Loop through the array of pizza names
for (var i = 0; i < pizzas.length; i++) {
    // Determine the proper ordinal ending for the current index
    var ordinalEnding = void 0;
    if (i + 1 === 1) {
        ordinalEnding = 'st';
    }
    else if (i + 1 === 2) {
        ordinalEnding = 'nd';
    }
    else if (i + 1 === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    // Print the pizza name with its ordinal ending
    console.log("".concat(i + 1).concat(ordinalEnding, " ").concat(pizzas[i]));
}
