const db = require('../../data/dbConfig');


module.exports = {
    add,
    find,
    findById,
    findByInfoID,
    removeForInfoId

};

function add(game_table, info_id) {
    
    return db('game_table')
    .insert(game_table)
    .then(inserted => {
       return findByInfoID(info_id)
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

function findByInfoID(info_id) {
    return db('game_table')
    .where({ info_id })
    // .map(dailymeals => {
    //     dailymeals.meals = JSON.parse(dailymeals.meals)
    //     return dailymeals
    // })
}

function removeForInfoId(info_id) {
    return db('game_table')
    .where({ info_id })
    .del()
}
