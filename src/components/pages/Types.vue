<template>
  <div id="wrap-inner" class="col-md-12" >
    <div class="products">
        <h3 style="text-align: center;border-style: solid;background-color: black;padding-top: 1%;padding-bottom: 1%;">{{$typeName->name}}</h3>        
        <div class="products-list row">
            
            <div class="product-item col-md-3 col-sm-6 col-xs-12">
                <a href="#"><img src="" style="height: 100px;" class="img-thumbnail"></a>
                <p><a href="#"></a></p>
                <p class="price">₫</p>
                <div class="marsk">
                    <a href="">Xem chi tiết</a>
                </div>
            </div>
           
        </div>
    </div>

    <div id="pagination" style="margin-top: 2em;">
        
    </div>
    <button @click="getData"></button>

</div>
</template>

<script>

import axios from 'axios'
export default {
    props:{
        id: Number,
        name: String
    },
    data(){
        return{
            type: [],
        }
        
    },
    methods:{
      getData(){
          console.log(this.type)
      }
    },
     created() {
    axios.get(`http://127.0.0.1:8000/api/types`)
    .then(response => {
      this.type = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }

}
</script>

<style>

</style>