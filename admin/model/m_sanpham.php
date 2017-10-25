<?php
	include_once("database.php");

	class M_sanpham extends database
	{
		function hienthidanhsach()
		{
			$sql = "
			select sp_ma,sp_ten,sp_gia,sp_soluong,lsp_ten,nsx_ten,anhdaidien
			from sanpham,loaisanpham,nhasanxuat 
			where loaisanpham.lsp_ma = sanpham.lsp_ma and nhasanxuat.nsx_ma = sanpham.nsx_ma
			order by sp_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function hienthichitiet($masp)
		{
			$sql = "select sp.sp_ma, sp_ten, sp_gia, sp_giacu, sp_ngaycapnhat, sp_soluong, lsp.lsp_ten, nsx.nsx_ten, sp_mota_ngan, sp_mota_chitiet,(select hsp.hsp_tentaptin from hinhsanpham hsp where hsp.sp_ma = sp.sp_ma limit 0,1) as hsp_tentaptin from sanpham sp, loaisanpham lsp, nhasanxuat nsx where sp.lsp_ma = lsp.lsp_ma and nsx.nsx_ma = sp.nsx_ma and sp_ma = '$masp' ";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		// hiển thị danh sách loại sản phẩm trong trang thêm mới sản phẩm
		function hienthiLSP()
		{
			$sql = "select * from loaisanpham order by lsp_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// hiển thị danh sách nhà sản xuất trong trang thêm mới sản phẩm
		function hienthiNSX()
		{
			$sql = "select * from nhasanxuat order by nsx_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		// thêm sản phẩm vào cơ sở dữ liệu
		function add($tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat,$anhdaidien)
		{
			$sql = "INSERT INTO sanpham(sp_ten, lsp_ma, nsx_ma, sp_gia, sp_mota_ngan, sp_mota_chitiet, sp_soluong, sp_ngaycapnhat,anhdaidien) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
			$this->setQuery($sql);
			return $this->execute(array($tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat,$anhdaidien));
		}
		// kiểm trả sản phẩm (theo tên sản phẩm) đã tồn tại chưa trước khi thêm vào database
		function kiemtratontai_ten($tensp)
		{
			$sql = "select * from sanpham where sp_ten = '$tensp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		// kiểm tra loại sản phẩm (theo mã loại sản phẩm) đã tồn tại chưa
		function kiemtratontai_ma($masp)
		{
			$sql = "select * from sanpham where sp_ma = '$masp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		// xóa sản phẩm
		function delete($masp)
		{
			$sql = "DELETE FROM sanpham where sp_ma = $masp";
			$this->setQuery($sql);
			return $this->execute();
		}

		// lấy dữ liệu sản phẩm
		function getdata($masp)
		{
			$sql = "select * from sanpham where sp_ma = '$masp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		// lấy hình ảnh sản phẩm
		function getimages($masp)
		{
			$sql = "select * from hinhsanpham where sp_ma = $masp";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// upload hình
		function upload($tentaptin, $masp)
		{
			$sql = "INSERT INTO hinhsanpham(hsp_tentaptin, sp_ma) VALUES('$tentaptin', '$masp')";
			$this->setQuery($sql);
			return $this->execute();
		}
		// lấy tên hình ảnh để xóa
		function getnameimages($mahinhxoa)
		{
			$sql = "select * from hinhsanpham where hsp_ma = $mahinhxoa";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		//xóa hình ảnh sản phẩm
		function deleteimages($mahinhxoa)
		{
			$sql = "DELETE FROM hinhsanpham where hsp_ma = $mahinhxoa";
			$this->setQuery($sql);
			return $this->execute();
		}
		// cập nhật loại sản phẩm
		function update($masp, $tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat, $anhdaidien)
		{
			$sql = "UPDATE sanpham 
			SET 
				sp_ten = '$tensanpham',
				lsp_ma = '$malsp',
				nsx_ma = '$mansx',
				sp_gia = '$giasanpham',
				sp_mota_ngan = '$motasanpham',
				sp_mota_chitiet = '$motachitietsp',
				sp_soluong = '$soluongsp',
				sp_ngaycapnhat = '$ngaycapnhat',
				anhdaidien = '$anhdaidien'
			WHERE sp_ma = $masp";
			$this->setQuery($sql);
			return $this->execute();
		}
		function find($id){
			$sql = "select * from sanpham where sp_ma = $id";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		function show(){
			$sql = "select * from sanpham,loaisanpham,nhasanxuat where loaisanpham.lsp_ma = sanpham.lsp_ma and nhasanxuat.nsx_ma = sanpham.nsx_ma";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function timkiem($key){
			$sql = "select * from sanpham where sp_ten like '%$key%'";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		
		function timkiemloaisanpham($id){
			$sql = "select * from sanpham,loaisanpham,nhasanxuat where loaisanpham.lsp_ma = sanpham.lsp_ma and nhasanxuat.nsx_ma = sanpham.nsx_ma and sanpham.lsp_ma = $id";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function timkiemnhasanxuat($id){
			$sql = "select * from sanpham,loaisanpham,nhasanxuat where loaisanpham.lsp_ma = sanpham.lsp_ma and nhasanxuat.nsx_ma = sanpham.nsx_ma and nhasanxuat.nsx_ma = $id";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function dienthoai(){

			$sql = "select sp_ma,sp_ten,sp_gia,sp_soluong,lsp_ten,nsx_ten,anhdaidien,sp_mota_ngan
			from sanpham,loaisanpham,nhasanxuat 
			where loaisanpham.lsp_ma = sanpham.lsp_ma and nhasanxuat.nsx_ma = sanpham.nsx_ma and sanpham.lsp_ma = 3
			order by sp_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function tablet(){
			$sql = "select sp_ma,sp_ten,sp_gia,sp_soluong,lsp_ten,nsx_ten,anhdaidien,sp_mota_ngan
			from sanpham,loaisanpham,nhasanxuat 
			where loaisanpham.lsp_ma = sanpham.lsp_ma and nhasanxuat.nsx_ma = sanpham.nsx_ma and sanpham.lsp_ma = 1
			order by sp_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function laptop(){
			$sql = "select sp_ma,sp_ten,sp_gia,sp_soluong,lsp_ten,nsx_ten,anhdaidien,sp_mota_ngan
			from sanpham,loaisanpham,nhasanxuat 
			where loaisanpham.lsp_ma = sanpham.lsp_ma and nhasanxuat.nsx_ma = sanpham.nsx_ma and sanpham.lsp_ma = 2
			order by sp_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
	}
?>