import { Box, Typography, Button } from "@mui/material";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import React from "react";

export const Body = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "5%",
          marginLeft: "8%",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontFamily: "Abril Fatface",
              width: "40%",
            }}
          >
            We Don't Just Train We Make Them
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "Satoshi",
              cursor: "pointer",
              width: "48%",
            }}
          >
            Through my client's fitness journey with me, I have coached many to
            achieve their fitness goals, using a sustainable method to their
            overall health.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "4%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "55%",
            }}
          >
            <Box>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontFamily: "Abril Fatface",
                  }}
                >
                  500
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Satoshi",
                    cursor: "pointer",
                  }}
                >
                  Happy Customer
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: "30%",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontFamily: "Abril Fatface",
                  }}
                >
                  120
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "white",
                    fontFamily: "Satoshi",
                    cursor: "pointer",
                  }}
                >
                  Online Class
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: "30%",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#8AB0AD",
                    color: "black",
                    padding: "20px 30px",
                    typography: "h6",
                    fontFamily: "Abril Fatface",
                    borderRadius: "50px",
                    textTransform: "none",
                    width: "100%",
                  }}
                >
                  Book Now
                  <Box
                    sx={{
                      ml: "30px",
                      mt: "4px",
                    }}
                  >
                    <BsArrowUpRightCircleFill size={40} color="#DDCFB9" />
                  </Box>
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <img
                src={require("../../../Assets/woman-new.png")}
                width="320px"
                height="auto"
                alt=""
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "285px",
            right: "230px",
            zIndex: "1",
          }}
        >
          <img
            src={require("../../../Assets/man-new.png")}
            width="450px"
            height="auto"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};
