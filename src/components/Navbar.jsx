import React from "react";
import { Stack ,Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between", 
        gap: "10px",
      }}
    >
      <Link to="/" style={{display: "flex",alignItems: "center"}}>
        <img src={logo} alt="logo" height={45} /> 
        <Typography color="white" variant="h4" fontWeight="bold">
          HeroTube
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
