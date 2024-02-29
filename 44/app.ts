// Define a function called make_sandwich that accepts a variable number of arguments representing items on a sandwich
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("Order Complete\n");
}

// Call the function make_sandwich three times with a different number of arguments each time
make_sandwich("Cheese", "Tomato", "Lettuce");
make_sandwich("Turkey", "Bacon");
make_sandwich("Ham");
