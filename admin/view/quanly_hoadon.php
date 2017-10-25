
<?php include_once("../admin/controller/c_hoadon.php") ?>
<?php include_once("../admin/model/m_hoadon.php") ?>
<?php
	// xoá dữ liệu
	
	
?>
<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">HÓA ĐƠN</h1>
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
							<th>Mã </th>
							<th>Tên</th>
							<th>Số Điện Thoại</th>
							<th>Địa Chỉ</th>
							<th>Nội Dung</th>
							<th>Thời Gian</th>
							
						</tr>
					</thead>
					<tbody>
						<?php
							// lấy dữ liệu từ database
							$c_hoadon = new C_hoadon();
							$result = $c_hoadon->showHD();
							for($i = 0; $i < count($result); $i++)
							{

						?>
							<tr>

								<td><?php echo $result[$i]->id ?></td>
								<td><?php echo $result[$i]->ten ?></td>
								<td><?php echo $result[$i]->sdt ?></td>
								<td><?php echo $result[$i]->diachi ?></td>
								<td><?php 
								$data = json_decode($result[$i]->noidung);	
								//print_r($data);
								
								foreach ($data as $key) {
										echo "Sản Phẩm: ".$key->ten."<br/>";
										echo "Số Lượng: ".$key->soluong."<br/>";
										
								
								}


								?></td>
								<td><?php echo $result[$i]->thoigian ?></td>
							</tr>
						<?php
							}
						?>
					</tbody>
				</table>	
		</div>
	</div>
</div>
