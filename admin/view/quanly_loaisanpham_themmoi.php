
<?php include("controller/c_loaisanpham.php") ?>
<?php
	if(isset($_POST['submit']))
	{
		$tenloailsp = $_POST['tenlsp'];
		$motalsp = $_POST['mota'];
		$c_loaisanpham = new C_loaisanpham();
		$ketqua = $c_loaisanpham->addLSP($tenloailsp, $motalsp);
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
					<div class="panel-heading">Thêm mới</div>
					<div class="panel-body">
						<form action="" method="post">
							<div>
								<label>Tên loại sản phẩm:</label>
								<input type="text" name="tenlsp" class="form-control" placeholder="Nhập vào tên loại sản phẩm">
							</div>
							<br>
							<div>
								<label>Mô tả loại sản phẩm:</label>
								<input type="text" name="mota" class="form-control" placeholder="Nhập vào mô tả loại sản phẩm">
							</div>
							<br>
							<button type="submit" class="btn btn-primary" name="submit">Thêm mới</button>
							<button type="button" class="btn btn-primary" onclick="window.location='quanly_loaisanpham.php'">Bỏ Qua</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
