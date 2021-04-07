<template>
  <div id="app">
  <headerView/>
     <router-view/>
    <footerView/>
  </div>
</template>

<script>
import headerView from './views/headerView.vue';
import footerView from './views/footerView.vue';

export default {
  name: 'App',
  components: {
    headerView,
    footerView
  }
}
</script>
