/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import "./../../src/style.css";
import Rating from "@mui/material/Rating";
import { products } from "../LANDINGPAGE/productdata";
import { PaystackButton } from "react-paystack";
export const PurchaseProduct = () => {
  const [purchaseproduct, setPurchaseProduct] = useState(null);
  const [price, setPrice] = useState(0);
  const [itemNum, setItemNum] = useState(1);
  const [Config, setConfig] = useState({
    reference: new Date().getTime().toString(),
    email: "samuelbodun4real@gmail.com",
    amount: 0,
    publicKey: "pk_test_9e832f29de1072b017dfaea20223f0f606b4ad54",
    text: "Buy now",
  });
  const { id } = useParams();

  useEffect(() => {
    const purchased = products.filter((product) => {
      return product.productId == id;
    });
    if (purchased.length > 0) {
      setPurchaseProduct(purchased[0]);
      const initialPrice = purchased[0].productPrice;
      setPrice(initialPrice);
      setConfig((prev) => ({
        ...prev,
        amount: initialPrice * 1500 * 100,
      }));
    }
  }, [id]);
  if (!purchaseproduct) {
    return <div>Loading...</div>;
  }
  const evaluatePrice = (action) => {
    let itemNo = itemNum;
    if (action === "add") {
      itemNo += 1;
      toast.success(`Successfully added ${itemNo} items`, {
        duration: 3000,
        position: "top-right",
      });
      //setItemNum((prev) => prev + 1);
    } else if (action === "subtract" && itemNo > 1) {
      itemNo -= 1;
      toast.success(`You have ${itemNo} items remaining`, {
        duration: 3000,
        position: "top-right",
      });
      //setItemNum((prev) => prev - 1);
    }
    const newPrice = itemNo * purchaseproduct.productPrice;
    setItemNum(itemNo);
    setPrice(newPrice.toLocaleString());
    setConfig((prev) => ({
      ...prev,
      amount: newPrice * 1500 * 100,
    }));
  };

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
          <img
            style={{ height: "400px", width: "550px" }}
            src={purchaseproduct.productImg}
          />
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
              src={purchaseproduct.productImg}
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
              src={purchaseproduct.productImg}
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
              src={purchaseproduct.productImg}
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
              src={purchaseproduct.productImg}
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
          paddingTop: "7rem",
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
          ).toFixed(2)} per month`}</div>
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
              <span onClick={() => evaluatePrice("subtract")}>-</span>
              <span>{itemNum}</span>
              <span onClick={() => evaluatePrice("add")}>+</span>
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
                height: "30px",
              }}
            >
              <PaystackButton className="btn" {...Config} />
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
        <h3
          style={{ width: "550px", textAlign: "end" }}
          className="totalPurchase"
        >
          {`TOTAL PRICE: $${price}`}
        </h3>

        <div></div>
      </div>
    </div>
  );
};
