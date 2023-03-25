// eslint-disable-next-line
const contraEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const validContraseña = new RegExp(/^(?=.*[a-z])(?=.*[0-9])/);

export default function validate(userData){
    let errors = {}
    if(userData.username.length === 0) errors.username = "Debes colocar un usuario";
    if(userData.username.length > 35) errors.username = "Usuario demasiado largo";
    if(!contraEmail.test(userData.username)) errors.username = "Debe ser un correo electrónico";

    if(!validContraseña.test(userData.password)) errors.password = "Debe contener números y letras";
    if(userData.password.length < 6 || userData.password.length > 10) errors.password = "Entre 6 y 10 characters";
    return errors
}