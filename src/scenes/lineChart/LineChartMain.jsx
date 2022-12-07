import { Box } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
const LineChartMain = () => {
  return (
    <Box sx={{ mt: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header title="LINE CHART" subTitle="Simple Line Chart" />
      </Box>
      <Box height="75vh">
      <LineChart/>
      </Box>
      </Box>
  )
}

export default LineChartMain