import { Box, Typography } from "@mui/material";
import React from "react";

const SectionBody2 = () => {
  return (
    <Box
      sx={{
        p: "8%",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontFamily: "Abril Fatface",
            textAlign: "center",
          }}
        >
          Meet Our Trainers
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "7%",
          }}
        >
          <Box>
            <img
              src={require("../../../../Assets/man-3.png")}
              width="430px"
              height="auto"
              alt=""
            />
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontFamily: "Abril Fatface",
                textAlign: "center",
                pt: "7%",
              }}
            >
              Sadiq Mahmutovi
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Satoshi",
                textAlign: "center",
                pt: "5%",
              }}
            >
              Fitness Coach
            </Typography>
          </Box>
          <Box>
            <img
              src={require("../../../../Assets/man-4.png")}
              width="430px"
              height="auto"
              alt=""
            />
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontFamily: "Abril Fatface",
                textAlign: "center",
                pt: "7%",
              }}
            >
              Luca Di Picasolo
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Satoshi",
                textAlign: "center",
                pt: "5%",
              }}
            >
              Fitness Coach
            </Typography>
          </Box>
          <Box>
            <img
              src={require("../../../../Assets/man-5.png")}
              width="430px"
              height="auto"
              alt=""
            />
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontFamily: "Abril Fatface",
                textAlign: "center",
                pt: "7%",
              }}
            >
              Alexander Graham
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Satoshi",
                textAlign: "center",
                pt: "5%",
              }}
            >
              Fitness Coach
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionBody2;
