<template>
    <section id="body" >
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
                    
                    <div id="wrap-inner" class="col-md-10"> 
                        <div id="row list-product-info" style="margin-top: 3em;border-style: groove;">
                            <div class="clearfix"></div>
                                <h3 style="margin: 10px 0 0 41px;">{{product.name}}</h3>
                                    <div class="row">
                                        <div id="product-img" class="col-xs-12 col-sm-12 col-md-5 text-center">
                                            <img :src="require(`@/assets/upload/${product.image}`)" style="height: 15em;margin-top: 34px">
                                        </div>
                                        <div id="product-details" class="col-xs-12 col-sm-12 col-md-6" style="font-weight: bold">
                                            <p>Giá: <span class="price">{{ formatPrice(product.price) }}₫</span></p>
                                            <p>Bảo hành: 1 đổi 1 trong 12 tháng</p>
                                            <p>Phụ kiện: Dây cáp sạc, tai nghe</p>
                                            <p>Tình trạng: Máy mới 100%</p>
                                            <p>Khuyến mại: Hỗ trợ trả góp 0% dành cho các chủ thẻ Ngân hàng Sacombank</p>
                                            <p>Còn hàng: Còn  sản phẩm</p>
                                            <p class="add-cart text-center"><router-link to="/cart" @click="addCart(product)">Thêm vào giỏ hàng</router-link></p>
                                        </div>
                                    </div>
                            </div>
                                <div id="product-detail">
                                    <h3>Chi tiết sản phẩm</h3>
                                    <p class="text-justify">{{product.desc}}</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>    
 </section>
                
       
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            productId: this.$route.params.id,
            product:[]
        }
    },
    methods: {
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    },
    created() {
        axios.get("http://127.0.0.1:8000/api/product/" + this.productId)
        .then(response => {
        this.product = response.data.data
        })
        .catch(e => {
        this.errors.push(e)
        })
    }
}
    
   


</script>

<style>

</style>