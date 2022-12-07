import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./scenes/contact/Contact";
import DashBoard from "./scenes/dashBoard/DashBoard";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import Invoices from "./scenes/invoices/Invoices";
import Team from "./scenes/team/Team";
import { ColorModeContext, useMode } from "./theme";
import Form from './scenes/form/Form';
import Calender from './scenes/calender/Calender';
import Faq from "./scenes/faq/Faq";
import BarChartMain from './scenes/barChart/BarChartMain';
import PieChartMain from "./scenes/pieChart/PieChartMain";
import LineChartMain from './scenes/lineChart/LineChartMain';
import GeographyChartMain from './scenes/geographyChart/GeographyChartMain';

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
          <div className="app">
          <SideBar/>
            <menu className="contents">
            <TopBar/>
            <Routes>
              <Route path="/" element={<DashBoard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/invoice" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calender" element={<Calender/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/barchart" element={<BarChartMain/>}/>
              <Route path="/piechart" element={<PieChartMain/>}/>
              <Route path="/linechart" element={<LineChartMain/>}/>
              <Route path="/geochart" element={<GeographyChartMain/>}/>
            </Routes>
            </menu>
          </div>
          </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
