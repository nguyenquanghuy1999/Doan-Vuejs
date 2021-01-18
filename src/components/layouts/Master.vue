<template>
    <div>
        <Header></Header>
            <div>
                <slot/>
            </div>
        <Footer></Footer>
    </div>
  
</template>

<script>
import Header from '../general/Header'
import Footer from '../general/Footer'



export default {
    name: 'Master',
    components: {
        Header,
        Footer
        
      
    }

}
</script>
