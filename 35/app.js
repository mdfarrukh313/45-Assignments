// Array to store animal names
var animals = ['Dog', 'Cat', 'Rabbit'];
// Loop through the array of animal names
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    // Print the name of each animal
    console.log(animal);
}
// Loop through the array of animal names again to print statements about each animal
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    // Print a statement about each animal
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Print a statement about what these animals have in common
console.log('Any of these animals would make a great pet!');
