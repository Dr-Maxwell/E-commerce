/** @format */

import { products } from "../LANDINGPAGE/productdata";

export const simulateProductData = (userChoice) => {
  const filteredproduct = products.filter((product) => {
    if (!userChoice) return product;
    return Object.values(product).includes(userChoice);
  });
  console.log(filteredproduct);

  return filteredproduct;
};
