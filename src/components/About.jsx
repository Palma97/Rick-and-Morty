import React from "react";
import styled from "styled-components";

const ImgCss = styled.img`
width: 600px;
height: 600px;
box-shadow: 0 0 20px rgb(221, 0, 255);
border-radius: 1.5%;
`
const DivCss = styled.div`
background-color: rgba(7, 7, 7, 0.8);
margin-right: 100px;
width: 500px;
height: 450px;
font-size: 2.5rem;
color: white;
font-weight: bold;
box-shadow: 5px 10px 5px;
border-radius: 5%;
border: solid 5px ;
`

const H1Nombre = styled.div`
display: flex;
justify-content: center;
align-items: center;    
color: #8f088f;
font-family: fantasy;
font-size: 60px;
text-shadow: 5px 10px 5px white;
`
const DivGeneral = styled.div`
display: flex;
justify-content: center;
justify-content: columns;
align-items: center;
`

const UlOme = styled.ul`
margin-left: 35px;
`


export default function About (){
    return(
    <DivGeneral>
        <DivCss>
            <H1Nombre>Nombre: Nicolacho Palma</H1Nombre>
            <UlOme>
                <li>Status: Inmortal</li>
                <li>Especie: SemiDios</li>
                <li>Genero: Male</li>
                <li>Origin: Ton 618</li>
                </UlOme>
        </DivCss>
        
        <ImgCss src="https://scontent.fbog11-1.fna.fbcdn.net/v/t39.30808-6/311736297_5770331156331442_9223055891247229698_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHw53uA8abnQxxtLkoDdTjhQdWau5BXqIxB1Zq7kFeojGW8jMYYzOeuy1zcA5wegYx5t4cdp5EfCP080D63d76V&_nc_ohc=WIis-RwvubsAX8Z_KZM&_nc_oc=AQk0uwAYqT2zVcTGo9B3EDKBUxo1F28Hh5uSyc5E6CGeNfxI1HVT7hCKghbeL0Mv43c&_nc_ht=scontent.fbog11-1.fna&oh=00_AfA9rLe7978w067vTfy2B3lqE1TfQY52K9QiExPrvpw88A&oe=641FE456" alt="Not found" />
    </DivGeneral>)
}