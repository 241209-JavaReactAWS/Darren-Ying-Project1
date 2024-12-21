import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/admin/AdminDashboard'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Nav from './components/nav/Nav'
import DogShelter from './components/shelter/DogShelter'
import AddDog from './components/dog-update/AddDog';
import React, { createContext, useState } from "react";
import Logout from "./components/logout/Logout"; // Import the Logout component



// Define the context structure
export const authContext = createContext<{
  username: string;
  role: string;
  setUsername: (username: string) => void;
  setRole: (role: string) => void;
} | null>(null);

function App() {
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("");

  return (
    <>
      <Header />

      <authContext.Provider value={{ username, role, setUsername, setRole }}>
        <BrowserRouter>
          <Nav /> {/* Nav can now access authContext for role-based rendering */}

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/addDog" element={<AddDog />} />
            <Route path="/dogs" element={<DogShelter />} />
            <Route path="/logout" element={<Logout />} /> {/* Add Logout route */}
          </Routes>
        </BrowserRouter>
      </authContext.Provider>

      <Footer />
    </>
  );
}

export default App;