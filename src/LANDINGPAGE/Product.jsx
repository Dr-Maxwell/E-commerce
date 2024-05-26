/** @format */

import React from "react";
import Productbox from "./Productbox";

const Product = () => {
  return (
    <div
      style={{
        width: "90vw",
        // maxHeight: "80vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        justifySelf: "center",
      }}
    >
      <div>
        <Productbox />
      </div>
    </div>
  );
};

export default Product;
