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
      
       <tbody>        
         <tr>
            <td>Users::</td>
            <td>
              <advanced-search
                v-model="model"
                :options="user_options"
                >
                </advanced-search>
            </td>
            
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
<style src="vue-advanced-search/dist/AdvancedSearch.css"></style>
<script>
import Vue from "vue";
import axios from 'axios';
export const API_ROOT = process.env.VUE_APP_API_ROOT;
import AdvancedSearch from 'vue-advanced-search';
import { api } from "../models/allFetch";
export default Vue.extend({
    components: { AdvancedSearch },
   data () {
      return {
        model: null,
        user_options: [
        ]
      }
   },
   mounted() {
         (async ()=>{
                this.user_options = await api("selectvue");
            })()
    },
   methods: {
      fetchOptions: function(search){
          alert('a');
        var el = this;
        axios.get(API_ROOT+'selectvue/', {
           params: {
              search: search, 
           }
        })
        .then(function (response) {
          el.user_options = response; 
        });
      },
      selectedOption: function(value){
           alert('a');
         console.log("value : " + value);
      }
   }
});
</script>
