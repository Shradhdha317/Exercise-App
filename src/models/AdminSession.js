const AdminSession = {
    adminData: null,
}
export default AdminSession;

export function adminLogin(uname){
    AdminSession.adminData = { uname: uname}
}
export function adminLogout(){
    AdminSession.adminData = null
}