const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;

// middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// routes
app.get('/', (request, response) => {
  response.send('the slash route is working, so you better srart working')
});

app.get('/coofees', (request, response) => {
  
});
//Listening
app.listen(PORT, () => {
  console.log(`Listening on http//localhost:${PORT}`);
});
