const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
    console.log(`Mixly server running at http://localhost:${PORT}`);
});

app.listen(PORT + 1, () => {
    console.log(`HTTPS://localhost:${parseInt(PORT) + 1}`);
});
 });

module.exports = { run: run };
