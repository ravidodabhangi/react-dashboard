import { Box, Toolbar, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataTeam } from "./../../data/mockData";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
const Team = () => {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  let columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email ID",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="5px"
            sx={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "5px",
            }}
          >
            {access === "admin" && <AdminPanelSettingsIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ ml: "5px" }}
              color={colors.grey[100]}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box mt="20px">
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header title="TEAM" subTitle="Managing the Team Members" />
      </Box>
      <Box
        height="71vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[100],
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          pageSize={7}
          experimentalFeatures={{ newEditingApi: true }}
          components={{Toolbar:GridToolbar}}
        />
      </Box>
    </Box>
  );
};

export default Team;
