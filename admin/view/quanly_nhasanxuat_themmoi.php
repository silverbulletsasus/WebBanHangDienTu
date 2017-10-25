
<?php include("controller/c_nhasanxuat.php") ?>
<?php
	if(isset($_POST['submit']))
	{
		$tenloainsx = $_POST['tennsx'];
		$motansx = $_POST['mota'];
		$c_nhasanxuat = new C_nhasanxuat();
		$ketqua = $c_nhasanxuat->addNSX($tenloainsx, $motansx);
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
					<div class="panel-heading">Thêm mới</div>
					<div class="panel-body">
						<form action="" method="post">
							<div>
								<label>Tên:</label>
								<input type="text" name="tennsx" class="form-control" placeholder="Nhập vào tên loại sản phẩm">
							</div>
							<br>
							<div>
								<label>Mô tả:</label>
								<input type="text" name="mota" class="form-control" placeholder="Nhập vào mô tả loại sản phẩm">
							</div>
							<br>
							<button type="submit" class="btn btn-primary" name="submit">Thêm mới</button>
							<button type="button" class="btn btn-primary" onclick="window.location='quanly_nhasanxuat.php'">Bỏ Qua</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
