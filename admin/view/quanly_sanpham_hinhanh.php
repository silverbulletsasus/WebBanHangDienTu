<?php include("header.php") ?>
<?php include("controller/c_sanpham.php") ?>
<?php
	// lấy dữ liệu sản phẩm từ database
	if(isset($_GET['masp']))
	{
		$masp = $_GET['masp'];
		$sanpham = new C_sanpham();
		$row = $sanpham->getdataSP($masp);
	}
?>
<?php
	//upload hình ảnh
	if(isset($_POST['btn_submit']))
	{
		$hinhanh = $_FILES['txtFile'];
		$sanpham = new C_sanpham();
		$sanpham->uploadhsp($hinhanh, $masp);
	}
?>
<?php
	//delete hình ảnh
	if(isset($_GET['mahinhxoa']))
	{
		$mahinhxoa = $_GET['mahinhxoa'];
		$sanpham = new C_sanpham();
		$sanpham->deletehsp($mahinhxoa);
	}
?>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-push-2">
				<div class="panel panel-default">
					<div class="panel-heading">
						Cập nhật hình ảnh sản phẩm
					</div>
					<div class="panel-body">
						<form action="" method="POST" enctype="multipart/form-data">
							<div class="form-group">
								<label class="control-label">Mã Sản Phẩm:</label>
								<input type="text" class="form-control" name="txtMa" value="<?php echo $row->sp_ma ?>" readonly="readonly">
							</div>
							<div class="form-group">
								<label class="control-label">Tên Sản Phẩm</label>
								<input type="text" class="form-control" name="txtName" value="<?php echo $row->sp_ten ?>"  readonly="readonly">
							</div>
							<div class="form-group">
								<label class="control-label">Thêm hình ảnh sản phẩm</label>
								<input type="file" class="form-control" name="txtFile">
							</div>
							<button type="submit" class="btn btn-primary" name="btn_submit">Lưu Hình Ảnh</button>
							<button type="button" class="btn btn-primary" onclick="window.location='quanly_sanpham.php'">Đóng</button>
						</form>
					</div>
				</div>

				<table class="table table-hover table-bordered">
					<tr>
						<th>STT</th>
						<th>Mã Hình</th>
						<th>Hình</th>
						<th>Xóa</th>
					</tr>
					<?php
						// lấy hình ảnh sản phẩm
						$stt = 1;
						$sanpham = new C_sanpham();
						$image = $sanpham->getimagesSP($masp);
						foreach($image as $data) {
					?>
					<tr>
						<td><?php echo $stt ?></td>
						<td><?php echo $data->hsp_ma ?></td>
						<td><img src="public/upload/<?php echo $data->hsp_tentaptin ?>"></td>
						<td><a href="?mahinhxoa=<?php echo $data->hsp_ma ?>" onclick="return deleteConfirm()"><img src="public/images/delete.png"></a></td>
					</tr>
					<?php
						$stt++;
						}
					?>
				</table>
			</div>
		</div>
	</div>
<?php include("footer.php") ?>.