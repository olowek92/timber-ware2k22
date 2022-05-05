import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import Navbar from './components/organisms/Navbar/Navbar';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme} > 
        <GlobalStyle />
        <Navbar />
      </ThemeProvider> 
    </div>
  );
}

export default App;
