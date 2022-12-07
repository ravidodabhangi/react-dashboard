import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Button,
  Icon,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "./../../components/LineChart";
import BarChart from "./../../components/BarChart";
import GeoGraphyChart from "./../../components/GeoGraphyChart";
import StateBox from "./../../components/StateBox";
import ProgressCircle from "./../../components/ProgressCircle";

const DashBoard = () => {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  return (
    <Box mt="20px">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Header title="DASHBOARD" subTitle="Welcome to your Dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "10px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadIcon sx={{ mr: "8px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="100px"
        gap="10px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="12,361"
            subtitle="Emails sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="431,225"
            subtitle="Sails Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StateBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.8"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton sx={{ cursor: "pointer" }}>
                <DownloadIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="200px" mt="-40px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transaction
            </Typography>
          </Box>
          {mockTransactions.map((transcation, i) => (
            <Box
              key={`${transcation.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transcation.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transcation.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transcation.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transcation.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            // mt="15px"
          >
            <ProgressCircle size="100" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 Revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5" fontWeight="600" sx={{p:"30px 30px 0 30px"}}>
            Sales Quantity
          </Typography>
          <Box
          height='200px' mt="-20px"
          >
            <BarChart isDashboard={true}/>
          </Box>
        </Box>
        {/*  */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{mb:"30px"}}>
            Geography Based Traffic
          </Typography>
          <Box
          height='120px'
          >
            <GeoGraphyChart isDashboard={true}/>
          </Box>
        </Box>
        {/*  */}
      </Box>
    </Box>
  );
};

export default DashBoard;
