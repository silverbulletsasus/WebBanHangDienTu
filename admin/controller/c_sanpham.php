<?php
	include_once("model/m_sanpham.php");
	class C_sanpham 
	{
		// hiển thị danh sách sản phẩm
		function hienthidanhsachSP()
		{
			$m_sanpham = new M_sanpham(); 
			return $m_sanpham->hienthidanhsach();
		}

		// hiển thị chi tiết sản phẩm
		function hienthichitietSP($masp)
		{
			$m_sanpham = new M_sanpham();
			return $m_sanpham->hienthichitiet($masp);
		}

		// hiển thị danh sách loại sản phẩm
		function showLSP()
		{
			$m_loaisanpham = new M_sanpham(); 
			return $m_loaisanpham->hienthiLSP();
		}

		// hiển thị danh sách nhà sản xuất
		function showNSX()
		{
			$m_loaisanpham = new M_sanpham(); 
			return $m_loaisanpham->hienthiNSX();
		}

		// thêm sản phẩm
		function addSP($tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat,$anhdaidien)
		{
			$thongbao = "";
			$thanhcong = "";
			if($tensanpham == "" || $malsp == '0' || $mansx == '0' || $motasanpham == "" )
			{
				$thongbao ="Phải điền đầy đủ dữ liệu có dấu (*)";
			}
			else
			{
				$m_sanpham = new M_sanpham();
				$result = $m_sanpham->kiemtratontai_ten($tensanpham);
				if(!$result)
				{
					$ketqua = $m_sanpham->add($tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat,$anhdaidien);
					if($ketqua)
					{
						$thanhcong = "Thêm sản phẩm thành công";
					}
					
					else
					{
						$thongbao ="Không thể thêm dữ liệu vào database";
						
					}
				}
				else
				{
					$thongbao = "Tên sản phẩm đã tồn tại"; 
				}
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}
		// xóa sản phẩm
		function deleteSP($masp)
		{
			$thongbao = "";
			$thanhcong = "";
			$m_sanpham = new M_sanpham();
			$check = $m_sanpham->delete($masp);
			if($check)
			{
				$thongbao = "Xóa thành công!</br>";
			}
			else
			{
				$thongbao = "Không xóa sản phẩm được</br>";
			
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}

		// lấy dữ liệu sản phẩm
		function getdataSP($masp)
		{
			$thongbao = "";
			$thanhcong = "";
			$m_sanpham = new M_sanpham();
			$result = $m_sanpham->kiemtratontai_ma($masp);
			if($result)
			{
				return $m_sanpham->getdata($masp);
			}
			else
			{
				$thongbao = "Loại sản phẩm không tồn tại</br>";
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}

		// lấy hình ảnh sản phẩm
		function getimagesSP($masp)
		{
			$m_sanpham = new M_sanpham();
			$result = $m_sanpham->kiemtratontai_ma($masp);
			if($result)
			{
				return $m_sanpham->getimages($masp);
				/*var_dump($m_sanpham->getimages($masp));*/
			}
			else
			{
				echo "<div style='color:red; text-align:center'>Loại sản phẩm không tồn tại</div>";
			}
		}

		// upload hinh san pham
		function uploadhsp($hinhanh, $masp)
		{
			$m_sanpham = new M_sanpham();
			$result = $m_sanpham->kiemtratontai_ma($masp);
			if($result)
			{
				$type = $hinhanh['type'];
				if($type == "image/jpg" || $type == "image/jpeg" || $type == "image/png" || $type == "image/gif")
				{
					$tentaptin = $masp."_".$hinhanh['name'];
					copy($hinhanh['tmp_name'], "public/upload/".$tentaptin);
					$check = $m_sanpham->upload($hinhanh['name'], $masp);
					if($check)
					{
						header('location: quanly_sanpham_hinhanh.php?masp='.$masp);
					}
					else
					{
						echo "<div style='color:red; text-align:center'>Upload hình ảnh không thành công!</div>";
					}
				}
				else
				{
					echo "<div style='color:red; text-align:center'>Hình ảnh không đúng định dạng!</div>";
				}
			}
			else
			{
				echo "<div style='color:red; text-align:center'>Loại sản phẩm không tồn tại</div>";
			}
		}
		// delete hình ảnh sản phẩm
		function deletehsp($mahinhxoa)
		{
			$m_sanpham = new M_sanpham();
			$hinhcanxoa = $m_sanpham->getnameimages($mahinhxoa);
			unlink("public/upload/".$hinhcanxoa->hsp_tentaptin);
			$m_sanpham->deleteimages($mahinhxoa);
			header('location: quanly_sanpham_hinhanh.php?masp='.$hinhcanxoa->sp_ma);
		}
		// UPDATE SAN PHAM
		function updateSP($masp, $tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat,$anhdaidien)
		{
			$thongbao = "";
			$thanhcong = "";
			if($tensanpham == "" || $malsp == '0' || $mansx == '0' || $motasanpham == "" )
			{
				
				$thongbao = "Phải điền đầy đủ dữ liệu có dấu (*)"; 
			}
			elseif ($anhdaidien == "") {
						$thongbao ="chưa chọn ảnh đại diện";
					}
			else
			{
				$m_sanpham = new M_sanpham();
				$ketqua = $m_sanpham->update($masp, $tensanpham, $malsp, $mansx, $giasanpham, $motasanpham, $motachitietsp, $soluongsp, $ngaycapnhat,$anhdaidien);
				if($ketqua)
				{
					$thanhcong = "Cập nhật thành công";
				}
				else
				{
					$thongbao = "Không thể cập nhật!"; 
				}
			}
			return ['thongbao'=>$thongbao,'thanhcong'=>$thanhcong];
		}
	}
?>