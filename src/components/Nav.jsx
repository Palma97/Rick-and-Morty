import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const NavCss = styled.div`
display: flex;
background-color: rgb(107, 3, 123, 0.5);
height: 70px;
border-radius: 10px;
margin-bottom: 15px;
margin-right: 10px;
align-items: center;
justify-content: flex-end;
`;

const BotonesHomeAbout = styled.button`
display: flex;
justify-content: start;
background-color: black;
color: white;
border-radius: 25%;
margin-right: 300px;
width: 150px;
height: 50px;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 1.3rem;
border: solid 4px white;
cursor: pointer;
&:hover{
color: black;
background-color: white;
scale: calc(1.1);
transition: 1s;
}
`;

export default function Nav(props){
      const navigate2 = useNavigate();
      const home = ()=> {
         navigate2("/home")};

      const navigate = useNavigate();
      const botonAbout = ()=> {
         navigate("/about");
      }

    return(
       <NavCss>
         <BotonesHomeAbout onClick={botonAbout}>About</BotonesHomeAbout>
         <BotonesHomeAbout onClick={home}>Home</BotonesHomeAbout>
         <SearchBar
          onSearch={(characterID) => props.onSearch (characterID)}
          ></SearchBar>
       </NavCss>
    )
 }