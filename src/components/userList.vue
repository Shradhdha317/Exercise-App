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
                            <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th class="product-thumbnail">Fullname</th>
                                    <th class="product-name">Phone Number</th>
                                    <th class="product-price">Email</th>
                                    <th class="product-remove">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(p, i) in friends" :key="i">
                                    <td class="product-name">{{p.fname}}</td>
                                    <td class="product-name">{{p.phone}}</td>
                                    <td class="product-price">{{p.email}}</td>
                                    <td><a class="btn btn-primary" href="#"> Show User Statistics </a></td>
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
import Session, {GetUsers} from "../models/Session";
export default Vue.extend({
    data: ()=> ({
        Session,
        friends: []
    }),
    mounted() {
        this.friends = GetUsers();
    },
    components: {
        
    },
    methods: {
        
    }
})
</script>
<style>
    .woocommerce table.shop_table tbody tr td a{
    color:#fff;
    font-size:13px;
    }
</style>
