// function component instead of class component used in Header and Footer rfce instead of rsc
import "./Login.css"

function Login() {

    // return statement below is same as render method
    // paste in everything in main tage from login
    // images go in assests folder if it doesnt work
    // First functional component, a way of creating react components. Through the use of hooks
    //they can do all the things class components can do. Return instead of render. 
  return (
    <div>
        <main>
        <h3>Login Here</h3>
        <figure>
            <img id = "pic" src = "https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <figcaption>One of our dogs</figcaption>
        </figure>
        <p>Welcome to our Dog Shelter. Login to view all dogs if a customer, otherwise if admin, 
            login to view dog dashboard</p>
    </main>
      
    </div>
  )
}

export default Login
