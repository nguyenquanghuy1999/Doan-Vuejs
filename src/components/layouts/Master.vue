<template>
    <div>
        <Header/>
            <div>
                <slot/>
            </div>
        <Footer/>
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
