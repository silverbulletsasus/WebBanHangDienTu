<?php
	include_once("database.php");

	class M_hoadon extends database
	{
		function show()
		{
			$sql = "select * from hoadon";
			$this->setQuery($sql);
			return $this->loadAllRow();
		}
		function find($id)
		{
			$sql = "select  * from hoadon where id = $id";
			$this->setQuery($sql);
			return $this->loadRow();
		}
		function add($ten,$sdt,$diachi,$noidung)
		{
			$sql = "INSERT INTO hoadon(ten, sdt,diachi,noidung) VALUES(?, ?,?,?)";
			$this->setQuery($sql);
			return $this->execute(array($ten,$sdt,$diachi,$noidung));
		}
		
        
	}
	
?>