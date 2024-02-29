// Array to store numbers 1 through 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Check the last digit of the number to determine the proper ordinal ending
    let lastDigit = number % 10;
    let ordinalEnding: string;

    if (lastDigit === 1 && number !== 11) {
        ordinalEnding = 'st';
    } else if (lastDigit === 2 && number !== 12) {
        ordinalEnding = 'nd';
    } else if (lastDigit === 3 && number !== 13) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }

    // Print the number with its ordinal ending
    console.log(`${number}${ordinalEnding}`);
}