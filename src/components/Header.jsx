import { Box,Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material';
import { tokens } from './../theme';

const Header = ({title,subTitle}) => {
    let theme=useTheme();
    let colors=tokens(theme.palette.mode);
  return (
    <Box mb="20px" mr="20px">
        <Typography variant='h3' sx={{marginBottom:"5px",letterSpacing:"1px"}} fontWeight="bold" color={colors.grey[100]}>{title}</Typography>
        <Typography variant='h6' sx={{letterSpacing:"0.5px"}} color={colors.greenAccent[400]}>{subTitle}</Typography>
    </Box>
  )
}

export default Header