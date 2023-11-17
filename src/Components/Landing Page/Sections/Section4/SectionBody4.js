import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const SectionBody4 = () => {
  return (
    <Box
      sx={{
        p: "8%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={require("../../../../Assets/man-6.png")}
          width="550px"
          height="auto"
          alt=""
        />
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Abril Fatface",
              color: "white",
              width: "80%",
            }}
          >
            Follow Us on Social Media
          </Typography>
          <Box
            sx={{
              mt: "20%",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#B24627",
                  color: "white",
                  typography: "h4",
                  fontFamily: "Abril Fatface",
                  borderRadius: "65px",
                  textTransform: "none",
                  p: "6px 15px 6px 80px",
                }}
              >
                Instagram
                <Box
                  sx={{
                    ml: "30px",
                    mt: "4px",
                  }}
                >
                  <BsArrowUpRightCircleFill size={60} color="#DDCFB9" />
                </Box>
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#B24627",
                  color: "white",
                  typography: "h4",
                  fontFamily: "Abril Fatface",
                  borderRadius: "65px",
                  textTransform: "none",
                  p: "6px 15px 6px 100px",
                }}
              >
                Twitter
                <Box
                  sx={{
                    ml: "30px",
                    mt: "4px",
                  }}
                >
                  <BsArrowUpRightCircleFill size={60} color="#DDCFB9" />
                </Box>
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "5%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#B24627",
                  color: "white",
                  typography: "h4",
                  fontFamily: "Abril Fatface",
                  borderRadius: "65px",
                  textTransform: "none",
                  p: "6px 15px 6px 92px",
                }}
              >
                Facebook
                <Box
                  sx={{
                    ml: "30px",
                    mt: "4px",
                  }}
                >
                  <BsArrowUpRightCircleFill size={60} color="#DDCFB9" />
                </Box>
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#B24627",
                  color: "white",
                  typography: "h4",
                  fontFamily: "Abril Fatface",
                  borderRadius: "65px",
                  textTransform: "none",
                  p: "6px 15px 6px 80px",
                }}
              >
                LinkedIn
                <Box
                  sx={{
                    ml: "30px",
                    mt: "4px",
                  }}
                >
                  <BsArrowUpRightCircleFill size={60} color="#DDCFB9" />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionBody4;
