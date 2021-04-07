<template>
<div>
<div class="cy_bread_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1>Dashboard / Activity</h1>
                </div>
            </div>
        </div>
</div>
<div class="cy_cart_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                 <div style="display: table;width: 100%;" class="row">
                    <div style="float:left;" class="coupon">
                        <h2>Activity History</h2>
                    </div>
                    <div style="float:right;" class="coupon">
                        <a href="#activity_form" data-toggle="modal" class="btn btn-primary">Add Activity</a>
                    </div>
                 </div>
                    <br/>
                    <div class="cy_cart_box woocommerce">
                        <table class="shop_table shop_table_responsive cart table-stripped">
                            <thead>
                                <tr>
                                    <th class="product-thumbnail">Image</th>
                                    <th class="product-name">Activity Name</th>
                                    <th class="product-price">Place</th>
                                    <th class="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="product-thumbnail" style="height: 100px; width: 100px"><a href="#"><img src="images/cart/1.jpg" alt="cart thumbnail" class="img-fluid"></a></td>
                                    <td class="product-name">Physical Exercise with Friends</td>
                                    <td class="product-price">New York</td>
                                    <td class="product-remove"><a href="#"><i class="fa fa-trash-o" aria-hidden="true"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="cy_cart_sidebar">
                        <div class="coupon">
                            <h2>My Profile</h2>
                        </div>
                        <div class="cart-collaterals">
                            <div class="cart_totals">
                                <h2>User Details</h2>
                                <table class="shop_table shop_table_responsive">
                                    <tbody>
                                     <tr class="cart-shipping">
                                            <td>Fullname</td>
                                            <td>{{Session.userData.fname}}</td>
                                        </tr>
                                        <tr class="cart-subtotal">
                                            <td>Email</td>
                                            <td>{{Session.userData.email}}</td>
                                        </tr>
                                        <tr class="cart-shipping">
                                            <td>Mobile Number</td>
                                            <td>{{Session.userData.phone}}</td>
                                        </tr>
                                       
                                    </tbody>
                                    <tfoot>
                                       
                                    </tfoot>
                                </table>
                            </div>
                            <div class="wc-proceed-to-checkout">
                                <a href="#" class="cy_button">Update Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <div class="modal" id="activity_form">
        <div class="cy_signup">
            <div class="row">
               
                <div class="col-lg-12 col-md-12">
                    <div class="cy_sign_form">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>Add Your Activity</h1>
                         <form id="form">
                         <input  type="text" placeholder="Activity Name" class="form-control">
                        
                         <input type="file" class="form-control">
                            <textarea placeholder="Activity Description" class="form-control"></textarea>
                            <input  type="text" placeholder="Activity Place" class="form-control">
                            <button class="cy_button">Add Activity</button>
                         </form>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>


<script>
import Session from "../models/Session";
export default {
  name: 'Dashboard',
  components: {
    
  },
  data() {
    return {
      Session
    }
}
}
</script>
