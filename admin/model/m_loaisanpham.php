<?php
	include_once("database.php");

	class M_loaisanpham extends database
	{ 
		// hiển thị danh sách loại sản phẩm
		function show()
		{
			$sql = "select * from loaisanpham order by lsp_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// thêm loại sản phẩm
		function add($tenloaisp, $motaloaisp)
		{
			$sql = "INSERT INTO loaisanpham(lsp_ten, lsp_mota) VALUES(?, ?)";
			$this->setQuery($sql);
			return $this->execute(array($tenloaisp, $motaloaisp));
		}
		//lấy dữ liệu từ database
		function getdata($maloaisp)
		{
			$sql = "select * from loaisanpham where lsp_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		//cập nhật dữ liệu
		function update($maloaisp, $ten, $mota)
		{
			$sql = "UPDATE loaisanpham SET lsp_ten = '$ten', lsp_mota = '$mota' WHERE lsp_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		//xoá dữ liệu
		function delete($maloaisp)
		{
			$sql = "DELETE FROM loaisanpham WHERE lsp_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		// kiểm trả loại sản phẩm (theo tên loại sản phẩm) đã tồn tại chưa trước khi thêm vào database
		function kiemtratontai_ten($tenloaisp)
		{
			$sql = "select * from loaisanpham where lsp_ten = '$tenloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		
		// kiểm tra loại sản phẩm (theo mã loại sản phẩm) đã tồn tại chưa
		function kiemtratontai_ma($maloaisp)
		{
			$sql = "select * from loaisanpham where lsp_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
	}
?>