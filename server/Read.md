Routes

GET => localhost:8000
    Test to see if the api is active

GET => localhost:8000/games/:id/gametable
    Returns all the games on that id

POST => localhost:8000/auth/register
    create a new 'gamer' in the database

POST => localhost:8000/auth/login
    Gives a token to access the private routes

POST => localhost:8000/games/:id/gametable
    Creates a gametable

    Not sure what the body requires yet

POST =>