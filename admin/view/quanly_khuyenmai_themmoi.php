
<?php include("controller/c_khuyenmai.php") ?>
<?php
	if(isset($_POST['submit']))
	{
		$tenloaikm = $_POST['tenkm'];
		$motakm = $_POST['mota'];
		$c_khuyenmai = new C_khuyenmai();
		$ketqua = $c_khuyenmai->addKM($tenloaikm, $motakm);
	}

?>
<div id="page-wrapper">
	    <div class="row">
	        <div class="col-lg-12">
	            <h1 class="page-header">KHUYẾN MÃI</h1>

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
					<div class="panel-heading">Thêm mới</div>
					<div class="panel-body">
						<form action="" method="post">
							<div>
								<label>Tiêu đề:</label>
								<input type="text" name="tenkm" class="form-control" placeholder="Nhập vào tên loại sản phẩm">
							</div>
							<br>
							<div>
								<label>Nội dung:</label>
								<input type="text" name="mota" class="form-control" placeholder="Nhập vào mô tả loại sản phẩm">
							</div>
							<br>
							<button type="submit" class="btn btn-primary" name="submit">Thêm mới</button>
							<button type="button" class="btn btn-primary" onclick="window.location='quanly_khuyenmai.php'">Bỏ Qua</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
