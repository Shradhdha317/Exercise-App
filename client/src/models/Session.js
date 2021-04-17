import { ToastProgrammatic as toastr } from "buefy";
import { api } from "../models/allFetch";
const Session = {
    userData: null,
    msg: [],
    token:null,
    userList:[],
}
export default Session;

export async function userLogin(username, password){
    var data =  { 'username':username, 'password':password };
    const {user, token} = await api('signup/login',data)
    Session.userData = user;
    Session.token = token;
    toastr.open({
        type: 'is-success',
        message: `Welcome ${Session.userData.fname}`
    })
}

export function GetUsers() {
	return Session.userList;
}

export function userLogout(){
    Session.userData = null
}

export function toastError(msg){
    toastr.open({
        message: msg,
        queue: false,
        type: 'is-danger'
    })
}