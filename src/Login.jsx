import React from "react";
import "./css/Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firbase";
import { signInWithPopup } from "firebase/auth";
import { useStateValue } from "./SateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{},dispatch]= useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user:result.user,
        })
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <div className="login__container">
        <img
          src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png"
          alt=""
        />

        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
          <span>Developed by Tausif Hossain &copy;</span>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
