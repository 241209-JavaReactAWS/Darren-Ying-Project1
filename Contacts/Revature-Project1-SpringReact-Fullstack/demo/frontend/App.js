// app.js
import { renderDogList } from './renderDogList.js';

// Elements
const landingPage = document.getElementById('landing-page');
const adminDashboard = document.getElementById('admin-dashboard');
const userDashboard = document.getElementById('user-dashboard');
const loginButton = document.getElementById('login-button');
const logoutButtonAdmin = document.getElementById('logout-button');
const logoutButtonUser = document.getElementById('logout-button-user');
const addDogButton = document.getElementById('add-dog-button');
const dogListAdmin = document.getElementById('dog-list');
const dogListUser = document.getElementById('dog-list-user');

// Login function
loginButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Basic validation
    if (!username || !password || !role) {
        alert('Please fill in all fields.');
        return;
    }

    // Display appropriate dashboard based on role
    if (role === 'admin') {
        showAdminDashboard();
    } else if (role === 'user') {
        showUserDashboard();
    } else {
        alert('Invalid role selected.');
    }
});

// Show Admin Dashboard
const showAdminDashboard = () => {
    landingPage.style.display = 'none';
    adminDashboard.style.display = 'block';
    renderDogList(dogListAdmin, true);
};

// Show User Dashboard
const showUserDashboard = () => {
    landingPage.style.display = 'none';
    userDashboard.style.display = 'block';
    renderDogList(dogListUser, false);
};

// Logout Function
logoutButtonAdmin.addEventListener('click', () => {
    adminDashboard.style.display = 'none';
    landingPage.style.display = 'block';
});

logoutButtonUser.addEventListener('click', () => {
    userDashboard.style.display = 'none';
    landingPage.style.display = 'block';
});



// set role state   [role, setRole] = useState("")
/*
[isLoggedIn, setIsLoggedIn] = useState(false)

----------
handleLogin = () => {
    if(role) {
    setIsLoggedIn(true)}}

    if(isLoggedIn) {
    return <Dashboard role={role}}
*/