import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <Box bgColor={"#F3F2EF"}>
      <Navbar/>
      <AllRoutes/>
    </Box>
  );
}

export default App;
