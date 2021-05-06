<template>
<div>
<div class="cy_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1>Dashboard / Search Textbox</h1>
                </div>
            </div>
        </div>
</div>
<div class="cy_cart_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                     <div id="app">

     <table width='100%' >
       <thead>
         <tr>
            <th width='10%'></th>
            <th width='60%'></th>
            <th width='30%'>Selected Value</th>
         </tr>
       </thead>
       <tbody>
         
         <tr>
            <td>Countries</td>
            <td>
              <v-select label="name" 
                 v-model="country" 
                 :items="country_options" 
                 @search="fetchOptions" 
                 @input="selectedOption" >
              </v-select>
            </td>
            <td align='center' v-text="country"></td>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.4.4/vue.min.js"></script>
<script src="https://unpkg.com/vuetify@0.15.7/dist/vuetify.js"></script>
<link href="https://unpkg.com/vuetify@0.15.7/dist/vuetify.min.css" rel="stylesheet"/>
<script>
import Vue from "vue";
import vSelect from 'vselect-component'
import axios from 'axios';
export const API_ROOT = process.env.VUE_APP_API_ROOT;
Vue.component("v-select", vSelect);
export default Vue.extend({
    data: ()=> ({
        
        country: 0,
        country_options: []
    }),
   methods: {
      fetchOptions: function(search){
        var el = this;
        axios.get(API_ROOT+'selectvue/', {
           params: {
              search: search, 
           }
        })
        .then(function (response) {
          el.country_options = response.data; 
        });
      },
      selectedOption: function(value){
         console.log("value : " + value);
      }
   }
});
</script>
