<template>
    <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
  
</template>

<script>
import Header from '../general/Header'
import Footer from '../general/Footer'
import Body from '../Body'


export default {
    name: 'Master',
    components: {
        Header,
        Footer,
        Body
      
    }

}
</script>
