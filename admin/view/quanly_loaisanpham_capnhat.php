<?php include("controller/c_loaisanpham.php") ?>
<?php
	// kiểm tra truyển mã loại sản phẩm qua GET
	if(isset($_GET['lsp_ma']))
	{
		$lsp_ma = $_GET['lsp_ma'];
		$loaisanpham = new C_loaisanpham();
		$result = $loaisanpham->getdataLSP($lsp_ma);
	}
	else
	{
		header('location: quanly_loaisanpham.php');
	}
?>

<?php
	//kiểm tra nhấn nút submit để cập nhật
	if(isset($_POST['submit']))
	{
		$ten = $_POST['tenlsp'];
		$mota = $_POST['motalsp'];
		$ketqua = $loaisanpham->updateLSP($lsp_ma, $ten, $mota);
		echo "<meta http-equiv='refresh' content='1'>";
	}
?>
	<div id="page-wrapper">
	    <div class="row">
	        <div class="col-lg-12">
	            <h1 class="page-header">LOẠI SẢN PHẨM</h1>

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
										<input type="text" class="form-control" name="tenlsp" value="<?php echo $result->lsp_ten ?>">
									</div>
									<br>
									<div>
										<label>Mô tả loại sản phẩm</label>
										<input type="text" class="form-control" name="motalsp" value="<?php echo $result->lsp_mota ?>">
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
