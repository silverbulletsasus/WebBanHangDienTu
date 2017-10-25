<?php
	include_once("database.php");
	class M_user extends database
	{
		function add($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri)
		{
			$sql = "INSERT INTO khachhang(kh_tendangnhap, kh_matkhau, kh_ten, kh_gioitinh, kh_diachi, kh_dienthoai, kh_email, kh_ngaysinh, kh_trangthai, kh_quantri) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			$this->setQuery($sql);
			// có thể dùng md5 nhiều lần hoặc nối với 1 chuỗi nào đó để tăng độ khó
			$result = $this->execute(array($username, md5($pass), $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri));
			if($result)
			{
			
				return true;
			}
			else false;
		}
		function all()
		{
			$sql = "select * from khachhang";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function show()
		{
			$sql = "select * from khachhang";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}

		// thêm loại sản phẩm
		
		//lấy dữ liệu từ database
		function getdata($kh_tendangnhap)
		{
			$sql = "select * from khachhang where kh_tendangnhap = '$kh_tendangnhap'";
			$this->setQuery($sql);
			return $this->loadRow();
		}

		//cập nhật dữ liệu
		function update($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri)
		{
			
			$sql = "UPDATE khachhang 
			SET
				kh_matkhau = '$pass',
				kh_ten = '$name',
				kh_gioitinh = '$gioitinh',
				kh_diachi = '$diachi',
				kh_dienthoai = '$dienthoai',
				kh_email = '$email',
				kh_ngaysinh = '$ngaysinh',
				kh_trangthai = '$trangthai',
				kh_quantri = '$quantri'
			WHERE kh_tendangnhap = '$username'";
			$this->setQuery($sql);
			return $this->execute();
		}

		//xoá dữ liệu
		function delete($id)
		{
			$sql = "DELETE FROM khachhang WHERE kh_tendangnhap = '$id";
			$this->setQuery($sql);
			return $this->execute();
		}
		function kiemtratontai_ten($username)
		{
			$sql = "select * from khachhang where kh_tendangnhap = '$username'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		function kiemtratontai_email($email)
		{
			$sql = "select * from khachhang where kh_email = '$email'";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		function hienthidanhsach()
		{
			$sql = "
			select *
			from khachhang";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		
		function dangnhap($username, $md5_password)
		{
			$sql = "SELECT * FROM khachhang WHERE kh_tendangnhap = '$username' AND kh_matkhau = '$md5_password' AND kh_trangthai = 1";
			$this->setQuery($sql);
			return $this->loadRow(array($username, $md5_password));
		}
		
	}
?>