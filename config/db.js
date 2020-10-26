const {URI, mongoOptions} = require('../config/keys');

module.exports = mongoose =>{

    mongoose.connect(URI,mongoOptions,()=>{
        console.log("DB connected")
    })

}