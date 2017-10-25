
<?php include_once("../admin/controller/c_slide.php") ?>
<?php include_once("../admin/model/m_slide.php") ?>
<?php
	// xoá dữ liệu
	
	if(isset($_GET['controller']) &&  $_GET['controller'] == "slide/xoa"){
		if(isset($_GET['sl_ma']))
		{
			$sl_ma = $_GET['sl_ma'];
			$slide = new C_slide();
			$ketqua = $slide->deleteSL($sl_ma);
			
		}
		
	}
?>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">SLIDE</h1>
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
                    Danh sách
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
				<table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
					<thead>
						<tr>
							<th>ID</th>
							<th>Tên</th>
							<th>Nội Dung</th>
							<th>Ảnh Slide</th>
							<th>Cập Nhật</th>
							<th>Xóa</th>
						</tr>
					</thead>
					<tbody>
						<?php
							// lấy dữ liệu từ database
							$c_slide = new C_slide();
							$result = $c_slide->showsl();
							for($i = 0; $i < count($result); $i++)
							{

						?>
							<tr>

								<td><?php echo $result[$i]->sl_ma ?></td>
								<td><?php echo $result[$i]->sl_ten ?></td>
								<td><?php echo $result[$i]->sl_mota ?></td>
								<td align='center'><img style="max-height: 300px;max-width: 300px;" src="../public/image/<?php echo $result[$i]->sl_anh ?>"/></td>
								<td align='center'><a href="?controller=slide/sua&sl_ma=<?php echo $result[$i]->sl_ma ?>"><img src="../public/admin/images/edit.png"></a></td>
								<td align='center'><a href="?controller=slide/xoa&sl_ma=<?php echo $result[$i]->sl_ma ?>" onclick="return deleteConfirm() "><img src="../public/admin/images/delete.png"></a></td>
							</tr>
						<?php
							}
						?>
					</tbody>
				</table>	
		</div>
	</div>
</div>
