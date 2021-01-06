<template>
   <header id="header" style="background-color: black;">
        <div class="container">
            <div class="row-logo">
                <div id="logo" class="col-md-3 col-sm-12 col-xs-12">
                    <p>
                        <a href="#" style="color: white;font-family: cursive;font-weight: bold; font-size:25px">
                        <img src="@/assets/image/logo.jpg" style="width:38%"/>Apple Store</a>
                        
                    </p>
                </div>
                <div id="search" class="col-md-6 col-sm-12 col-xs-12">
                    <form class="navbar-form" role="search" method="get" action="#" style="margin-left: 80px;">
                        <input type="text" class="form-control" name="result" placeholder="Nhập từ khóa ..." style="color:black">
                        <button type="submit" class="btn btn-defalt" style="margin-top:28px; "><i class="fas fa-search" style="margin-left:-3em;color: black;"></i></button>
                    </form>
                </div>
                <div id="cart" class="col-md-2 col-sm-12 col-xs-12" style="margin-left: 87px;">
                    <a class="display" href="#">
                        <img src="#">
                       <a style="margin-left: -25%;color: black;"></a></a>
                </div>
                <div>
                    <h4 style="margin-top: 60%;font-family: auto;"><a href="#" style="color: white;">Login</a></h4>
                </div>
            </div>   
        </div>
    </header><!-- /header -->
</template>

<script>
export default {
    name: 'Header',
    props: {
        msg: String,
    }

}
</script>

<style>

</style>