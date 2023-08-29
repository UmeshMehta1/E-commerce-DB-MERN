import './App.css'
import Nav from './components/Nav'
import Signup from './components/signup';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 

  return (
    <>
    

     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path="/" element={<h1>home page</h1>}/>
        <Route path="/about" element={<h1>About page</h1>} />
        <Route path="/contact" element={<h1>Contact page</h1>} />
        <Route path="/blog" element={<h1>Blog page</h1>} />
        <Route path="/blog" element={<h1>Blog page</h1>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
