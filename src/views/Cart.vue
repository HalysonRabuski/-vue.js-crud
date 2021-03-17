<template>
  <div>
    <h4 class="mt-4 title">{{ title }}</h4>
    <p class="ml-3 subtitle">{{ subtitle }}</p>
    <div v-if="data.length > 0">
      <Table :columns="columns" :data="data" />
      <button
        class="btn btn-danger mt-3"
        type="button"
        v-on:click="handleErase()"
      >
        Limpar Carrinho
      </button>
      <button
        class="btn btn-success float-right mt-3"
        type="button"
        v-on:click="handlePurchase()"
      >
        Comprar
      </button>
    </div>
    <p v-else>Nenhum produto no carrinho!</p>
  </div>
</template>

<script>
import Table from "../components/Table.vue";
import axios from "axios";

export default {
  name: "teste",
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
      ],
      data: JSON.parse(localStorage.getItem("crud-products")) || [],
    };
  },
  components: {
    Table,
  },
  props: { title: String, subtitle: String },
  methods: {
    handlePurchase: async function() {
      try {
        await axios.post(
          "http://localhost:3333/purchases",
          {
            products: this.data,
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("crud-token")}`,
            },
          }
        );
      } catch (error) {
        alert("Ocorreu algum erro ao realizar a compra");
      }
      localStorage.removeItem("crud-products");
      this.data = [];
      alert("Compra efetuada com sucesso!");

      //   this.$router.push("/");
    },
    handleErase: async function() {
      localStorage.removeItem("crud-products");
      this.data = [];
    },
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
