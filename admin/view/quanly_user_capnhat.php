 <?php include("controller/c_user.php") ?>
<?php
	// kiểm tra truyển mã loại sản phẩm qua GET
	if(isset($_GET['id']))
	{
		$id = $_GET['id'];
		$user = new C_user();
		$result = $user->getdataUser($id);
	}
	if(isset($_POST['submit']))
	{
		$username = $result->kh_tendangnhap;
		$pass =  md5($_POST['pass']);
		$name = $_POST['tenuser'];
		$gioitinh = $_POST['gioitinh'];
		$diachi = $_POST['diachi'];
		$dienthoai = $_POST['dienthoai'];
		$email = $_POST['email'];
		$ngaysinh = $_POST['ngaysinh'];
		$trangthai = $_POST['trangthai'];
		$quantri = $_POST['quyen'];
		$ketqua = $user->updateUser($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri);
		echo "<meta http-equiv='refresh' content='1'>";
	}

?>
	<div id="page-wrapper">
	    <div class="row">
	        <div class="col-lg-12">
	            <h1 class="page-header">User</h1>

	        </div>
	        <!-- /.col-lg-12 -->
	    </div>
		     <div class="row">
		        <div class="col-lg-12">
		        <?php if(isset($ketqua['thongbao']) and $ketqua['thongbao'] != "" ){
				    	echo "<div class='alert alert-danger'>".$ketqua['thongbao']."</div>";
				    	}elseif(isset($ketqua['thanhcong']) and $ketqua['thanhcong'] != "" ){
				    		echo "<div class='alert alert-success'>".$ketqua['thanhcong']."</div>";
				    	}
				   	?>
						<div class="panel panel-default">
							<div class="panel-heading">Cập nhật thông tin</div>
							<div class="panel-body">
								<form action="" method="post" >
									<div>
										<label>Tên Đăng Nhập</label>
										
										<input disabled type="text" class="form-control" name="tendangnhap" value="<?php echo $result->kh_tendangnhap ?>">
									</div>
									<br>
									<div>
										<label>Tên Người Dùng</label>
										<input type="text" class="form-control" name="tenuser" value="<?php echo $result->kh_ten ?>">
									</div>
									<br>
									<div>
										<label>Mật Khẩu</label>
										<input type="password" class="form-control" name="pass" value="<?php echo $result->kh_matkhau ?>">
									</div>
									<br>
									<div>
										<label>Giới Tính: </label>

										<input type="radio" class="" name="gioitinh" value="1"
											<?php if($result->kh_gioitinh == 1){echo "checked";}?>
										>Nam
										<input type="radio" class="" name="gioitinh" value="0"
											<?php if($result->kh_gioitinh == 0){echo "checked";}?>
										>Nử
									</div>
									<br>
									<div>
										<label>Số Điện Thoại</label>
										<input type="text" class="form-control" name="dienthoai" value="<?php echo $result->kh_dienthoai ?>">
									</div>
									<br>
									<div>
										<label>Địa Chỉ</label>
										<input type="text" class="form-control" name="diachi" value="<?php echo $result->kh_diachi ?>">
									</div>
									<br>
									<div>
										<label>Email</label>
										<input type="text" class="form-control" name="email" value="<?php echo $result->kh_email ?>">
									</div>
									<br>
									<div>
										<label>Ngày Sinh</label>
										<input type="date" class="form-control" name="ngaysinh" value="<?php echo $result->kh_ngaysinh ?>">
									</div>
									<br>
									<div>
										<label>Trạng Thái: </label>
										<input type="radio" class="" name="trangthai" value="1"
											<?php if($result->kh_trangthai == 1){echo "checked";}?>
										>Đã Kích Hoạt
										<input type="radio" class="" name="trangthai" value="0"
											<?php if($result->kh_trangthai == 0){echo "checked";}?>
										>Chưa Kích Hoạt
									</div>
									<br>
									<div>
										<label>Quyền: </label>
										<input type="radio" class="" name="quyen" value="1"
											<?php if($result->kh_quantri == 1){echo "checked";}?>
										>Quản trị viên
										<input type="radio" class="" name="quyen" value="0"
											<?php if($result->kh_quantri == 0){echo "checked";}?>
										>Khách Hàng
									</div>
									<div>
										<button type="submit" class="btn btn-primary" name="submit">Sửa</button>
									</div>
								</form>
							</div>
						</div>
				</div>
			</div>
	</div>
