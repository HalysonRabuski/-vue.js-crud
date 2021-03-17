import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Template from "../components/Template.vue";
import LogIn from "../views/LogIn.vue";
import Products from "../views/Products.vue";
import Purchases from "../views/Purchases.vue";
import Carrinho from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Template,
    children: [
      {
        title: "Home",
        path: "/",
        name: "dashboard",
        component: Home,
        meta: { requiresAuth: true },
      },
      {
        path: "/compras",
        name: "Compras",
        props: {
          title: "Compras",
          subtitle: "Tabela com o histórico de compras do usuário no sistema",
        },
        component: Purchases,
        meta: { requiresAuth: true },
      },
      {
        path: "/carrinho",
        name: "Carrinho",
        props: {
          title: "Carrinho",
          subtitle: "Tabela com os produtos cadastrados no carrinho",
        },
        component: Carrinho,
        meta: { requiresAuth: true },
      },
      {
        path: "/produtos",
        name: "Produtos",
        props: {
          title: "Produtos",
          subtitle: "Tabela com os produtos cadastrados no sistema",
        },
        component: Products,
        meta: { requiresAuth: true },
      },
    ],
  },
  { path: "/login", component: LogIn },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (
      localStorage.getItem("crud-token") == null ||
      localStorage.getItem("crud-token") == undefined
    ) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
