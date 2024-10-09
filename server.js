const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let data = []; // In-memory data storage

// Route to get all data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Route to save data
app.post('/api/data', (req, res) => {
    const { customerName, productName, productPrice, sellPrice } = req.body;

    if (customerName && productName && productPrice && sellPrice) {
        data.push({ customerName, productName, productPrice, sellPrice });
        res.status(201).json({ message: 'Data saved successfully!' });
    } else {
        res.status(400).json({ message: 'Incomplete data!' });
    }
});

// Route to clear data
app.delete('/api/data', (req, res) => {
    data = [];
    res.json({ message: 'Data cleared!' });
});

// Set up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
