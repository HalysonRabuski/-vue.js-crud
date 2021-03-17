<template>
  <div class="container_login">
    <div class="card p-5 form-container">
      <h2 class="title mb-3">Vue.js</h2>
      <form>
        <label for="email" className="title">
          Email
          <input
            class="form-control input mb-2 col-12"
            name="email"
            v-model="email"
            type="email"
            required
            placeholder="digite o email cadastrado"
          />
        </label>
        <label for="senha" class="title">
          Senha
          <input
            class="form-control input"
            v-model="password"
            type="password"
            name="senha"
            placeholder="digite sua senha"
          />
        </label>

        <button
          type="submit"
          v-on:click="submit"
          class="btn btn-info float-right mt-3"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "teste",
  data: function() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    submit: async function(e) {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3333/auth",
        {
          email: this.email,
          password: this.password,
        },
        {}
      );
      localStorage.setItem("crud-token", response.data.token);
      console.log(this);
      this.$router.push("/");
    },
  },
  //   props: {
  //     title: String,
  //     subtitle: String,
  //   },
};
</script>

<style scoped>
.container_login {
  height: 100vh;
  max-width: 100vw;
  width: 100vw !important;
  margin: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container_login .card {
  width: 40%;
}

.container_login .input {
  width: 100%;
}

.container_login label {
  width: 100%;
}
</style>
