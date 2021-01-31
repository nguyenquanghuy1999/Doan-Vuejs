<template>
    <Master>
        <Slide>
            <div id="wrap-inner" class="col-md-12" > 
                <div class="products">
                    <h3 style="text-align: center;border-style: solid;background-color: black;padding-top: 1%;padding-bottom: 1%;">{{types.name}}</h3>
                    <div class="products-list row">
                        <div class="product-item col-md-3 col-sm-6 col-xs-12" v-for="type in types.products" :key="type.id">
                            <a href="#"><img :src="require(`@/assets/upload/${type.image}`)" style="height: 100px;" class="img-thumbnail"></a>
                            <p><a href="#">{{type.name}}</a></p>
                            <p class="price">{{ formatPrice(type.price) }}₫</p>
                            <div class="marsk">
                                <router-link :to="'/detail/' + type.id">Xem chi tiết {{idProduct}}</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    </Master>
</template>

<script>
import axios from 'axios'
import Slide from '../layouts/Slide'
import Master from '../layouts/Master'


export default {
  components: { Slide, Master},
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