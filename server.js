const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/search', (req, res) => {
    const { cardName } = req.body;

    // Make request to Yu-Gi-Oh API
    axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php=${cardName}`)
        .then(response => {
            // Extract relevant card information from the response
            const cardData = response.data.data[0]; // Assuming the first item contains the desired card info
            // Send the card information back to the client
            res.json(cardData);
        })
        .catch(error => {
            console.error('Error:', error);
            res.status(500).send('Error fetching card data');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
