const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 'SHRADHDHA';
const JWT_SECRET = 'SECRET';
const userlist = [
        { 
        id:1,        
        fname: 'shradhdha',
        email: 's@g.c',
        phone: '9898090989',
        password: '$2b$10$N.e8sHK3BWrk/9sSq.Y/OezWwyGZtDSA3u832o3Pyt1Va.XHcCaWG',
        isAdmin: true,
    },
    { 
        id:2,  
        fname: 'vijay',
        email: 'vijay@gmail.com',
        phone: '9898090999',
        password: '$2b$10$N.e8sHK3BWrk/9sSq.Y/OezWwyGZtDSA3u832o3Pyt1Va.XHcCaWG',
        isAdmin: false,
        friendList:[],
    }
];

const requestList= [
     
];
module.exports.showRequest = async(id) =>{
        var list = [];
        if(requestList.length > 0)
        {
                requestList.forEach(function(x){
                if(x.friendlist.includes(id))
                {
                   list.push(x.user_id);
                }
                });
        }
        const activeFriend = [];
        if(list.length > 0)
        {
                list.forEach(function(x)
                 {
                        for(var l=0;l<userlist.length;l++)
                        {
                          if(x == userlist[l].id && userlist[l].isAdmin == false)
                          {
                               // console.log(userlist[l]);
                                activeFriend.push(userlist[l]);    
                                break;
                          }
                        }
                     
                 });
         }
        //console.log(activeFriend);
         return {activeFriend};
}
module.exports.acceptRequest = async(id,user_id) =>{
        var list = [];
        var d = 0;
        if(requestList.length > 0)
        {
                requestList.forEach(function(x){
                if(id == x.user_id)
                {
                   list = x.friendlist;
                   console.log(list);
                   if(list.length > 0)
                   {
                        list.splice(list.indexOf(user_id),1);
                        x.friendlist = list;
                        console.log(x.friendlist);
                        for(var l=0;l<userlist.length;l++)
                                {
                                if(id == userlist[l].id)
                                {
                                        if(!userlist[l].friendList.includes(user_id))
                                        {
                                        
                                        userlist[l].friendList.push(user_id);
                                        d = 1;
                                        }
                                        break;
                                }
                                }
                        for(var l=0;l<userlist.length;l++)
                        {
                        if(user_id == userlist[l].id)
                        {
                                if(!userlist[l].friendList.includes(id))
                                {
                                
                                userlist[l].friendList.push(id);
                                d = 1;
                                }
                                break;
                        }
                        }        
                   }
                }
                });
        }  
       
        return {d};  
}
module.exports.sendRequest = async(id,user_id) =>{
        var list = [];
        var mm = 0;
        var res = 0;
        if(requestList.length > 0)
        {
                requestList.forEach(function(x){
                if(user_id == x.user_id)
                {
                   mm = 1;
                   list = x.friendlist;
                   var xs = [];
                   for(var l=0;l<userlist.length;l++)
                   {
                   if(user_id == userlist[l].id)
                   {
                           xs = userlist[l].friendList;
                           break;
                   }
                   }
                   if(!list.includes(id) && !xs.includes(id))
                   {
                        x.friendlist.push(id);
                        res = 1;
                   }
                   }
                });
        }
        if(mm==0)
        {
                list.push(id);
                var a = {user_id:user_id,friendlist:list};
                requestList.push(a);
                res = 1;
        }
       
        console.log(requestList);
        return {res};
}

module.exports.getActiveUser = async (id) =>{
       const activeFriend = [];
       
       var friend = [];
       for(var l=0;l<userlist.length;l++)
       {
         if(id == userlist[l].id)
         {
               friend =  userlist[l].friendList;
               break;
         }
       }
       
       if(friend.length > 0)
       {
        friend.forEach(function(x)
                {
                        for(var l=0;l<userlist.length;l++)
                        {
                          if(x == userlist[l].id && userlist[l].isAdmin == false && id != userlist[l].id)
                          {
                                activeFriend.push(userlist[l]);    
                                break;
                          }
                        }    
                });
        }
        return {activeFriend};
}
module.exports.getDeactiveUser = async (id) =>{
        const activeFriend = [];
        const a2 = [];
        userlist.forEach(function(o)
        {
           a2.push(o.id); 
        });
        //console.log(a2);
        var a1 = [];
        for(var l=0;l<userlist.length;l++)
        {
          if(id == userlist[l].id)
          {
                a1 =  userlist[l].friendList;
                break;
          }
        }
        
       // console.log(a1);
        var a = [], diff = [];

        for (var i = 0; i < a1.length; i++) {
            a[a1[i]] = true;
        }
    
        for (var i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]];
            } else {
                a[a2[i]] = true;
            }
        }
    
        for (var k in a) {
            diff.push(k);
        }
       // console.log(diff);
        if(diff.length > 0)
        {
                diff.forEach(function(x)
                 {
                        for(var l=0;l<userlist.length;l++)
                        {
                          if(x == userlist[l].id && userlist[l].isAdmin == false && id != userlist[l].id)
                          {
                               // console.log(userlist[l]);
                                activeFriend.push(userlist[l]);    
                                break;
                          }
                        }
                     
                 });
         }
        // console.log(activeFriend);
         return {activeFriend};
 }

module.exports.GetAllUser = ()=> userlist;
module.exports.GetUser = (user_id)=> userlist[user_id];
module.exports.getUserDetails = async (id)=> {
        var user = null;
        for(var l=0;l<userlist.length;l++)
        {
          if(id == userlist[l].id)
          {
                user =  userlist[l];
                break;
          }
        }
return {user}
}

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
    console.log(hash);
    user.password = hash;
    user.isAdmin = false;
    user.friendList = [];
    user.id = userlist.length + 1
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
module.exports.userLogin = async (username, password,isAdmin,type) =>{
    var k = -1;
    for(var i=0;i<userlist.length;i++)
    {
        if(username == userlist[i].email)
        {
           k = i;
        }
    }
   
    if(k == -1) throw { code: 401, msg: "Sorry there is no user with that email or username" };
    
    if( ! await bcrypt.compare(password, userlist[k].password) ){
            throw { code: 401, msg: "Wrong Password" };
    }

    if(type == 'user')
    {
        if(isAdmin != false)
        {
                throw { code: 401, msg: "You Are Not User!" };
        }
    }
    else if(type == 'admin')
    {
        if(isAdmin != true)
        {
                throw { code: 401, msg: "You Are Not Admin!" };
        }
    }
    
    const data = { ...userlist[k], password: undefined };
    
    const token = jwt.sign(data, JWT_SECRET,{ expiresIn: '7d' })
    
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