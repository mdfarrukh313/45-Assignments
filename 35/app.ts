// Array to store animal names
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Loop through the array of animal names
for (let animal of animals) {
    // Print the name of each animal
    console.log(animal);
}

// Loop through the array of animal names again to print statements about each animal
for (let animal of animals) {
    // Print a statement about each animal
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log('Any of these animals would make a great pet!');
