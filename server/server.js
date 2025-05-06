const express = require('express');
const path = require('path');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..')));

// Serve the main HTML file for all routes (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🔊 3D Spatial Audio server running at http://localhost:${PORT}`);
  console.log(`👂 Open in your browser and use headphones for the best experience!`);
});