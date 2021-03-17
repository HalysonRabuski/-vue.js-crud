<template>
  <div id="app">
    <TopBar title="Vue.js" subtitle="User" />
    <div class="d-flex">
      <SideMenu />
      <div class="component">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import SideMenu from "./SideMenu";

export default {
  name: "Template",
  props: {
    title: String,
    subtitle: String,
  },
  components: {
    TopBar,
    SideMenu,
  },
};
</script>

<style scoped>
.component {
  width: 85%;
  margin: 0 auto;
  /* justify-content: center; */
}
</style>
