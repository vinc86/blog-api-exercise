const Users = require('../models/Users');

module.exports.getUsers = async(req,res)=>{
    try{
        const users = await Users.find();
        res.send(users)
    } catch (err){
        console.log(err.message)
    }  
}

module.exports.addUser = async (req,res) =>{

    const {firstName, lastName, password, username, email} =req.body;

     await Users.find()
    .then(users=>{
        
        const checkEmail = users.filter(user=>user.email === email)
        const checkUsername = users.filter(user=>user.username === username)
        console.log(checkEmail, checkUsername)
        if(checkEmail.length>0 && checkUsername.length>0){
            res.send({error: "Email and Username already exists"}); 
            return
        }
        if(checkEmail.length>0){
            res.send({error: "Email registered"}); 
            return  
        } 
        if(checkUsername.length>0){
            res.send({error: "User registered"}); 
            return  
        }
        const NewUser = Users(req.body)
        NewUser
            .save()
            .then(user => res.send({registered: true,user:user}))  
    })
}

module.exports.updateUser = async(req,res)=>{

    const {id} =req.params;
    try{
        const user = await Users.findById(id)
        /* if(!user) {
            throw new Error();
        } */
        user.then(user=>{
            Object.assign(user, {...req.body})
            user.save()
        })
        .then(res.send({updated: true}))

    } catch(err){
        console.error(err.message)
        res.status(404).send({error: err.message})
    }
   

}

module.exports.deleteUser = async (req,res)=>{
    const {id} = req.params;
    try{
        await Users.findById(id)
        .then(user=> user
            .remove()
            .then(res.send({
            message: `User ${user.username} deleted`
            }))
            )
    } catch (err){
        console.log(err.message)
        res
        .status(404)
        .send({error: "User not found"})
    }

}