 <?php include("controller/c_khuyenmai.php") ?>
<?php
	// kiểm tra truyển mã loại sản phẩm qua GET
	if(isset($_GET['km_ma']))
	{
		$km_ma = $_GET['km_ma'];
		$khuyenmai = new C_khuyenmai();
		$result = $khuyenmai->getdataKM($km_ma);
	}
	else
	{
		header('location: quanly_khuyenmai.php');
	}
?>

<?php
	//kiểm tra nhấn nút submit để cập nhật
	if(isset($_POST['submit']))
	{
		$ten = $_POST['tenkm'];
		$mota = $_POST['noidungkm'];
		$ketqua = $khuyenmai->updateKM($km_ma, $ten, $mota);
		echo "<meta http-equiv='refresh' content='1'>";
	}
?>
	<div id="page-wrapper">
	    <div class="row">
	        <div class="col-lg-12">
	            <h1 class="page-header">NHÀ SẢN XUẤT</h1>

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
								<form action="" method="post">
									<div>
										<label>Tên</label>
										<input type="text" class="form-control" name="tenkm" value="<?php echo $result->km_ten ?>">
									</div>
									<br>
									<div>
										<label>Nội dung khuyến mãi</label>
										<textarea name="noidungkm" class="ckeditor" id="ckeditorupdate">
											<?php echo $result->km_noidung ?>		
										</textarea>
									</div>
									<br>
									<div>
										<button type="submit" class="btn btn-primary" name="submit">Sửa</button>
									</div>
								</form>
							</div>
						</div>
				</div>
			</div>
	</div>
