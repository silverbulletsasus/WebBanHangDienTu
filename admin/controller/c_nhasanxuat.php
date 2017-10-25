<?php
	include_once("model/m_nhasanxuat.php");
	class C_nhasanxuat
	{
		// hiểm thị danh sách loại sản phẩm
		function showNSX()
		{
			$m_nhasanxuat = new M_nhasanxuat(); 
			return $m_nhasanxuat->show();
		}

		// thêm loại sản phẩm
		function addNSX($tenloaisp, $motaloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			if($tenloaisp != "")
			{
				$m_nhasanxuat = new M_nhasanxuat();
				$result = $m_nhasanxuat->kiemtratontai_ten($tenloaisp);
				if(!$result)
				{
					$ketqua = $m_nhasanxuat->add($tenloaisp, $motaloaisp);
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
		function getdataNSX($maloaisp)
		{
			$m_nhasanxuat = new M_nhasanxuat();
			$result = $m_nhasanxuat->kiemtratontai_ma($maloaisp);
			if($result)
			{
				return $m_nhasanxuat->getdata($maloaisp);
			}
			else
			{
				echo "<div style='color:red; text-align:center'>Loại sản phẩm không tồn tại</div>";
			}
		}

		//cập nhật dữ liệu
		function updateNSX($maloaisp, $tenloaisp, $motaloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			if($tenloaisp != "")
			{
				$m_nhasanxuat = new M_nhasanxuat();
				$result = $m_nhasanxuat->kiemtratontai_ma($maloaisp);
				if($result)
				{
					$check = $m_nhasanxuat->update($maloaisp, $tenloaisp, $motaloaisp);
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
		function deleteNSX($maloaisp)
		{
			$thongbao = "";
			$thanhcong = "";
			$m_nhasanxuat = new M_nhasanxuat();
			$check = $m_nhasanxuat->kiemtratontai_ma($maloaisp);
			if($check)
			{
				$result = $m_nhasanxuat->delete($maloaisp);
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