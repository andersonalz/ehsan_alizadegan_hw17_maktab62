const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('company_exercise_18', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})

async function test() {
    try {
        await sequelize.authenticate()
        console.log('connection successful');
    } catch (error) {
        console.log('unable to connect to database', error);
        process.exit(1);
    }
}
test()

// (async function () {
//     try {
//         await sequelize.authenticate()
//         console.log('connection successful');
//     } catch (error) {
//         console.log('unable to connect to database', error);
//     }
// })()


module.exports = sequelize