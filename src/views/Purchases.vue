<template>
  <div class="products">
    <h4 class="mt-4 title">{{ title }}</h4>
    <p class="ml-3 subtitle">{{ subtitle }}</p>
    <Table :columns="columns" :data="data" />
  </div>
</template>

<script>
import Table from "../components/Table.vue";
import axios from "axios";

export default {
  name: "Products",
  data: function() {
    return {
      columns: [
        {
          name: "Código",
          selector: "id",
        },
        {
          name: "Produtos",
          selector: "products",
          subselector: "name",
        },
      ],
      data: [],
    };
  },
  components: {
    Table,
  },
  props: { title: String, subtitle: String },
  async created() {
    const response = await axios.get("http://localhost:3333/purchases", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("crud-token")}`,
      },
    });
    this.data = response.data;
  },
};
</script>

<style scoped>
.title {
  color: #34495e;
}

.subtitle {
  color: #41b883;
}
</style>
