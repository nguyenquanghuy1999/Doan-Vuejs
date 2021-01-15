<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3" v-for="product in productList" :key="product.id" >
             <Product :name="product.login" :url="product.url" :image="product.avatar_url"></Product>

            </div>

        </div>

    </div>
</template>

<script>
import Product from '../pages/Product'


export default {
    data() {
        return {
            productList:[]
        }
    },
    components: {
       
        Product,
       
    },
    created() {
        this.$http.get('https://api.github.com/users/hadley/orgs').then(response => {
        // success callback
            this.productList = response.body;
        },
         response => {
        // error callback
            console.log(response)
        });
    }
    ,methods: {
        
    }
}

</script>

