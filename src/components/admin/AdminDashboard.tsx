
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "./Admin.css"; // Ensure this is the correct path to your CSS file

interface Dog {
  id: number;
  name: string;
  breed: string;
  status: string;
  gender: string;
}

const AdminDashboard: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize navigate hook

  // Fetch dogs from API
  const fetchDogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/dogs");
      setDogs(response.data);
    } catch (err) {
      console.error("Error fetching dogs:", err);
      setError("Failed to fetch dog data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
// Delete a dog by ID
const deleteDog = async (dogId: number) => {
    try {
      await axios.delete(`http://localhost:8080/dogs/${dogId}`);
      alert("Dog deleted successfully!");
      fetchDogs(); // Refresh the dog list
    } catch (err) {
      console.error("Error deleting dog:", err);
      alert("Failed to delete dog.");
    }
  };

  // Navigate to the AddDog form for editing a dog
  const editDog = (dog: Dog) => {
    navigate("/admin/addDog", { state: { dog } }); // Pass the selected dog's data
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div>
      <main>
        <h3>Adopt A Dog Today!</h3>

        <section className="admin-panel">
          <div className="admin-actions">
            {/* Add navigation to "Create New Dog" page */}
            <button
              className="create-dog-btn"
              onClick={() => navigate("/admin/addDog")} // Navigate to AddDog form
            >
              Create New Dog
            </button>
          </div>

          {loading ? (
            <p>Loading dogs...</p>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <table className="dog-table">
              <thead>
                <tr>
                  <th>Dog Tag</th>
                  <th>Name</th>
                  <th>Breed</th>
                  <th>Adoption Status</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dogs.map((dog) => (
                  <tr key={dog.id}>
                    <td>{dog.id}</td>
                    <td>{dog.name}</td>
                    <td>{dog.breed}</td>
                    <td>
                      <select
                        className="adoption-status"
                        value={dog.status}
                       
                      >
                        <option value="Available">Available</option>
                        <option value="Adopted">Adopted</option>
                      </select>
                    </td>
                    <td>{dog.gender}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteDog(dog.id)}
                      >
                        Delete
                      </button>
                      
                      <br></br>
                      <br></br>
                      <button
                        className="update-btn"
                        onClick={() => editDog(dog)} // Edit dog)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
