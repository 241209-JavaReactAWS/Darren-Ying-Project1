import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./dogForm.css";

function AddDog() {
  const navigate = useNavigate();
  const location = useLocation();
  const dogToEdit = location.state?.dog; // Retrieve the dog data from state

  // State variables
  const [name, setName] = useState(dogToEdit?.name || "");
  const [breed, setBreed] = useState(dogToEdit?.breed || "");
  const [adopted, setAdopted] = useState(dogToEdit?.status === "Adopted" || false);
  const [gender, setGender] = useState(dogToEdit?.gender || "Male");

  // Determine whether we are in Edit Mode or Add Mode
  const isEditMode = Boolean(dogToEdit);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!name || !breed || !gender) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      if (isEditMode) {
        // Edit Dog (PUT request)
        const response = await axios.put(
          `http://localhost:8080/dogs/${dogToEdit.id}`,
          {
            name,
            breed,
            status: adopted ? "Adopted" : "Available",
            gender,
          },
          { withCredentials: true }
        );
        alert(`Dog updated successfully! Name: ${response.data.name}`);
      } else {
        // Add Dog (POST request)
        const response = await axios.post(
          "http://localhost:8080/dogs/addDog",
          {
            name,
            breed,
            adopted,
            gender,
          },
          { withCredentials: true }
        );
        alert(`Dog added successfully! Name: ${response.data.name}`);
      }

      // Redirect back to the Admin Dashboard
      navigate("/admin");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div id="root">
      <div>
        <header>{isEditMode ? "Update Dog" : "Add a New Dog"}</header>
        <nav>
          <a href="/admin" className="active">
            Dogs
          </a>
          <a href="#" id="form-link">
            Form
          </a>
        </nav>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select value={breed} onChange={(e) => setBreed(e.target.value)}>
            <option value="">---Select Breed---</option>
            <option value="Boxer">Boxer</option>
            <option value="Bulldog">Bulldog</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="German Shepherd">German Shepherd</option>
            <option value="Dalmatian">Dalmatian</option>
            <option value="Golden Retriever">Golden Retriever</option>
          </select>

          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

          <label>
            Adopted:
            <input
              type="checkbox"
              checked={adopted}
              onChange={(e) => setAdopted(e.target.checked)}
            />
          </label>

          <div>
            <button type="submit">{isEditMode ? "Update Dog" : "Create Dog"}</button>
            <button
              type="reset"
              onClick={() => {
                setName("");
                setBreed("");
                setAdopted(false);
                setGender("Male");
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDog;
