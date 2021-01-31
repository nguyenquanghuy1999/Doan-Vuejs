import Vue from 'vue'
import Vuex from 'vuex'
import {GET_CART, SET_CART, INCREMENT_QTY, DECREMENT_QTY, CART_TOTAL, REMOVE_ITEM} from '../constants/mutation-type';


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartItem: [],
    cart_total: 0
  },
  getters: {

      [GET_CART](state){
        return state.cartItem;
      },
      [CART_TOTAL](state){
        state.cart_total = 0;
        for (let index = 0; index < state.cartItem.length; index++) {
          state.cart_total += state.cartItem[index].price * state.cartItem[index].qty;
        }
        return state.cart_total;
      }
  },
  mutations: {
    [SET_CART](state, cartItem) {
      state.cartItem = cartItem
    },
    [INCREMENT_QTY](state, id){
      const existingProduct = state.cartItem.find(product => product.id === id);
      existingProduct.qty += 1;
      const parsed = JSON.stringify(state.cartItem);
      localStorage.setItem('cart', parsed);
    },
    [DECREMENT_QTY](state, id){
      const existingProduct = state.cartItem.find(product => product.id === id);
      existingProduct.qty -= 1;
      const parsed = JSON.stringify(state.cartItem);
      localStorage.setItem('cart', parsed);
    },
    [REMOVE_ITEM](state, index){
      state.cartItem.splice(index,1);
      const parsed = JSON.stringify(state.cartItem);
      localStorage.setItem('cart', parsed);
    },
    addToCart(state, item){
        Object.assign(item, {qty: 1});
        if(state.cartItem.find(itemIncart => itemIncart.id === item.id)){
          alert('San Pham Nay Da Co Trong Gio Hang');
        } else {
            state.cartItem.push(item)
            const parsed = JSON.stringify(state.cartItem);
            localStorage.setItem('cart', parsed)

        }

    }
    },
  actions: {
  },
});

export default store;
