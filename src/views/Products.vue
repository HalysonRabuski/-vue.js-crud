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
          name: "Nome",
          selector: "name",
        },
        {
          name: "Descrição",
          selector: "description",
        },
        {
          name: "Ações",
          onAction: (row) => {
            this.handleCart(row);
          },
        },
      ],
      data: [],
    };
  },
  components: {
    Table,
  },
  props: { title: String, subtitle: String },
  methods: {
    handleCart: async function(item) {
      let prdts = [];
      if (localStorage.getItem("crud-products")) {
        prdts = JSON.parse(localStorage.getItem("crud-products"));
      }

      const filter = await prdts.filter((a) => a.name === item.name);

      if (filter.length > 0) {
        alert("O produto já se encontra no carrinho");
      } else {
        prdts.push(item);
        localStorage.setItem("crud-products", JSON.stringify(prdts));

        alert("Produto adicionado ao carrinho com sucesso!");
      }
    },
  },
  async created() {
    const response = await axios.get("http://localhost:3333/products", {
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
