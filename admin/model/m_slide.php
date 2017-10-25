<?php
	
	include_once("database.php");

	class M_slide extends database
	{
		function show()
		{
			$sql = "select * from slide order by sl_ma desc";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// thêm loại sản phẩm
		function add($ten, $anhdaidien,$mota)
		{
			$sql = "INSERT INTO slide(sl_ten, sl_anh,sl_mota) VALUES(?, ?,?)";
			$this->setQuery($sql);
			return $this->execute(array($ten, $anhdaidien,$mota));
		}
		//lấy dữ liệu từ database
		function getdata($maloaisp)
		{
			$sql = "select * from slide where sl_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		//cập nhật dữ liệu
		function update($id, $ten, $anhdaidien,$mota)
		{
			$sql = "UPDATE slide SET sl_ten = '$ten', sl_anh = '$anhdaidien', sl_mota = '$mota' WHERE sl_ma = $id";
			$this->setQuery($sql);
			return $this->execute();
		}

		//xoá dữ liệu
		function delete($maloaisp)
		{
			$sql = "DELETE FROM slide WHERE sl_ma = $maloaisp";
			$this->setQuery($sql);
			return $this->execute();
		}

		// kiểm trả loại sản phẩm (theo tên loại sản phẩm) đã tồn tại chưa trước khi thêm vào database
		function kiemtratontai_ten($tenloaisp)
		{
			$sql = "select * from slide where sl_ten = '$tenloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		
		// kiểm tra loại sản phẩm (theo mã loại sản phẩm) đã tồn tại chưa
		function kiemtratontai_ma($maloaisp)
		{
			$sql = "select * from slide where sl_ma = '$maloaisp'";
			$this->setQuery($sql);
			return $this->loadRow();
		}	
      
	}
?>