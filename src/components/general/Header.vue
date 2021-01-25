<template>
   <header id="header" style="background-color: black;">
        <div class="container">
            <div class="row-logo">
                <div id="logo" class="col-md-3 col-sm-12 col-xs-12">
                        <router-link to="/" style="color: white;font-family: cursive;font-weight: bold; font-size:25px">
                        <img src="@/assets/image/logo.jpg" style="width:38%"/>Apple Store
                        </router-link>
                </div>
                <div id="search" class="col-md-6 col-sm-12 col-xs-12">
                    <form class="navbar-form" role="search" method="get" action="#" style="margin-left: 80px;">
                        <input type="text" class="form-control" name="result" placeholder="Nhập từ khóa ..." style="color:black">
                        <button type="submit" class="btn btn-defalt" style="margin-top:28px; "></button>
                    </form>
                </div>
                <div id="cart" class="col-md-2 col-sm-12 col-xs-12" style="margin-left: 87px;">
                    <a class="display" href="#">
                        <img src="@/assets/image/icon-cart.png">
                       <a style="margin-left: -22%;color: black;">0</a>
                    </a>
                </div>
               
            </div>   
        </div>
    </header><!-- /header -->
</template>

<script>

export default {
    name: 'Header',
    components: {
      
    }

}
</script>

<style>

</style>