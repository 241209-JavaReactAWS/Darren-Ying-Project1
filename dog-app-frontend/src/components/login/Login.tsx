import axios from "axios"
import { SyntheticEvent, useState } from "react"
import { data } from "react-router-dom"

function login() {
    
    //states
    const [username, setUsername] = useState<string> ('')
    const [password, setPassword] = useState<string> ('')

    // login for login method and sending axios requests and results
    let login = () =>{
        console.log("The login has been clicked")

        // validation to ensure password and username fields have been filled out
        if(!username){
            alert("Please enter a username: ")
            return;
        }
        if(!password){
            alert("Please enter a password: ")
            return; 
        }

        // Sending actual request by axios
        // with credentials allows jsecession cookie set and sent
        axios.post("http://localhost:8080/users/login", 
        {username, password},
        {withCredentials: true}
        ).then ((res)=>{
            console.log(res.data)
        }).catch ((err)=>{          //any possible errors
            console.log(err)
        })
      

    }
 
    return (
    <div>
        <h1>Hello from login</h1>
        <label>
            Username: 
            <input id = "username-input" 
            type = "text"
            value = {username}
            onChange = {(e:SyntheticEvent)=> { setUsername((e.target as HTMLInputElement).value)}}
            />
        </label>
        
        <label>
            Password: 
            <input id = "password-input" 
            type = "text"
            value = {password}
            onChange = {(e:SyntheticEvent)=> { setPassword((e.target as HTMLInputElement).value)}}
            />
        </label>
        <button onClick={login}>Login</button>
      
    </div>
  )
}

export default login
