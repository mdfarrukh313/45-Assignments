// Array to store numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    // Check the last digit of the number to determine the proper ordinal ending
    var lastDigit = number % 10;
    var ordinalEnding = void 0;
    if (lastDigit === 1 && number !== 11) {
        ordinalEnding = 'st';
    }
    else if (lastDigit === 2 && number !== 12) {
        ordinalEnding = 'nd';
    }
    else if (lastDigit === 3 && number !== 13) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    // Print the number with its ordinal ending
    console.log("".concat(number).concat(ordinalEnding));
}
