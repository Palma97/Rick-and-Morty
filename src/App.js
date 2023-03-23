import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail.jsx'

function App () {

  const [characters, setCharacters] = useState([])
  
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
        <Nav onSearch={onSearch}/>
        <Routes>
        <Route path="/home" element={<Cards
          characters={characters} onClose ={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="home/detail/:detailId" element={<Detail/>}/>
        </Routes>
    </div>
  );
}

export default App;
