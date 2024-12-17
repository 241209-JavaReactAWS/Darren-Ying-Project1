// Select DOM elements
const inputName = document.querySelector('input[name="name"]');
const breedSelect = document.querySelector('select');
const checkBox = document.querySelector('input[name="adopted"]');
const createButton = document.querySelector('button[type="button"]');
const resetButton = document.querySelector('button[type="reset"]');

// Function to create a new dog
function createDog() {
    // Get values from the form
    const name = inputName.value.trim();
    const breed = breedSelect.value;
    const adopted = checkBox.checked;

    // Validate inputs
    if (!name || !breed) {
        alert('Please fill in all the fields and select a breed.');
        return;
    }

    // Send POST request
    fetch('http://localhost:8080/dogs/addDog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            breed: breed,
            adopted: adopted,
        }),
    })
        .then((response) => {
            if (response.status === 201) {
                alert('Dog created successfully!');
                return response.json();
            } else {
                throw new Error('Failed to create dog. Please try again.');
            }
        })
        .then((data) => {
            console.log('New dog added:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Add event listener to the "Create Dog" button
createButton.addEventListener('click', createDog);

// Optional: Reset form when "Reset" button is clicked
resetButton.addEventListener('click', () => {
    inputName.value = '';
    breedSelect.value = '';
    checkBox.checked = false;
});
