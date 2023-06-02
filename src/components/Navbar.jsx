import React from "react";
import { Stack } from "@mui/material";
import { Navigate } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between", 
      }}
    >
        <img src={logo} alt="logo" height={45} />
        <SearchBar />
    </Stack>
  );
};

export default Navbar;
