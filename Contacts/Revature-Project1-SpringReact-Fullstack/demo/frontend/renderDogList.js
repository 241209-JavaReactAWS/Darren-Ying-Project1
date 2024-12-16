// renderDogList.js
import { fetchDogList } from './fetchDogList.js';

export const renderDogList = (container, isAdmin) => {
    container.innerHTML = 'Loading...'; // Show a loading message while fetching data

    fetchDogList()
        .then((dogs) => {
            container.innerHTML = ''; // Clear loading message
            dogs.forEach((dog) => {
                const dogCard = document.createElement('div');
                dogCard.className = 'dog-card';
                dogCard.innerHTML = `
                    <h3>${dog.name}</h3>
                    <p>Breed: ${dog.breed}</p>
                    <p>Status: ${dog.status}</p>
                    <p>Gender: ${dog.gender}</p>
                `;
                if (isAdmin) {
                    dogCard.innerHTML += `
                        <button onclick="updateDog(${dog.id})">Update</button>
                        <button onclick="deleteDog(${dog.id})">Delete</button>
                    `;
                } else if (dog.status === 'Available') {
                    dogCard.innerHTML += `<button onclick="adoptDog(${dog.id})">Adopt</button>`;
                }
                container.appendChild(dogCard);
            });
        })
        .catch((error) => {
            container.innerHTML = 'Failed to load dog list.';
            console.error('Error rendering dog list:', error);
        });
};
