<?php
	include_once("model/m_hoadon.php");
	class C_hoadon
	{
		// hiểm thị danh sách loại sản phẩm
		function showHD()
		{
			$m_hoadon = new M_hoadon(); 
			return $m_hoadon->show();
		}

		
		

	}
?>