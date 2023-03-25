import React, {useState} from "react";
import styled from "styled-components";
import validate from "./validation";
import styles from "./Forms.module.css"

const FormCss = styled.form`
display: grid;
align-items: center;
justify-content: center;
width: cover;
height: cover;
margin-top: 10%;
`;

const LabelCss = styled.label`
width: 380px;
font-size: 4rem;
background-color: rgba(7, 7, 7, 0.7);;
color: #c155bc;
border: solid 8px white;
border-radius: 20%;
font-weight: bold;
margin-bottom: 0px;
&:hover {
    background-color: black;
    border: solid 8px #c155bc;
    transition: 1s;
}
`;

const InputCss = styled.input`
width: 380px;
height: 50px;
border: solid 5px white;
border-radius: 10%;
background-color: black;
margin-top: 10px;
margin-right: 40px;
color: white;
font-size: 2rem;
align-items: center;
justify-content: center;
font-weight: bold;
box-shadow: 0 0 20px rgb(221, 0, 255);
&:hover{
   background-color: rgb(107, 3, 123, 0.6);
   transition: 1s;
   border: solid 5px black;
}
`;

const ButLogin = styled.button`
width: 200px;
height: 200px;
font-size: 1.2rem;
border-radius: 50%;
background-position: 50%;
background-size: 250px;
margin-left: 90px;
color: black;
align-items: center;
justify-content: center;
background-image: url("https://res.cloudinary.com/teepublic/image/private/s--OjOXpN49--/c_crop,x_10,y_10/c_fit,h_695/c_crop,g_north_west,h_1038,w_1038,x_-203,y_-128/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-314,y_-239/b_rgb:db7bc2/c_limit,f_jpg,h_630,q_90,w_630/v1575428355/production/designs/7022190_0.jpg");
box-shadow: 0 0 80px pink;
font-weight: bold;
cursor: pointer;
&:hover{
scale: calc(1.1);
border: solid 5px black;
box-shadow: 0 0 80px black;
transition: 1s;
}
`;

const Parr = styled.p`
font-size: 1.5rem;
width: 380px;
color: red;
background-color: pink;
font-weight: bold;
border-radius: 20px;
border: solid 4px red;
`;

export default function Forms(props) {
    
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleImputChange = (event) => {
       const { name, value } = event.target
       setUserData({...userData, [name] : value})
       setErrors(validate({...userData, [name] : value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
}

    return(
    <FormCss onSubmit={handleSubmit} action="">
        <LabelCss htmlFor="">User name</LabelCss>
        <InputCss type="text" name="username" placeholder="UserName..." value={userData.username} onChange={handleImputChange} className={errors.username && styles.rojo}/>
        {errors.username ? <Parr>{errors.username}</Parr> : null}
        <br />
        <LabelCss htmlFor="">Password</LabelCss>
        <InputCss type="password" name="password" placeholder="Contraseña..." value={userData.password} onChange={handleImputChange} className={errors.password && styles.rojo}/>
        {errors.password ? <Parr>{errors.password}</Parr> : null}
        <br />
        <ButLogin type="submit">.</ButLogin>

    </FormCss>)
}