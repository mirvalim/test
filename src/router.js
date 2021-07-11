import VueRouter from "vue-router";
import Vue from "vue";
import HelloWorld from "./components/HelloWorld";
import loginFile from "./components/loginFile/loginFile";
import users from "./vues/Users";
import Roles from "./vues/Roles";
import TestAnswer from "./vues/TestAnswer";
import Contest from "./vues/Contest";
import TestTheme from "./vues/TestTheme";
import Test from "./vues/Test";

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
        },
        {
            path:"/roles",
            component:Roles
        },

        {
            path:"/testanswer",
            component:TestAnswer
        },
        {
            path:"/contest",
            component:Contest
        },
        {
            path:"/testtheme",
            component:TestTheme
        },
        {
            path:"/test",
            component:Test
        }
    ]
})
