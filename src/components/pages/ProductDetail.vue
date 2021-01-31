<template>
<Master>
    <Slide>
        <div id="wrap-inner" class="col-md-10"> 
            <div id="row list-product-info" style="margin-top: 3em;border-style: groove;">
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
                        <button class="add-cart text-center" @click="addToCart(product)"><router-link :to="'/cart/' + productId">Thêm vào giỏ hàng </router-link></button>
                    </div>
                </div>
            </div>
                <div id="product-detail">
                    <h3>Chi tiết sản phẩm</h3>
                    <p class="text-justify">{{product.desc}}</p>
                </div>
        </div>              
    </Slide>
</Master>
</template>

<script>
import axios from "axios"
import Slide from '../layouts/Slide'
import Master from '../layouts/Master'
export default {
    components:{
        Slide,
        Master
    },
    data(){
        return{
            productId: this.$route.params.id,
            product:[],
        }
    },
    methods: {
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    addToCart(item) {
      this.$store.commit("addToCart", item);
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