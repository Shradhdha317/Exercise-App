<template>
<div>
<div class="cy_top_wrapper">
    <div class="cy_top_info">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="cy_top_detail">
                        <ul>
                            <li><a href="#">EMAIL: patels18@hawkmail.newpaltz.edu</a></li>
                            <li>PHONE: 8454199458</li>
                            
                            <li v-if="!Session.userData">
                            <ul>
                                <li><a href="#signup" data-toggle="modal">Sign Up</a></li>
                                <li><a href="#signin" data-toggle="modal">Sign In</a></li>
                            </ul>
                            </li>
                            <li v-else>
                            <ul>
                                <li class="dropdown" @click="logout">
                                <span>{{Session.userData.fname}}</span>
                                <a>LogOut</a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 <div v-if="!Session.userData" class="cy_sign_wrapper">
        <h2 class="signin"><i class="fa fa-sign-in" aria-hidden="true"></i><a href="#signin" data-toggle="modal">Sign In</a></h2>
        <h2 class="signup"><i class="fa fa-user-plus" aria-hidden="true"></i><a href="#signup" data-toggle="modal">Sign Up</a></h2>
    </div>
    <!-- for sign in -->
    <div class="modal" id="signin">
        <div class="cy_signin">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_img">
                        <img src="images/popup.jpg" alt="popup" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_form">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>Sign In</h1>
                       <form @submit.prevent="signin">
                            <input v-model="username" type="text" placeholder="Email" class="form-control">
                        
                            <input v-model="pass" type="password" placeholder="Password" class="form-control">
                            <button class="cy_button">login</button>
                         </form>
                        <p>Dont Have An Account? <a href="#signup" data-toggle="modal" class="cy_modal">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- for sign up -->
    <div class="modal" id="signup">
        <div class="cy_signup">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_img">
                        <img src="images/popup.jpg" alt="popup" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_form">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>Sign up</h1>
                         <form id="form" @submit.prevent="signup">
                         <input v-model="fname" type="text" placeholder="Fullname" class="form-control">
                            <input v-model="email" type="text" placeholder="Email" class="form-control">
                            <input v-model="phone" type="text" placeholder="Phone" class="form-control">
                            <input v-model="password" type="password" placeholder="Password" class="form-control">
                            <button class="cy_button">register</button>
                         </form>
                        <p>Already Have An Account? <a class="cy_modal" href="#signin" data-toggle="modal">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="cy_menu_wrapper">
    <div class="cy_logo_box">
        <h1 class="cy_heading">Fitness Spire</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <button class="cy_menu_btn">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div class="cy_menu">
                    <nav>
                    
                        <ul>
                            <li>
                            <router-link to="/" class="navbar-item">
                              Home
                            </router-link>
                            </li>
                             <li>
                            <router-link to="/admin" class="navbar-item">
                              Admin
                            </router-link>
                            </li>
                            <li v-if="Session.userData">
                            <router-link to="/dashboard" class="navbar-item">
                              Dashboard
                            </router-link>
                            </li>
                            <li v-if="Session.userData">
                            <router-link to="/exercise" class="navbar-item">
                              Exercise Log
                            </router-link>
                            </li>
                            <li v-if="Session.userData">
                            <router-link to="/friends" class="navbar-item">
                              My Friends
                            </router-link>
                            </li>
                        </ul>
                  
                    </nav>
                </div>
                <div class="cy_search">
                    <a href="#" class="search_open"><i class="fa fa-search"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="cy_search_form">
    <button class="search_close"><i class="fa fa-times"></i></button>
    <div class="cy_search_input">
        <input type="search" placeholder="search">
        <i class="fa fa-search"></i>
    </div>
</div>
</div>
</template>
<script src="js/jquery.js"></script>
<script>
import Vue from "vue";
import Session, { userLogin, userLogout,userStore } from "../models/Session";

export default Vue.extend({
    data: ()=> ({
        Session,
        email:'',
        phone:'',
        password:'',
        username:'',
        fname:'',
        pass:'',
        user:[],
    }),
    methods: {
        signup(){
           var v = {'fname':this.fname,'email':this.email,'phone':this.phone,'password':this.password};
            this.user.push(v);
            this.fname = '';
            this.email = '';
            this.phone = '';
            this.password = '';
            userStore(v);
            alert('Successfully Registered!');
        },
        signin(){
           var status = 0; 
           var phn = 0;
           var fnam = '';
           for(var i=0;i<this.user.length;i++){
            if(this.username == this.user[i].email && this.pass == this.user[i].password)
            {
              phn = this.user[i].phone;
              fnam = this.user[i].fname;
              status = 1;
              break;
            }
           }
           if(status == 1)
           {
             alert('successfully Login!');
             userLogin(phn,this.username,fnam,this.pass);
             $('#signin').modal('hide');
           }
           else{
             alert('Invalid Username or Password!');
           }
        },
        logout(){
            alert('successfully Logout!');
            userLogout();
        }
    }
})
</script>
<s>
li{
    cursor:pointer;
}
</s>
