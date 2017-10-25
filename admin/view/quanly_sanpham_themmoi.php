
<?php include("controller/c_sanpham.php") ?>
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
		$sanpham = new C_sanpham();
		if(isset($_FILES['anhdaidien'])){
			$anhdaidien = $_FILES['anhdaidien']['name'];
			if ($_FILES['anhdaidien']['error'] > 0)
            {
                $ketqua['thongbao'] = "<br/>File Upload Bị Lỗi";

            }
            else{
                // Upload file
                move_uploaded_file($_FILES['anhdaidien']['tmp_name'], '../public/image/'.$_FILES['anhdaidien']['name']);
               	
                
            }
		}else{
			$anhdaidien = "";
		}
        $ketqua = $sanpham->addSP($tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat,$anhdaidien);
		
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
                    Thêm Mới Sản Phẩm
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
							<form action="" method="post" enctype="multipart/form-data">
								<div>
									<label>Tên sản phẩm (*):</label>
									<input type="text" class="form-control" name="txtTen" value="" placeholder="">
								</div>
								<br>
								<div>
									<label>Loại sản phẩm (*):</label>
									<select name="selectLSP" class="form-control">
										<option value="0">Chọn loại sản phẩm</option>
										<?php
											$sanpham = new C_sanpham();
											$row = $sanpham->showLSP();
											foreach($row as $data)
											{
										?>
											<option value="<?php echo $data->lsp_ma ?>"><?php echo $data->lsp_ten ?></option>
										<?php
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
											$sanpham = new C_sanpham();
											$row = $sanpham->showNSX();
											foreach($row as $data)
											{
										?>
												<option value="<?php echo $data->nsx_ma ?>"><?php echo $data->nsx_ten ?></option>
										<?php
											}
										?>
									</select>
								</div>
								<br>
								<div>
									<label>Giá :</label>
									<input type="number" class="form-control" name="txtGia" placeholder="">
								</div>
								<br>
								<div>
									<label>Thông Tin Sản Phẩm (*):</label>
									<textarea name="txtMoTaNgan" class="ckeditor" id="txtMoTaNgan"></textarea>
								</div>
								<br>
								<div class="form-group">
									<label>Mô tả chi tiết :</label>
									<textarea name="txtMoTaChiTiet" class="ckeditor" id="ckeditoradd"></textarea>
									<!-- tích hợp ckeditor cho trang thêm mới sản phẩm-->
									
								</div>
								<div>
									<label>Ảnh đại diện</label>
									<input type="file" class="form-control" name="anhdaidien" >

								</div>
								<br>
								<div>
									<label>Số lượng :</label>
									<input type="text" class="form-control" name="txtSoLuong" value="" placeholder="">
								</div>
								<br>
								<button type="submit" class="btn btn-primary" name="btn_submit">Thêm sản phẩm</button>
								<button type="button" class="btn btn-primary" name="delete" onclick="window.location='quanly_sanpham.php'">Bỏ Qua</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
