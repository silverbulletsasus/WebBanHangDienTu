 <?php include("controller/c_slide.php") ?>
<?php
	// kiểm tra truyển mã loại sản phẩm qua GET
	if(isset($_GET['sl_ma']))
	{
		$sl_ma = $_GET['sl_ma'];

		$slide = new C_slide();
		$result = $slide->getdataSL($sl_ma);
	}
	//kiểm tra nhấn nút submit để cập nhật
	if(isset($_POST['submit']))
	{
		$ten = $_POST['tensl'];
		$mota = $_POST['noidung'];
		$id = $_GET['sl_ma'];
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
		
		$ketqua = $slide->updateSL($id, $ten, $anhdaidien, $mota);
		echo "<meta http-equiv='refresh' content='1'>";
	}
?>
	<div id="page-wrapper">
	    <div class="row">
	        <div class="col-lg-12">
	            <h1 class="page-header">SLIDE</h1>

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
								<form action="" method="post" enctype="multipart/form-data">
									<div>
										<label>Tên</label>
										<input type="text" class="form-control" name="tensl" value="<?php echo $result->sl_ten ?>">
									</div>
									<br>
									<div>
										<label>Nội dung khuyến mãi</label>
										<input type="text" class="form-control" name="noidung" value="<?php echo $result->sl_mota ?>">
													
										
									</div>
									<br>
									<div>
									<label>Ảnh đại diện</label>
									<img src="../public/image/<?php echo $result->sl_anh ?>" class="img-responsive" />
									<input type="text" class="form-control" name="txtanhdaidien" value="<?php echo $result->sl_anh ?>">
									<br/>
									<input type="file" class="form-control" name="anhdaidien" >


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
