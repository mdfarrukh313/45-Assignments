// List of current users
let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'eve'];

// List of new users
let new_users: string[] = ['charlie', 'frank', 'george', 'helen', 'David'];

// Loop through new_users to check for uniqueness
for (let new_user of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();

    // Check if lowercase_new_user already exists in current_users
    if (current_users.map(user => user.toLowerCase()).indexOf(lowercase_new_user)) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}