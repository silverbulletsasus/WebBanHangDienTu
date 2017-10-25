<?php include_once("/../admin/controller/c_trangchu.php") ?>
<link rel="stylesheet" href="public/giaodien/css/giohang.css" />

<?php

if(isset($_POST['hoten'])){
    $sanpham = new C_trangchu();
    $ten = $_POST['hoten'];
    $sdt = $_POST['sodienthoai'];
    $diachi = $_POST['diachi'];
    $noidung = $_POST['noidung'];
    $donhang = $sanpham->thanhtoan($ten,$sdt,$diachi,$noidung);
       
    
}
  
    
    
?>
<section id="wrap_cart">
    <div class="bar-top">
        <a href="./" class="buymore">Mua thêm sản phẩm khác</a>
        <div class="yourcart">HÓA ĐƠN CỦA BẠN</div>
    
    </div>
    <div class="wrap_cart">
        <div id="formtest" novalidate="novalidate">
            <div class="detail_cart">
                <ul class="listorder">
                <li>CÁM ƠN BẠN ĐÃ MUA HÀNG ĐƠN HÀNG CỦA BẠN ĐÃ ĐẶT THÀNH CÔNG</li>

                <?php
                if($_SESSION["giohang"] != null) {
                    $tong = 0;
                    foreach ($_SESSION["giohang"] as $key => $row) {
                        # code...
                   

                ?>
                    <li class="justadded" >
                        <div class="colimg">
                            <a href="#">
                                <img width="55" src="public/image/<?php echo $row['anh'];?>"></a>
                            
                        </div>
                        <div class="colinfo">
                            <strong><?php echo number_format($row["gia"]*$row["soluong"],0,'.',',')?></strong>
                            <a href="/dtdd/samsung-galaxy-s8-plus"><?php echo $row["ten"] ?></a>x<?php  echo $row["soluong"];?>
                           
                            <div class="clr"></div>
                            
                        </div>
                    </li>
                    <?php 
                        $tong += $row["gia"]*$row["soluong"];

                    }
                   
                   ?>
                </ul>

                <div class="area_total">
                    <div class="">
                        <div class="total">
                            <b>Tổng tiền:</b>
                            <strong><?php echo number_format($tong,0,'.',',') ?> </strong>
                            
                        </div>
                    </div>
                    <?php
    unset($_SESSION["giohang"]);

?>
                </div>
            </div>
            
            
            
            
            <div class="clr"></div>
            
        </div>

    </div>
    
    <?php
        }else{
            echo "<script language='javascript'>alert('Chưa có sản phẩm nào trong giỏ hàng!');window.location='./'</script>";
        }

            ?>
</section>
