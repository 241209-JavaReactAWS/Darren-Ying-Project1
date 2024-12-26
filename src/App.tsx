import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Login from "./components/login/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import AddDog from "./components/dog-update/AddDog";
import DogShelter from "./components/shelter/DogShelter";
import FavoriteDogs from "./components/shelter/FavoriteDogs";
import Logout from "./components/logout/Logout";

import { FavoritesProvider } from "./components/context/FavoriteContext"; // Favorite dogs context
import "./App.css"; // Global CSS file

// Define the context structure for authentication
export const authContext = createContext<{
  username: string;
  role: string;
  userId: number | null; // Add userId as part of the context
  setUsername: (username: string) => void;
  setRole: (role: string) => void;
  setUserId: (userId: number | null) => void;
} | null>(null);


function App() {
  // State for authentication (username and role)
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [userId, setUserId] = useState<number | null>(null); // Add userId state


  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Authentication Context */}
      <authContext.Provider value={{ username, role, userId, setUsername, setRole, setUserId }}>
        {/* Favorites Provider for global state */}
        <FavoritesProvider>
          <BrowserRouter>
            {/* Navigation Bar */}
            <Nav />

            {/* Define Application Routes */}
            <Routes>
              {/* Login Page */}
              <Route path="/" element={<Login />} />

              {/* Admin Dashboard */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/addDog" element={<AddDog />} />

              {/* Dogs Shelter */}
              <Route path="/dogs" element={<DogShelter />} />

              {/* Favorites Page */}
              <Route path="/favorites" element={<FavoriteDogs />} />

              {/* Logout Page */}
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </FavoritesProvider>
      </authContext.Provider>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;
