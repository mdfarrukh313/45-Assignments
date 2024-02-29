// List of users
var users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
// Check if the list of users is not empty
if (users.length > 0) {
    // Iterate over the list of users and print each username
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log("Hello, ".concat(user, "!"));
    }
}
else {
    // Print message if the list of users is empty
    console.log('We need to find some users!');
}
// Remove all usernames from the array
users = [];
// Check if the list of users is not empty after removal
if (users.length > 0) {
    // Iterate over the list of users and print each username
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        console.log("Hello, ".concat(user, "!"));
    }
}
else {
    // Print message if the list of users is empty after removal
    console.log('We need to find some users!');
}
