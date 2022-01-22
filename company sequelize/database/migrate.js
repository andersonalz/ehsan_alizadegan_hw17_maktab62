const company = require ('./model/company')                     //npm run migrate
const employ = require ('./model/employ') 


(async function(){
try {
    await company.sync({alter : true});
    await employ.sync({alter : true});
} catch (error) {
    console.error(error,"unable to connection to sync table")
    process.exit(1)
}
})()
