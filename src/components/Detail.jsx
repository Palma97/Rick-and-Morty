import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DivCharId = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
`;

const DivInd = styled.div`
width: 300px;
height: 330px;
color: white;
background-color: rgba(7, 7, 7, 0.7);
margin-right: 70px;
padding: 50px;
border-radius: 5%;
border: solid 5px white;
&:hover{
  background-color: rgba(7, 7, 7, 1.0);
  transition: 1s;
}
`;

const ImgChar = styled.img`
width: 400px;
height: 450px;
border-radius: 3%;
border: solid 5px white;
cursor: crosshair;
&:hover{
scale: calc(1.1);
transition: 1s;
}
`;

const ButRegresar = styled.button`
justify-content: center;
background-color: black;
color: white;
width: 150px;
height: 50px;
border-radius: 25%;
border: solid 4px white;
align-items: center;
font-weight: bold;
margin-top: 35px;
font-size: 1.3rem;
cursor: pointer;
&:hover{
color: black;
background-color: white;
scale: calc(1.1);
transition: 1s;
}
`;

export default function Detail(props){
    const {detailId} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((data) => {
            data.name ? setCharacter(data) : alert("No hay personajes con ese ID")
          })
          .catch((err) => {
            console.log(err)
            alert("Ups! Algo salió mal");
          })
      }, [])

      const navigate = useNavigate()

    return(
    <div>
      <ButRegresar onClick={()=>navigate("/home")}>Regresar</ButRegresar>
        <DivCharId>
        <DivInd>
        <h1>Name: {character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin?.name}</h2>
        </DivInd>
        <ImgChar src={character.image} alt="Not found"/>
        </DivCharId>    
    </div>);
}