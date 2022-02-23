import IndexPage from "pages/Index.vue"
import MainLayout from "layouts/MainLayout.vue"
import Login from "pages/Login.vue"
import auth from "../middleware/logged_in"

const routes = [
  {
    path: "/",
    component: MainLayout,
    meta:{middleware:auth},
    children: [
      { path: "",
       component:IndexPage,
       
      }],
  },
  {
    path:"/login",
    component:Login,
    name:"LogIn"
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
