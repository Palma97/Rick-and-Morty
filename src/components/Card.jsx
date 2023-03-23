import styled from "styled-components";
import { Link } from "react-router-dom";

const DivCard = styled.div`
display: flex;
width: 170px;
height: 260px;
flex-direction: column;
border-radius: 10px 10px 10px 10px;
border: solid 2px black;
background-color: white;
margin: 30px 30px 30px 30px;
transition: 2s;
font-size: 10px;
box-shadow: 0 0 20px rgb(221, 0, 255);
cursor: crosshair;
object-fit: cover;
opacity: 0.9;
transition: .5s ease;
margin-bottom: 0px;
margin-top: 10px;
&:hover{
   opacity: 1;
    filter: contrast(140%);
    transform: translateY(-3%);
}
`;

const BotonCss = styled.button`
background-color: rgb(107, 3, 123, 0.8);
border-radius: 30%;
margin: 7px;
width: 25px;
box-shadow: 0 0 20px rgb(221, 0, 255);
cursor: pointer;
font-weight: bold;
&:hover{
color: white;
background-color: black;
scale: calc(1.1);
transition: 1s;
}
`;

const ImageCss = styled.img`
width: 168px;
border: solid 2px black;
`;

const H2NameCss = styled.h2`
margin: 0;
margin-top: 7px;
margin-left: 10px;
font-size: 20px;
text-decoration: none;
font-family: fantasy;
`;

const DivH2 = styled.div`
display: flex;
justify-content: space-evenly;
margin: 0;
`;

const DivButton = styled.div`
display: flex;
justify-content: flex-end;
`;

const DivButName = styled.div`
display: flex;
justify-content: space-between;
`;




export default function Card(props) {
   return (
      <DivCard>
         <DivButName>
            <Link to={`detail/${props.id}`}>
            <H2NameCss>{props.name}</H2NameCss> 
            </Link>
         <DivButton><BotonCss onClick={props.onClose}>X</BotonCss></DivButton>
         </DivButName>
         <ImageCss  src={props.image} alt="Not found" />
         <DivH2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </DivH2>
      </DivCard>
   );
}
