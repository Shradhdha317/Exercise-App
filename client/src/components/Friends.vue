<template>
<div>
<div class="cy_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1>Friends List</h1>
                </div>
            </div>
        </div>
</div>
<div class="cy_event_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1 class="cy_heading">Un Friends List</h1>
                </div>
            </div>
            <div style="margin-top:2%;" class="row">
            <div class="col-lg-12 col-md-12">
                    <div class="cy_cart_box woocommerce">
                        <table class="shop_table shop_table_responsive cart table-stripped">
                            <thead>
                                <tr>
                                    <th class="product-thumbnail">Fullname</th>
                                    <th class="product-name">Phone Number</th>
                                    <th class="product-price">Email</th>
                                    <th class="product-remove">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(p, i) in unfriends" :key="i">
                                    <td class="product-name">{{p.fname}}</td>
                                    <td class="product-name">{{p.phone}}</td>
                                    <td class="product-price">{{p.email}}</td>
                                    <td><a class="btn btn-success" @click.prevent="sendRequest(p.id)"> Send Friend Request </a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1 class="cy_heading">Current Friends List</h1>
                </div>
            </div>
        <div style="margin-top:2%;" class="row">
            <div class="col-lg-12 col-md-12">
                    <div class="cy_cart_box woocommerce">
                        <table class="shop_table shop_table_responsive cart table-stripped">
                            <thead>
                                <tr>
                                    <th class="product-thumbnail">Fullname</th>
                                    <th class="product-name">Phone Number</th>
                                    <th class="product-price">Email</th>
                                    <th class="product-remove">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(p, i) in friends" :key="i">
                                    <td class="product-name">{{p.fname}}</td>
                                    <td class="product-name">{{p.phone}}</td>
                                    <td class="product-price">{{p.email}}</td>
                                    <td><a @click="getUrl(p.id)" class="btn btn-primary"> Show Activity </a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1 class="cy_heading"> Friend Request List</h1>
                </div>
            </div>
        <div style="margin-top:2%;" class="row">
            <div class="col-lg-12 col-md-12">
                    <div class="cy_cart_box woocommerce">
                        <table class="shop_table shop_table_responsive cart table-stripped">
                            <thead>
                                <tr>
                                    <th class="product-thumbnail">Fullname</th>
                                    <th class="product-name">Phone Number</th>
                                    <th class="product-price">Email</th>
                                    <th class="product-remove">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(p, i) in requestlist" :key="i">
                                    <td class="product-name">{{p.fname}}</td>
                                    <td class="product-name">{{p.phone}}</td>
                                    <td class="product-price">{{p.email}}</td>
                                    <td><a class="btn btn-primary" @click.prevent="acceptRequest(p.id)"> Accept Request</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import Vue from "vue";
import Session from "../models/Session";
import { api } from "../models/allFetch";
export default Vue.extend({
    data: ()=> ({
        Session,
        friends: [],
        unfriends:[],
        requestlist:[],
    }),
    mounted() {
       this.friendL();
       this.unfriendL();
       this.requestshow();
    },
    components: {
        
    },
    methods: {
        getUrl(id){
            this.$router.push('/showActivity/'+id+'');
        },
        friendL()
        {
            (async ()=>{
                const {activeFriend} = await api("friendList/activefriendList",{id:this.Session.userData.id});
                 this.friends=activeFriend; 
            })()
        },
         unfriendL()
        {
            (async ()=>{
                const {activeFriend} = await api("friendList/deactivefriendList",{id:this.Session.userData.id});
                this.unfriends=activeFriend; 
            })()
        },
        requestshow()
        {
             (async ()=>{
                const {activeFriend} = await api("friendList/showRequest",{id:this.Session.userData.id});
                this.requestlist=activeFriend; 
            })()
        },
        acceptRequest(id)
        {
            (async ()=>{
                const {d} = await api("friendList/acceptRequest",{id:id,user_id:this.Session.userData.id});
                if(d == 1)
                {
                    alert('Your Friend Request Has been Successfully Accepted!');
                    this.requestshow();
                    this.unfriendL();
                    this.friendL();
                }
                else{
                    alert('Already Accepted Request To This Friend!');
                }
            })()
        },
        sendRequest(id)
        {
            (async ()=>{
                const {res} = await api("friendList/sendRequest",{id:id,user_id:this.Session.userData.id});
                if(res == 1)
                {
                    alert('Your Friend Request Has been Successfully Send!');
                
                }
                else{
                    alert('Already Sent Request To This Friend!');
                }
            })()
        }
    }
})
</script>
<style>
   .woocommerce table.shop_table tbody tr td a{
    color:#fff !important;
    font-size:13px;
    }
</style>
