<?php include("header.php") ?>
<?php include("controller/c_user.php") ?>

<?php
	$c_user = new C_user();
	if(isset($_POST["btn_submit"]))
	{
		$username = $_POST["username"];
		$password = $_POST["password"];
		$repassword = $_POST["repassword"];
		$name = $_POST["name"];
		$email = $_POST["email"];
		$diachi = $_POST["diachi"];
		$dienthoai = $_POST["dienthoai"];
		if(isset($_POST['gioitinh']))
		{
			$gioitinh = $_POST["gioitinh"];
		}
		else
		{
			$gioitinh = 0;
		}
		$ngaysinh = $_POST["ngaysinh"];
		$user = $c_user->dangkyTK($username, $password, $repassword, $name, $email, $diachi, $dienthoai, $gioitinh, $ngaysinh);
	}
?>

	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-push-2">
				<div class="panel panel-default">
					<div class="panel-heading">Đăng ký tài khoản</div>
					<div class="panel-body">
						<form method="POST" action="">
							<div class="form-group">
								<label class="control-label">Tên tài khoản(*):</label>
								<input type="text" class="form-control" name="username" value="<?php if(isset($_POST['username'])) echo $_POST['username'] ?>">
							</div>
							<div class="form-group">
								<label>Mật khẩu(*):</label>
								<input type="password" class="form-control" name="password" value="<?php if(isset($_POST['password'])) echo $_POST['password'] ?>">
							</div>
							<div class="form-group">
								<label>Nhập lại mật khẩu(*):</label>
								<input type="password" class="form-control" name="repassword" value="<?php if(isset($_POST['repassword'])) echo $_POST['repassword'] ?>">
							</div>
							<div class="form-group">
								<label>Họ tên(*):</label>
								<input type="text" class="form-control" name="name" value="<?php if(isset($_POST['name'])) echo $_POST['name'] ?>">
							</div>
							<div class="form-group">
								<label>Email(*):</label>
								<input type="email" class="form-control" name="email" value="<?php if(isset($_POST['email'])) echo $_POST['email'] ?>">
							</div>
							<div class="form-group">
								<label>Địa chỉ(*):</label>
								<input type="text" class="form-control" name="diachi" value="<?php if(isset($_POST['diachi'])) echo $_POST['diachi'] ?>">
							</div>
							<div class="form-group">
								<label>Điện thoại(*):</label>
								<input type="text" class="form-control" name="dienthoai" value="<?php if(isset($_POST['dienthoai'])) echo $_POST['dienthoai'] ?>">
							</div>
							<div class="form-group">
								<label>Giới tính(*):</label>
								<div>	
									<label class="radio-inline"><input type="radio" name="gioitinh" value="0" <?php if(isset($gioitinh) && $gioitinh == 0){ echo "checked"; } ?>>Nam</label>
									<label class="radio-inline"><input type="radio"  name="gioitinh" value="1" <?php if(isset($gioitinh) && $gioitinh == 1){ echo "checked"; } ?>>Nữ</label>
								</div>
							</div>
							<div class="form-group">
								<div class='input-group date' id='datetimepicker'>
									<label>Ngày sinh(*):</label>
									<input type="text" class="form-control" name="ngaysinh" value="<?php if(isset($_POST['ngaysinh'])) echo $_POST['ngaysinh'] ?>">
									<span class="input-group-addon">
	                        			<span class="glyphicon glyphicon-calendar"></span>
	                    			</span>
								</div>
							</div>
							<button type="submit" class="btn btn-success" name="btn_submit">Đăng ký</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php include("footer.php") ?>