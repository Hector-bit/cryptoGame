const db = require('../../data/dbConfig');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('gamers').select('id', 'username');
}

function findBy(filter) {
  return db('gamers').where(filter);
}

async function add(user) {
  const [id] = await db('gamers').insert(user, 'id');

  return findById(id);
}

function findById(id) {
  return db('gamers')
    .where({ id })
    .first();
}