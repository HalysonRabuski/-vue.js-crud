<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.name">
          {{ column.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <td v-for="element in columns" :key="element.name">
          <button
            class="btn btn-info"
            v-if="element.onAction"
            v-on:click="element.onAction(item)"
          >
            Comprar
          </button>
          <div v-else-if="element.subselector !== undefined">
            <div v-for="unit in item[element.selector]" :key="unit.id">
              <p>{{ unit.name }}aaa</p>
            </div>
          </div>
          <p v-else>{{ item[element.selector] }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "teste",
  props: {
    columns: Array,
    data: Array,
  },
};
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #34495e;
  color: white;
}
</style>
