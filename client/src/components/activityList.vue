<template>
<div>
<!-- Page container -->
<div class="page-container" style="min-height: 611px;    margin-top: 5%;">

  <!-- Page content -->
  <div class="page-content">

    <!-- Main sidebar -->
    <sidebar/>
    <!-- /main sidebar -->
    <!-- Main content -->
    <div class="content-wrapper">
      <!-- Page header -->
      <div class="content">
    <table class="table table-stripped">
        <thead class="thead-dark">
            <tr>
                <th>Image</th>
                <th>Username</th>
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
                <td>{{p.username}}</td>
                <td>{{p.activity_name}}</td>               
                <td>{{p.activity_desc}}</td>
                <td>{{p.activity_place}}</td>
                <td>{{p.activity_type}}</td>
                <td class="product-remove"><a @click.prevent="Ldelete(p.activity_id)" href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
    <!-- /content area -->

  </div>
  <!-- /main content -->

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
        activitylist: []
    }),
    mounted() {
         this.getActivity();   
    },
    components: {
        
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
                this.activitylist = await api("activtyStore/getActivityadmin");
            })()
        }
    }
})
</script>
