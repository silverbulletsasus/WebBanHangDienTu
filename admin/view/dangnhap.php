
<?php include("controller/c_user.php") ?>
<?php

	$c_user = new C_user();
	if(isset($_POST["btn_dangnhap"]))
	{
		$username = $_POST["username"];
		$password = $_POST["password"];
		$password = md5($password);
		$ketqua = $c_user->dangnhapTK($username, $password);
	}
?>
	<div class="container">
	        
		<div class="row">

			<div class="col-md-8 col-md-push-2">
			<?php 
	        		if(isset($ketqua['loi']) and $ketqua['loi'] != "" )
	        		{
				    	echo "<div class='alert alert-danger'>".$ketqua['loi']."</div>";
				    }elseif(isset($ketqua['thongbao']) and $ketqua['thongbao'] != "" ){
				    	echo "<div class='alert alert-success'>".$ketqua['thongbao']."</div>";
				    	echo "<meta http-equiv='refresh' content='0; ../admin'>";
				    }
				    
			?>

				<div class="panel panel-default">
					<div class="panel-heading">
						Đăng nhập
					</div>
					<div class="panel-body">
						<form action="" method="POST">
							<div>
								<label>Tên đăng nhập: </label>
								<input type="text" name="username" class="form-control">
							</div>
							<br>
							<div>
								<label>Mật khẩu: </label>
								<input type="password" name="password" class="form-control">
							</div>
							<br>
							<button type="submit" name="btn_dangnhap" class="btn btn-primary">Đăng nhập</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>