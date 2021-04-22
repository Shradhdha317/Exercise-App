<template>
<div class="sidebar sidebar-main">
      <div class="sidebar-content">

        <!-- User menu -->
        <div class="sidebar-user">
          <div class="category-content">
            <div class="media">
             
              <div class="media-body">
                <span class="media-heading text-semibold">
                  Admin
                </span>
                <div class="text-size-mini text-muted">
                  <i class="icon-pin text-size-small"></i> &nbsp;
                </div>
              </div>

            </div>
          </div>
        </div>
        <!-- /user menu -->


        <!-- Main navigation -->
        <div class="sidebar-category sidebar-category-visible">
          <div class="category-content no-padding">
            <ul class="navigation navigation-main navigation-accordion">
              <!-- Main -->
              <li class="navigation-header"><span>Main</span> <i class="icon-menu" title="Main pages"></i></li>
             
              <li>
                <router-link to="/activityList" class="navbar-item">
                  Activity List
                </router-link>
              </li>
               <li>
               <router-link to="/userList" class="navbar-item">
                  User List
               </router-link>
              </li>
               <li>
               <router-link to="/exerciseLog" class="navbar-item">
                  Exercise Log 
               </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- /main navigation -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: {
    msg: String
  },
   methods: {
     
   }
}
</script>

