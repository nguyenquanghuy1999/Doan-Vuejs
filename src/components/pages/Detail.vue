<template>
<div class="detail">
  <Master>
    <div>
      <ProductDetail></ProductDetail>
     
    </div>
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
}

</script>
