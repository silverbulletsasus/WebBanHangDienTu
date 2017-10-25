
<?php include("controller/c_user.php") ?>
<?php 
	if(isset($_GET['id']))
	{
		// xóa sản phẩm
		$id = $_GET['id'];
		$user = new C_user();
		$ketqua  = $user->deleteUser($id);
		
	}
?>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
        
            <h1 class="page-header">USER</h1>
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
							<th>Tên Đăng Nhập</th>
							<th>Tên User</th>
							<th>Email</th>
							<th>Trạng Thái</th>
							<th>Quyền</th>
							<th>Cập Nhật</th>
							<th>Xóa</th>
						</tr>
					</thead>
					<tbody>
						<?php
							$c_user = new C_user();
							$result = $c_user->hienthidanhsachUser();
							$stt = 1;
							for($i = 0; $i < count($result); $i++)
							{
						?>
							<tr>
								<td><?php echo $stt ?></td>
								<td><?php echo $result[$i]->kh_tendangnhap ?></td>
								<td><?php echo $result[$i]->kh_ten ?></td>
								<td><?php echo $result[$i]->kh_email ?></td>
								<td> <?php if($result[$i]->kh_trangthai == 1){echo "Đã Active";}else{echo"Chưa Active";} ?> </td>
								<td> <?php if($result[$i]->kh_quantri == 1){echo "Quản trị viên";}else{echo"Khách hàng";} ?> </td>
								
								<td align='center'><a href="?controller=user/sua&id=<?php echo $result[$i]->kh_tendangnhap ?>"><img src="../public/admin/images/edit.png"></a></td>
								<td align='center'><a href="?controller=user/xoa&id=<?php echo $result[$i]->kh_tendangnhap ?>" onclick="return deleteConfirm()"><img src="../public/admin/images/delete.png"></a></td>
							</tr>
						<?php
							$stt++;
							}
						?>
					</tbody>

				</table>
					
		</div>
	</div>

