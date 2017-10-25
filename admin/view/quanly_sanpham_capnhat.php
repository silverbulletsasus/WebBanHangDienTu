
<?php include("controller/c_sanpham.php") ?>
<?php
	if(isset($_GET['masp']))
	{
		$masp = $_GET['masp'];
		$sanpham = new C_sanpham(); // tạo đối tượng dùng cho tất cả xử lý của trang
		$data = $sanpham->getdataSP($masp);
	}
?>
<?php
	if(isset($_POST["btn_submit"]))
	{
		$tensanpham = $_POST['txtTen'];
		$malsp = $_POST['selectLSP'];
		$mansx = $_POST['selectNSX'];
		$giasanpham = $_POST['txtGia'];
		$motasanpham = $_POST['txtMoTaNgan'];
		$motachitietsp = $_POST['txtMoTaChiTiet'];
		$soluongsp = $_POST['txtSoLuong'];
		$ngaycapnhat = date('Y-m-d H:i:s');
		$anhdaidien = $_POST['txtanhdaidien'];
		if(isset($_FILES['anhdaidien'])){
			
			if ($_FILES['anhdaidien']['error'] > 0)
            {
                $ketqua['thongbao'] = "<br/>File Upload Bị Lỗi";

            }
            else{
                // Upload file
                move_uploaded_file($_FILES['anhdaidien']['tmp_name'], '../public/image/'.$_FILES['anhdaidien']['name']);
               	$anhdaidien = $_FILES['anhdaidien']['name'];
                
            }
			
		}
		
        $ketqua = $sanpham->updateSP($masp, $tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat, $anhdaidien);
        echo "<meta http-equiv='refresh' content='1'>";
		
		
	}
?>

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">SẢN PHẨM</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
         <?php if(isset($ketqua['thongbao']) and $ketqua['thongbao'] != "" ){
				    	echo "<div class='alert alert-danger'>".$ketqua['thongbao']."</div>";
				    	}elseif(isset($ketqua['thanhcong']) and $ketqua['thanhcong'] != "" ){
				    		echo "<div class='alert alert-success'>".$ketqua['thanhcong']."</div>";
				    	}
				   	?>
            <div class="panel panel-default">
            <div class="panel-heading">
                    Cập nhật sản phẩm
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
							<form action="" method="post" enctype="multipart/form-data">
								<div>
								
									<label>Tên sản phẩm (*):</label>
									<input type="text" class="form-control" name="txtTen" value="<?php echo $data->sp_ten ?>" placeholder="">
								</div>
								<br>
								<div>
									<label>Loại sản phẩm (*):</label>
									<select name="selectLSP" class="form-control">
										<option value="0">Chọn loại sản phẩm</option>
										<?php
											// lấy dữ liệu loại sản phẩm từ database
											$lsp = $sanpham->showLSP();
											foreach($lsp as $temp)
											{
												if($temp->lsp_ma == $data->lsp_ma)// so sánh dữ liệu từ $temp và dữ liệu từ $data lấy ở getdataSP
												{
													echo "<option value='".$temp->lsp_ma."' selected>".$temp->lsp_ten."</option>";
												}
												else
												{
													echo "<option value='".$temp->lsp_ma."'>".$temp->lsp_ten."</option>";
												}
											}
										?>
									</select>
								</div>
								<br>
								<div>
									<label>Hãng sản xuất (*):</label>
									<select name="selectNSX" class="form-control">
										<option value="0">Chọn nhà sản xuất</option>
										<?php
											// lấy dữ liệu loại sản phẩm từ database
											$nsx = $sanpham->showNSX();
											foreach($nsx as $temp)// so sánh dữ liệu từ $temp và dữ liệu từ $data lấy ở getdataSP
											{
												if($temp->nsx_ma == $data->nsx_ma)
												{
													echo "<option value='".$temp->nsx_ma."' selected>".$temp->nsx_ten."</option>";
												}
												else
												{
													echo "<option value='".$temp->nsx_ma."'>".$temp->nsx_ten."</option>";
												}
											}
										?>
									</select>
								</div>
								<br>
								<div>
									<label>Giá :</label>
									<input type="number" class="form-control" name="txtGia" value="<?php echo $data->sp_gia ?>" placeholder="">
								</div>
								<br>
								<div>
									<label>Thông Tin Sản Phẩm (*):</label>
									<textarea name="txtMoTaNgan" class="ckeditor" id="txtMoTaNgan"><?php echo $data->sp_mota_ngan ?></textarea>
								</div>
								<br>
								<div class="form-group">
									<label>Mô tả chi tiết :</label>
									<textarea name="txtMoTaChiTiet" class="ckeditor" id="ckeditorupdate"><?php echo $data->sp_mota_chitiet ?></textarea>
									
								</div>
								<br>
								<div>
									<label>Ảnh đại diện</label>
									<img src="../public/image/<?php echo $data->anhdaidien ?>" class="img-responsive" />
									<input type="text" class="form-control" name="txtanhdaidien"  value="<?php echo $data->anhdaidien ?>">
									<br/><input type="file" class="form-control" name="anhdaidien" >


								</div>
								<div>
									<label>Số lượng :</label>
									<input type="text" class="form-control" name="txtSoLuong" value="<?php echo $data->sp_soluong ?>" placeholder="">
								</div>
								<br>
								<button type="submit" class="btn btn-primary" name="btn_submit">Cập nhật sản phẩm</button>
								<button type="button" class="btn btn-primary" name="delete" onclick="window.location='quanly_sanpham.php'">Bỏ Qua</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
