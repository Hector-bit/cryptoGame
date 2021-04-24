const express = require('express');
const Info = require('./user-model');
const DailyMeals = require('./game-table-model');
const restricted = require('../auth/restricted');
const { validateDailyMeals, stringifyMeals, addInfoIdToMeals }  = require('./user-middleware');

const router = express.Router();

router.get('/all', (req, res) => {
    Info.find()
        .then(success => {
            res.status(200).json(success)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get('/', restricted, (req, res) => {
    req.body.user_id = req.user.id;

    Info.findByUserID(req.user.id)
        .then(info => {
            console.log('info', info)
            if(info){
                res.status(200).json(info)
            } else {
                res.status(400).json({ error: `No user information attached with user id ${req.user.id} ` })
            }
            
        })
        .catch(err => {
            console.log('err', err)
            res.status(500).json({error: 'Unable to GET user info'})
        })
})

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    Info.findById(id)
        .then(info => {
            console.log('info', info)
            if(info){
                res.status(200).json(info)
            } else {
                res.status(400).json({ error: `No user information attached with user id ${id} ` })
            }
            
        })
        .catch(err => {
            console.log('err', err)
            res.status(500).json({error: 'Unable to GET user info'})
        })
})

//should get gametable info
router.get('/:id/gametable', (req, res) => {
    const id = req.params.id;

    DailyMeals.findByInfoID(id)
        .then(dailymeals => {
            if(dailymeals) {
                res.status(200).json(dailymeals)
            } else {
                res.status(404).json({ error: 'hopefully this is now searching for the game table but if your seeing this then you fucked up'})
            }
        })
        .catch(err =>{
            res.status(500).json({ error: 'get the fuck outta here, either you fucked up or the server aint workin'})
        })
})

//posts the user info, probably won't need
router.post('/', restricted, (req, res) => {
    const { user_id, gender, birthdate_day, birthdate_month, birthdate_year, height, weight, activity_factor, meals_per_day, snacks_per_day, goal_multiplier } = req.body;
    req.body.user_id = req.user.id;

    console.log('not sure if req.user.id will show anything but imma leave this console.log at 77 from user-router.js', req.user.id)

    if(!gender || !birthdate_day || !birthdate_month || !birthdate_year || !height || !weight || !activity_factor || !(meals_per_day >= 0) || !(snacks_per_day >= 0) || !goal_multiplier) {
        res.status(400).json({ error: 'Please provide the proper body with the request'})
    } else {
        Info.add(req.body)
            .then(saved => {
                console.log('saved post', saved)
                res.status(201).json(saved)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ err, error: 'Unable to POST user information to the database'})
            })
    }
})

//changed this to post a new game table
router.post('/:id/gametable', (req, res) => {

        DailyMeals.removeForInfoId(req.params.id)
            .then(success => {
                DailyMeals.add(req.body, req.params.id)
                    .then(saved => {
                        console.log(saved)
                        res.status(201).json(saved)
                    })
                    .catch(err => {
                        console.log('500', err)
                        res.status(500).json({ error: 'Unable to post daily meals into the database'})
                    })
                })
            .catch(err => {
                console.log('500', err)
                res.status(500).json({ error: 'Internal server error'})
            })
})

//suppose to update users information
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const { user_id, gender, birthdate_day, birthdate_month, birthdate_year, height, weight, activity_factor, meals_per_day, snacks_per_day, goal_multiplier } = req.body;

    if(!gender || !birthdate_day || !birthdate_month || !birthdate_year || !height || !weight || !activity_factor || !(meals_per_day >= 0) || !(snacks_per_day >= 0) || !goal_multiplier) {
        res.status(400).json({ error: 'Please provide the proper body with the request'})
    } else {
        Info.update(id, req.body)
            .then(saved => {
                res.status(201).json(saved)
            })
            .catch(err => {
                res.status(500).json({ error: 'Unable to PUT user information to the database'})
            })
    }
})

//updates the game table stuff
router.put('/:id/gametable', restricted, (req, res) => {
    const id = req.params.id;

    if(!id){
        res.status(400).json({ error: 'you did not provide a valid user id'})
    } else {
        DailyMeals.updateTable(id, req.body)
            .then(saved => {
                res.status(201).json(saved)
            })
            .catch(err => {
                res.status(500).json({ error: 'Unable to PUT this table... sorry'})
            })
    }
})

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;

    Info.remove(id)
        .then(del => {
            if(del) {
                res.status(200).json({ message: `You successfully delete the user information with the ID ${id}` })
            } else {
                res.status(400).json({ error: `User with id ${id} does not exist` })
            }
            
        })
        .catch(err => {
            res.status(500).json({ error: 'Unable to DELETE user information from the database' })
        })
})


module.exports = router;