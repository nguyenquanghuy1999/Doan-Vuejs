<template>
   <section id="body">
        <div class="container">
            <div class="row">
                <div id="sidebar" class="col-md-3" >
                    <nav id="menu">
                        <ul style="font-weight: bold;">
                            <li class="menu-item" >Danh mục sản phẩm</li>
                            <li class="menu-item" ><a href="">Macbook</a></li>
                            <li class="menu-item" ><a href="">Iphone</a></li>
                            <li class="menu-item" ><a href="">Ipad</a></li>
                            <li class="menu-item" ><a href="">Watch</a></li>        
                        </ul>     
                    </nav>
                        <div id="img-quangcao">
                            <img src="@/assets/image/quangcao1.jpg" style="width: 100% ;height: 22em; margin-top: 1em;">
                            <img src="@/assets/image/quangcao2.jpg" style="width: 100% ;height: 22em;">
                            <img src="@/assets/image/quangcao3.jpg" style="width: 100% ;height: 22em;">
                            <img src="@/assets/image/slide-3.png" style="width: 100% ;height: 22em;">
                        </div>
                </div>
                <div id="main" class="col-md-9">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="@/assets/image/banner1.jpg" alt="First slide" style="height:25em;">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="@/assets/image/banner2.jpg" alt="Second slide" style="height:25em;">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="@/assets/image/banner3.jpg" alt="Third slide" style="height:25em;" >
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="title-product">
                        <h3>Các sản phẩm của chúng tôi</h3>
                    </div>
                    <div class="container" style="padding-top: 1%;">
                        <div class="row">
                            <div class="product-item col-md-3 col-sm-6 col-xs-12" v-for="product in productList" :key="product.id">
                                <Product :name="product.name" :price="product.price" :image="product.image"></Product>
                                <div class="marsk">
                                    <router-link :to="'/detail/' + product.id">Xem chi tiết {{idProduct}}</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import Product from './Product'
import Pagination from './Pagination'


export default {
    components:{
        Product,
        Pagination
    },
     data() {
        return {
            productList:[],
            productId: this.$route.params.id
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
  }


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
</style>

