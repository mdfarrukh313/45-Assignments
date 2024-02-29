// Define the function make_shirt with default parameters
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    // Print a sentence summarizing the size of the shirt and the message printed on it
    console.log(`Size: ${size}, Message: ${message}`);
}

// Call the function make_shirt to create a large shirt with the default message
make_shirt();

// Call the function make_shirt to create a medium shirt with the default message
make_shirt('Medium');

// Call the function make_shirt to create a shirt of any size with a different message
make_shirt('Small', 'JavaScript is awesome!');
