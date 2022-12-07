import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import Header from "../../components/Header";
import * as yup from "yup";
import { tokens } from "../../theme";
const Form = () => {
    let theme = useTheme();
  let colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  };
  const phoneRefRxp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  let userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid Email").required("required"),
    contact: yup
      .string()
      .matches(phoneRefRxp, "Phone Number is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box sx={{ mt: "20px" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
      >
        <Header title="CREATE USER" subTitle="Create a New User Profile" />
      </Box>
      <Box sx={{mt:"20px"}}>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{gridColumn:"span 2"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{gridColumn:"span 2"}}
              /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{gridColumn:"span 4"}}
              /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{gridColumn:"span 4"}}
              /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{gridColumn:"span 4"}}
              /><TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{gridColumn:"span 2"}}
              />
            </Box>
            <Box display="flex" justifyContent="end" marginTop="20px" marginRight="20px">
                <Button type="submit" sx={{fontWeight:"bold",color:colors.grey[100]}} variant="contained" color="secondary">Create New User</Button>
            </Box>
          </form>
        )}
      </Formik>
      </Box>
    </Box>
  );
};

export default Form;
