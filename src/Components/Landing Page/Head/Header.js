import React from "react";
import { Navbar } from "./Navbar";
import { Box } from "@mui/material";
import { Body } from "./Body";

export const Header = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#1A1A1A",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: "0",
            opacity: "0.2",
          }}
        >
          <img
            src={require("../../../Assets/object.png")}
            width="900px"
            height="auto"
            alt=""
          />
        </Box>

        <Box
          sx={{
            padding: "60px 80px 80px 80px",
          }}
        >
          <Navbar />
          <Body />
        </Box>
      </Box>
    </div>
  );
};
