/** @format */

import React from "react";
import "./../WELCOME/login.css";

import logo from "./../../src/logosvg.jpeg";
import { useState } from "react";
import { Typography } from "@mui/material";
//import { Typography } from "@mui/material/styles/createTypography";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setuserName] = useState({ name: " ", field: false });
  const [userEmail, setuserEmail] = useState({ name: " ", field: false });
  const [userState, setuserState] = useState({ name: " ", field: false });
  const [userPassword, setuserPassword] = useState({ name: " ", field: false });
  //user validation
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRegistrationAction = () => {
    setuserEmail((prevState) => ({
      ...prevState,
      field: !userEmail.name.trim(),
    }));
    setuserName((prevState) => ({
      ...prevState,
      field: !userName.name.trim(),
    }));
    setuserState((prevState) => ({
      ...prevState,
      field: !userState.name.trim(),
    }));
    setuserPassword((prevState) => ({
      ...prevState,
      field: !userPassword.name.trim(),
    }));

    if (
      userEmail.field ||
      userName.field ||
      userState.field ||
      userPassword.field
    ) {
      toast.error(" Please fill all fields", {
        duration: 6000,
        position: "top-right",
      });
      return;
    }
    if (
      userEmail.name.trim() &&
      userName.name.trim() &&
      userState.name.trim() &&
      userPassword.name.trim()
    ) {
      const isEmailValid = emailRegex.test(userEmail.name);
      const isPasswordValid = passwordRegex.test(userPassword.name);
      const isUserNameValid = usernameRegex.test(userName.name);
      if (!isEmailValid) {
        toast.error("Please enter the correct email format", {
          duration: 6000,
          position: "top-right",
        });
      } else if (!isUserNameValid) {
        toast.error(
          "Username must be 3-20 characters, letters, numbers, or underscores",
          {
            duration: 6000,
            position: "top-right",
          }
        );
      } else if (!isPasswordValid) {
        toast.error(
          "Weak password. Must be 8 characters, include uppercase, lowercase, number, and special character",
          {
            duration: 6000,
            position: "top-right",
          }
        );
      } else {
        createUserWithEmailAndPassword(auth, userEmail.name, userPassword.name)
          .then((userCredential) => {
            const user = userCredential.user;
            // Registration successful, show success toast
            toast.success("Congratulations! You're registered!", {
              duration: 2000,
              position: "top-right",
            });

            setTimeout(() => {
              user
                ? (window.location.href = "/login")
                : (window.location.href = "/register");
            }, 3000);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Registration failed, show error toast
            toast.error("You're registered! Sign In", {
              duration: 6000,
              position: "top-right",
            });
          });
      }
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="login"
          style={{
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
            <Typography variant="h4" color={"gray"} marginTop={"-2rem"}>
              Register Here{" "}
            </Typography>
          </div>

          <form
            action="#"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "-3rem",
            }}
          >
            <FormControl sx={{ m: 2, width: "45ch" }} variant="standard">
              <TextField
                error={userName?.field}
                helperText={userName?.field ? "Field is empty." : " "}
                id="standard-basic"
                label="Username"
                variant="standard"
                required
                onChange={(e) => {
                  setuserName((prev) => ({
                    ...prev,
                    name: e.target.value,
                    field: false,
                  }));
                }}
              />
            </FormControl>
            <FormControl sx={{ m: 2, width: "45ch" }} variant="standard">
              <TextField
                error={userEmail?.field}
                helperText={userEmail?.field ? "Field is empty." : " "}
                id="standard-basic"
                label="Email Address"
                variant="standard"
                required
                onChange={(e) => {
                  setuserEmail((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                    field: false,
                  }));
                }}
              />
            </FormControl>
            <FormControl sx={{ m: 2, width: "45ch" }} variant="standard">
              <TextField
                required
                error={userState?.field}
                helperText={userState?.field ? "Field is empty." : " "}
                id="standard-basic"
                label="State Of Origin"
                variant="standard"
                onChange={(e) => {
                  setuserState((prev) => ({
                    ...prev,
                    name: e.target.value,
                    field: false,
                  }));
                }}
              />
            </FormControl>
            <FormControl
              sx={{ m: 2, width: "45ch" }}
              variant="standard"
              onChange={(e) => {
                setuserPassword((prev) => ({
                  ...prev,
                  name: e.target.value,
                  field: false,
                }));
              }}
              error={userPassword?.field}
              helperText={userPassword?.field ? " Field is empty." : " "}
            >
              <InputLabel htmlFor="standard-adornment-password" required>
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

            <Button
              onClick={() => {
                handleRegistrationAction();
              }}
              variant="contained"
              size="large"
              style={{
                width: "300px",
                borderRadius: "15px",
                height: "40px",
                marginBottom: "1rem",
              }}
            >
              Register
            </Button>
          </form>
          <Typography variant="h6" color={"gray"}>
            You Have Account? <Link to={"/login"}>Sign In</Link>.
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Registration;
