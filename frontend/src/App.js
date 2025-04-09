
import './App.css';
import { ThemeProvider } from 'styled-components';
import Login from './Layout/login';
import themes from "../src/constants/theme.json";

function App() {
  const currentTheme= 'light';
  return (
    <ThemeProvider theme={{ theme: currentTheme }}>
    <Login />
  </ThemeProvider>
  );
}

export default App;
