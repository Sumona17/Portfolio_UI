
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomLayout from './Layout/Layout';
import themes from "../src/constants/theme.json";

import Login from './pages/login';

function App() {
  const currentTheme= 'light';
  return (
    <ThemeProvider theme={{ theme: currentTheme }}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<CustomLayout />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;





