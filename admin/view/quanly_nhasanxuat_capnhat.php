 <?php include("controller/c_nhasanxuat.php") ?>
<?php
	// kiểm tra truyển mã loại sản phẩm qua GET
	if(isset($_GET['nsx_ma']))
	{
		$nsx_ma = $_GET['nsx_ma'];
		$nhasanxuat = new C_nhasanxuat();
		$result = $nhasanxuat->getdataNSX($nsx_ma);
	}
	else
	{
		header('location: quanly_nhasanxuat.php');
	}
?>

<?php
	//kiểm tra nhấn nút submit để cập nhật
	if(isset($_POST['submit']))
	{
		$ten = $_POST['tennsx'];
		$mota = $_POST['motansx'];
		$ketqua = $nhasanxuat->updateNSX($nsx_ma, $ten, $mota);
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
										<label>Tên loại sản phẩm</label>
										<input type="text" class="form-control" name="tennsx" value="<?php echo $result->nsx_ten ?>">
									</div>
									<br>
									<div>
										<label>Mô tả loại sản phẩm</label>
										<input type="text" class="form-control" name="motansx" value="<?php echo $result->nsx_mota ?>">
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
