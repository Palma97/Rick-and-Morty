import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail.jsx'
import Forms from "./components/Forms"
import Favorites from './components/Favorites'

function App () {

  const [characters, setCharacters] = useState([])

  const navigateOme = useNavigate()
  const [access, setAccess] = useState(false)
  const username = "palmabboy3@gmail.com"
  const password = "nicorome1"

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigateOme("/home");
    }
  }

  useEffect(() => {
    !access && navigateOme('/');
 }, [access]);
  
  const locationOme = useLocation()

  const onSearch = (id)=> {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res)=>res.json())
        .then((data)=>{
          (data.name ? characters.filter((char)=> char.id === data.id).length === 0 : "") ? setCharacters([...characters, data]) : alert("Personaje ya añadido")
        })
        .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char)=>char.id !== id);
    setCharacters(filtered)
  }

  return (
    <div 
      className='App' style={{ padding: '25px' }}
      >
        {locationOme.pathname !== "/" &&
         <Nav onSearch={onSearch}/> 
        }
        
        <Routes>
          <Route path="/" element={<Forms login={login}/>}/>
        <Route path="/home" element={<Cards
          characters={characters} onClose ={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="home/detail/:detailId" element={<Detail/>}/>
        </Routes>
    </div>
  );
}

export default App;
