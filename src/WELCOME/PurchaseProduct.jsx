/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sneaker from "./../sneaker.jpg";
import "./../../src/style.css";
import Rating from "@mui/material/Rating";
import { products } from "../LANDINGPAGE/productdata";
export const PurchaseProduct = () => {
  const [purchaseproduct, setpurchaseProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const purchased = products.filter((product) => {
      return product.productId == id;
    });
    if (purchased.length > 0) {
      setpurchaseProduct(purchased[0]);
    }
  }, [id]);
  if (!purchaseproduct) {
    return <div>Loading...</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80vw",
        paddingTop: "4rem",
      }}
    >
      <div
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "column",
          rowGap: "2rem",
          alignItems: "center",
          width: "40vw",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "500px",
            width: "40vw",
            justifyContent: "center",
            background: "var(--productBg)",
            marginBottom: "1.5rem",
            paddingTop: "2rem",
          }}
        >
          <img style={{ height: "400px", width: "550px" }} src={sneaker} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "120px",
              background: "var(--productBg)",
            }}
          >
            <img
              style={{ height: "90px", width: "110px" }}
              src={sneaker}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "120px",
              background: "var(--productBg)",
            }}
          >
            <img
              style={{ height: "90px", width: "110px" }}
              src={sneaker}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "120px",
              background: "var(--productBg)",
            }}
          >
            <img
              style={{ height: "90px", width: "110px" }}
              src={sneaker}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
              width: "120px",
              background: "var(--productBg)",
            }}
          >
            <img
              style={{ height: "90px", width: "110px" }}
              src={sneaker}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          padding: "2rem",
          justifyContent: "space-between",
          gap: "1rem",
          flexDirection: "column",
          paddingTop: "3rem",
          //background: "var(--productBg)",
        }}
      >
        <div
          style={{
            boxShadow:
              "0 -2px 2px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3>{purchaseproduct.productName}</h3>
          <p style={{ color: "gray" }}>{purchaseproduct.productDesc}</p>
          <div className="rating">
            <Rating
              style={{ color: "var(--rating)" }}
              name="simple-controlled"
              value="4"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
        <div
          style={{
            padding: "1rem 0rem  1rem ",
            boxShadow:
              "0 -2px 2px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>{`$${purchaseproduct.productPrice} or $${(
            purchaseproduct.productPrice / 6
          ).toFixed(2)}`}</div>
          <p style={{ color: "gray" }}>
            Suggested payment with 6 month special finacing
          </p>
        </div>
        <div
          className="colorselect"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: "1rem 0 1rem",
            gap: "1rem",
            boxShadow:
              "0 -2px 2px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>Choose a Color</div>
          <div
            className="ColorCon"
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div className="circle">
              <div className="top-half" style={{ background: "pink" }}></div>
              <div className="bottom-half" style={{ background: "gray" }}></div>
            </div>
            <div className="circle">
              <div className="top-half" style={{ background: "gray" }}></div>
              <div
                className="bottom-half"
                style={{ background: "yellow" }}
              ></div>
            </div>
            <div className="circle">
              <div
                className="top-half"
                style={{ background: "var(--landingBgWall)" }}
              ></div>
              <div
                className="bottom-half"
                style={{ background: "purple" }}
              ></div>
            </div>
            <div className="circle">
              <div className="top-half" style={{ background: "orange" }}></div>
              <div
                className="bottom-half"
                style={{ background: "black" }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className="purchase"
          style={{
            padding: "0.4rem 0rem  1rem ",
            boxShadow:
              "0 -2px 2px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              alignItems: "center",
              margin: "1rem 0 1rem",
              gap: "2rem",
            }}
          >
            <div
              className="AddSubBtn"
              style={{
                display: "flex",
                width: "120px",
                justifyContent: "center",
                background: "var(--productBg)",
                fontSize: "1.2rem",
                alignItems: "center",
                borderRadius: "20px",
                padding: "1rem",
              }}
            >
              <span>-</span>
              <span>2</span>
              <span>+</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <span>
                Only <span style={{ color: "orange" }}>12 items</span> left!
              </span>
              <span>Don't miss it.</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div
              className="btn"
              style={{
                borderRadius: "10px",
                width: "120px",
              }}
            >
              <button
                className="btn"
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  width: "120px",
                }}
              >
                Buy now
              </button>
            </div>
            <div
              className="btn"
              style={{
                borderRadius: "10px",
                width: "120px",
              }}
            >
              <button
                className="btn"
                style={{
                  borderRadius: "10px",
                  height: "30px",
                  width: "120px",
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ width: "550px", textAlign: "end" }}
          className="totalPurchase"
        >
          TOTAL PRICE: $900.00
        </div>

        <div></div>
      </div>
    </div>
  );
};
