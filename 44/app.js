// Define a function called make_sandwich that accepts a variable number of arguments representing items on a sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    console.log("Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log(item);
    }
    console.log("Bread");
    console.log("Order Complete\n");
}
// Call the function make_sandwich three times with a different number of arguments each time
make_sandwich("Cheese", "Tomato", "Lettuce");
make_sandwich("Turkey", "Bacon");
make_sandwich("Ham");
