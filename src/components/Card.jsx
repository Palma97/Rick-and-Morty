import styled from "styled-components";

const DivCard = styled.div`
display: flex;
width: 150px;
flex-direction: column;
border-radius: 10px 10px 10px 10px;
border: solid 2px black;
background-color: white;
margin: 30 px;
align-items: center;
justify-content: center;
transition: 2s;
font-size: 10px;
margin: none;
`;

const BotonCss = styled.button`
font: red;
background-color: rgb(107, 3, 123);
border-radius: 30%;
margin: 7px;
`;

const ImageCss = styled.img`
width: 150px;
border-radius: 0 0 10px 10px;
border: solid 2px black;
flex-grow: 1;
object-fit: cover;
opacity: 1;
transition: .5s ease;
`;

const H2Css = styled.h2`
margin: 0;
`;




export default function Card(props) {
   return (
      <DivCard>
         <BotonCss onClick={props.onClose}>X</BotonCss>
         <H2Css>{props.name}</H2Css>
         <H2Css>{props.species}</H2Css>
         <H2Css>{props.gender}</H2Css>
         <ImageCss  src={props.image} alt="Not found" />
      </DivCard>
   );
}
