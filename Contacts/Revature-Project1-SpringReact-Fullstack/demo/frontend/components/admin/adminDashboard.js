const dogContainer = document.getElementById('dog-container');

// Fetch Dog List from Backend API
const fetchDogList = async () => {
    try {
        console.log('Fetching dogs from API...'); // Debugging log
        const response = await fetch('http://localhost:8080/dogs');
        
        if (!response.ok) {
            console.error(`Failed to fetch dogs: ${response.status} ${response.statusText}`);
            throw new Error(`Failed to fetch dogs: ${response.status}`);
        }

        const dogs = await response.json();
        console.log('Dogs fetched successfully:', dogs); // Log the fetched dogs
        return dogs;
    } catch (error) {
        console.error('Error fetching dog list:', error);
        return []; // Return an empty list on failure
    }
};

// Render Dog List to DOM
const renderDogList = async () => {
    dogContainer.innerHTML = ''; // Clear the container
    const dogs = await fetchDogList();

    if (dogs.length === 0) {
        dogContainer.innerHTML = '<p>No dogs found.</p>';
        return;
    }

    dogs.forEach((dog, index) => {
        const dogCard = document.createElement('div');
        dogCard.className = 'dog-card';

        dogCard.innerHTML = `
            <div>
                <strong>${index + 1}. ${dog.name}</strong> - ${dog.breed}, ${dog.adopted ? 'Adopted' : 'Not adopted'}
            </div>
            <div>
                <button onclick="editDog('${dog.id}')">Edit</button>
                <button onclick="deleteDog('${dog.id}')">Delete</button>
            </div>
        `;

        dogContainer.appendChild(dogCard);
    });
};

// // Handle Edit Dog Action
// const editDog = (dogId) => {
//     console.log(`Edit dog with ID: ${dogId}`);
//     window.location.href = `editDog.html?dogId=${dogId}`; // Redirect to edit form
// };

// // Handle Delete Dog Action
// const deleteDog = async (dogId) => {
//     try {
//         const response = await fetch(`http://localhost:8080/dogs/${dogId}`, {
//             method: 'DELETE',
//         });

//         if (!response.ok) {
//             throw new Error('Failed to delete dog');
//         }

//         alert('Dog deleted successfully');
//         renderDogList(); // Refresh the list after deletion
//     } catch (error) {
//         console.error('Error deleting dog:', error);
//         alert('Failed to delete dog');
//     }
// };

// // Event Listeners for Navigation Links
// document.getElementById('form-link').addEventListener('click', () => {
//     window.location.href = 'createDog.html';
// });

// Initialize the Dog List on Page Load
document.addEventListener('DOMContentLoaded', renderDogList);
