const express = require('express');
const cors = require('cors');

const app = express();

//app.use(express.json()); onlz if you send request from frontend 

const corsOptions = {
  origin: ['http://localhost:3000'], 
  
  credentials: true, 
};

app.use(cors(corsOptions));

app.get('/', async (req, res) => {

    try {
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0a836b619amsh1b59fd8f594d42cp1fb5a1jsndcd1e55207b6',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
    };
   

    const response = await fetch(url, options);

    if (response.ok) {
        const coins = await response.json();
        res.status(200).json({ coins }); // Sending JSON response with coins data
    } else {
        // If there's an error with the API request
        res.status(response.status).json({ message: 'Error fetching data from the API' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/search', async (req, res) => {
    try {
        const { query } = req.query; // Access the 'query' parameter from the request

        // Modify the URL to include the search query
        const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0&query=${query}`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0a836b619amsh1b59fd8f594d42cp1fb5a1jsndcd1e55207b6',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);

        if (response.ok) {
            const coinsData = await response.json();
            const coins = coinsData.data.coins;

            // Filter coins based on the query
            const filteredCoins = coins.filter(coin => (
                coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase())
            ));

            res.status(200).json({ filteredCoins }); 
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(3500, () => {
    console.log('Server listening on port 3500');
});
