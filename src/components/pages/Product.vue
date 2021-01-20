<template>
    <div>
        <a href="#"><img :src="require(`@/assets/upload/${image}`)" style="height: 100px;" class="img-thumbnail"></a>
        <p><a href="#"></a>{{name}}</p>
        <p class="price">{{ formatPrice(price) }}₫</p>
        
     
        <div class="marsk">
            <a href="">Xem chi tiết</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        price: String,
        image: String
    },
    methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
}
}
</script>





