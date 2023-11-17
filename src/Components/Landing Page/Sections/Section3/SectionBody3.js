import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const SectionBody3 = () => {
  return (
    <Box
      sx={{
        p: "8%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "Abril Fatface",
          textAlign: "center",
        }}
      >
        Membership Pricing Plan
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "8%",
          width: "100%",
        }}
      >
        {/* THIS IS THE FIRST PRICING PLAN */}
        <Box
          sx={{
            p: "3% 7%",
            bgcolor: "#8AB0AD",
            borderRadius: "15px",
            width: "19%",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Abril Fatface",
              }}
            >
              $20
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Inter",
                fontWeight: "500",
                pt: "55px",
                pl: "15px",
              }}
            >
              Daily
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              pt: "30px",
            }}
          >
            <img
              src={require("../../../../Assets/Ellipse 2139.png")}
              width="33px"
              height="auto"
              alt=""
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Satoshi",
                pt: "3px",
                pl: "10px",
              }}
            >
              Watch Daily Video
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              pt: "10px",
            }}
          >
            <img
              src={require("../../../../Assets/Ellipse 2139.png")}
              width="33px"
              height="auto"
              alt=""
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Satoshi",
                pt: "3px",
                pl: "10px",
              }}
            >
              Talk With Coach
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              pt: "10px",
            }}
          >
            <img
              src={require("../../../../Assets/Ellipse 2139.png")}
              width="33px"
              height="auto"
              alt=""
            />
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Satoshi",
                pt: "3px",
                pl: "10px",
              }}
            >
              Free Consulting
            </Typography>
          </Box>
        </Box>

        {/* THIS IS THE SECOND & THIRD FLEXED PRICING PLAN */}
        <Box
          sx={{
            width: "65%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* THIS IS THE SECOND PRICING PLAN */}
            <Box
              sx={{
                display: "flex",
                p: "3% 8%",
                bgcolor: "#8AB0AD",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Abril Fatface",
                }}
              >
                $90
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  pt: "55px",
                  pl: "15px",
                }}
              >
                Weekly
              </Typography>
            </Box>

            {/* THIS IS THE THIRD PRICING PLAN */}
            <Box
              sx={{
                display: "flex",
                p: "3% 3%",
                bgcolor: "#8AB0AD",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Abril Fatface",
                }}
              >
                $300
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  pt: "55px",
                  pl: "15px",
                }}
              >
                Monthly
              </Typography>
            </Box>
          </Box>

          {/* THIS IS THE FOURTH PRICING PLAN */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "3%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                p: "3% 6%",
                bgcolor: "#8AB0AD",
                borderRadius: "15px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Abril Fatface",
                }}
              >
                $700
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Inter",
                  fontWeight: "500",
                  pt: "55px",
                  pl: "15px",
                }}
              >
                Yearly
              </Typography>
            </Box>

            {/* THE "JOIN NOW" BUTTON */}
            <Box
              sx={{
                mt: "30px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#B24627",
                  color: "white",
                  typography: "h3",
                  fontFamily: "Abril Fatface",
                  borderRadius: "65px",
                  textTransform: "none",
                  p: "8px 15px 8px 100px",
                }}
              >
                Join Now
                <Box
                  sx={{
                    ml: "50px",
                    mt: "4px",
                  }}
                >
                  <BsArrowUpRightCircleFill size={70} color="#DDCFB9" />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionBody3;
