import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/admin/AdminDashboard'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Nav from './components/nav/Nav'
import DogShelter from './components/shelter/DogShelter'

function App() {
  
  return (
    //react requires for tsx methods for render we return on parent elem
    //everything else is a child. Wrap in a div or use react fragment, blank html elem <> </>
    // React Components Begin with a capitol letter
    //html elem lowercase
    // want to render both show or hide based on path of page we are on
    // add browser router and import. Wrap br around each 
    // routes tag defins all of routes or views we can see
    //element is to tsx name
    
    <>

    <Header></Header>
    
    <BrowserRouter>
    <Nav></Nav>
    {/*<Login></Login>
    <AdminDashboard></AdminDashboard>
    <DogShelter></DogShelter> */}

    <Routes>
      <Route path ='/' element={<Login></Login>}></Route>
      <Route path ='/admin' element={<AdminDashboard></AdminDashboard>}></Route>
      <Route path ='/dogs' element={<DogShelter></DogShelter>}></Route>

    </Routes>

    </BrowserRouter>

    <Footer></Footer>
  

  </>
  )
}

export default App
