import { Box, Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "25%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "Satoshi",
              cursor: "pointer",
            }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "satoshi",
              cursor: "pointer",
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "satoshi",
              cursor: "pointer",
            }}
          >
            Service
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontFamily: "Abril Fatface",
              cursor: "pointer",
            }}
          >
            360GYM
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "25%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "satoshi",
              cursor: "pointer",
            }}
          >
            Trainers
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "satoshi",
              cursor: "pointer",
            }}
          >
            Gallery
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "satoshi",
              cursor: "pointer",
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
