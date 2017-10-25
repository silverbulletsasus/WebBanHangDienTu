<?php
class database
{
	public $conn = '';
	public $sql = '';
	public $cursor = NULL;

	// function khoi tao, tu dong chay khi khoi tao doi tuong
	public function database()
	{
		$this->conn = new PDO('mysql:host=localhost; dbname=cusc', 'root', '');
		$this->conn->query('set names "utf8"');
		date_default_timezone_set("Asia/Bangkok");
	}

	// dat cau $sql tro thanh $sql trong class
	public function setQuery($sql)
	{
		$this->sql = $sql;
	}

	// thuc thi cau truy van, bindParam để gán giá trị của mảng options vào câu sql theo thứ tự 1,2,3
	// prepare là phương thức trong PDO dùng để kiểm tra các quy tắc SQL injection
	public function execute($options=array())
	{
		$this->cursor = $this->conn->prepare($this->sql);
		if($options)
		{
			for($i = 0; $i < count($options); $i++)
			{
				$this->cursor->bindParam($i+1, $options[$i]);
			}
		}
		$this->cursor->execute();
		return $this->cursor;
	}

	public function loadAllRow($options=array())
	{
		if(!$options)
		{
			if(!$result = $this->execute())
			{
				return false;
			}
		}
		else
		{
			if(!$result = $this->execute($options))
			{
				return false;
			}
		}
		return $result->fetchAll(PDO::FETCH_OBJ);

	}
	public function loadRow($options=array())
	{
		if(!$options)
		{
			if(!$result = $this->execute())
			{
				return false;
			}
		}
		else
		{
			if(!$result = $this->execute($options))
			{
				return false;
			}
		}
		return $result->fetch(PDO::FETCH_OBJ);

	}
}
?>