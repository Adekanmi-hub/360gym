import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const SectionHead1 = () => {
  return (
    <Box>
      <Box
        sx={{
          pt: "80px",
        }}
      >
        {/* SECTION 1 HEADER */}

        <Typography
          variant="h2"
          sx={{
            fontFamily: "Abril Fatface",
            color: "white",
            textAlign: "center",
          }}
        >
          Fitness Class With Us
        </Typography>

        {/* SECTION 1 NAVIGATION */}
        <Box
          sx={{
            m: "45px 350px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Satoshi",
              borderRadius: "25px",
              typography: "body1",
              textTransform: "none",
              padding: "10px 55px",
              borderColor: "#DDCFB9",
              borderWidth: "0.01rem",
              color: "white",
            }}
          >
            All
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Satoshi",
              borderRadius: "25px",
              typography: "body1",
              textTransform: "none",
              padding: "10px 55px",
              bgcolor: "#DDCFB9",
              borderColor: "#DDCFB9",
              color: "black",
            }}
          >
            Signature Class
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Satoshi",
              borderRadius: "25px",
              typography: "body1",
              textTransform: "none",
              padding: "10px 55px",
              borderColor: "#DDCFB9",
              borderWidth: "0.01rem",
              color: "white",
            }}
          >
            Mind & Body
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Satoshi",
              borderRadius: "25px",
              typography: "body1",
              textTransform: "none",
              padding: "10px 55px",
              borderColor: "#DDCFB9",
              borderWidth: "0.01rem",
              color: "white",
            }}
          >
            Cycling
          </Button>
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Satoshi",
              borderRadius: "25px",
              typography: "body1",
              textTransform: "none",
              padding: "10px 55px",
              borderColor: "#DDCFB9",
              borderWidth: "0.01rem",
              color: "white",
            }}
          >
            Cardio
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionHead1;
