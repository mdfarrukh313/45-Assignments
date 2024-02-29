// List of users
let users: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Check if the list of users is not empty
if (users.length > 0) {
    // Iterate over the list of users and print each username
    for (let user of users) {
        console.log(`Hello, ${user}!`);
    }
} else {
    // Print message if the list of users is empty
    console.log('We need to find some users!');
}

// Remove all usernames from the array
users = [];

// Check if the list of users is not empty after removal
if (users.length > 0) {
    // Iterate over the list of users and print each username
    for (let user of users) {
        console.log(`Hello, ${user}!`);
    }
} else {
    // Print message if the list of users is empty after removal
    console.log('We need to find some users!');
}
