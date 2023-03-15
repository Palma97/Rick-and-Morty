import styled from "styled-components";

const SearchBarCss = styled.div`
height: 100px;
padding-top: 10px;
align-items: center;
justify-content: center;
background-color: none;
`;

const ButtonSearchCss = styled.button`
width: 100px;
height: 30px;
margin-top: 10px;
color: white;
align-items: center;
justify-content: center;
background-color: black;
font-weight: bold;
`;

const InputSearchCss = styled.input`
width: 200px;
background-color: rgb(107, 3, 123);
align-items: center;
justify-content: center;
font-weight: bold;
`;

export default function SearchBar(props) {
   return (
      <SearchBarCss>
         <InputSearchCss type='search' />
      <ButtonSearchCss onClick={()=>props.onSearch("Simulando recibir un Id")}>Agregar</ButtonSearchCss>
      </SearchBarCss>
   );
}
