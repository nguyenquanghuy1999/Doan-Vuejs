<template>
    <div>
        <Header></Header>
            <div>
                <slot/>
            </div>
        <Footer></Footer>
    </div>
  
</template>

<script>
import Header from '../general/Header'
import Footer from '../general/Footer'
import { SET_CART } from "../constants/mutation-type";

export default {
    name: 'Master',
    components: {
        Header,
        Footer
    },
      beforeCreate() {
    const cartSaved = window.localStorage.getItem("cart");
    if (cartSaved) {
      this.$store.commit(SET_CART, JSON.parse(cartSaved));
    }
  },
  

}
</script>
