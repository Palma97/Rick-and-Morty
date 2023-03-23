import styled from "styled-components";
import { useState } from "react";



const ButtonSearchCss = styled.button`
width: 100px;
height: 100px;
font-size: 1.2rem;
border-radius: 50%;
background-position: 50%;
background-size: 105px;
margin-top: 20px;
margin-right: 20px;
margin-bottom: 20px;
color: black;
border: solid 3px yellow;
align-items: center;
justify-content: center;
background-image: url("https://www.pngitem.com/pimgs/m/102-1021768_sol-rick-y-morty-hd-png-download.png");
box-shadow: 0 0 80px rgb(232, 248, 0.5);
font-weight: bold;
cursor: pointer;
&:hover{
scale: calc(1.1);
transition: 1s;
}
`;

const InputSearchCss = styled.input`
width: 350px;
height: 50px;
border: solid 5px black;
border-radius: 10%;
margin-top: 55px;
margin-right: 40px;
color: white;
font-size: 2.5rem;
background-image: url("http://cdn.shopify.com/s/files/1/1920/1289/collections/RickAndMorty_NATIVE-R1_CollectionBanner.jpg?v=1669078529");
background-position: 50%;
background-size: 345px;
align-items: center;
justify-content: center;
font-weight: bold;
box-shadow: 0 0 20px rgb(221, 0, 255);
&:hover{
   background-color: rgb(107, 3, 123, 0.6);
   transition: 1s;
   border: solid 3px white;
}
`;

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");
   const handleImputChange = (event) => {
      const {value} = event.target
      setCharacter(value)
   }

   return (
      <div>
      <ButtonSearchCss onClick={()=>props.onSearch(character)}>Agregar</ButtonSearchCss>
         <InputSearchCss type='search' onChange={handleImputChange}/>
      </div>
   );
}
