<?php include_once("/../admin/controller/c_trangchu.php") ?>
<?php


        if($_GET['sanpham']){
            $id = $_GET['sanpham'];
            $result = C_trangchu::sanpham($id);
            $data = C_trangchu::trangchu();
            $khuyenmai = $data['khuyenmai'];
            
            
            
        

            
?>

<section class="type0 ">
    
        <div class="rowtop">
            <h1><?php echo $result->sp_ten; ?></h1>
        </div>
        <div class="clr"></div>
        <div class="rowdetail " id="normalproduct ">
            <aside class="picture ">
                <img src="public/image/<?php echo $result->anhdaidien; ?>" alt="Điện thoại Samsung Galaxy S8 Plus " onclick="gotoGallery(-1,0); ">
            </aside>
            <aside class="price_sale ">
                <div class="area_price ">
                    <strong><?php echo number_format($result->sp_gia,0,'.',','); ?></strong>
                    <label class="installment ">Trả góp 0%</label>

                    <span></span>
                </div>



                <div class="area_promotion zero ">
                    <strong>Các khuyến mãi tại Thế Giới Di Động</strong>
                    <div style="padding:10px;">
                        <?php 
                            foreach ($khuyenmai as $km) {
                               echo "<br/>".$km->km_noidung;
                            }
                        ?>
                    </div>
                </div>
                <div class="area_order ">
                    <a href="?dathang=1&sp_ma=<?php echo $result->sp_ma ?>" class="buy_now " data-value="91131 ">
                        <b>Mua ngay </b><span>Xem hàng, không thích không mua</span>
                    </a>

                </div>
                <div class="callorder ">
                    <div class="ct ">
                        <span>Gọi đặt mua: <a href="tel:18001060 ">1800.1060</a> (Miễn phí).</span> <span><a href="tel:02836221060 ">028.3622.1060</a> (7:30-22:00)</span>
                    </div>
                </div>
                

            </aside>
            <br/>
            <br/>
            <div class="area_promotion zero ">

                
                    <strong>Thông Số Kỹ Thuật</strong>
                    <div style="padding:10px;">
                    <?php echo $result->sp_mota_ngan; ?>
                    </div>
                </div>
                <div class="clr "></div>
            </div>
        </div>
        <div class="clr "></div>
        <div class="box_content ">
            <?php echo $result->sp_mota_chitiet; ?>
            </div>
        <div class="clr"></div>
    </section>
<?php 
    }
    else{
        echo "Sản phẩm không tồn tại";
    }
?>