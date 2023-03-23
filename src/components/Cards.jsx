import React from 'react';
import Card from './Card';
import styled from "styled-components";


const DivCards = styled.div`
   display: flex;
   padding: 5px;
   margin: auto;
   justify-content: space-evenly;
   justify-content: center;
`;

export default function Cards(props) {
   const { characters } = props;
   return ( 
   <DivCards>
      {characters.map(({id, name, species, image, gender})=>(
         <Card 
         id = {id}
         key = {id}
         name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => props.onClose(id)}
          />
      ))}
   </DivCards>
   );
}
