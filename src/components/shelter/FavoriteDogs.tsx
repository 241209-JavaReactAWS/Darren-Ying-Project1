import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DogShelter.css"; // Reusing the CSS from DogShelter

// Define the Dog type
interface Dog {
  id: number;
  name: string;
  breed: string;
  status: string;
  gender: string;
  image: string;
}

function FavoriteDogs() {
  // Retrieve favorite dogs passed via state from the location
  const location = useLocation();
  const initialFavoriteDogs: Dog[] = location.state?.favoriteDogs || [];
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>(initialFavoriteDogs);

  // Handle removing a dog from favorites
  function removeFromFavorites(dogId: number) {
    const updatedDogs = favoriteDogs.filter((dog) => dog.id !== dogId);
    setFavoriteDogs(updatedDogs);
    alert("Dog removed from favorites!");
  }

  return (
    <div>
      <main>
        <h3>Your Favorite Dogs</h3>
        {favoriteDogs.length === 0 ? (
          <p>No favorite dogs saved yet!</p>
        ) : (
          <section className="dog-grid">
            {favoriteDogs.map((dog) => (
              <div className="dog-card" key={dog.id}>
                <img src={dog.image} alt={`Dog ${dog.name}`} />
                <div className="dog-info">
                  <h2>Tag Number: #{dog.id}</h2>
                  <p>Name: {dog.name}</p>
                  <p>Breed: {dog.breed}</p>
                  <p>Status: {dog.status}</p>
                  <p>Gender: {dog.gender}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromFavorites(dog.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default FavoriteDogs;
