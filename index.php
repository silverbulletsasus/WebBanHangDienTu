<!doctype html>
<html lang="vi">

<head>
    <title>Thegioididong.com - Siêu thị điện thoại, Tablet, Laptop, Phụ kiện chính hãng</title>
    <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />

    <link rel="stylesheet" href="public/giaodien/css/style.css" />
    <link rel="stylesheet" href="public/giaodien/css/sanpham.css" />
    
</head>

<body>


    <?php 
    
    session_start();
    if(!isset($_SESSION["giohang"])){
        $_SESSION["giohang"] = array();
    }
    if(isset($_GET['sanpham'])){
        
        include_once('front/sanpham.php');           
    }
    elseif(isset($_GET['loaisanpham'])){
        
        include_once('front/loaisanpham.php');           
    }
    elseif(isset($_GET['nhasanxuat'])){
        
        include_once('front/nhasanxuat.php');           
    }
    elseif(isset($_GET['dathang'])){
        
        include_once('front/giohang.php');           
    }
    elseif(isset($_GET['timkiem'])){
        
        include_once('front/timkiem.php');           
    }

    elseif(isset($_GET['trang']) && $_GET['trang'] == 'giohang'){
        
        include_once('front/giohang.php');           
    }
    elseif(isset($_GET['trang']) && $_GET['trang'] == 'thanhtoan'){
        
        include_once('front/hoadon.php');           
    }
    elseif(isset($_GET['trang']) && $_GET['trang'] == 'dienthoai'){
        
        include_once('front/dienthoai.php');           
    }
    elseif(isset($_GET['trang']) && $_GET['trang'] == 'laptop'){
        
        include_once('front/dienthoai.php');           
    }
    elseif(isset($_GET['trang']) && $_GET['trang'] == 'tablet'){
        
        include_once('front/dienthoai.php');           
    }
    else{
        include_once('front/trangchu.php');
    } 
 
    ?>


    <br/>
    <?php if(isset($_SESSION["giohang"]) && count($_SESSION["giohang"])>0) { ?>
<a href="?trang=giohang" class="stickcart">
    <div><i class="icontgdd-cartstick"></i></div>
    <span>Giỏ hàng có</span> <strong><?php echo count($_SESSION["giohang"]); ?> Sản Phẩm</strong>
</a> 
     <?php }else{}?> 
    <header>
        <div class="wrap-main">
            <a class="logo" title="Về trang chủ Thegioididong.com" href="./">
                <i class="icontgdd-logo"></i>
            </a>
            <form id="search-site" action="?timkiem" method="get" onsubmit="return submitSearchForm();" autocomplete="off">
                <input class="topinput" id="search-keyword" name="timkiem" type="text" placeholder="Bạn tìm gì..." autocomplete="off" maxlength="50" />
                <button class="btntop" type="submit"><i class="icontgdd-topsearch"></i></button>
            </form>
            <nav>
                <a href="?trang=dienthoai" class="mobile" title="Điện thoại di động, smartphone">
                    <i class="icontgdd-mobile"></i>Điện thoại
                </a>
                <a href="?trang=tablet" class="tablet" title="Máy tính bảng, tablet">
                    <i class="icontgdd-tablet"></i>Tablet
                </a>
                <a href="?trang=laptop" class="laptop" title="Máy tính xách tay, Laptop">
                    <i class="icontgdd-laptop"></i>Laptop
                </a>
               
            </nav>
        </div>
        <div class="clr"></div>
    </header>
    <footer>
        <div class="rowfoot1">
            <ul class="colfoot">
                <li><a href="/tra-gop" title="Hướng dẫn mua trả góp">Tìm hiểu về mua trả góp</a></li>
                <li><a href="/bao-hanh" title="Tìm trung tâm bảo hành">Tìm trung tâm bảo hành hãng</a></li>
                <li><a href="/chinh-sach-bao-hanh-san-pham" title="Chính sách đổi trả">Chính sách đổi trả</a></li>
                <li><a href="/giao-hang" title="Giao hàng & Thanh toán">Giao hàng & Thanh toán</a></li>
                <li class="showmore"><a href="javascript:ShowMoreFooterSupportLink()" title="Xem thêm">Xem thêm</a></li>
                <li class="hidden"><a href="/huong-dan-mua-hang" title="Hướng dẫn mua online">Hướng dẫn mua online</a></li>
                <li class="hidden"><a href="/b2b" title="Mua hàng doanh nghiệp">Bán hàng doanh nghiệp</a></li>
                <li class="hidden"><a href="/phieu-mua-hang" title="Phiếu mua hàng">Phiếu mua hàng</a></li>
                <li class="hidden"><a href="//hddt.thegioididong.com" target="_blank" title="In hóa đơn điện tử" rel="nofollow">In hóa đơn điện tử</a></li>
                <li class="hidden"><a href="/tos" title="Quy chế hoạt động">Quy chế hoạt động</a></li>
                <li class="hidden"><a href="/noi-quy-cua-hang" title="Nội quy cửa hàng">Nội quy cửa hàng</a></li>
                <li class="hidden"><a href="/chat-luong-phuc-vu" title="Chất lượng phục vụ">Chất lượng phục vụ</a></li>
                <li class="hidden"><a href="/trao-thuong" title="Thông tin trao thưởng">Thông tin trao thưởng</a></li>
            </ul>
            <ul class="colfoot">
                <li><a href="http://mwg.vn" target="_blank" title="Giới thiệu công ty (mwg.vn)">Giới thiệu công ty <span>(mwg.vn)</span></a></li>
                <li><a href="//vieclam.thegioididong.com" target="_blank" title="Tuyển dụng">Tuyển dụng</a></li>
                <li><a href="/lien-he" title="Gửi góp ý, khiếu nại">Gửi góp ý, khiếu nại</a></li>
                <li><a href="/he-thong-sieu-thi-the-gioi-di-dong" title="Tìm siêu thị (1502  shop)">Tìm siêu thị <span>(1502 shop)</span></a></li>
                <li>
                    <a class="viewmb" rel="nofollow" href="javascript:window.location.href='/?sclient=mobile'" title="Xem bản mobile">Xem bản mobile</a>
                </li>
            </ul>
            <ul class="colfoot">
                <li>
                    <p>Gọi mua hàng <a href="tel:18001060">1800.1060</a> (7:30 - 22:00)</p>
                    <p>Gọi khiếu nại <a href="tel:18001062">1800.1062</a> (8:00 - 21:30)</p>
                    <p>Gọi bảo hành<a href="tel:18001064">1800.1064</a> (8:00 - 21:00)</p>
                    <a target="_blank" rel="nofollow" class="bct" href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=20098"><i class="icontgdd-bct"></i></a>
                </li>
            </ul>
            <ul class="colfoot collast">
                <li>
                    <a target="_blank" href="https://facebook.com/thegioididongcom" class="linkfb">
                        <i class="icontgdd-share1"></i>2.8tr
                    </a>
                    <a target="_blank" href="https://www.youtube.com/user/TGDDVideoReviews?sub_confirmation=1" class="linkyt">
                        <i class="icontgdd-share3"></i>221.5k
                    </a>
                    <div class="group">
                        <label>Website cùng tập đoàn:</label>
                        <a href="//www.dienmayxanh.com" target="_blank" rel="noopener" class="dm"><i class="iconlogo-dmx"></i></a>
                        <a href="//www.bachhoaxanh.com" target="_blank" rel="noopener" class="bhx"><i class="iconlogo-bhx"></i></a>
                        <a href="//www.vuivui.com" target="_blank" rel="noopener" class="vv"><i class="iconlogo-vv"></i></a>
                    </div>

                </li>
            </ul>
        </div>
        <div class="rowfoot2">
            <p>© 2016. Công ty cổ phần Thế Giới Di Động. Văn phòng: Lầu 5 Etown 2, 364 Cộng Hòa, Q.Tân Bình, TP.Hồ Chí Minh. GP số 22/GP-ICP-STTTT do Sở TTTT TP HCM cấp ngày 20/03/2012. Chịu trách nhiệm nội dung: Điêu Chính Hải Triều. <a href="/tos">Xem chính sách sử dụng web</a></p>
        </div>
    </footer>

    <p id="back-top">
        <a href="#top" title="Về Đầu Trang">
            <span></span>
        </a>
    </p>
    <script defer="defer" async="async" src="public/giaodien/js/home.js"></script>
    <div id="dlding">Đang xử lý, vui lòng đợi trong giây lát...</div>
</body>

</html>
