/** @format */

import React from "react";
import "./../WELCOME/login.css";
import logo from "./../../src/logosvg.jpeg";
import { useState } from "react";
import { Typography } from "@mui/material";
//import { Typography } from "@mui/material/styles/createTypography";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import google from "./../../src/google.png";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState(" ");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const SignIn = async (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, Password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      // two ways to this; check if the user never register or invalid entries
    }
  };

  return (
    <>
      <div className="container">
        <div
          style={{
            borderRadius: "15px",

            background: "rgb(255,255,255)",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{ height: "80px", width: "80px" }}
            src={logo}
            alt="logo"
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3"> Welcome Back!</Typography>
            <Typography variant="h6" color={"gray"}>
              Please enter your details{" "}
            </Typography>
          </div>

          <form
            onSubmit={SignIn}
            action="#"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ m: 2, width: "50ch" }} variant="standard">
              <TextField
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="standard-basic"
                label="Email"
                variant="standard"
                required
              />
            </FormControl>
            <FormControl sx={{ m: 2, width: "50ch" }} variant="standard">
              <InputLabel
                htmlFor="standard-adornment-password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              >
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div
              style={{
                width: "420px",
                color: "gray",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <FormGroup color="gray">
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember for 30days"
                />
              </FormGroup>
              <Typography variant="h6" color={"gray"}>
                Forgot password?
              </Typography>
            </div>
            <Button
              variant="contained"
              size="large"
              style={{
                width: "300px",
                borderRadius: "15px",
                height: "40px",
                marginBottom: "1rem",
              }}
            >
              LOGIN
            </Button>
            <Typography variant="h6" color={"gray"} marginBottom={"1rem"}>
              or
            </Typography>
            <Button
              variant="outlined"
              size="large"
              style={{ width: "300px", borderRadius: "15px", height: "40px" }}
            >
              <img
                style={{ width: 15, marginRight: "1rem" }}
                src={google}
                alt=""
              />
              Sign In With Google
            </Button>
          </form>
          <Typography variant="h6" color={"gray"}>
            Don't Have Account Yet? <Link to={"/register"}>Register</Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Login;
