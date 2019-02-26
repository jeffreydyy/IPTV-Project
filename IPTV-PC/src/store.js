import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        city:localStorage.city,
        cityIndex:localStorage.cityIndex,
        address:localStorage.address,
        addressIndex:localStorage.addressIndex
    },
    mutations: {
        initAddress(state,item){
            state.address = item;
            localStorage.address = item;
            localStorage.addressIndex = 0;
        },        
        changeAddress(state,item){
            state.address = item.item;
            localStorage.address = item.item;
            state.addressIndex = item.index;
            localStorage.addressIndex = item.index;             
        },
        initCity(state,item){
            state.city = item;
            localStorage.city = item;
            localStorage.cityIndex = 0;
        },        
        changeCites(state,item){
            state.city = item.item;
            localStorage.city = item.item;
            state.addressIndex = item.index;
            localStorage.cityIndex = item.index;             
        }
    } 
})