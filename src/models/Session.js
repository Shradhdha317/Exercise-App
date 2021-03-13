const Session = {
    userData: null,
    msg: [],
    userList:[],
}
export default Session;

export function userLogin(uphone,uemail,fname,password){
    Session.userData = { phone: uphone, email: uemail,fname:fname,password:password }
}

export function userStore(userList){
    Session.userList.push(userList)
}

export function GetUsers() {
	return Session.userList;
}

export function userLogout(){
    Session.userData = null
}

