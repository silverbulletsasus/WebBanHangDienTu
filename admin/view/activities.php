<?php include("controller/c_user.php")?>
<?php
	if(isset($_GET["taikhoan"]) && isset($_GET["ma"]))
	{
		$taikhoan = $_GET["taikhoan"];
		$ma = $_GET["ma"];
		$user = new C_user();
		$check = $user->kiemtratontaiTK($taikhoan, $ma)
		if($check)
		{
			$user->updatekichhoatTK($taikhoan);
			header('location: dangnhap.php');
		}
		else
		{
			echo '<script type="text/javascript">alert("Tài khoản hoặc mã kích hoạt không tồn tại");</script>';
		}
	}
?>