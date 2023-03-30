import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; 
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite} from "../redux/actions";

const DivCard = styled.div`
display: flex;
width: 200px;
height: 320px;
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
    filter: contrast(120%);
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
width: 198px;
border: solid 2px black;
`;

const H2NameCss = styled.h2`
text-decoration: none;
margin: 0;
margin-top: 7px;
margin-left: 10px;
font-family: fantasy;
font-size: 20px;
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

const ButFavOn = styled.button`
border: none;
border-radius: 40%;
margin-top: 3.5px;
margin-left: 3px;
cursor: pointer;
width: 60px;
height: 50px;
background-position: center;
background-repeat: no-repeat;
background-size: 50px;
background-image: url("data:image/jpeg;base64,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");
&hover{
   transform: translateY(-3%)
}

`;

const ButFavOff = styled.button`
border: none;
border-radius: 40%;
margin-top: 3.5px;
margin-left: 3px;
cursor: pointer;
width: 60px;
height: 50px;
background-position: center;
background-repeat: no-repeat;
background-size: 45px;
background-image: url("https://cdn-icons-png.flaticon.com/512/83/83976.png");
&hover{
   transform: translateY(-3%);
}
`;


function Card({id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites}) {

/*    {id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites}
 */
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false)
         deleteFavorite(id)
      }

      if(isFav === false){
         setIsFav(true)
         addFavorite({id, name, species, image, gender, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <DivCard>
         <DivButName>
         {
   isFav ? (
      <ButFavOn onClick={handleFavorite}></ButFavOn>
   ) : (
      <ButFavOff onClick={handleFavorite}></ButFavOff>
   )
}
            <Link to={`detail/${id}`}>
            <H2NameCss>{name}</H2NameCss> 
            </Link>
            
         <DivButton><BotonCss onClick={onClose}>X</BotonCss></DivButton>
         </DivButName>
         <ImageCss  src={image} alt="Not found" />
         <DivH2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </DivH2>
      </DivCard>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)