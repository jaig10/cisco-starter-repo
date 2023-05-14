import { Box } from '@mui/material';
import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import DisplayIP from './Components/DisplayIP';
import Pylon from './Components/Pylon';

function App() {
  return (
    <>
      <Navbar text="SEXTANT" />
      <Box
        sx={{display: "flex",flexWrap: "nowrap"}}  
      >
        <Cards name="Public IPv4 Address">
          <DisplayIP url="https://api.ipify.org?format=json"/>
        </Cards>
        <Cards name="Public IPv6 Address">
          <DisplayIP url='https://api64.ipify.org?format=json'/>
        </Cards>
        <Cards name="Packet Latency">
          <Pylon />
        </Cards>
        
      </Box>
    </>
  );
}

export default App;
