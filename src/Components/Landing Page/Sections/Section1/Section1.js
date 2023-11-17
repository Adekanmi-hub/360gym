import { Box } from "@mui/material";
import React from "react";
import SectionHead1 from "./SectionHead1";
import SectionBody1 from "./SectionBody1";

export const Section1 = () => {
  return (
    <Box
      sx={{
        bgcolor: "#33232B",
      }}
    >
      <SectionHead1 />
      <SectionBody1 />
    </Box>
  );
};
