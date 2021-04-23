
const bcrypt = require('bcryptjs');
const password = 'password';

exports.seed = function(knex) {
  return knex('gamers').insert([
    {id: 1, username: 'hector', password: bcrypt.hashSync(password)},
    {id: 2, username: 'tom', password: bcrypt.hashSync(password)}
  ])
   
};
