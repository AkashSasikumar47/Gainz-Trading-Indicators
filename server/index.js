const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define your routes and middleware here

app.get('/', (req, res) => {
    res.send('Hello, Gainz Trading Indicators Server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});