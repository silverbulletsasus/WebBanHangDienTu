<?php 
	include_once("model/database.php"); 
	class M_giohang extends database
	{
		function dathang($ma)
		{
			$sql = "SELECT a.*, b.nsx_ten FROM sanpham a, nhasanxuat b WHERE sp_ma=".$ma;
			$this->setQuery($sql);
			return $this->loadRow();
		}
	}
?>