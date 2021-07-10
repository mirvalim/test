import vue from "vue"
import vuex from "vuex"
import VuexPersistence from "vuex-persist";
vue.use(vuex)

const store = new vuex.Store({
    state:{
        login:""
    },
    mutations:{
        setLogin(state, data){
            state.login = data
        }
    },
    plugins:[new VuexPersistence().plugin]
})

export default  store