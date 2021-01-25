<template>
    <Master>
        <section id="body">
        <div class="container">
            <div class="row">
                <div id="sidebar" class="col-md-3" >
                    <nav id="menu">
                           <ul style="font-weight: bold;">
                            <li class="menu-item" >Danh mục sản phẩm</li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/1">Macbook</a></li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/2">Iphone</a></li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/3">Ipad</a></li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/4">Watch</a></li>        
                        </ul>     
                    </nav>
                        <div id="img-quangcao">
                            <img src="@/assets/image/quangcao1.jpg" style="width: 100% ;height: 22em;">
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
                    <div id="wrap-inner" class="col-md-12" > 
                        <div class="products">
                           <h3 style="text-align: center;border-style: solid;background-color: black;padding-top: 1%;padding-bottom: 1%;">{{types.name}}</h3>
                            <div class="products-list row">
                                <div class="product-item col-md-3 col-sm-6 col-xs-12" v-for="type in types.products" :key="type.id">
                                    <a href="#"><img :src="require(`@/assets/upload/${type.image}`)" style="height: 100px;" class="img-thumbnail"></a>
                                    <p><a href="#">{{type.name}}</a></p>
                                    <p class="price">{{ formatPrice(type.price) }}</p>
                                     <div class="marsk">
                                          <router-link :to="'/detail/' + type.id">Xem chi tiết {{idProduct}}</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </Master>
</template>

<script>

import axios from 'axios'
import Master from '../layouts/Master.vue'


export default {
  components: { Master},
    props:{
        id: Number,
        name: String,
    },
    data(){
        return{
            types: [],
            productId: this.$route.params.id,
            product:[],
            
        }
        
    },
    methods:{
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }   
    },
     created() {
    axios.get(`http://127.0.0.1:8000/api/types/` + this.productId)
    .then(response => {
      this.types = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  },
    
  

}
</script>

<style>

</style>