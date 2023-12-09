import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomeView from "./views/Home.vue";
import FamilyView from "./views/Family.vue";
import AboutView from "./views/About.vue";
import RecipeView from "./views/Recipe.vue";
import AuthorView from "./views/Author.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/history",
      name: "History",
      component: FamilyView
    },
    {
      path: "/about",
      name: "About",
      component: AboutView
    },
    {
      path: "/recipe/:recipeId",
      name: "Recipe",
      component: RecipeView,
    },
    {
      path: "/author/:authorId",
      name: "Author",
      component: AuthorView,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
