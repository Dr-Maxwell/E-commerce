/** @format */
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./../../src/style.css";
import { useContext } from "react";
import { AuthContext } from "../Context";
const FilterComponent = () => {
  const [brand, setBrand] = React.useState("");
  const [age, setAge] = React.useState("");
  const [priceRange, setPriceRange] = React.useState("");
  const [color, setColor] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const { handleUserChoice } = useContext(AuthContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "brand":
        setBrand((value) => value);
        handleUserChoice(value, name);

        break;
      case "age":
        setAge((value) => value);
        handleUserChoice(value, name);
        break;
      case "priceRange":
        setPriceRange((value) => value);
        handleUserChoice(value, name);

        break;
      case "color":
        setColor((value) => value);
        handleUserChoice(value);
        break;
      case "sortBy":
        setSortBy((value) => value);
        handleUserChoice(value, name);
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        width: "90vw",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "3rem 0rem 3rem 0rem",

        alignSelf: "center",
      }}
    >
      <div>
        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            outline: "none",
            border: "none",
          }}
        >
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{
              marginTop: "-10px",
            }}
          >
            Brand
          </InputLabel>
          <Select
            labelId="brand-label"
            id="brand-select"
            value={brand}
            name="brand"
            onChange={handleChange}
            style={{
              height: "30px",
              padding: "0",
              background: "var(--productBg)",
              borderRadius: "20px",
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Oraimo">Oraimo</MenuItem>
            <MenuItem value="Apple">Apple</MenuItem>
            <MenuItem value="Blackview">Blackview</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 120, outline: "none", border: "none" }}
        >
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{
              marginTop: "-10px",
            }}
          >
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            name="age"
            label="Age"
            style={{
              height: "30px",
              padding: "0",
              background: "var(--productBg)",
              borderRadius: "20px",
            }}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ m: 1, minWidth: 120, outline: "none", border: "none" }}
        >
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{
              marginTop: "-10px",
            }}
          >
            Price range
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={priceRange}
            name="priceRange"
            label="Price Range"
            style={{
              height: "30px",
              padding: "0",
              background: "var(--productBg)",
              borderRadius: "20px",
            }}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="50-100">$50-100</MenuItem>
            <MenuItem value="100-150">$100-150</MenuItem>
            <MenuItem value="150-200">$150-200</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 120, outline: "none", border: "none" }}
        >
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{
              marginTop: "-10px",
            }}
          >
            Color
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={color}
            name="color"
            label="Age"
            style={{
              height: "30px",
              padding: "0",
              background: "var(--productBg)",
              borderRadius: "20px",
            }} // Adjust the height here
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="white">White</MenuItem>
            <MenuItem value="black">Black</MenuItem>
            <MenuItem value="other">Others</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl
          sx={{ m: 1, minWidth: 120, outline: "none", border: "none" }}
        >
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{
              marginTop: "-10px",
            }}
          >
            Sort by
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sortBy}
            name="sortBy"
            label="Age"
            style={{
              height: "30px",
              padding: "0",
              background: "var(--productBg)",
              borderRadius: "20px",
            }} // Adjust the height here
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Brand">Brand</MenuItem>
            <MenuItem value="Price">Price</MenuItem>
            <MenuItem value="Color">color</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterComponent;
