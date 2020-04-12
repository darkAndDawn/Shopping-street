import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: []
    },
    mutations: {
        addCartData(state, obj) {
            console.log(obj)
            if (state.cart.length <= 0) {
                state.cart.push(obj)
                return
            }
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].iid == obj.iid) {
                    state.cart[i].count++
                    return;
                }
            }
            state.cart.push(obj)
        },
        changeCartChecked(state, id) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].iid == id) {
                    state.cart[i].checked = !state.cart[i].checked
                    return
                }
            }
        },
        changeCartAllChecked(state, bool) {
          state.cart.forEach(item => {
            item.checked = !bool
          })

            /*if (bool) {
                state.cart.forEach(item => {
                    item.checked = false
                })
            } else {
                state.cart.forEach(item => {
                    item.checked = true
                })
            }*/
        }
    },
    getters: {
        isAllActive(state) {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].checked == false) {
                    return false
                }
            }
            return true
        }
    },
    actions: {},
    modules: {}
})
