//** STEPS

/*
 5851  mkdir coffee_review
 5852  cd coffee_review
 5853  atom .
 5854  git init -y
 5855  git .ignore
 5856  git .gitignore
 5857  touch .gitignore
 5858  npm init
 5859  npm i express morgan body-parser knex nodemon dotenv --save
 5860  git status
 5861  git init
 5862  git status
 5863  git add .
 5864  git commit -m "initial commit, epress appliction skeleton"
 5865  git status
 5866  touch knexfile.js
 5867  createdb coffee_review
 5868  psql
 5869  psql -l
 5870  psql -d coffee_review
 5871  node_modules/.bin/knex migrate:make create_table_coffees
 npm i pg
 5874  node_modules/.bin/knex migrate:make create_table_coffees
 5875  node_modules/.bin/knex migrate:latest
 5876  psql -d coffee_review
 5877  git add .
 5878  git commit -m "added db migration"
 5879  git status
 */

/* Psql
 //checking database
psql -d coffee_review
\dt+
\dt // accessing the tables
\q
SELECT * FROM coffees;

*/

//git dif == checking all your working on prgresss modifications
//brew install httpie
//http --form POST localhost:8000/coffees origin=Mexico price=13.99 roast=Medium flavor=tart,*citrus,*floral
// curl -X POST -d origin=mars -d roast=red localhost:8000/coffees
// http --form POST localhost:8000/coffees origin=Mexico price=13.99 roast=Medium flavor=tart,+citrus,+whatever
// http localhost:8000/coffees

//curl -X POST -d origin=philippines -d flavor=mandarin -d price=7.99 -d roast=wonderful  localhost:8000/coffees
//curl -X PATCH -d flavor=intense localhost:8000/coffees/2
//curl -X DELETE localhost:8000/coffees/2
//node_modules/.bin/knex seed:make seeds
//node_modules/.bin/knex seed:run
