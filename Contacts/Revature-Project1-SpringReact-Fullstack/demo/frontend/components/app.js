// Elements
const landingPage = document.getElementById('landing-page');
const dashboard = document.getElementById('dashboard');
const loginButton = document.getElementById('login-button');
//const logoutButton = document.getElementById('logout-button');
const dogListContainer = document.getElementById('dog-list');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// API Base URL
const API_BASE_URL = 'http://localhost:8080';

// Fetch Dog List from Backend API
const fetchDogList = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/dogs`);
        if (!response.ok) {
            throw new Error(`Failed to fetch dogs: ${response.status}`);
        }
        const dogs = await response.json();
        return dogs;
    } catch (error) {
        console.error('Error fetching dog list:', error);
        return [];
    }
};

// Render Dog List to Dashboard
const renderDogList = async () => {
    dogListContainer.innerHTML = 'Loading...'; // Show loading message
    const dogs = await fetchDogList();

    // Clear loading message and render the list
    dogListContainer.innerHTML = '';
    if (dogs.length === 0) {
        dogListContainer.innerHTML = '<p>No dogs found.</p>';
        return;
    }

    dogs.forEach((dog) => {
        const dogCard = document.createElement('div');
        dogCard.className = 'dog-card';
        dogCard.innerHTML = `
            <h3>${dog.name}</h3>
            <p>Breed: ${dog.breed}</p>
            <p>Status: ${dog.status}</p>
            <p>Gender: ${dog.gender}</p>
        `;
        dogListContainer.appendChild(dogCard);
    });
};

// Handle Login with API Integration
const handleLogin = async () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    try {
        // Send login request to backend
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            // Successful login
            const result = await response.json();
            console.log('Login successful:', result);

            landingPage.style.display = 'none'; // Hide landing page
            dashboard.style.display = 'block'; // Show dashboard
            await renderDogList(); // Fetch and display dog list
        } else {
            const error = await response.json();
            alert(`Login failed: ${error.message}`);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again.');
    }
};

// // Handle Logout
// const handleLogout = () => {
//     dashboard.style.display = 'none'; // Hide dashboard
//     landingPage.style.display = 'block'; // Show landing page

//     // Clear username and password inputs
//     usernameInput.value = '';
//     passwordInput.value = '';
// };

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loginButton.addEventListener('click', handleLogin);
   // logoutButton.addEventListener('click', handleLogout);
});
