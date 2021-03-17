<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="produtos">
          <div>Produtos</div>
        </router-link>
      </li>
      <li>
        <router-link to="carrinho">
          <div>Carrinho</div>
        </router-link>
      </li>
      <li>
        <router-link to="compras">
          <div>Compras</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {},
};
</script>

<style scoped>
.sidebar {
  width: 12%;
  background-color: #41b883;
  margin: 0px;
  padding: 0px;
  min-height: 94vh;
  color: white;
}

.sidebar ul {
  height: 100%;
  margin: 0px;
  padding: 0px;
  text-align: center;
  justify-content: center;
  list-style-type: none;
}

.sidebar li {
  height: 5vh;
  line-height: 5vh;
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 0px;
  border-bottom: 1px solid #34495e;
}

.sidebar li a {
  color: white;
  width: 100%;
  text-decoration: none;
}

.sidebar li a:hover {
  text-decoration: none;
}

.sidebar li a div:hover {
  color: white;
  background-color: #34495e;
}
</style>
