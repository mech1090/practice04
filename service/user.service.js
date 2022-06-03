const User = require('../model/user')

const findUser = async(field)=>{
        const findOne = User.findOne(field)
        return findOne
}
const createEntry = async(fields)=>{
    const createUser = User.create(fields)
}
module.exports = {findUser,createEntry}