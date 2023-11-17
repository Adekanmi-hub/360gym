import { Box, Typography } from "@mui/material";
import React from "react";

const FooterBody = () => {
  return (
    <Box
      sx={{
        bgcolor: "#8AB0AD",
        padding: "3% 8%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            pt: "13px",
          }}
        >
          (444)-318-5219
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            pt: "13px",
          }}
        >
          Info@gym.com
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Abril Fatface",
          }}
        >
          360GYM
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Inter",
            pt: "13px",
          }}
        >
          5344 White lane, New Orleans
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterBody;
