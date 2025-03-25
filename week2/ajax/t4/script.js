async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);


        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {

        throw new Error(`Fetch error: ${error.message}`);
    }
}

async function postUser() {
    const user = {
        name: 'John Doe',
        job: 'Developer',
        email: 'john.doe@example.com' 
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

        const userData = await fetchData(url, options);

        console.log("Response data:", userData);

        if (userData && userData.createdAt) {
            
            document.getElementById('user-avatar').src = 'https://reqres.in/img/faces/7-image.jpg'; 
            document.getElementById('user-name').textContent = `Name: ${user.name}`;
            document.getElementById('user-email').textContent = `Email: ${user.email || 'N/A'}`;  
        } else {
            console.error('No valid data found in the response.');
        }
    } catch (error) {
        
        console.error('Error in API call:', error);
    }
}

postUser();
