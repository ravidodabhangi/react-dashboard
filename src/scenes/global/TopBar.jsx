import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ColorModeContext } from "./../../theme";
const TopBar = () => {
  let colorMode = useContext(ColorModeContext);
  let theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={1}
      pl={0}
      pt={3}
    >
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase placeholder="Search" sx={{ ml: 2, flex: 1 }} />
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <NightlightRoundIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
