<template>

      
    <div class="container">
        <div class="row">
            <div class="product-item col-md-3 col-sm-6 col-xs-12">
                <a href="#"><img :src="require(`@/assets/upload/${image}`)" style="height: 100px;" class="img-thumbnail"></a>
                <p><a href="#"></a>Iphone Xs Max</p>
                <p class="price">12.000.000₫</p>
                <div class="marsk">
                    <a href="">Xem chi tiết</a>
                </div>
            </div>

        </div>
    </div>
     
 

</template>

<script>
export default {
    props: {
        name: String,
        price: String,
        image: String
    }
}
</script>

<style scoped>
/* h3{
    text-align: center;
    border-style: solid;
    background-color: black;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-left: -1em;
    margin-right: -1em;
} */
</style>




