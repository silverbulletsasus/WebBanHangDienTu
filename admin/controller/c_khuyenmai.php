<?php
	include_once("model/m_khuyenmai.php");
	class C_khuyenmai
	{
		// hiểm thị danh sách loại sản phẩm
		function showKM()
		{
			$m_khuyenmai = new M_Khuyenmai(); 
			return $m_khuyenmai->show();
		}

		// thêm loại sản phẩm
		function addKM($tenloaisp, $motaloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			if($tenloaisp != "")
			{
				$m_khuyenmai = new M_khuyenmai();
				$result = $m_khuyenmai->kiemtratontai_ten($tenloaisp);
				if(!$result)
				{
					$ketqua = $m_khuyenmai->add($tenloaisp, $motaloaisp);
					if($ketqua)
					{
						$thanhcong = "Thêm Sản Phẩm Thành Công <br/>";
						
					}
					else
					{
						$thongbao = "Không thể thêm dữ liệu vào database </br>"; 
					}
				}
				else
				{
					$thongbao = "Tên loại sản phẩm đã tồn tại </br>"; 
				}
			}
			else
			{
				$thongbao = "Tên loại sản phẩm không được để trống </br>"; 
			}
		return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}

		// lấy dữ liệu từ database
		function getdataKM($maloaisp)
		{
			$m_khuyenmai = new M_khuyenmai();
			$result = $m_khuyenmai->kiemtratontai_ma($maloaisp);
			if($result)
			{
				return $m_khuyenmai->getdata($maloaisp);
			}
			else
			{
				echo "<div style='color:red; text-align:center'>Loại sản phẩm không tồn tại</div>";
			}
		}

		//cập nhật dữ liệu
		function updateKM($maloaisp, $tenloaisp, $motaloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			if($tenloaisp != "")
			{
				$m_khuyenmai = new M_khuyenmai();
				$result = $m_khuyenmai->kiemtratontai_ma($maloaisp);
				if($result)
				{
					$check = $m_khuyenmai->update($maloaisp, $tenloaisp, $motaloaisp);
					if($check)
					{
						$thanhcong = "Thêm Sản Phẩm Thành Công <br/>";
						
					}
					else
					{
						$thongbao = "Không thể thêm dữ liệu vào database </br>"; 
					}
				}
				else
				{
					$thongbao = "Tên loại sản phẩm đã tồn tại </br>"; 
				}
			}
			else
			{
				$thongbao = "Tên loại sản phẩm không được để trống </br>"; 
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}

		// delete loai san pham
		function deleteKM($maloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			$m_khuyenmai = new M_khuyenmai();
			$check = $m_khuyenmai->kiemtratontai_ma($maloaisp);
			if($check)
			{
				$result = $m_khuyenmai->delete($maloaisp);
				if($result)
				{
					$thanhcong = "Đã xóa thành công";
				}
				else
				{
					$thongbao = "Không thể xóa";
				}
			}
			else
			{
				$thongbao = "Không tồn tại";
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}

	}
?>