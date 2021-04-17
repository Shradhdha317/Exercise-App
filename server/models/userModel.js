const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;
const userlist = [
        { 
        fname: 'shradhdha',
        email: 'shradha@gmail.com',
        phone: '9898090989',
        password: 'shradha@123',
        isAdmin: true,
    },
    { 
        fname: 'vijay',
        email: 'vijay@gmail.com',
        phone: '9898090999',
        password: 'vijay@123',
        isAdmin: false,
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
    user.isAdmin = false;
    userlist.push(user);
    console.log({ ...user, password: undefined });
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
module.exports.userLogin = async (username, password) =>{
    const user = userlist.find(x => x.email === username);
    if(!user) throw { code: 401, msg: "Sorry there is no user with that email or username" };
    if( ! await bcrypt.compare(password, user.password) ){
            throw { code: 401, msg: "Wrong Password" };
    }
    const data = { ...user, password: undefined };
    const token = jwt.sign(data, JWT_SECRET)
    console.log({ user: data, token });
    return { user: data, token };
}
module.exports.FromJWT = async (token) =>{
        try {
            const user = jwt.verify(token, JWT_SECRET);
            return user;       
    } catch (error) {
            console.log({error});
        return null;
    }
}