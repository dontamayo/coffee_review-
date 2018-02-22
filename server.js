const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const knex = require('./db');
const PORT = process.env.PORT || 8000;

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// -- Test Slash route
app.get('/', (request, response) => {
  response.send('The slash route is working, so you better start working.');
});

// -- Get all coffees
app.get('/coffees', (request, response) => {
  knex('coffees')
  .then( rows => response.json(rows));
});

// -- Get a single coffee
app.get('/coffees/:id', (request, response) => {
  const coffeeId = request.params.id;
  knex('coffees')
  .where('id', coffeeId) // SELECT * FROM coffees WHERE id=coffeeId;
  .then( rows => {
    const foundCoffee = rows[0];
    response.json(foundCoffee);
  })
});

// -- Post a new coffee
app.post('/coffees', (request, response) => {
  // origin, flavor, roast, price
  console.log(`request.body: ${request.body}`); // debug
  const { origin, flavor, roast, price } = request.body;
  const newCoffee = { origin, flavor, roast, price };

  knex('coffees')
  .insert(newCoffee)
  .returning('*')
  .then(rows => {
    const coffee = rows[0];
    response.json(coffee);
  });
});

//-- Patch an existing coffee
app.put('/coffees/:id', (request, response) => {
  const coffeeId = request.params.id;
  const { origin, flavor, roast, price } = request.body;

  knex('coffees')
  .where('id', coffeeId)
  .returning('*')
  .update({ origin, flavor, roast, price })
  .then( rows => {
    const coffee = rows[0];
    response.json(coffee);
  });
});

app.delete('/coffees/:id', (request, response) => {
    const coffeeId = request.params.id;
    knex('coffees')
    .where('id', coffeeId)
    .del()
    .then( response.send('Deleted ID'));

});

// Listening
app.listen( PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
})
