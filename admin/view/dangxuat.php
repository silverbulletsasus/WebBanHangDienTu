<?php
	if(isset($_SESSION['kh_ten']))
	{
		unset($_SESSION['kh_ten']);
		echo "<meta http-equiv='refresh' content='0'>";
	}
?>