import { api } from "../models/allFetch";
const Session = {
    userData: null,
    msg: [],
    token:null
}
export default Session;

export async function userLogin(username, password,isAdmin,type){
    var data =  { 'username':username, 'password':password ,'isAdmin':isAdmin,'type':type};
    const {user, token} = await api('signup/login',data)
    Session.userData = user;
    Session.token = token;
}

export function userLogout(){
    Session.userData = null
}

