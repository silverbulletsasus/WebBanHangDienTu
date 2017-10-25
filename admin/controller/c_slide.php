<?php
	include_once("model/m_slide.php");
	class C_slide
	{
		// hiểm thị danh sách loại sản phẩm
		function showSL()
		{
			$m_slide = new M_slide(); 
			return $m_slide->show();
		}

		// thêm loại sản phẩm
		function addSL($ten, $anhdaidien,$mota)
		{
			$thanhcong = "";
			$thongbao = "";
			if($ten != "") 
			{
				$m_slide = new M_slide();
				$result = $m_slide->kiemtratontai_ten($ten);
				if(!$result)
				{
					$ketqua = $m_slide->add($ten, $anhdaidien,$mota);
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
				$thongbao = "Tên không được để trống </br>"; 
			}
		return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}

		// lấy dữ liệu từ database
		function getdataSL($maloaisp)
		{
			$m_slide = new M_slide();
			$result = $m_slide->kiemtratontai_ma($maloaisp);
			if($result)
			{
				return $m_slide->getdata($maloaisp);
			}
			else
			{
				echo "<div style='color:red; text-align:center'>Loại sản phẩm không tồn tại</div>";
			}
		}

		//cập nhật dữ liệu
		function updateSL($id, $ten, $anhdaidien,$mota)
		{
			$thanhcong = "";
			$thongbao = "";
			if($ten != "")
			{
				$m_slide = new M_slide();
				$result = $m_slide->kiemtratontai_ma($id);
				if($result)
				{
					$check = $m_slide->update($id, $ten, $anhdaidien,$mota);
					if($check)
					{
						$thanhcong = "Áp dụng Thành Công <br/>";
						
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
		function deleteSL($maloaisp)
		{
			$thanhcong = "";
			$thongbao = "";
			$m_slide = new M_slide();
			$check = $m_slide->kiemtratontai_ma($maloaisp);
			if($check)
			{
				$result = $m_slide->delete($maloaisp);
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