import Card from './Card';
import styled from "styled-components";


const DivCards = styled.div`
   display: flex;
   align-items: center;
   margin-left: 350px;
   float: left;
`;

export default function Cards(props) {
   const { characters } = props;
   return <DivCards>
      {characters.map(({id, name, species, image, gender})=>(
         <Card 
         key = {id}
         name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
          />
      ))}
   </DivCards>;
}
