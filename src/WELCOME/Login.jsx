/** @format */

import React from "react";
import "./../WELCOME/login.css";
import logo from "./../../src/logosvg.jpeg";
import { useState } from "react";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import google from "./../../src/google.png";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import toast from "react-hot-toast";
import { useContext } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Context";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Password, setPassword] = useState({ name: " ", field: false });
  const [email, setEmail] = useState({ name: " ", field: false });
  const { currentUser } = useContext(AuthContext);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const SignIn = async (e) => {
    e.preventDefault();
    setEmail((prevState) => ({
      ...prevState,
      field: !email.name.trim(),
    }));
    setPassword((prevState) => ({
      ...prevState,
      field: !Password.name.trim(),
    }));
    if (email.field || Password.field) {
      toast.error(" Please fill all fields", {
        duration: 6000,
        position: "top-right",
      });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.name,
        Password.name
      );

      const user = userCredential.user;
      toast.success("Successfull Login", {
        duration: 3000,
        position: "top-right",
      });
      setTimeout(() => {
        user ? (window.location.href = "/home") : " ";
      }, 4000);
    } catch (error) {
      if (
        error.code == "auth/invalid-email" ||
        error.code == "auth/invalid-login-credentials"
      ) {
        toast.error("Please enter correct email/password", {
          position: "top-right",
          duration: 5000,
        });
      } else {
        toast.error("Login failed. Please Register!.", {
          position: "top-right",
          duration: 5000,
        });
      }
    }
  };
  const SignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        {
          user
            ? (window.location.href = "/home")
            : (window.location.href = "/register");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div
          className="login"
          style={{
            borderRadius: "15px",
            margin: "20px",
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
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "-2rem",
            }}
          >
            <FormControl sx={{ m: 2, width: "45ch" }} variant="standard">
              <TextField
                onChange={(e) => {
                  setEmail((prev) => ({
                    ...prev,
                    name: e.target.value,
                    field: false,
                  }));
                }}
                error={email?.field}
                helperText={email?.field ? "Field is empty." : " "}
                id="standard-basic"
                label="Email"
                variant="standard"
                required
                autoComplete="off"
              />
            </FormControl>
            <FormControl
              sx={{ m: 2, width: "45ch" }}
              variant="standard"
              onChange={(e) => {
                setPassword((prev) => ({
                  ...prev,
                  name: e.target.value,
                  field: false,
                }));
              }}
              error={Password?.field}
              helpertext={Password?.field ? "Field is empty." : " "}
            >
              <InputLabel htmlFor="standard-adornment-password" required>
                Password
              </InputLabel>
              <Input
                autoComplete="off"
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
              onClick={SignIn}
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
              onClick={SignInWithGoogle}
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
