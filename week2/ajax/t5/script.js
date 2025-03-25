// Fetch restaurant data
async function fetchRestaurants() {
    try {
        // Use the provided Restaurant API URL
        const response = await fetch('https://media2.edu.metropolia.fi/restaurant/');
        if (!response.ok) {
            throw new Error('Failed to load restaurant data');
        }
        const data = await response.json();
        displayRestaurants(data);
    } catch (error) {
        console.error(error);
        alert('Failed to load restaurant data: ' + error.message);
    }
}

// Display restaurant list
function displayRestaurants(restaurants) {
    const container = document.getElementById('restaurant-container');
    container.innerHTML = ''; // Clear previous restaurant data

    if (restaurants.length === 0) {
        container.innerHTML = '<p>No restaurants found.</p>';
        return;
    }

    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.onclick = () => fetchMenu(restaurant.id); // Call fetchMenu on click

        restaurantDiv.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" />
            <h3>${restaurant.name}</h3>
            <p>${restaurant.address}</p>
        `;
        
        container.appendChild(restaurantDiv);
    });
}

// Fetch menu for the selected restaurant
async function fetchMenu(restaurantId) {
    try {
        // Fetch the menu for the selected restaurant
        const response = await fetch(`https://media2.edu.metropolia.fi/restaurant/${restaurantId}`);
        if (!response.ok) {
            throw new Error('Failed to load menu');
        }
        const menuData = await response.json();
        displayMenu(menuData);
    } catch (error) {
        console.error(error);
        alert('Failed to load menu: ' + error.message);
    }
}

// Display menu in the modal
function displayMenu(menuData) {
    const modal = document.getElementById('modal');
    const name = document.getElementById('restaurant-name');
    const address = document.getElementById('restaurant-address');
    const menuList = document.getElementById('menu-list');

    // Set restaurant details in modal
    name.innerText = menuData.name;
    address.innerText = menuData.address;

    // Clear previous menu items and populate the new ones
    menuList.innerHTML = '';
    menuData.menu.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = item.name;
        menuList.appendChild(listItem);
    });

    modal.style.display = 'flex'; // Show the modal with restaurant details and menu
}

// Close the modal when the close button is clicked
document.getElementById('close-modal').onclick = () => {
    document.getElementById('modal').style.display = 'none';
}

// Fetch the list of restaurants when the page loads
fetchRestaurants();
