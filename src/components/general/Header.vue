<template>
   <header id="header" style="background-color: black;">
        <div class="container">
            <div class="row-logo">
                <div id="logo" class="col-md-3 col-sm-12 col-xs-12">
                        <router-link to="/" style="color: white;font-family: cursive;font-weight: bold; font-size:25px; text-decoration: none;">
                        <img src="@/assets/image/logo.jpg" style="width:38%;"/>Apple Store
                        </router-link>
                </div>
                <div id="search" class="col-md-6 col-sm-12 col-xs-12">
                    <form role="search" method="GET" action="/search" class="full-width" style="margin-left: 80px;">
                        <input type="text" class="form-control" name="result" placeholder="Nhập từ khóa ..."  v-model="search" style="color:black"> 
                        <router-link type="button" v-bind:to="'/search'">
                            <button type="button" class="btn btn-defalt" style="margin-top:28px; ">
                                <!-- <i class="fa fa-search" style="margin-left: -3em;"></i> -->
                            </button>
                        </router-link>
                    </form>
                </div>
                <div id="cart" class="col-md-2 col-sm-12 col-xs-12" style="margin-left: 87px;">
                    <a class="display" href="#">
                        <router-link to="/cart">
                        <img src="@/assets/image/icon-cart.png">
                        <a style="margin-left: -22%;color: black;">{{GET_CART.length}}</a>
                        </router-link>
                    </a>
                </div>
            </div>   
        </div>
    </header><!-- /header -->
</template>

<script>
import {GET_CART} from '../'
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            search: "",
            productId: this.$route.params.id,
        }
    },
    computed: {
    ...mapGetters({
      GET_CART
    })
  },
 
    
}
    

</script>

<style>

</style>