const db = require('../../data/dbConfig');
const { add } = require('./auth-model');
describe('auth model', function() {
    describe('add()', function() {
        beforeEach(async () => {
            await db('gamers').truncate();
        });
        it('this adds a user', async function() {
            await add({ username: 'Bob', password: 'password' });
            const gamers = await db('gamers');
            expect(gamers).toHaveLength(1);
        });
        it('should insert the provided user', async function() {
            await add({ username: 'Walter', password: 'password' });
            await add({ username: 'Saul', password: 'password' });
            const gamers = await db("gamers");
            expect(gamers).toHaveLength(2);
            expect(gamers[0].username).toBe('Walter');
            expect(gamers[1].username).toBe('Saul');
        });
    })
})