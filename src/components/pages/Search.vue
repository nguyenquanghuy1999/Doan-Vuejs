<template>
  <Master>
      <Slide>
            <div id="wrap-inner" class="col-md-12">
            <input class="form-control" type="text" v-model="search" placeholder="Search" style="margin-top: 2%;border-style: groove"/>
            <div class="products">
            <h3>Tìm kiếm với từ khóa: {{search}} </h3>
            <div class="product-list row">
                <div class="product-item col-md-3 col-sm-6 col-xs-12"  v-for='info in result' :key="info.id" >
                    <a href="#"><img :src="require(`@/assets/upload/${info.image}`)" style="height: 100px;"></a>
                    <p><a href="#"></a>{{info.name}}</p>
                    <p class="price">{{formatPrice(info.price)}}</p>
                    <div class="marsk">
                        <router-link :to="'/detail/' + info.id">Xem chi tiết</router-link>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </Slide>
  </Master>
</template>

<script>
import Slide from '../layouts/Slide'
import Master from '../layouts/Master'
import axios from 'axios'
export default {
  components:{
    Master,
    Slide
  },
   data(){
        return{
            search: null,
            infos: [
                {
                id: "",
                name: "",
                image: "",
                price: "",
                desc: "",
                },
            ],
        }
    },
    computed: {
    result() {
      if (this.search) {
        return this.infos.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.infos;
      }
    },
  },
     created() {
        axios.get("http://127.0.0.1:8000/api/product")
        .then(response => {
        this.infos = response.data.data
        })
        .catch(e => {
        this.errors.push(e)
        })
    },
    methods:{
       formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
    }
    
}
</script>

<style>

</style>