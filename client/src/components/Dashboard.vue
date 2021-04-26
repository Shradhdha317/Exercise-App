<template>
<div>
<div class="cy_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1>Dashboard / Activity</h1>
                </div>
            </div>
        </div>
</div>
<div class="cy_cart_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                 <div style="display: table;width: 100%;" class="row">
                    <div style="float:left;" class="coupon">
                        <h2>Activity History</h2>
                        <div class="message">
                            <h5>{{message}}</h5>
                        </div>
                    </div>
                    <div style="float:right;" class="coupon">
                        <a href="#activity_form" data-toggle="modal" class="btn btn-primary">Add Activity</a>
                    </div>
                 </div>
                    <br/>
                    <div class="cy_cart_box woocommerce">
                        <table class="shop_table shop_table_responsive cart table-stripped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Activity Name</th>
                                    <th>Description</th>
                                    <th>Place</th>
                                    <th>Activity Type</th>
                                    <th class="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(p, i) in activitylist" :key="i">
                                    <td style="height: 100px; width: 100px"><a href="#"><img :src="getImgUrl(p.file)" alt="cart thumbnail" class="img-fluid"></a></td>
                                    <td>{{p.activity_name}}</td>
                                    <td>{{p.activity_desc}}</td>
                                    <td>{{p.activity_place}}</td>
                                    <td>{{p.activity_type}}</td>
                                    <td class="product-remove"><a style="color:red !important;" @click.prevent="Ldelete(p.activity_id)" href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="cy_cart_sidebar">
                        <div class="coupon">
                            <h2>My Profile</h2>
                        </div>
                        <div class="cart-collaterals">
                            <div class="cart_totals">
                                <h2>User Details</h2>
                                <table class="shop_table shop_table_responsive">
                                    <tbody>
                                     <tr class="cart-shipping">
                                            <td>Fullname</td>
                                            <td>{{Session.userData.fname}}</td>
                                        </tr>
                                        <tr class="cart-subtotal">
                                            <td>Email</td>
                                            <td>{{Session.userData.email}}</td>
                                        </tr>
                                        <tr class="cart-shipping">
                                            <td>Mobile Number</td>
                                            <td>{{Session.userData.phone}}</td>
                                        </tr>
                                       
                                    </tbody>
                                    <tfoot>
                                       
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div class="modal" id="activity_form">
        <div class="cy_signup">
            <div class="row">
               
                <div class="col-lg-12 col-md-12">
                    <div class="cy_sign_form">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>Add Your Activity</h1>
                        
                        <form enctype="multipart/form-data" @submit.prevent="onSubmit">
                            <div class="form-group">
                                <select  v-model="activity_type" class="form-control">
                                    <option value=''>--SELECT ACTIVITY TYPE--</option>
                                    <option value="public">public</option>
                                    <option value="private">private</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input  type="text" v-model="activity_name" placeholder="Activity Name" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="file" ref="file" accept="image/*" class="form-control" @change="uploadFile">
                            </div>
                            <div class="form-group">
                                <textarea v-model="activity_desc" placeholder="Activity Description" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <input v-model="activity_place" type="text" placeholder="Activity Place" class="form-control">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success btn-block btn-lg">Add Activity</button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script src="js/jquery.js"></script>
<script>
import Session from "../models/Session";
import axios from 'axios';
import { api } from "../models/allFetch";
export const API_ROOT = process.env.VUE_APP_API_ROOT;
export default {
  name: 'Dashboard',
  components: {
    
  },
  data() {
    return {
      Session,
      file:"",
      message:"",
      activity_name:'',
      activity_type:'',
      activity_desc:'',
      activity_place:'',
      activitylist: []
    }
},
 mounted() {
     this.getActivity();   
    },
  methods: {
      Ldelete(id)
      {
        api("activtyStore",{id:id},'DELETE');
        this.getActivity();
        this.message = "successfully removed!!"
      },
    getImgUrl(value) {
        const url = 'http://localhost:3000/uploads/'+value;
        return url;
    },
    getActivity()
    {
        (async ()=>{
            this.activitylist = await api("activtyStore/getActivityuserwise",{id:this.Session.userData.id});
        })()
    },
    uploadFile(){
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      const file = this.$refs.file.files[0];
      this.file = file;
      if(!allowedTypes.includes(file.type)){
        this.message = "Filetype is wrong!!"
      }
      if(file.size>500000){
        this.message = 'Too large, max size allowed is 500kb'
      }
    },
    async onSubmit(){
      const formData = new FormData();
      formData.append('file',this.file);
       formData.append('activity_type',this.activity_type);
      formData.append('activity_name',this.activity_name);
      formData.append('activity_desc',this.activity_desc);
      formData.append('activity_place',this.activity_place);
      formData.append('id',this.Session.userData.id);
      
      try{
       const aa = await axios.post(API_ROOT+'activtyStore',formData, {
        headers: {
            Authorization: 'Bearer ' + this.Session.token,
        }
        });
      
        if(aa != '')
        {
            this.message = 'Activity Uploaded!!'
        }
        else if(aa.msg != '')
        {
            this.message = aa.msg;
        }
        else{
            this.message = 'Activity Not Uploaded!!'
        }
        this.getActivity();
        $('#activity_form').modal('hide');
      }
      catch(err){
        console.log(err);
        this.message = err.response.data.error
      }
    }
  },
}
</script>
<style>

.product-remove a{
     color:#d61111 !important;
}
</style>