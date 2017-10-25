
<?php include_once("../admin/controller/c_khuyenmai.php") ?>
<?php include_once("../admin/model/m_khuyenmai.php") ?>
<?php
	// xoá dữ liệu
	
	if(isset($_GET['controller']) &&  $_GET['controller'] == "khuyenmai/xoa"){
		if(isset($_GET['km_ma']))
		{
			$km_ma = $_GET['km_ma'];
			$khuyenmai = new C_khuyenmai();
			$ketqua = $khuyenmai->deleteKM($km_ma);
			
		}
		
	}
?>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">KHUYẾN MÃI</h1>
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
							<th>Mã Khuyến Mãi</th>
							<th>Tên</th>
							<th>Nội Dung</th>
							<th>Cập Nhật</th>
							<th>Xóa</th>
						</tr>
					</thead>
					<tbody>
						<?php
							// lấy dữ liệu từ database
							$c_khuyenmai = new C_khuyenmai();
							$result = $c_khuyenmai->showKM();
							for($i = 0; $i < count($result); $i++)
							{

						?>
							<tr>

								<td><?php echo $result[$i]->km_ma ?></td>
								<td><?php echo $result[$i]->km_ten ?></td>
								<td><?php echo $result[$i]->km_noidung ?></td>
								<td align='center'><a href="?controller=khuyenmai/sua&km_ma=<?php echo $result[$i]->km_ma ?>"><img src="../public/admin/images/edit.png"></a></td>
								<td align='center'><a href="?controller=khuyenmai/xoa&km_ma=<?php echo $result[$i]->km_ma ?>" onclick="return deleteConfirm() "><img src="../public/admin/images/delete.png"></a></td>
							</tr>
						<?php
							}
						?>
					</tbody>
				</table>	
		</div>
	</div>
</div>
