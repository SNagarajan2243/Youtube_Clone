import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Feed, Navbar, SearchFeed, ChannelDetail, VideoDetail } from './components';

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
