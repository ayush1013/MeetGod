import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box bgColor={"#F3F2EF"}h="100vh">
      <Navbar/>
    </Box>
  );
}

export default App;
