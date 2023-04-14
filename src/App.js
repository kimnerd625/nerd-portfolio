import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import {dark, light} from './styles/theme';

import MainPage from "./pages/MainPage";

const App = () => {
  const [themeMode, setThemeMode] = useState('light'); // 테마 모드 세팅
  const theme = themeMode === 'light' ? light : dark;

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage theme={themeMode} toggleTheme={toggleTheme}/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;