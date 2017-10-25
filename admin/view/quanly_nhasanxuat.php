<?php include_once("../admin/controller/c_nhasanxuat.php") ?>
<?php include_once("../admin/model/m_nhasanxuat.php") ?>
<?php
	// xoá dữ liệu
	
	if(isset($_GET['controller']) &&  $_GET['controller'] == "nhasanxuat/xoa"){
		if(isset($_GET['nsx_ma']))
		{
			$nsx_ma = $_GET['nsx_ma'];
			$nhasanxuat = new C_nhasanxuat();
			$ketqua = $nhasanxuat->deleteNSX($nsx_ma);
		}
		else
		{
			header('location: quanly_nhasanxuat.php');
		}
	}
?>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">

            <h1 class="page-header">NHÀ SẢN XUÂT</h1>
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
							<th>Mã</th>
							<th>Tên</th>
							<th>Mô Tả</th>
							<th>Cập Nhật</th>
							<th>Xóa</th>
						</tr>
					</thead>
					<tbody>
						<?php
							// lấy dữ liệu từ database
							$c_nhasanxuat = new C_nhasanxuat();
							$result = $c_nhasanxuat->shownsx();
							for($i = 0; $i < count($result); $i++)
							{

						?>
							<tr>

								<td><?php echo $result[$i]->nsx_ma ?></td>
								<td><?php echo $result[$i]->nsx_ten ?></td>
								<td><?php echo $result[$i]->nsx_mota ?></td>
								<td align='center'><a href="?controller=nhasanxuat/sua&nsx_ma=<?php echo $result[$i]->nsx_ma ?>"><img src="../public/admin/images/edit.png"></a></td>
								<td align='center'><a href="?controller=nhasanxuat/xoa&nsx_ma=<?php echo $result[$i]->nsx_ma ?>" onclick="return deleteConfirm() "><img src="../public/admin/images/delete.png"></a></td>
							</tr>
						<?php
							}
						?>
					</tbody>
				</table>	
		</div>
	</div>
</div>
