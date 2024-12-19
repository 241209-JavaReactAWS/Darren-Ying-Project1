
import React, {useState, useContext} from 'react';
import axios from 'axios';

//import { useNavigate } from 'react-router-dom';
import { SyntheticEvent } from 'react';
import { authContext } from '../../App';



function Login() {
        const auth = useContext(authContext)


        const [username, setUsername] = useState<string>('')
        const [password, setPassword] = useState<string>('')

        let login = () => {
            
            //If logic populated properly, it will sned an axios request and interpreting the results
            console.log('Login clicked')


            //do some user login validation
            if(!username) {
                alert("Please enter a username")
                return;
            }

            if(!password) {
                alert("Please enter a password")
                return;
            }

            //Sending the actual login request by fetching the endpoint API
            axios.post("http://localhost:8080/users/login", {
                username, password
            },   {withCredentials: true}
            //WithCredentials allows the session cookies to be set and sent with requests so that can include the request on any methods that require
            //the session
            ).then((res) => {
                console.log(res.data)
                auth?.setUsername(res.data.username)
                auth?.setRole(res.data.role)

                // Redirect based on role
                if(res.data.role == "ADMIN") {
                    window.location.href = "/adminDashboard"; //Adjust route as needed
                }else if (res.data.role === "USER") {
                    alert("User dashboard not implemented yet!")
                }else {
                    alert("Unknown role!")
                }
            }).catch((err) => {
                console.log(err);
                alert("Login failed!");
            });
        }

        return (
            <div id="landing-page">
                <header>
                    <h1>Welcome to the Dog Shelter App!</h1>
            
                </header>
                <main>
                <label htmlFor='username'>
                    Username:
                    <input
                    id='username'
                    type='text'
                    value={username}
                    onChange={(e: SyntheticEvent) => 
                        setUsername((e.target as HTMLInputElement).value)
                    }
                    />

                </label>

                <label htmlFor='password'>
                    Password:
                    <input
                    id='password'
                    type='password'
                    value={password}
                    onChange={(e: SyntheticEvent) => 
                        setPassword((e.target as HTMLInputElement).value)
                    }
                    />

                </label>

                <button onClick={login}>Log In</button>

                </main>
               
            </div>
        )
}


export default Login;
