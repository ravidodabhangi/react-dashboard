import React, { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./../../theme";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TerrainIcon from '@mui/icons-material/Terrain';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PieChartIcon from '@mui/icons-material/PieChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person2Icon from '@mui/icons-material/Person2';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';
const SideBar = () => {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  let [isCollapsed, setIsCollapsed] = useState(false);
  let [selected, setSelected] = useState("DashBoard");
  const Item = ({ to, icon, selected, setSelected, title }) => {
    let theme = useTheme();
    let colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        icon={icon}
        style={{ color: colors.grey[100] }}
        onClick={() => setSelected(title)}
      >
        <Typography variant="h6">{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]}`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 0px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuIcon/> : undefined}
            style={{
              margin: "-5px -5px 10px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <Typography variant="h4">ADMINIS</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box sx={{ mb: "15px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={70}
                  height={70}
                  src="https://thesunflower.com/wp-content/uploads/2012/06/064d5acf1c8baf7a26e7099580972fc2.jpg"
                  alt="img-1"
                  style={{ cursor: "pointer", borderRadius: "100%" }}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h4"
                  color={colors.grey[100]}
                  fontWeight="bold"
                >
                  Ravi TD
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              icon={<HomeIcon/>}
              title="DashBoard"
              to="/"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h6" color={colors.grey[300]} sx={{m:"5px 0px 2px 20px"}}>Data</Typography>
            <Item
              icon={<Diversity2RoundedIcon/>}
              title="Manage Team"
              to="/team"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<ContactPhoneIcon/>}
              title="Contacts Information"
              to="/contact"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<ReceiptIcon/>}
              title="Invoices Balances"
              to="/invoice"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h6" color={colors.grey[300]} sx={{m:"5px 0px 2px 20px"}}>Pages</Typography>
            <Item
              icon={<Person2Icon/>}
              title="Profile Form"
              to="/form"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<CalendarMonthIcon/>}
              title="Calender"
              to="/calender"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<LiveHelpIcon/>}
              title="FAQ Page"
              to="/faq"
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h6" color={colors.grey[300]} sx={{m:"5px 0px 2px 20px"}}>Charts</Typography>
            <Item
              icon={<BarChartIcon/>}
              title="Bar Chart"
              to="/barchart"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<PieChartIcon/>}
              title="Pie Chart"
              to="/piechart"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<QueryStatsIcon/>}
              title="Line Chart"
              to="/linechart"
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              icon={<TerrainIcon/>}
              title="Geography Chart"
              to="/geochart"
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
