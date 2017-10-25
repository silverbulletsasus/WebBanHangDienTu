<?php
	include_once("/../model/m_sanpham.php");
	include_once("/../model/database.php");


	class C_giohang
	{
		function dathang($ma){
			$sanpham = new M_sanpham();
			$donhang = $sanpham->hienthichitiet($ma);
			echo $donhang->sp_soluong;
			if($donhang->sp_soluong >= 1)
			{
				$coroi = false;
				foreach ($_SESSION["giohang"] as $key => $row) {
					if($key == $ma)
					{
						$_SESSION["giohang"][$key]["soluong"] += 1;
						$coroi = true;
					}
				}
				if(!$coroi)
				{
					$ten = $donnhang->sp_ten;
					$gia = $donhang->sp_gia;
					$nsx = $donhang->nsx_ten;
					$dathang = array("ten"=>$ten, "gia"=>$gia, "soluong"=>1, "hang"=>$nsx);
					$_SESSION['giohang'][$ma] = $dathang;
				}
				echo "<script language='javascript'>alert('Sản phẩm đã được thêm vào giỏ hàng, truy cập giỏ hàng để xem!');</script>";
			}
			else
			{
				echo "<script>alert('Số lượng bạn đặt vượt quá số lượng trong kho');</script>";
			}
		}
	}
?>