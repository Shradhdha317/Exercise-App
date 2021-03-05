<template>
 <div>
  <div class="loader_wrapper">
        <div class='loader'>
      <img src="images/loader.gif" alt="loader">  
        </div>
    </div>
    <!--Top bar start-->
    <div class="cy_top_wrapper">
        <div class="cy_top_info">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="cy_top_detail">
                            <ul>
                                <li><a href="#">EMAIL: Info@yourmail.com</a></li>
                                <li>PHONE: 18009001010</li>
                                <li>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-tumblr" aria-hidden="true"></i></a></li>
                                    </ul>
                                </li>
                                <li class="cart"><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                    <span>2</span></a>
                                    <ul class="cart_box">
                                        <li>
                                            <div class="cart_section">
                                                <div class="cart_img">
                                                    <a href="#"><img src="images/cart/1.jpg" alt="cart" class="img-fluid"></a>
                                                </div>
                                                <div class="cart_detail">
                                                    <h4><a href="cart.html">Road Bicycle</a></h4>
                                                    <h5>$2200</h5>
                                                </div>
                                                <a class="cart_delete"><i class="fa fa-times" aria-hidden="true"></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="cart_section">
                                                <div class="cart_img">
                                                    <a href="#"><img src="images/cart/2.jpg" alt="cart" class="img-fluid"></a>
                                                </div>
                                                <div class="cart_detail">
                                                    <h4><a href="cart.html">Road Bicycle</a></h4>
                                                    <h5>$2500</h5>
                                                </div>
                                                <a class="cart_delete"><i class="fa fa-times" aria-hidden="true"></i></a>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="cart_section">
                                                <div class="cart_total">
                                                    <h4>Total<span>$4700</span></h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="cart_section">
                                                <a href="cart.html" class="cy_button">view cart</a>
                                                <a href="checkout.html" class="cy_button">Checkout</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- sign icons -->
    <div class="cy_sign_wrapper">
        <h2 class="signin"><i class="fa fa-sign-in" aria-hidden="true"></i><a href="#signin" data-toggle="modal">Sign In</a></h2>
        <h2 class="signup"><i class="fa fa-user-plus" aria-hidden="true"></i><a href="#signup" data-toggle="modal">Sign Up</a></h2>
    </div>
    <!-- sign in modal -->
    <div class="modal" id="signin">
        <div class="cy_signin">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_img">
                        <img src="images/popup.jpg" alt="popup" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_form">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>Sign In</h1>
                        <input type="text" placeholder="Username" class="form-control">
                        <input type="password" placeholder="Password" class="form-control">
                        <div class="forget_password">
                            <div class="remember_checkbox">
                                <label>Keep me signed in
                                    <input type="checkbox">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <a href="#">Forgot Password ?</a>
                        </div>
                        <a href="#" class="cy_button">sign in</a>
                        <p>Dont Have An Account? <a href="#signup" data-toggle="modal" class="cy_modal">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- sign up modal -->
    <div class="modal" id="signup">
        <div class="cy_signup">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_img">
                        <img src="images/popup.jpg" alt="popup" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="cy_sign_form">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1>Sign up</h1>
                        <input type="text" placeholder="Username" class="form-control">
                        <input type="text" placeholder="Email or Phone" class="form-control">
                        <input type="password" placeholder="Password" class="form-control">
                        <a href="#" class="cy_button">register</a>
                        <p>Already Have An Account? <a href="#">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Banner section start-->
    <div class="cy_banner_wrapper">
        <div class="container-fluid">
            <div class="row">
                <div id="rev_slider_1068_1_wrapper" class="rev_slider_wrapper fullscreen-container" data-alias="levano4export" data-source="gallery" style="background-color:transparent;padding:0px;">
                    <div id="rev_slider_1068_1" class="rev_slider fullscreenbanner" style="display:none;" data-version="5.3.0.2">
                        <ul>
                            <li data-index="rs-1596" data-transition="zoomout" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="500" data-thumb="" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1000" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <!-- MAIN IMAGE -->
                                <img src="js/plugin/revolution/assets/main_banner.jpg" alt="banner" data-bgposition="center center" data-kenburns="on" data-duration="10000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 -500" data-offsetend="0 500" data-bgparallax="10" class="rev-slidebg" data-no-retina>
                                <!-- LAYERS -->

                                <!-- LAYER NR. 1 -->
                                <div class="tp-caption NotGeneric-Title   tp-resizeme" id="slide-1596-layer-1" data-x="['left','left','left','left']" data-hoffset="['-110','50','50','50']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['65','55','45','45']" data-lineheight="['85','55','50','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":2500,"to":"o:1;","delay":1000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]' data-textAlign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,20,20,20]" style="z-index: 5; white-space: nowrap;text-transform:left;color:#ffffff;font-family: 'Montserrat', sans-serif;text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);text-transform:uppercase;">EXTREME
                                    <br>MOUNTAIN BIKE <br>ENTHUSIASTS
                                </div>
                            </li>
                            <!--slide2-->
                            <li data-index="rs-3010" data-transition="zoom" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="1000" data-thumb="" data-rotate="0" data-fstransition="fade" data-fsmasterspeed="1000" data-fsslotamount="7" data-saveperformance="off" data-title="Intro" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                <!-- MAIN IMAGE -->
                                <img src="js/plugin/revolution/assets/main_banner1.jpg" alt="banner" data-bgposition="center center" data-kenburns="on" data-duration="2000" data-ease="Power2.easeOut" data-scalestart="110" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 500" data-offsetend="0 -500" data-bgparallax="10" class="rev-slidebg" data-no-retina>
                                <!-- LAYERS -->

                                <!-- LAYER NR. 1 -->
                                <div class="tp-caption NotGeneric-Title   tp-resizeme" id="slide-1596-layer-2" data-x="['left','left','left','left']" data-hoffset="['-110','50','50','50']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['65','55','45','45']" data-lineheight="['85','55','50','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];","speed":2500,"to":"o:1;","delay":500,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;","ease":"Power2.easeInOut"}]' data-textAlign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,20,20,20]" style="z-index: 5; white-space: nowrap;text-transform:left;color:#ffffff;font-family: 'Montserrat', sans-serif;text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);text-transform:uppercase;">for those, who <br>are interested in <br> bicycle riding
                                </div>      
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Menus Start-->
    <div class="cy_menu_wrapper">
        <div class="cy_logo_box">
            <a href="#"><img src="images/main-logo.png" alt="logo" class="img-fluid"/></a>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <button class="cy_menu_btn">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </button>
                    <div class="cy_menu">
                        <nav>
                            <ul>
                                <li><a href="index-2.html" class="active">Marathon Calendar</a></li>
                                <li><a href="about.html">Cycling Calendar</a></li>
                                <li class="dropdown"><a href="javascript:;">Upcoming Races</a>
                                    
                                </li>
                                <li class="dropdown"><a href="javascript:;">Race Finder</a>
                                    
                                </li>
                                <li class="dropdown"><a href="javascript:;">Running Clubs</a>
                                    
                                </li>
                                <li><a href="gallery.html">gallery</a></li>
                                <li><a href="contact.html">contact us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="cy_search">
                        <a href="#" class="search_open"><i class="fa fa-search"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- search section -->
    <div class="cy_search_form">
        <button class="search_close"><i class="fa fa-times"></i></button>
        <div class="cy_search_input">
        <input type="search" placeholder="search">
        <i class="fa fa-search"></i>
        </div>
    </div>
    <!--About section start-->
    <div class="cy_about_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12">
                    <div class="cy_about_img">
                        <img src="images/about/about.png" alt="about" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12">
                    <div class="cy_about_data">
                        <h1 class="cy_heading">ABOUT US</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                        <a href="#" class="cy_button">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!--Store section start-->
    <div class="cy_store_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1 class="cy_heading">to our store</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="cy_store_slider">
                        <div class="owl-carousel owl-theme">
                           <div class="item">
                                <div class="cy_store_box">
                                    <div class="cy_store_img">
                                        <a href="shop_single.html"><img src="images/store/2.jpg" alt="store" class="img-fluid"></a>
                                    </div>
                                    <div class="cy_store_data">
                                        <div class="cy_store_text">
                                            <h3><a href="shop_single.html">Road Bicycles</a></h3>
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <a href="cart.html" class="cy_button" data-hover="Add to Cart"><span>$2500</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="cy_store_box">
                                    <div class="cy_store_img">
                                        <a href="shop_single.html"><img src="images/store/2.jpg" alt="store" class="img-fluid"></a>
                                    </div>
                                    <div class="cy_store_data">
                                        <div class="cy_store_text">
                                            <h3><a href="shop_single.html">Road Bicycles</a></h3>
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <a href="cart.html" class="cy_button" data-hover="Add to Cart"><span>$2500</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="cy_store_box">
                                    <div class="cy_store_img">
                                        <a href="shop_single.html"><img src="images/store/3.jpg" alt="store" class="img-fluid"></a> 
                                    </div>
                                    <div class="cy_store_data">
                                        <div class="cy_store_text">
                                            <h3><a href="shop_single.html">Road Bicycles</a></h3>
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-half-o" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-o" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <a href="cart.html" class="cy_button" data-hover="Add to Cart"><span>$2500</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="cy_store_box">
                                    <div class="cy_store_img">
                                        <a href="shop_single.html"><img src="images/store/4.jpg" alt="store" class="img-fluid"></a>
                                        <div class="cy_store_img_overlay">
                                            <p>Sale</p>
                                        </div>
                                    </div>
                                    <div class="cy_store_data">
                                        <div class="cy_store_text">
                                            <h3><a href="shop_single.html">Road Bicycles</a></h3>
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star-half-o" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <a href="cart.html" class="cy_button" data-hover="Add to Cart"><span>$2500</span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="cy_store_box">
                                    <div class="cy_store_img">
                                        <a href="shop_single.html"><img src="images/store/5.jpg" alt="store" class="img-fluid"></a>
                                    </div>
                                    <div class="cy_store_data">
                                        <div class="cy_store_text">
                                            <h3><a href="shop_single.html">Road Bicycles</a></h3>
                                            <ul>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                        <a href="cart.html" class="cy_button" data-hover="Add to Cart"><span>$2500</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!--Our sponsors section start-->
    <div class="cy_sponsors_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="cy_ride_text">
                        <h3>Next Ride Start at</h3>
                        <h2>April 20, 2018 - 10:30 Am</h2>
                        <a href="#" class="cy_button">read more</a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="cy_sponsor_slider cy_section_padding">
                        <h1 class="cy_heading">our sponsors</h1>
                        <div class="owl-carousel owl-theme">
                            <div class="item">
                                <img src="images/sponsors/brand1.png" alt="sponsor" />
                            </div>
                            <div class="item">
                                <img src="images/sponsors/brand2.png" alt="sponsor" />
                            </div>
                            <div class="item">
                                <img src="images/sponsors/brand3.png" alt="sponsor" />
                            </div>
                            <div class="item">
                                <img src="images/sponsors/brand4.png" alt="sponsor" />
                            </div>
                            <div class="item">
                                <img src="images/sponsors/brand1.png" alt="sponsor" />
                            </div>
                            <div class="item">
                                <img src="images/sponsors/brand2.png" alt="sponsor" />
                            </div>
                            <div class="item">
                                <img src="images/sponsors/brand3.png" alt="sponsor" />
                            </div>
                            <div class="item">
                                <img src="images/sponsors/brand4.png" alt="sponsor" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--upcoming races section Start-->
    <div class="cy_races_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <h1 class="cy_heading">Upcoming races</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="cy_races_box">
                        <div class="cy_races_img">
                            <img src="images/races/1.jpg" alt="races" class="img-fluid">
                            <div class="cy_races_img_overlay">
                                <h4>08<br>NOV</h4>
                            </div>
                        </div>
                        <div class="cy_races_data">
                            <h2><a href="#">Northumberland Race 2018</a></h2>
                            <ul>
                                <li><a href="#"><img src="images/svg/map-mark.svg" alt="event address">Northumberland</a></li>
                                <li><a href="#"><img src="images/svg/clock2.svg" alt="event time">12:00 PM</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            <a href="#" class="cy_button">book now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="cy_races_box">
                        <div class="cy_races_img">
                            <img src="images/races/2.jpg" alt="races" class="img-fluid">
                            <div class="cy_races_img_overlay">
                                <h4>08<br>NOV</h4>
                            </div>
                        </div>
                        <div class="cy_races_data">
                            <h2><a href="#">Northumberland Race 2018</a></h2>
                            <ul>
                                <li><a href="#"><img src="images/svg/map-mark.svg" alt="event address">Northumberland</a></li>
                                <li><a href="#"><img src="images/svg/clock2.svg" alt="event time">12:00 PM</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            <a href="#" class="cy_button">book now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="cy_races_box">
                        <div class="cy_races_img">
                            <img src="images/races/3.jpg" alt="races" class="img-fluid">
                            <div class="cy_races_img_overlay">
                                <h4>08<br>NOV</h4>
                            </div>
                        </div>
                        <div class="cy_races_data">
                            <h2><a href="#">Northumberland Race 2018</a></h2>
                            <ul>
                                <li><a href="#"><img src="images/svg/map-mark.svg" alt="event address">Northumberland</a></li>
                                <li><a href="#"><img src="images/svg/clock2.svg" alt="event time">12:00 PM</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            <a href="#" class="cy_button">book now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="cy_races_box">
                        <div class="cy_races_img">
                            <img src="images/races/4.jpg" alt="races" class="img-fluid">
                            <div class="cy_races_img_overlay">
                                <h4>08<br>NOV</h4>
                            </div>
                        </div>
                        <div class="cy_races_data">
                            <h2><a href="#">Northumberland Race 2018</a></h2>
                            <ul>
                                <li><a href="#"><img src="images/svg/map-mark.svg" alt="event address">Northumberland</a></li>
                                <li><a href="#"><img src="images/svg/clock2.svg" alt="event time">12:00 PM</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                            <a href="#" class="cy_button">book now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Prices section start-->
    <!--Footer section start-->
    <div class="cy_footer_wrapper cy_section_padding padder_bottom75">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget cy_footer_about">
                        <img src="images/logo.png" alt="logo" class="img-fluid"/>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>  
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                    <h1 class="widget-title">recent blog</h1>
                    <div class="cy_recent_post">
                        <div class="cy_post_img">
                            <a href="#"><img src="images/footer/post1.jpg" alt="post"/></a>
                        </div>
                        <div class="cy_post_data">
                            <h3><a href="#">Selecting The Proper Bicycle</a></h3>
                            <p>14 Apr, 2018</p>
                        </div>  
                    </div>
                    <div class="cy_recent_post">
                        <div class="cy_post_img">
                            <a href="#"><img src="images/footer/post2.jpg" alt="post"/></a>
                        </div>
                        <div class="cy_post_data">
                            <h3><a href="#">Selecting The Proper Bicycle</a></h3>
                            <div class="cy_post_info"><p>14 Apr, 2018</p></div>
                        </div>  
                    </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h1 class="widget-title">contact info</h1>
                    </div>
                    <div class="cy_foo_contact">
                        <span><img src="images/svg/map-mark.svg" alt="map-mark"></span>
                        <div class="cy_post_info">
                        <p>10221 Magnolia Grove Dr,  Manassas, VA, 20110</p>
                        </div>
                    </div>
                    <div class="cy_foo_contact">
                        <span><img src="images/svg/phone.svg" alt="phone"></span>
                        <div class="cy_post_info">
                        <p>Office :- +1-512-555-0190</p>
                        <p>Office :- +1-512-555-0190</p>
                        </div>
                    </div>
                    <div class="cy_foo_contact">
                        <span><img src="images/svg/email.svg" alt="email"></span>
                        <div class="cy_post_info">
                        <p><a href="#">help@yourmail.com</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h1 class="widget-title">flicker widget</h1>
                        <div class="cy_foo_gallery">
                            <ul>
                                <li><a href="#"><img src="images/footer/gal1.jpg" alt="flicker gallery"></a></li>
                                <li><a href="#"><img src="images/footer/gal2.jpg" alt="flicker gallery"></a></li>
                                <li><a href="#"><img src="images/footer/gal3.jpg" alt="flicker gallery"></a></li>
                                <li><a href="#"><img src="images/footer/gal4.jpg" alt="flicker gallery"></a></li>
                                <li><a href="#"><img src="images/footer/gal5.jpg" alt="flicker gallery"></a></li>
                                <li><a href="#"><img src="images/footer/gal6.jpg" alt="flicker gallery"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    <!--Bottom footer start-->
    <div class="cy_btm_footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">
                    <P>Copyright &copy; 2018, <a href="#">Cycling</a>. All Rights Reserved.</P>
                </div>
            </div>
        </div>
    </div>
        <!--Go to top start-->
    <div class="cy_go_to">
        <div class="cy_go_top">
            <img src="images/go_to_top.png" alt="Back to top">
        </div>  
    </div>

 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
