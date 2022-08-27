// Import Packages
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/system';

// Import CSS
import './App.css';

// Import Pages
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ExeciseDetail from './components/pages/ExeciseDetail';
import Footer from './components/Footer';

const App = () => (
  <Box width="400px" sx={{ width: {xl: '1488px'}}} m="auto">
      {/* Navbar Added */}
      <Navbar/>

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExeciseDetail/>}/>
      </Routes>

      {/* Footer */}
      <Footer/>
  </Box>
);

export default App;