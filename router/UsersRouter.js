const express = require('express');
const { getUsers, addUser,updateUser,deleteUser } = require('../controllers/userController');
const router = express.Router();


router
.get("/",getUsers)
.post("/",addUser)
.patch("/:id",updateUser)
.delete("/:id",deleteUser)

module.exports = router;