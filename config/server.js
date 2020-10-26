const {PORT} =require('../config/keys');

module.exports = app =>{
    app.listen(PORT,(err)=>{
        if(err){
            console.log(err.message)
        }
        console.log("Server listening")
    });
}