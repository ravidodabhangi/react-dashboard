import { Box } from '@mui/material'
import React from 'react'
import BarChart from '../../components/BarChart'
import Header from '../../components/Header'
const BarChartMain = () => {
  return (
    <Box sx={{ mt: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header title="BAR CHART" subTitle="Simple Bar Chart" />
      </Box>
      <Box height="75vh">
        <BarChart/>
      </Box>
      </Box>
  )
}

export default BarChartMain