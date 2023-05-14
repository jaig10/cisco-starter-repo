import { Box } from '@mui/material';
import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Box>
        <h1>Heading</h1>
        <Cards/>
        <Cards/>
        <Cards/>
      </Box>
    </>
  );
}

export default App;
