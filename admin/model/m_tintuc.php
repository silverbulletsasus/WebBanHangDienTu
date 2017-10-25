<?php
include_once("database.php");
	class M_tintuc extends database
	{
		function show()
		{
			$sql = "select * from tintuc order by tt_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// thêm loại sản phẩm
		function add($ten, $anhdaidien,$mota)
		{
			$sql = "INSERT INTO tintuc(tt_ten, tt_anh,tt_mota) VALUES(?, ?,?)";
			$this->setQuery($sql);
			return $this->execute(array($ten, $anhdaidien,$mota));
		}
		//lấy dữ liệu từ database
		function getdata($maloaisp)
		{
			$sql = "select * from tintuc where tt_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		//cập nhật dữ liệu
		function update($id, $ten, $anhdaidien,$mota)
		{
			$sql = "UPDATE tintuc SET tt_ten = '$ten', tt_anh = '$anhdaidien', tt_mota = '$mota' WHERE tt_ma = $id";
			$this->setQuery($sql);
			return $this->execute();
		}

		//xoá dữ liệu
		function delete($maloaisp)
		{
			$sql = "DELETE FROM tintuc WHERE tt_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		// kiểm trả loại sản phẩm (theo tên loại sản phẩm) đã tồn tại chưa trước khi thêm vào database
		function kiemtratontai_ten($tenloaisp)
		{
			$sql = "select * from tintuc where tt_ten = '$tenloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		
		// kiểm tra loại sản phẩm (theo mã loại sản phẩm) đã tồn tại chưa
		function kiemtratontai_ma($maloaisp)
		{
			$sql = "select * from tintuc where tt_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
	}
?>