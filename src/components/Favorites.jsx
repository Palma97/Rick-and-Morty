import { connect } from "react-redux"
import Card from "./Card"

function Favorites({myFavorites}) {
return(
    <div>
        {myFavorites?.map(({id, name, species, image, gender})=>(
            <Card id={id} name={name} species={species} image={image} gender={gender}/>
        ))}
    </div>
)
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, null)(Favorites)