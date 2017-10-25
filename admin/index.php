<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>QUẢN TRỊ ADMIN</title>

    <!-- Bootstrap Core CSS -->
    <link href="../public/admin/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../public/admin/vendor/metisMenu/metisMenu.min.css" rel="stylesheet">
    <!-- DataTables CSS -->
    <link href="../public/admin/vendor/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">

    <!-- DataTables Responsive CSS -->
    <link href="../public/admin/vendor/datatables-responsive/dataTables.responsive.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../public/admin/dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="../public/admin/vendor/morrisjs/morris.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../public/admin/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        
        <?php 
        if(isset($_SESSION['kh_ten']))
        {
            echo "<nav class='navbar navbar-default navbar-static-top' role='navigation' style='margin-bottom: 0'>";
            include_once('view/giaodien/header.php'); 
            /*<!-- /.navbar-top-links -->*/

             include_once('view/giaodien/menutrai.php');
            /*<!-- /.navbar-static-side -->*/
            echo "</nav>";
            if(isset($_GET['controller'])){
                $controller = $_GET['controller'];
                switch ($controller){
                    case 'dangxuat': 
                        include_once('view/dangxuat.php');
                    case 'trangchu':
                        include_once('view/giaodien/trangchu.php');
                    break;
                    case 'loaisanpham':
                        include_once('view/quanly_loaisanpham.php');
                    break;
                    case 'loaisanpham/sua':
                        if(isset($_GET['lsp_ma'])){
                            include_once('view/quanly_loaisanpham_capnhat.php');
                        }
                    break;
                    case 'loaisanpham/them':
                         include_once('view/quanly_loaisanpham_themmoi.php');
                    break;
                    case 'loaisanpham/xoa':
                        if(isset($_GET['lsp_ma'])){
                            include_once('view/quanly_loaisanpham.php');
                        }
                    break;
                    case 'sanpham':
                        include_once('view/quanly_sanpham.php');
                    break;
                    case 'sanpham/sua':
                        if(isset($_GET['masp'])){
                            include_once('view/quanly_sanpham_capnhat.php');
                        }
                    break;
                    case 'sanpham/them':
                         include_once('view/quanly_sanpham_themmoi.php');
                    break;
                    case 'sanpham/xoa':
                        if(isset($_GET['masp'])){
                            include_once('view/quanly_sanpham.php');
                        }
                    break;
                    case 'nhasanxuat':
                        include_once('view/quanly_nhasanxuat.php');
                    break;
                    case 'nhasanxuat/sua':
                        if(isset($_GET['nsx_ma'])){
                            include_once('view/quanly_nhasanxuat_capnhat.php');
                        }
                    break;
                    case 'nhasanxuat/them':
                         include_once('view/quanly_nhasanxuat_themmoi.php');
                    break;
                    case 'nhasanxuat/xoa':
                        if(isset($_GET['nsx_ma'])){
                            include_once('view/quanly_nhasanxuat.php');
                        }
                    break;
                    case 'user':
                        include_once('view/quanly_user.php');
                    break;
                    case 'user/sua':
                        if(isset($_GET['id'])){
                            include_once('view/quanly_user_capnhat.php');
                        }
                    break;
                    case 'user/them':
                         include_once('view/quanly_user_themmoi.php');
                    break;
                    case 'user/xoa':
                        if(isset($_GET['id'])){
                            include_once('view/quanly_user.php');
                        }
                    break;
                    case 'khuyenmai':
                        include_once('view/quanly_khuyenmai.php');
                    break;
                    case 'khuyenmai/sua':
                        if(isset($_GET['km_ma'])){
                            include_once('view/quanly_khuyenmai_capnhat.php');
                        }
                    break;
                    case 'khuyenmai/them':
                         include_once('view/quanly_khuyenmai_themmoi.php');
                    break;
                    case 'khuyenmai/xoa':
                        if(isset($_GET['km_ma'])){
                            include_once('view/quanly_khuyenmai.php');
                        }
                    break;
                    case 'slide':
                        include_once('view/quanly_slide.php');
                    break;
                    case 'slide/sua':
                        if(isset($_GET['sl_ma'])){
                            include_once('view/quanly_slide_capnhat.php');
                        }
                    break;
                    case 'slide/them':
                         include_once('view/quanly_slide_themmoi.php');
                    break;
                    case 'slide/xoa':
                        if(isset($_GET['sl_ma'])){
                            include_once('view/quanly_slide.php');
                        }
                    break;
                    case 'hoadon':
                        
                            include_once('view/quanly_hoadon.php');
                        
                    break;

                    
                }
            }
            else{
                include_once('view/giaodien/trangchu.php');
            }
        }
        else{
            
            include_once('view/dangnhap.php'); 
        }
            
        ?>
        
        
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../public/admin/vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../public/admin/vendor/bootstrap/js/bootstrap.min.js"></script>

    
    <!-- Metis Menu Plugin JavaScript -->
    <script src="../public/admin/vendor/metisMenu/metisMenu.min.js"></script>

    <!-- Morris Charts JavaScript -->
    <script src="../public/admin/vendor/raphael/raphael.min.js"></script>
    <script src="../public/admin/vendor/morrisjs/morris.min.js"></script>
    <script src="../public/admin/data/morris-data.js"></script>
    <script src="../public/admin/vendor/datatables/js/jquery.dataTables.min.js"></script>
    <script src="../public/admin/vendor/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="../public/admin/vendor/datatables-responsive/dataTables.responsive.js"></script>
    <script src="../public/admin/dist/js/sb-admin-2.js"></script>
    <script src="../public/admin/ckeditor/ckeditor.js"></script>
    <script src="../public/admin/ckeditor/ckeditor.js"></script>
    <script type="text/javascript">
         $(document).ready(function() {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });
        
    </script>
    <script type="text/javascript">
        CKEDITOR.replace('ckeditorupdate',
            {
            filebrowserBrowseUrl : '../public/admin/ckfinder/ckfinder.html',
            filebrowserImageBrowseUrl : '../public/admin/ckfinder/ckfinder.html?type=Images',
            filebrowserFlashBrowseUrl : '../public/admin/ckfinder/ckfinder.html?type=Flash',
            filebrowserUploadUrl : '../public/admin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
            filebrowserImageUploadUrl : '../public/admin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
            filebrowserFlashUploadUrl : '../public/admin/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
        });


    </script>
    
    
</body>

</html>

