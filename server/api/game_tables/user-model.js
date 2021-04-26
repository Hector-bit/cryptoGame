const db = require('../../data/dbConfig');


module.exports = {
    add,
    find,
    findById,
    findByUserID,
    update,
    remove,
};

function add(info) {
    return db('gamers')
    .insert(info, 'id')
    .then(id => {
        return findById(id[0])
    })
}

function find() {
    return db('gamers')
}

function findById(id) {
    return db('gamers')
    .select('id', 'username')
    .where({ id })
    .first();
}

function findByUserID(user_id) {
    return db('gamers')
    .select('id', 'username')
    .where({ user_id })
    .first();
}


function update(id, changes) {
    return db('gamers')
        .where({ id })
        .update(changes)
        .then(res => {
            return findById(id)
        })
}

function remove(id) {
    return db('gamers')
    .where({ id })
    .del();
}