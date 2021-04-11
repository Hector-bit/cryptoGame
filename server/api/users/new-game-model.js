const db = require('../../data/dbConfig');


module.exports = {
    addGame,
    findGame,
    findGameById,
    findGameByInfoID,
    removeGameForInfoId

};

function addGame(daily_meals, info_id) {
    
    return db('open_game')
    .insert(daily_meals)
    .then(inserted => {
       return findByInfoID(info_id)
    })
}

function findGame() {
    return db('open_game')
}

function findGameById(id) {
    return db('open_game')
    .where({ id })
    .first();
}

function findGameByInfoID(info_id) {
    return db('open_game')
    .where({ info_id })
    // .map(dailymeals => {
    //     dailymeals.meals = JSON.parse(dailymeals.meals)
    //     return dailymeals
    // })
}

function removeGameForInfoId(info_id) {
    return db('open_game')
    .where({ info_id })
    .del()
}
