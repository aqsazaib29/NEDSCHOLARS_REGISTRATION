function submitDetails() {
    alert("Your information details have been submitted successfully!")
}

function search() {
    const username = document.getElementById('username').value;

    // Use AJAX or Fetch API to send a request to the server with the username
    // Check if the username exists in the database
    // Redirect to the appropriate page based on the result

    // Example: Redirect to search-results.html if the user exists, otherwise redirect to add-user.html
    if (userExistsInDatabase(username)) {
        window.location.href = 'results.html?username=' + encodeURIComponent(username);
    } else {
        window.location.href = 'data_entry.html';
    }
}

// function userExistsInDatabase(username) {
//     // Simulate a check in the database
//     // You would typically make an AJAX request to the server here
//     // and get the result from the server
//     // For simplicity, we assume the user exists if the username is not empty
//     return username.trim() !== '';
// }