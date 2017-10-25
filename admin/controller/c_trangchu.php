<?php
	include_once("/../model/m_loaisanpham.php");
	include_once("/../model/m_khuyenmai.php");
	include_once("/../model/m_hoadon.php");
	include_once("/../model/m_sanpham.php");
	include_once("/../model/m_user.php");
	include_once("/../model/m_tintuc.php");
	include_once("/../model/m_slide.php");
	include_once("/../model/m_hoadon.php");

	class C_trangchu
	{
		function trangchu(){
		$khuyenmai = new M_khuyenmai();
		$donhang = new M_hoadon();
		$sanpham = new M_sanpham();
		$user = new M_user();
		$tintuc = new M_tintuc();
		$slide = new M_slide();
		return ['khuyenmai'=>$khuyenmai->show(),'donhang'=>$donhang->show(),'sanpham'=>$sanpham->show(),'user'=>$user->show(),'tintuc'=>$tintuc->show(),'slide'=>$slide->show()];
	}
		function sanpham($id){
			$sanpham = new M_sanpham();
			return $sanpham->find($id);
		}
		function timkiemloaisanpham($id){
			$sanpham = new M_sanpham();
			return $sanpham->timkiemloaisanpham($id);
		}
		function timkiemnhasanxuat($id){
			$sanpham = new M_sanpham();
			return $sanpham->timkiemnhasanxuat($id);
		}
		function timkiemsanpham($id){
			$sanpham = new M_sanpham();
			return $sanpham->timkiem($id);
		}
		function hienthichitiet($id){
			$sanpham = new M_sanpham();
			return $sanpham->find($id);
		}
		function thanhtoan($ten,$sdt,$diachi,$noidung){
			$sanpham = new M_hoadon();
			return $sanpham->add($ten,$sdt,$diachi,$noidung);
		}
		function dienthoai(){
			$sanpham = new M_sanpham();
			return $sanpham->dienthoai();
		}
		function tablet(){
			$sanpham = new M_sanpham();
			return $sanpham->tablet();
		}
		function laptop(){
			$sanpham = new M_sanpham();
			return $sanpham->laptop();
		}
		
	}
?>