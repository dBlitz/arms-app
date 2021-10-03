var user_service = require('../services/user_service');
var bodyParser = require('body-parser')
const authorize = require('../database/config/authorize.js')

async function getUsers_All() {
  
    const allUsers =  await user_service.getUsers_All();
    return allUsers;
}

async function getUser_ByID(user_id) {
   var theUser =  await user_service.getUser_ByID(user_id);
   return theUser;
}

async function createUser(theUser) {
   const created_user =  await user_service.createUser(theUser);
   return created_user;
}

async function login(user) {
   const theUser = await user_service.login(user);
   return theUser;
}

async function updateUser(user) {
   const theUser = await user_service.updateUser(user);
   return theUser;
}

module.exports = {
    getUsers_All,
    getUser_ByID,
    createUser,
    login,
    updateUser
};

