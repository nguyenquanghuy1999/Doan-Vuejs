<template>
<div class="detail">
  <Master>
      <ProductDetail :id="productId"></ProductDetail>
  </Master>
</div>
</template>


<script>
import Master from '../layouts/Master'
import ProductDetail from './ProductDetail'
export default {
    components: {
        Master,
        ProductDetail
    },
    data() {
    return {
      productId: this.$route.params.id,
   
    }
    },
    

}

</script>

<style>

</style>