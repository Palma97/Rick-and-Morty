import { DELETE_FAVORITE, ADD_FAVORITE } from "./actionsTypes";

export const addFavorite = (character) => {
    type: ADD_FAVORITE;
    payload: character
}

export const deleteFavorite = (id) => {
    type: DELETE_FAVORITE;
    payload: id
}
