import { useState, createContext } from 'react';

//import './App.css'

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
        <authContext.Provider value={{ username, role, setUsername, setRole}}>
               {/* Add routes here */}
               
        </authContext.Provider>
  )
}

export default App;
