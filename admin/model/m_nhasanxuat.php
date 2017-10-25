<?php
	include_once("database.php");

	class M_nhasanxuat extends database
	{
		// hiển thị danh sách loại sản phẩm
		function show()
		{
			$sql = "select * from nhasanxuat order by nsx_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// thêm loại sản phẩm
		function add($tenloaisp, $motaloaisp)
		{
			$sql = "INSERT INTO nhasanxuat(nsx_ten, nsx_mota) VALUES(?, ?)";
			$this->setQuery($sql);
			return $this->execute(array($tenloaisp, $motaloaisp));
		}
		//lấy dữ liệu từ database
		function getdata($maloaisp)
		{
			$sql = "select * from nhasanxuat where nsx_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		//cập nhật dữ liệu
		function update($maloaisp, $ten, $mota)
		{
			$sql = "UPDATE nhasanxuat SET nsx_ten = '$ten', nsx_mota = '$mota' WHERE nsx_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		//xoá dữ liệu
		function delete($maloaisp)
		{
			$sql = "DELETE FROM nhasanxuat WHERE nsx_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		// kiểm trả loại sản phẩm (theo tên loại sản phẩm) đã tồn tại chưa trước khi thêm vào database
		function kiemtratontai_ten($tenloaisp)
		{
			$sql = "select * from nhasanxuat where nsx_ten = '$tenloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		
		// kiểm tra loại sản phẩm (theo mã loại sản phẩm) đã tồn tại chưa
		function kiemtratontai_ma($maloaisp)
		{
			$sql = "select * from nhasanxuat where nsx_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
	}
?>