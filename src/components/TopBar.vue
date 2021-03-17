<template>
  <div class="d-flex col-12 top-bar">
    <p class="font-weight-bold text-center">{{ title }}</p>
    <button
      type="button"
      v-on:click="handleLogout"
      class="ml-auto font-weight-bold btn btn-dark"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "teste",
  props: {
    title: String,
    subtitle: String,
  },
  methods: {
    handleLogout: async function(e) {
      e.preventDefault();
      localStorage.removeItem("crud-token");
      this.$router.push("login");
    },
  },
};
</script>

<style scoped>
.top-bar {
  background-color: #34495e;
  color: #41b883;
  padding: 10px !important;
}
</style>
