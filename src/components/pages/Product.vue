<template>
    <div class="row">
        <div class="card" style="width: 18rem;">
            <img :src="image" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <p class="card-text">{{price}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
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




