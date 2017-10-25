<?php
	include_once("model/m_loaisanpham.php");
	class C_loaisanpham
	{
		// hiểm thị danh sách loại sản phẩm
		function showLSP()
		{
			$m_loaisanpham = new M_loaisanpham(); 
			return $m_loaisanpham->show();
		}

		// thêm loại sản phẩm
		function addLSP($tenloaisp, $motaloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			if($tenloaisp != "")
			{
				$m_loaisanpham = new M_loaisanpham();
				$result = $m_loaisanpham->kiemtratontai_ten($tenloaisp);
				if(!$result)
				{
					$ketqua = $m_loaisanpham->add($tenloaisp, $motaloaisp);
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
		function getdataLSP($maloaisp)
		{
			$m_loaisanpham = new M_loaisanpham();
			$result = $m_loaisanpham->kiemtratontai_ma($maloaisp);
			if($result)
			{
				return $m_loaisanpham->getdata($maloaisp);
			}
			else
			{
				echo "<div style='color:red; text-align:center'>Loại sản phẩm không tồn tại</div>";
			}
		}

		//cập nhật dữ liệu
		function updateLSP($maloaisp, $tenloaisp, $motaloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			if($tenloaisp != "")
			{
				$m_loaisanpham = new M_loaisanpham();
				$result = $m_loaisanpham->kiemtratontai_ma($maloaisp);
				if($result)
				{
					$check = $m_loaisanpham->update($maloaisp, $tenloaisp, $motaloaisp);
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
		function deleteLSP($maloaisp)
		{
			$thongbao="";
			$thanhcong="";
			$m_loaisanpham = new M_loaisanpham();
			$check = $m_loaisanpham->kiemtratontai_ma($maloaisp);
			if($check)
			{
				$result = $m_loaisanpham->delete($maloaisp);
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