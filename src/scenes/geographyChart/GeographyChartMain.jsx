import { Box, useTheme } from "@mui/material";
import React from "react";
import GeoGraphyChart from "../../components/GeoGraphyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const GeographyChartMain = () => {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ mt: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header title="Geography Chart" subTitle="Simple Geography Chart" />
      </Box>
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoGraphyChart />
      </Box>
    </Box>
  );
};

export default GeographyChartMain;
