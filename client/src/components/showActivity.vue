<template>
<div>
<div class="cy_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1>Dashboard /{{uname}} Activity</h1>
                </div>
            </div>
        </div>
</div>
<div class="cy_cart_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                 <div style="display: table;width: 100%;" class="row">
                    <div style="float:left;" class="coupon">
                        <h2>{{uname}}'s Activity History</h2>
                       
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(p, i) in activitylist" :key="i">
                                    <td style="height: 100px; width: 100px"><a href="#"><img :src="getImgUrl(p.file)" alt="cart thumbnail" class="img-fluid"></a></td>
                                    <td>{{p.activity_name}}</td>
                                    <td>{{p.activity_desc}}</td>
                                    <td>{{p.activity_place}}</td>
                                    <td>{{p.activity_type}}</td>
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

<script src="js/jquery.js"></script>
<script>
import { api } from "../models/allFetch";
export default {
  name: 'Dashboard',
  components: {
    
  },
  data() {
    return {
      uname:'',
      activitylist: []
    }
},
 mounted() {
     this.getActivityUser();  
     this.userDetails(); 
    },
  methods: {
      
    getImgUrl(value) {
        const url = 'http://localhost:3000/'+value;
        return url;
    },
    getActivityUser()
    {
        (async ()=>{
            this.activitylist = await api("activtyStore/getActivityuserrelated",{id:this.$route.params.id});
        })()
    },
    userDetails(){
         (async ()=>{
            const {user} = await api("signup/getUserDetails",{id:this.$route.params.id});
            this.uname = user.fname;
        })()
    }
  },
}
</script>
<style>
.woocommerce table.shop_table tbody tr td a{
    color:#fff !important;
}
</style>