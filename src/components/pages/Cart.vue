<template>
<Master>
     <section id="body">
        <div class="container">
            <div class="row">
                <div id="sidebar" class="col-md-3" >
                    <nav id="menu">
                         <ul style="font-weight: bold;">
                            <li class="menu-item" >Danh mục sản phẩm</li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/1">Macbook</a></li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/2">Iphone</a></li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/3">Ipad</a></li>
                            <li class="menu-item" ><a href="http://localhost:8080/types/4">Watch</a></li>        
                        </ul>     
                    </nav>
                        <div id="img-quangcao">
                            <img src="@/assets/image/quangcao1.jpg" style="width: 100% ;height: 22em;">
                            <img src="@/assets/image/quangcao2.jpg" style="width: 100% ;height: 22em;">
                            <img src="@/assets/image/quangcao3.jpg" style="width: 100% ;height: 22em;">
                            <img src="@/assets/image/slide-3.png" style="width: 100% ;height: 22em;">
                        </div>
                </div>
                <div id="main" class="col-md-9">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="@/assets/image/banner1.jpg" alt="First slide" style="height:25em;">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="@/assets/image/banner2.jpg" alt="Second slide" style="height:25em;">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="@/assets/image/banner3.jpg" alt="Third slide" style="height:25em;" >
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                   <div id="wrap-inner">
                    <div id="list-cart">
                        <h3 >Giỏ hàng</h3>
                        <form>
                            <table class="table table-bordered .table-responsive text-center" >
                                <tr class="active">
                                    <td width="11.111%">Ảnh mô tả</td>
                                    <td width="22.222%">Tên sản phẩm </td>
                                    <td width="22.222%">Số lượng</td>
                                    <td width="16.6665%">Đơn giá</td>
                                    <td width="16.6665%">Thành tiền</td>
                                    <td width="11.112%">Xóa</td>
                                </tr>
                                
                                <tr v-for="(cart, n) in carts" :key="cart.id">
                                    <td><img class="img-responsive" :src="require(`@/assets/upload/${cart.image}`)"></td>
                                    <td>{{cart.name}}</td>
                                    <td>
                                        <div class="form-group">
                                            <input class="form-control" type="number" v-model="quantity">
                                        </div>
                                    </td>
                                    <td><span class="price"> {{cart.price}}đ</span></td>
                                    <td><span class="price"> đ</span></td>
                                    <td><button @click="removeCart(n)">Xóa</button></td>
                                </tr>
                    
                            </table>
                            <div class="row" id="total-price">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    Tổng thanh toán: <span class="total-price">{{totalprice}}</span>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <a href="" class="my-btn btn">Quay lại trang chủ</a>
                                    <a href="" class="my-btn btn" >Xóa giỏ hàng</a>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="xac-nhan">
                    <h3>Xác nhận mua hàng</h3>
                    <form method="post">
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <input required type="email" class="form-control" id="email" name="email">
                        </div>
                        <div class="form-group">
                            <label for="name">Họ và tên:</label>
                            <input required type="text" class="form-control" id="name" name="name">
                        </div>
                        <div class="form-group">
                            <label for="phone">Số điện thoại:</label>
                            <input required type="number" class="form-control" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="address">Địa chỉ:</label>
                            <input required type="text" class="form-control" id="add" name="add">
                        </div>
                        <div class="form-group">
                            <label for="note">Ghi chú (Yêu cầu về hàng hóa, vận chuyển,...):</label>
                            <textarea required type="text" class="form-control" id="note" name="note" style="height: 300px;"></textarea>
                        </div>
                        <div class="form-group text-right">
                            <button type="submit" class="btn btn-default">Thực hiện đơn hàng</button>
                        </div>
                    </form>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </section>
</Master>

</template>

<script>
import axios from 'axios'
import Master from '../layouts/Master.vue'
export default {
  components: { Master },
  data(){
      return{
          products:[],
          carts:[],
          cartadd: {
              id: '',
              name: '',
              price:'',
              image:'',
              amount: ''
          },
          badge: '0',
          quantity: '1',
          totalprice: '0'
      }
  },
  created(){
    this.viewCart();

    axios.get(`http://127.0.0.1:8000/api/product`)
    .then(response => {
      this.products = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods:{
      viewCart(){
          if(localStorage.getItem('carts')){
              this.carts = JSON.parse(localStorage.getItem('carts'));
              this.badge =this.carts.length;
              this.totalprice= this.carts.reduce((total,item)=>{
                  return total + this.quantity * item.price;
              },0)
          }
      },
      addCart(product){
          this.cartadd.id= product.id;
          this.cartadd.name= product.name;
          this.cartadd.image= product.image;
          this.cartadd.amount= product.amount;
          this.carts.push(this.cartadd);
          this.cartadd= {};
          this.storeCart();

      },
      removeCart(product){
         this.carts.splice(product, 1);
         this.storeCart;
      },
      storeCart(){
          let parsed = JSON.stringify(this.carts);
          localStorage.setItem('carts',parsed);
          this.viewCart();
    }    
  }

}
</script>

<style>

</style>