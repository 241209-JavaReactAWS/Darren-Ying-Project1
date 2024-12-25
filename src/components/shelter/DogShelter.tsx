import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DogShelter.css";

// Define the Dog type for TypeScript
interface Dog {
  id: number;
  name: string;
  breed: string;
  status: string;
  gender: string;
  image: string;
}

function DogShelter() {
  const [favoriteDogs, setFavoriteDogs] = useState<Dog[]>([]);
  const navigate = useNavigate();

  // Dog data with images
  const dogs: Dog[] = [
    {
      id: 1,
      name: "Max",
      breed: "Bulldog",
      status: "Adopted",
      gender: "Male",
      image: "https://images.pexels.com/photos/3978352/pexels-photo-3978352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Charlie",
      breed: "Beagle",
      status: "Available",
      gender: "Male",
      image: "https://images.pexels.com/photos/1031466/pexels-photo-1031466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Lucy",
      breed: "Poodle",
      status: "Available",
      gender: "Female",
      image: "https://images.pexels.com/photos/1485726/pexels-photo-1485726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Daisy",
      breed: "Cocker Spaniel",
      status: "Adopted",
      gender: "Female",
      image: "https://images.pexels.com/photos/2655509/pexels-photo-2655509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Molly",
      breed: "Labrador",
      status: "Available",
      gender: "Female",
      image: "https://images.pexels.com/photos/2832119/pexels-photo-2832119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Rockey",
      breed: "Rottweiler",
      status: "Available",
      gender: "Male",
      image: "https://images.pexels.com/photos/170325/pexels-photo-170325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      name: "Bella",
      breed: "Boxer",
      status: "Adopted",
      gender: "Female",
      image: "https://images.pexels.com/photos/53769/pexels-photo-53769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      name: "Bailey",
      breed: "Dalmatian",
      status: "Available",
      gender: "Male",
      image: "https://images.pexels.com/photos/3097610/pexels-photo-3097610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      name: "Coco",
      breed: "Chihuahua",
      status: "Available",
      gender: "Female",
      image: "https://images.pexels.com/photos/434046/pexels-photo-434046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      name: "Lola",
      breed: "Shiba Inu",
      status: "Adopted",
      gender: "Male",
      image: "https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 11,
      name: "Milo",
      breed: "French Bulldog",
      status: "Available",
      gender: "Female",
      image: "https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 12,
      name: "Toby",
      breed: "Golden Retriever",
      status: "Adopted",
      gender: "Male",
      image: "https://images.pexels.com/photos/2409503/pexels-photo-2409503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 13,
      name: "Sassy",
      breed: "German Shepherd",
      status: "Available",
      gender: "Female",
      image: "https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  // Add to favorites
  function addToFavorites(dog: Dog) {
    if (favoriteDogs.find((fav) => fav.id === dog.id)) {
      alert(`${dog.name} is already in your favorites!`);
      return;
    }
    setFavoriteDogs([...favoriteDogs, dog]);
    alert(`${dog.name} added to favorites!`);
  }

  // Navigate to Favorites
  function goToFavorites() {
    navigate("/favorites", { state: { favoriteDogs } });
  }

  return (
    <div>
      <main>
        <h3>Adopt A Dog Today!</h3>
        <button className="favorites-button" onClick={goToFavorites}>
          View Favorites
        </button>
        <section className="dog-grid">
          {dogs.map((dog) => (
            <div className="dog-card" key={dog.id}>
              <img src={dog.image} alt={`Dog ${dog.name}`} />
              <div className="dog-info">
                <h2>Tag Number: #{dog.id}</h2>
                <p>Name: {dog.name}</p>
                <p>Breed: {dog.breed}</p>
                <p>Status: {dog.status}</p>
                <p>Gender: {dog.gender}</p>
                <button
                  className="add-to-favorite-btn"
                  onClick={() => addToFavorites(dog)}
                >
                  Add to Favorite
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default DogShelter;
