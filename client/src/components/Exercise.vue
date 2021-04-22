<template>
<div>
<div class="cy_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1>Latest Exercise Logs</h1>
                </div>
            </div>
        </div>
</div>
<div class="cy_event_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1 class="cy_heading">Latest Exercise Logs</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="(p, i) in exercise" :key="i">
                    <div class="cy_event_box">
                        <div class="cy_event_img">
                            <img :src="p.file" alt="" class="img-fluid" />
                            <div class="cy_event_detail">
                                <div class="cy_event_time">
                                    <ul>
                                        <li><i><img src="images/svg/clock.svg" alt="event time"></i> {{p.time}}</li>
                                        
                                    </ul>
                                </div>
                                <div class="cy_event_date">
                                    <span class="ev_date">{{p.date}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="cy_event_data">
                            <h2><a href="#">{{p.title}}</a></h2>
                            <p>{{p.description}}</p>
                        </div>
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
     data() {
      return {
      Session,
      exercise: []
    }
    },
    mounted() {
         (async ()=>{
                this.exercise = await api("exerciseStore/getExercise");
            })()
    },
    methods: {
        getImgUrl(value) {
        const url = '../http://localhost:8080/uploads/'+value;
        return url;
        },
    }
})
</script>
