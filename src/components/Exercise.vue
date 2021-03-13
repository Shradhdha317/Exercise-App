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
                            <img :src="p.src" alt="" class="img-fluid" />
                            <div class="cy_event_detail">
                                <div class="cy_event_time">
                                    <ul>
                                        <li><i><img src="images/svg/clock.svg" alt="event time"></i> {{p.time}}</li>
                                        
                                    </ul>
                                </div>
                                <div class="cy_event_date">
                                    <span class="ev_date">{{p.date}}</span>
                                    <span class="ev_yr">2021</span>
                                </div>
                            </div>
                        </div>
                        <div class="cy_event_data">
                            <h2><a href="#">{{p.title}}</a></h2>
                            <p>{{p.description}}</p>
                            <a href="#" class="cy_button">Share With Friends</a>
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
import {GetExerciseLog} from "../models/Exercise";
export default Vue.extend({
    data: ()=> ({
        Session,
        exercise: []
    }),
    mounted() {
        this.exercise = GetExerciseLog();
    },
    components: {
        
    },
    methods: {
        
    }
})
</script>
