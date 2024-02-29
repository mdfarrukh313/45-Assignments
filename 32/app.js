// List of current users
var current_users = ['alice', 'bob', 'charlie', 'david', 'eve'];
// List of new users
var new_users = ['charlie', 'frank', 'george', 'helen', 'David'];
// Loop through new_users to check for uniqueness
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    // Check if lowercase_new_user already exists in current_users
    if (current_users.map(function (user) { return user.toLowerCase(); }).indexOf(lowercase_new_user)) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
