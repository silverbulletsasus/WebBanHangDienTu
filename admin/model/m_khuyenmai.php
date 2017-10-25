<?php
	include_once("database.php");

	class M_khuyenmai extends database
	{
		function show()
		{
			$sql = "select * from khuyenmai order by km_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function all()
		{
			$sql = "select * from khuyenmai order by km_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// thêm loại sản phẩm
		function add($tenloaisp, $motaloaisp)
		{
			$sql = "INSERT INTO khuyenmai(km_ten, km_noidung) VALUES(?, ?)";
			$this->setQuery($sql);
			return $this->execute(array($tenloaisp, $motaloaisp));
		}
		//lấy dữ liệu từ database
		function getdata($maloaisp)
		{
			$sql = "select * from khuyenmai where km_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		//cập nhật dữ liệu
		function update($maloaisp, $ten, $mota)
		{
			$sql = "UPDATE khuyenmai SET km_ten = '$ten', km_noidung = '$mota' WHERE km_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		//xoá dữ liệu
		function delete($maloaisp)
		{
			$sql = "DELETE FROM khuyenmai WHERE km_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		// kiểm trả loại sản phẩm (theo tên loại sản phẩm) đã tồn tại chưa trước khi thêm vào database
		function kiemtratontai_ten($tenloaisp)
		{
			$sql = "select * from khuyenmai where km_ten = '$tenloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		
		// kiểm tra loại sản phẩm (theo mã loại sản phẩm) đã tồn tại chưa
		function kiemtratontai_ma($maloaisp)
		{
			$sql = "select * from khuyenmai where km_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		
        
	}
	
?>