import express from 'express';

const app = express();
const PORT = 3000;
//add dummy comment
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
