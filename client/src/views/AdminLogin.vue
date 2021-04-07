<template>
<div>
<div class="page-container">
<!-- Page content -->
<div class="page-content">
<!-- Main content -->
<div class="content-wrapper">
<!-- Content area -->
<div class="row a" v-if="AdminSession.adminData">
    <h3 style="color:blue;">Welcome, {{AdminSession.adminData.uname}}</h3>
    <div  class="col-md-12">
    <router-link to="/adminhome" class="navbar-item">
      Go: Admin Dashboard
    </router-link>
    </div>
</div>
<div class="content">
    <h2 align="center">FITNESS TRACKER</h2>
    <!-- Simple login form -->
    
        <div class="panel panel-body login-form">
       
            <div class="text-center">
                <h5 class="content-group">
                Login to your account 
                <small class="display-block">
                Enter your credentials below
                </small>
                </h5>
            </div>
             <form @submit.prevent="signin">
            
                <input type="text" class="form-control" placeholder="Username"  v-model="uname"/>
            
                <input type="password" v-model="password" class="form-control" placeholder="Password"/>
           
                <button class="btn btn-primary">Sign in</button>
           
            </form>
        
        </div>
    
</div>
<!-- /content area -->
</div>
<!-- /main content -->
</div>
<!-- /page content -->
</div>
</div>
</template>
<script>
import Vue from "vue";
import AdminSession, { adminLogin, adminLogout } from "../models/AdminSession";

export default Vue.extend({
    data: ()=> ({
        AdminSession,
        uname:'',
        password:'',
    }),
    methods: {
        signin(){
           
            if(this.uname == 'Admin' && this.password == 'admin@123')
            {
                alert('successfully Login!');
                adminLogin(this.uname);
            }
           else{
             alert('Invalid Username or Password!');
           }
        },
        logout(){
            alert('successfully Logout!');
            adminLogout();
        }
    }
})
</script>
<style scoped>
    .page-container{
        margin: 10% auto 0;
        width: 40%;
    }
    input,button{
        width:100%;
        margin:10px 0;
    }
    .a{
            float: right;
    margin-bottom: 30px;    
    }
</style>