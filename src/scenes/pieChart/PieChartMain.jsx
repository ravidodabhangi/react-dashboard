import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'
const PieChartMain = () => {
  return (
    <Box sx={{ mt: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header title="PIE CHART" subTitle="Simple Pie Chart" />
      </Box>
      <Box height="75vh">
      <PieChart/>
      </Box>
      </Box>
  )
}

export default PieChartMain