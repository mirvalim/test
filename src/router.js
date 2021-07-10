import VueRouter from "vue-router";
import Vue from "vue";
import HelloWorld from "./components/HelloWorld";
import loginFile from "./components/loginFile/loginFile";
import users from "./components/loginFile/users";

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            component:HelloWorld
        },
        {
            path:"/login",
            component:loginFile
        },
        {
            path:"/users",
            component:users
        }
    ]
})
