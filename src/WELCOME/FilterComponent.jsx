/** @format */

import { Stack } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./../../src/style.css";

const FilterComponent = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
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
            <MenuItem value={10}>Oraimo</MenuItem>
            <MenuItem value={20}>Immutable</MenuItem>
            <MenuItem value={30}>Space X</MenuItem>
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
            value={age}
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
            <MenuItem value={10}>$10-40</MenuItem>
            <MenuItem value={20}>$50-100</MenuItem>
            <MenuItem value={30}>$100-170</MenuItem>
            <MenuItem value={40}>$200 above</MenuItem>
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
            value={age}
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
            <MenuItem value={10}>Red</MenuItem>
            <MenuItem value={20}>Black</MenuItem>
            <MenuItem value={30}>Pink</MenuItem>
            <MenuItem value={30}>White</MenuItem>
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
            value={age}
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
            <MenuItem value={10}>Brand</MenuItem>
            <MenuItem value={20}>Price</MenuItem>
            <MenuItem value={30}>color</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterComponent;
