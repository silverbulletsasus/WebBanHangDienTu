
<?php include("controller/c_user.php") ?>
<?php
	if(isset($_POST['submit']))
	{
		
		$username = $_POST['tendangnhap'];
		$pass =  md5($_POST['matkhau']);
		$name = $_POST['tenuser'];
		$gioitinh = $_POST['gioitinh'];
		$diachi = $_POST['diachi'];
		$dienthoai = $_POST['dienthoai'];
		$email = $_POST['email'];
		$ngaysinh = $_POST['ngaysinh'];
		$trangthai = $_POST['trangthai'];
		$quantri = $_POST['quyen'];
		$user = new C_User();
		$ketqua = $user->addUser($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri);
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
							<div class="panel-heading">Thêm Mới</div>
							<div class="panel-body">
								<form action="" method="post" >
									<div>
										<label>Tên Đăng Nhập</label>
										<input type="text" class="form-control" name="tendangnhap" placeholder="Tên Đăng Nhập">
									</div>
									<br>
									<div>
										<label>Mật Khẩu</label>
										<input type="password" class="form-control" name="matkhau" placeholder="Tên Mật Khẩu">
									</div>
									<br>
									<div>
										<label>Tên Người Dùng</label>
										<input type="text" class="form-control" name="tenuser" placeholder="Tên người dùng">
									</div>
									<br>
									<div>
										<label>Giới Tính: </label>

										<input type="radio" class="" name="gioitinh" value="1" checked>Nam
										<input type="radio" class="" name="gioitinh" value="0">Nử
									</div>
									<br>
									<div>
										<label>Số Điện Thoại</label>
										<input type="text" class="form-control" name="dienthoai" placeholder="Nhập số điện thoại">
									</div>
									<br>
									<div>
										<label>Địa Chỉ</label>
										<input type="text" class="form-control" name="diachi" placeholder="Nhập địa chỉ">
									</div>
									<br>
									<div>
										<label>Email</label>
										<input type="text" class="form-control" name="email" placeholder="Nhập email">
									</div>
									<br>
									<div>
										<label>Ngày Sinh</label>
										<input type="date" class="form-control" name="ngaysinh">
									</div>
									<br>
									<div>
										<label>Trạng Thái: </label>
										<input type="radio" class="" name="trangthai" value="1" checked>Đã Kích Hoạt
										<input type="radio" class="" name="trangthai" value="0">Chưa Kích Hoạt
									</div>
									<br>
									<div>
										<label>Quyền: </label>
										<input type="radio" class="" name="quyen" value="1" >Quản trị viên
										<input type="radio" class="" name="quyen" value="0" checked>Khách Hàng
									</div>
									<div>
										<button type="submit" class="btn btn-primary" name="submit">Thêm</button>
									</div>
								</form>
							</div>
						</div>
				</div>
			</div>
	</div>