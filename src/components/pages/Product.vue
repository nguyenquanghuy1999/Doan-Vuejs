<template>
      <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title" >{{name}}</h5>
        <p class="card-text" >{{url}}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
</template>

<script>
export default {
    props:{
        id: String,
        name: String,
        image: String,
        url: String
    }

}
</script>

<style>

</style>