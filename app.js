const express = require('express');
const app = express();
const fetch = require('node-fetch');
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', async (req, res) => {
    const api_url = 'https://api.wazirx.com/api/v2/tickers';
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    const alldata = [];
    alldata.push(...Object.values(json))
    res.render('home', { alldata });
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})