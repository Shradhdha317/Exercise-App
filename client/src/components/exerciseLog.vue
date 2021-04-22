<template>
<div>
<!-- Page container -->
<div class="page-container" style="min-height: 611px;    margin-top: 6%;">

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
                <th>Exercise Title</th>
                <th>Description</th>
                <th>Exercise Time</th>
                <th>Exercise Date</th>
                <th class="product-remove">Remove</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(p, i) in exerciselist" :key="i">
                <td style="height: 100px; width: 100px"><a href="#"><img :src="getImgUrl(p.file)" alt="cart thumbnail" class="img-fluid"></a></td>
                <td>{{p.title}}</td>
                <td>{{p.description}}</td>               
                <td>{{p.time}}</td>
                <td>{{p.date}}</td>
                <td class="product-remove"><a @click.prevent="Ldelete(p.id)" href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
            </tr>
        </tbody>
    </table>
    <div style="float:right;" class="coupon">
        <a href="#exercise_form" data-toggle="modal" class="btn btn-primary">Add Exercise Log</a>
    </div>
      <div class="modal" id="exercise_form">
        <div class="cy_signup">
            <div class="row">
               
                <div class="col-lg-12 col-md-12">
                    <div class="cy_sign_form">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>Add Exercise Log</h1>
                        <div class="message">
                            <h5>{{message}}</h5>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="onSubmit">
                            <div class="form-group">
                                <input  type="text" v-model="title" placeholder="Exercise Log Title" class="form-control">
                            </div>
                            <div class="form-group">
                                <input  type="date" v-model="date" placeholder="Exercise Date" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="file" ref="file" accept="image/*" class="form-control" @change="uploadFile">
                            </div>
                            <div class="form-group">
                                <textarea v-model="description" placeholder="Exercise Description" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <input v-model="time" type="time" placeholder="Exercise Time" class="form-control">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-success btn-block btn-lg">Add Exercise</button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    </div>
    <!-- /content area -->

  </div>
  <!-- /main content -->

</div>
</div>
</template>

<script src="js/jquery.js"></script>
<script>
import Vue from "vue";
import Session from "../models/Session";
import axios from 'axios';
import { api } from "../models/allFetch";
export const API_ROOT = process.env.VUE_APP_API_ROOT;
export default Vue.extend({
    data: ()=> ({
        Session,
        file:"",
        message:"",
        title:'',
        description:'',
        date:'',
        time:'',
        exerciselist: []
    }),
    mounted() {
         this.getexerciselist();   
    },
    components: {
        
    },
    methods: {
        Ldelete(id)
      {
        api("exerciseStore",{id:id},'DELETE');
        this.getexerciselist();
        this.message = "successfully removed!!"
      },
        getImgUrl(value) {
            const url = 'http://localhost:3000/'+value;
            return url;
        },
        getexerciselist()
        {
            (async ()=>{
                this.exerciselist = await api("exerciseStore/getExercise");
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
        formData.append('title',this.title);
        formData.append('date',this.date);
        formData.append('time',this.time);
        formData.append('description',this.description);
        
        try{
        const aa = await axios.post(API_ROOT+'exerciseStore',formData, {
            headers: {
                Authorization: 'Bearer ' + this.Session.token,
            }
            });
        
            if(aa != '')
            {
                this.message = 'Exercise Log Uploaded!!'
            }
            else if(aa.msg != '')
            {
                this.message = aa.msg;
            }
            else{
                this.message = 'Exercise Log Not Uploaded!!'
            }
            this.getexerciselist();
            $('#exercise_form').modal('hide');
        }
        catch(err){
            console.log(err);
            this.message = err.response.data.error
        }
        }
    },
})
</script>
<style>
#exercise_form{
    position:fixed;
    bottom:10px;
    right:10px;
}
</style>