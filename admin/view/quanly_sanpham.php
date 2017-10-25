
<?php include("controller/c_sanpham.php") ?>

<?php 
	if(isset($_GET['masp']))
	{
		// xóa sản phẩm
		$masp = $_GET['masp'];
		$sanpham = new C_sanpham();
		
		
		$ketqua  = $sanpham->deleteSP($masp);
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
                    Danh sách sản phẩm
                </div>
                
                <!-- /.panel-heading -->
                <div class="panel-body">
				<table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
					<thead>
						<tr>
							<th>Số Thứ Tự</th>
							<th>Mã Sản Phẩm</th>
							<th>Tên Sản Phẩm</th>
							<th>Giá</th>
							<th>Số Lượng</th>
							<th>Loại Sản Phẩm</th>
							<th>Nhà Sản Xuất</th>
							<th>Hình Ảnh</th>
							<th>Cập Nhật</th>
							<th>Xóa</th>
						</tr>
					</thead>
					<tbody>
						<?php
							$c_sanpham = new C_sanpham();
							$result = $c_sanpham->hienthidanhsachSP();
							$stt = 1;
							for($i = 0; $i < count($result); $i++)
							{
						?>
							<tr>
								<td><?php echo $stt ?></td>
								<td><?php echo $result[$i]->sp_ma ?></td>
								<td><?php echo $result[$i]->sp_ten ?></td>
								<td><?php echo number_format($result[$i]->sp_gia,0,',','.') ?></td>
								<td><?php echo $result[$i]->sp_soluong ?></td>
								<td><?php echo $result[$i]->lsp_ten ?></td>
								<td><?php echo $result[$i]->nsx_ten ?></td>
								<td align='center'><img style="max-height: 300px;max-width: 300px;" src="../public/image/<?php echo $result[$i]->anhdaidien ?>"/></td>
								<td align='center'><a href="?controller=sanpham/sua&masp=<?php echo $result[$i]->sp_ma ?>"><img src="../public/admin/images/edit.png"></a></td>
								<td align='center'><a href="?controller=sanpham/xoa&masp=<?php echo $result[$i]->sp_ma ?>" onclick="return deleteConfirm()"><img src="../public/admin/images/delete.png"></a></td>
							</tr>
						<?php
							$stt++;
							}
						?>
					</tbody>

				</table>
					
		</div>
	</div>

