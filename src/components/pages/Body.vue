<template>
    <Slide>
      <div class="title-product">
        <h3>Các sản phẩm của chúng tôi</h3>
      </div>
      <div class="container" style="padding-top: 1%;">
        <div class="row">
          <div class="product-item col-md-3 col-sm-6 col-xs-12" v-for="product in productList" :key="product.id">
            <Product :name="product.name" :price="product.price" :image="product.image"></Product>
              <div class="marsk">
                <router-link :to="'/detail/' + product.id">Xem chi tiết</router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <Pagination></Pagination>
      </div>          
    </Slide>
</template>

<script>
import axios from 'axios'
import Product from './Product'
import Pagination from './Pagination'
import Slide from '../layouts/Slide'

export default {
    components:{
        Product,
        Pagination,
        Slide
    },
     data() {
        return {
            productList:[],
            types:[],
        }
    },
    created() {
    axios.get(`http://127.0.0.1:8000/api/product`)
    .then(response => {
      this.productList = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  
}
    
</script>

<style scoped>
.title-product{
    border-style: groove;
    text-align: center;
    margin-top: 1%;
    padding-top: 5px;
    background-color: aliceblue;
    color: coral;
    font-style: italic;
    font-family: auto;
}
.pagination{
  margin-left: 7em;
}
</style>

