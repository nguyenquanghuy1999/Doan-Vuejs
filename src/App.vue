<template>
  <div id="app">
  
   <Master>
    <div class="container">
       <div class="row">
          <Body></Body>
       </div>
       <div class="row">
         <Product></Product>
      </div>   
    </div>
   </Master>
   
  </div>
</template>

<script>
import Header from './components/general/Header'
import Footer from './components/general/Footer'
import Master from './components/layouts/Master'
import Body from './components/Body'
import Product from './components/pages/Product'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Master,
    Body,
    Product
   
  }
}

    
</script>
