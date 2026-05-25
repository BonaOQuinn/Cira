const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false, // Disable for inline styles/scripts
}));

// Compression middleware
app.use(compression());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1d', // Cache static files for 1 day
    etag: true
}));

// Serve images
app.use('/images', express.static(path.join(__dirname, 'images'), {
    maxAge: '7d' // Cache images for 7 days
}));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🎉 Birthday website running on http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});