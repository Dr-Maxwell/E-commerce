/** @format */

import React from "react";
import { Stack } from "@mui/material";
import headsetMan from "./../WELCOME/headset1-removebg-preview.png";
import "./../../src/style.css";
import Button from "@mui/material/Button";

const LandingPage = () => {
  return (
    <Stack
      className="landing-background"
      sx={{
        position: "relative",
        width: "100vw",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        paddingTop: "3rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "90vw",
          background: "var(--sectionBg)",
          height: "60vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div style={{ flex: 1, paddingLeft: "14rem" }}>
          <p
            style={{
              textTransform: "capitalize",
              color: "var(--primaryColor)",
              fontSize: "2.8rem",
            }}
          >
            Grap up to 50% off your <br /> selected products
          </p>
          <Button
            variant="contained"
            sx={{
              background: "var(--primaryColor)",
              width: "170px",
              height: "40px",
              borderRadius: "20px",
            }}
          >
            Buy Now
          </Button>
        </div>
        <div style={{ flex: 1, paddingTop: "9rem" }}>
          <img src={headsetMan} alt="headphone png" />
        </div>
      </div>
    </Stack>
  );
};

export default LandingPage;
