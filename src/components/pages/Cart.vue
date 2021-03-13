<template>
<Master>
     <Slide>
         <div id="wrap-inner">
            <div id="list-cart">
                <h3 >Giỏ hàng: {{GET_CART.length}} sản phẩm</h3>
                <form>
                    <table class="table table-bordered .table-responsive text-center">
                        <tr class="active">
                            <td width="11.111%">Ảnh mô tả</td>
                            <td width="22.222%">Tên sản phẩm </td>
                            <td width="22.222%">Số lượng</td>
                            <td width="16.6665%">Đơn giá</td>
                            <td width="11.112%">Xóa</td>
                        </tr>   
                     
                        <tr v-for="(item, index) in GET_CART" :key="item.id">
                            <td><img class="img-responsive" :src="require(`@/assets/upload/${item.image}`)"></td>
                            <td>{{item.name}}</td>
                            <td>
                                <div>
                                    <span class="min" @click="decrementQty(item.id)">-</span>
                                        <input type="tel" class="text-center inp" :value="item.qty" style="width: 2em;">
                                    <span class="max" @click="incrementQty(item.id)">+</span>
                                </div>
                            </td>
                            <td><span class="price"> {{formatPrice(item.price)}}₫</span></td>
                            <td><button @click="removeItem(index)">Xóa</button></td>
                        </tr>
                        

                    </table>
                        <div id="total-price">
                            <div style="margin-left: 61%;">
                                Tổng thanh toán: <span class="total-price">{{formatPrice(CART_TOTAL)}}₫</span>
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
     </Slide>
</Master>

</template>

<script>

import Master from '../layouts/Master.vue'
import Slide from '../layouts/Slide'
import {DECREMENT_QTY, GET_CART, INCREMENT_QTY, CART_TOTAL, REMOVE_ITEM} from '../constants/mutation-type'
import {mapGetters} from 'vuex'
export default {
  components: { Master, Slide },
   methods: {
        formatPrice(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        incrementQty(id) {
            this.$store.commit(INCREMENT_QTY, id);
        },
        decrementQty(id) {
            this.$store.commit(DECREMENT_QTY, id);
        },
        removeItem(index){
            this.$store.commit(REMOVE_ITEM, index);
        } 
  },
  computed: {
      ...mapGetters({
          GET_CART,
          CART_TOTAL
      })
  }
}


</script>

<style scoped>
.min {
    background-color: rgb(248, 248, 248);
    padding: 5px 15px;
    cursor: pointer;
}

.max {
    background-color: rgb(248, 248, 248);
    padding: 5px 13px;
    cursor: pointer;
}
</style>