
<?php include_once("../admin/controller/c_loaisanpham.php") ?>
<?php include_once("../admin/model/m_loaisanpham.php") ?>
<?php
	// xoá dữ liệu
	
	if(isset($_GET['controller']) &&  $_GET['controller'] == "loaisanpham/xoa"){
		if(isset($_GET['lsp_ma']))
		{
			$lsp_ma = $_GET['lsp_ma'];
			$loaisanpham = new C_loaisanpham();
			$ketqua = $loaisanpham->deleteLSP($lsp_ma);
		}
		else
		{
			header('location: quanly_loaisanpham.php');
		}
	}
?>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">LOẠI SẢN PHẨM</h1>
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
							<th>Mã Loại Sản Phẩm</th>
							<th>Tên Loại Sản Phẩm</th>
							<th>Mô Tả</th>
							<th>Cập Nhật</th>
							<th>Xóa</th>
						</tr>
					</thead>
					<tbody>
						<?php
							// lấy dữ liệu từ database
							$c_loaisanpham = new C_loaisanpham();
							$result = $c_loaisanpham->showLSP();
							for($i = 0; $i < count($result); $i++)
							{

						?>
							<tr>

								<td><?php echo $result[$i]->lsp_ma ?></td>
								<td><?php echo $result[$i]->lsp_ten ?></td>
								<td><?php echo $result[$i]->lsp_mota ?></td>
								<td align='center'><a href="?controller=loaisanpham/sua&lsp_ma=<?php echo $result[$i]->lsp_ma ?>"><img src="../public/admin/images/edit.png"></a></td>
								<td align='center'><a href="?controller=loaisanpham/xoa&lsp_ma=<?php echo $result[$i]->lsp_ma ?>" onclick="return deleteConfirm() "><img src="../public/admin/images/delete.png"></a></td>
							</tr>
						<?php
							}
						?>
					</tbody>
				</table>	
		</div>
	</div>
</div>
