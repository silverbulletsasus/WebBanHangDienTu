<?php include_once("/../admin/controller/c_trangchu.php") ?>
<link rel="stylesheet" href="public/giaodien/css/giohang.css" />

<?php

if(isset($_GET['sp_ma'])){
    $sanpham = new C_trangchu();
    $ma = $_GET['sp_ma'];
    $donhang = $sanpham->sanpham($ma);
    $ten = $donhang->sp_ten;
    $gia = $donhang->sp_gia;
    $anh = $donhang->anhdaidien;
    if($donhang->sp_soluong >= 1)
    {
        $coroi = false;
        if(isset($_SESSION["giohang"])){
            foreach ($_SESSION["giohang"] as $key => $row) {
            if($key == $ma)
            {
                $_SESSION["giohang"][$key]["soluong"] += 1;
                $coroi = true;
            }
            }
        }
        
        if(!$coroi)
        {
            $key = $ma;
            $dathang = array("ten"=>$ten, "gia"=>$gia,"soluong"=>1,"anh"=>$anh);
            $_SESSION['giohang'][$ma] = $dathang;
        }
        echo "<script language='javascript'>alert('Sản phẩm đã được thêm vào giỏ hàng, truy cập giỏ hàng để xem!');</script>";
    }
    else
    {
        echo "<script>alert('Số lượng bạn đặt vượt quá số lượng trong kho');</script>";
    }
}
if (isset($_GET['action'])) {
    if($_GET['action'] == 'xoa'){
        $id = $_GET['ma'];
        unset($_SESSION["giohang"][$id]);
        echo "<script>alert('Xóa Thành Công');</script>";
    }
    # code...
}
     
    
    
?>
<section id="wrap_cart">
    <div class="bar-top">
        <a href="./" class="buymore">Mua thêm sản phẩm khác</a>
        <div class="yourcart">Giỏ hàng của bạn</div>
    
    </div>
    <div class="wrap_cart">
        <div id="formtest" novalidate="novalidate">
            <div class="detail_cart">
                <ul class="listorder">
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
                            <a href="?trang=giohang&action=xoa&ma=<?php echo $key ?>" type="button" class="delete">
                            <span></span>Xóa
                            </a>
                        </div>
                        <div class="colinfo">
                            <strong><?php echo number_format($row["gia"]*$row["soluong"],0,'.',',')?></strong>
                            <a href="/dtdd/samsung-galaxy-s8-plus"><?php echo $row["ten"] ?></a>x<?php  echo $row["soluong"] ?>
                           
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
                    
                </div>
            </div>
            <form action="?trang=thanhtoan" method="post">
                <div class="infouser">
                    <div class="malefemale">
                        <input type="radio" name="gioitinh" class="iconmobile-opt">Nam   
                        <input type="radio" name="gioitinh" class="iconmobile-opt">Nữ   
                    </div>
                    <div class="areainfo">
                        <div class="left">
                            <input type="text" class="saveinfo" name="hoten" placeholder="Họ và tên" maxlength="50">
                        </div>
                        <div class="right">
                            <input type="tel" class="saveinfo" name="sodienthoai" placeholder="Số điện thoại" maxlength="11">
                        </div>
                        <input type="text" class="saveinfo" style="" id="OrderNote" name="diachi" placeholder="Địa chỉ" maxlength="300">
                        <input type="hidden" class="saveinfo" style="" id="OrderNote" name="noidung" value='<?php echo json_encode($_SESSION['giohang']); ?>'>
                       
                    </div>
                </div>
                <div class="choosepayment">
                <button class="payoffline">Thanh toán khi nhận hàng
                    <span>Xem hàng trước, không mua không sao</span>
                </button>
            </div>



            </form>
            
            
            
            <div class="clr"></div>
            
        </div>

    </div>
    <p class="provision">Bằng cách đặt hàng, bạn đồng ý với <a href="/tos" target="_blank">Điều khoản sử dụng</a> của Thegioididong</p>
    <?php
        }else{
            echo "<script language='javascript'>alert('Chưa có sản phẩm nào trong giỏ hàng!');window.location='./'</script>";
        }

            ?>
</section>
