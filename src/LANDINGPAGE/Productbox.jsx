/** @format */

import React, { useState } from "react";
import "./../../src/style.css";
import Handbag from "./../../src/handbag.jpeg";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { AuthContext } from "../Context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Productbox = () => {
  const [filteredUIProduct, setfilteredUIProduct] = React.useState([]);
  const { filteredProducts } = useContext(AuthContext);
  useEffect(() => {
    setfilteredUIProduct(filteredProducts);
  }, [filteredProducts]);
  const addProductToCart = (e) => {
    console.log(e.target.id);
  };
  return (
    <div
      className="productbox"
      style={{
        width: "90vw",
        // maxHeight: "80vh",
        display: "flex",
        flexWrap: "wrap",
        justifySelf: "center",
        justifyContent: "space-around",
      }}
    >
      {filteredUIProduct.map((product) => (
        <div
          style={{
            width: "300px",
            height: "150px",
            display: "flex",
            flexDirection: "row",
            margin: "20px",
            background: "var(--productBg)",
            borderRadius: "10px",
            justifyContent: "space-between",
            overflow: "clip",
          }}
          key={product.productId}
          className="product-item"
        >
          <div
            className="productImg"
            style={{ height: "150px", width: "150px", position: "relative" }}
          >
            <img
              src={Handbag}
              alt="product Img"
              // style={{ height: "150px", width: "150px" }}
            />
            <div className="overlay"></div>
          </div>
          <div
            className="productDescPrice"
            style={{
              display: "flex",
              width: "150px",
              flexDirection: "column",
              padding: "5px",

              justifyContent: "space-around",
            }}
          >
            <div
              className="product-details"
              style={{
                display: "flex",
                justifyContent: "left",
                textAlign: "left",
              }}
            >
              {product.productName}
            </div>

            <div className="product-details">{`$${product.productPrice}`}</div>
            <Box
              sx={{
                "& > legend": { mt: 0.8 },
              }}
            >
              <Rating
                style={{ color: "var(--rating)" }}
                name="simple-controlled"
                value={product.productRating}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <div>
              <button
                className="btn-n"
                //disabled={diabledBtn}
                id={product.productId}
                style={{
                  height: "30px",
                  width: "100px",
                  borderRadius: "10px",

                  border: "1px solid black",
                }}
                onClick={(e) => {
                  addProductToCart(e);
                }}
              >
                <Link
                  className="btn"
                  to={`/product/${product.productId}/${product.productName}`}
                >
                  {" "}
                  Purchase
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Productbox;
