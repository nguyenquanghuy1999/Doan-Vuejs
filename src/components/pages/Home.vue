<template>
   <div>
        <Master>
           <div>
               <Body/>
           </div>
        </Master>
   </div>
</template>

<script>
import Master from '../layouts/Master'
import Body from '../pages/Body'

export default {
    name: 'Home',
    components: {
        Master,
        Body
    }

}
</script>

<style>

</style>