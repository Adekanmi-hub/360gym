import { Box, Button, Typography } from "@mui/material";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const SectionBody1 = () => {
  return (
    <Box
      sx={{
        position: "relative",
        pb: "500px",
      }}
    >
      <Box
        sx={{
          pt: "20px",
        }}
      >
        {/* SECTION 1 ARTICLE/CONTENT */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Abril Fatface",
            color: "white",
            p: "0px 210px",
          }}
        >
          Signature Class
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Satoshi",
            color: "white",
            p: "30px 210px",
            width: "20%",
          }}
        >
          Through my client's fitness journey with me, I have coached many to
          achieve their fitness goals using a sustainable method to improve
          their overall health
        </Typography>
        <Box
          sx={{
            p: "10px 140px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "5%",
              pt: "30px",
            }}
          >
            <MdArrowBackIos size={30} color="#DDCFB9" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#B24627",
                color: "white",
                padding: "20px 30px",
                typography: "h6",
                fontFamily: "Abril Fatface",
                borderRadius: "50px",
                textTransform: "none",
              }}
            >
              Get Started
              <Box
                sx={{
                  ml: "30px",
                  mt: "4px",
                }}
              >
                <BsArrowUpRightCircleFill size={40} color="#DDCFB9" />
              </Box>
            </Button>
            <Box
              sx={{
                pt: "30px",
              }}
            >
              <MdArrowForwardIos size={30} color="#DDCFB9" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "380px",
          left: "250px",
        }}
      >
        <img
          src={require("../../../../Assets/man-1.png")}
          width="300px"
          height="auto"
          alt=""
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "150px",
          left: "600px",
        }}
      >
        <img
          src={require("../../../../Assets/man-2.png")}
          width="300px"
          height="auto"
          alt=""
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "30px",
          left: "930px",
        }}
      >
        <img
          src={require("../../../../Assets/woman-2.png")}
          width="500px"
          height="auto"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default SectionBody1;
