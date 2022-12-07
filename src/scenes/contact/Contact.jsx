import { Box, Toolbar, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataContacts } from "./../../data/mockData";
const Contact = () => {
  let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  let columns = [
    {
      field: "id",
      headerName: "ID",
      flex:0.5
    },
    {
        field: "registrarId",
        headerName: "Registrar ID",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  ];
  return (
    <Box mt="20px">
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header
          title="CONTACTS"
          subTitle="List of Contacts for Future Reference"
        />
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
          "& .MuiCheckbox-root":{
            color:`${colors.greenAccent[200]} !important`
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          pageSize={7}
          checkboxSelection
          experimentalFeatures={{ newEditingApi: true }}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
