<template>
    <div class="container">
        <div class="row"> 
            <div class="card" style="width: 15rem;">
                <img :src="require(`@/assets/upload/${image}`)" class="card-img-top" style="height:10em; padding-top: 2%;">
                <div class="card-body">
                    <h5 class="card-title">{{name}}</h5>
                    <p class="card-text">{{price}}đ</p>
                    <a href="#" class="btn btn-primary">Xem chi tiết</a>
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




