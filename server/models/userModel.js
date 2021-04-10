const bcrypt = require('bcrypt');
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const userlist = [
    { 
        fname: 'shradhdha',
        email: 'shradha@gmail.com',
        phone: '9898090989',
        password: 'shradha@123'
    },
    { 
        fname: 'vijay',
        email: 'vijay@gmail.com',
        phone: '9898090999',
        password: 'vijay@123'
    }
];

module.exports.GetAllUser = ()=> userlist;
module.exports.GetUser = (user_id)=> userlist[user_id];
module.exports.userRegister = async (user)=> {
    
    if(!user.fname){
        throw { code: 422, msg: "Fullname is required!" }
    }else  if(!user.email){
        throw { code: 422, msg: "Email is required!" }
    }
    else  if(!user.phone){
        throw { code: 422, msg: "Phone Number is required!" }
    }
    else  if(!user.password){
        throw { code: 422, msg: "Password is required!" }
    }
    const hash = await bcrypt.hash(user.password, + SALT_ROUNDS);
    user.password = hash;
    userlist.push(user);
    return { ...user, password: undefined };

}
module.exports.Updateuser = (user_id, user)=> {
    if(!user.fname){
        throw { code: 422, msg: "Fullname is required!" }
    }else  if(!user.email){
        throw { code: 422, msg: "Email is required!" }
    }
    else  if(!user.phone){
        throw { code: 422, msg: "Phone Number is required!" }
    }
    const olduser = userlist[user_id];
    olduser.fname = user.fname;
    olduser.email = user.email;
    olduser.phone = user.phone;
    userlist[user_id] = olduser;
    return { ...olduser, password: undefined };
}
module.exports.Deleteuser = (user_id)=> {
    const user = userlist[user_id];
    userlist.splice(user_id, 1);
    return user;
}
