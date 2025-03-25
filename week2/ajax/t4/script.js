// 1. Define a reusable async fetchData function
async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);

        // Check if the response is successful (status code 2xx)
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        // If successful, return the response as JSON
        return await response.json();
    } catch (error) {
        // Handle errors
        throw new Error(`Fetch error: ${error.message}`);
    }
}

// 2. POST request example: Create a new user
async function postUser() {
    const user = {
        name: 'John Doe',
        job: 'Developer'
    };

    const url = 'https://reqres.in/api/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    try {
        // Call fetchData function to make the POST request
        const userData = await fetchData(url, options);

        // Log the response data to see what was returned
        console.log("Response data:", userData);

        // Since the POST request does not return avatar, name, and email,
        // we use the information directly from the response data.
        if (userData && userData.createdAt) {
            // Update HTML with the response data (here we simulate a successful response)
            document.getElementById('user-avatar').src = 'https://reqres.in/img/faces/7-image.jpg'; // Static Avatar for demo purposes
            document.getElementById('user-name').textContent = `Name: ${user.name}`;
            document.getElementById('user-email').textContent = `Email: ${user.email || 'N/A'}`;  // Just to show the placeholder in the demo
        } else {
            console.error('No valid data found in the response.');
        }
    } catch (error) {
        // Handle any error during the fetch
        console.error('Error in API call:', error);
    }
}

// 3. Call the postUser function to send the POST request
postUser();
