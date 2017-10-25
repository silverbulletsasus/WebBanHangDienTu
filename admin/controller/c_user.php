<?php
	include_once("model/m_user.php");
	class C_user
	{
		// hiển thị danh sách sản phẩm
		function hienthidanhsachUser()
		{
			$m_user = new M_user(); 
			return $m_user->hienthidanhsach();
		}

		// hiển thị chi tiết sản phẩm
		function hienthichitietUser($id)
		{
			$m_user = new M_user();
			return $m_user->hienthichitiet($id);
		}

		

		// hiển thị danh sách nhà sản xuất
		function showUser()
		{
			$m_user = new M_user(); 
			return $m_user->hienthiUser();
		}

		// thêm sản phẩm
		function addUser($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri)
		{
			$thongbao = "";
			$thanhcong = "";
			$m_user = new M_user();
				$ktuser = $m_user->kiemtratontai_ten($username);
				$ktemail = $m_user->kiemtratontai_email($username);
			if($username == "" || $pass == "" || $name == "" || $email == "" )
			{
				$thongbao ="Phải điền đầy đủ dữ liệu có dấu (*)";
			}
			elseif ($ktuser) {
				$thongbao ="User đã tồn tại";
					
			}
			elseif ($ktemail) {
				$thongbao ="Email đã tồn tại";
			}
			
			else
			{
				
				if(!$ktuser && !$ktemail)
				{
					$ketqua = $m_user->add($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri);
					if($ketqua)
					{
						$thanhcong = "Thêm sản phẩm thành công";
					}
					
					else
					{
						$thongbao ="Không thể thêm dữ liệu vào database";
						
					}
				}
				
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}
		function updateUser($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri)
		{
			$thongbao = "";
			$thanhcong = "";
			if($username == "" || $pass == "" || $name == "" || $email == "" )
			{
				$thongbao ="Phải điền đầy đủ dữ liệu có dấu (*)";
			}
			else
			{
				$m_user = new M_user();
				$ketqua = $m_user->update($username, $pass, $name, $gioitinh, $diachi, $dienthoai, $email, $ngaysinh, $trangthai, $quantri);
				if($ketqua)
					{
						$thanhcong = "Cập nhật thành công";
					}
					
					else
					{
						$thongbao ="Không thể thêm dữ liệu vào database";
						
					}

			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}
		// xóa sản phẩm
		function deleteUser($id)
		{
			$thongbao = "";
			$thanhcong = "";
			$m_user = new M_user();
			$check = $m_user->delete($id);
			if($check)
			{
				$thanhcong = "Xóa thành công!</br>";
			}
			else
			{
				$thongbao = "Không xóa được</br>";
			
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}

		// lấy dữ liệu sản phẩm
		function getdataUser($id)
		{
			$thongbao = "";
			$thanhcong = "";
			$m_user = new M_user();
			$result = $m_user->kiemtratontai_ten($id);
			if($result)
			{
				return $m_user->getdata($id);
			}
			else
			{
				$thongbao = "Loại sản phẩm không tồn tại</br>";
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}
		
		function dangnhapTK($username, $md5_password)
		{
			$loi = "";
			$thongbao = "";
			if($username == "" || $md5_password == "")
			{
				echo "<div style='color:red; text-align:center'>Tên tài khoản và mật khẩu không được để trống!</div>";
			}
			else
			{
				$m_user = new M_user();
				$user = $m_user->dangnhap($username, $md5_password);
				if($user)
				{
					$_SESSION['kh_ten'] = $user->kh_tendangnhap;
					$thongbao = "Đăng nhập  thành công";
				}
				else
				{
					$loi = "Đăng nhập không thành công";
				}
			}
			return ["loi"=>$loi, "thongbao"=>$thongbao];
		}

	}
?>