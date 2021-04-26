const db = require('../../data/dbConfig');


module.exports = {
    add,
    find,
    findById,
    findByInfoID,
    updateTable,
    removeForInfoId
};

function add(game_table, gamer_id) {
    
    return db('game_table')
    .insert(game_table)
    .then(inserted => {
       return findByInfoID(gamer_id)
    })
}

function find() {
    return db('game_table')
}

function findById(id) {
    return db('game_table')
    .where({ id })
    .first();
}

function findByInfoID(gamer_id) {
    return db('game_table')
    .where({ gamer_id })
    .map(dailymeals => {
        dailymeals = JSON.parse(dailymeals)
        return dailymeals
    })
}

function updateTable(gamer_id, changes) {
    return db('game_table')
    .where({ gamer_id })
    .update(changes)
    .then(res => {
        return findById(gamer_id)
    })
}

function removeForInfoId(gamer_id) {
    return db('game_table')
    .where({ gamer_id })
    .del()
}
