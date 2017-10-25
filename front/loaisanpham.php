<?php include_once("/../admin/controller/c_trangchu.php") ?>
<?php
    $key = $_GET['loaisanpham']; 
    $data = C_trangchu::timkiemloaisanpham($key);
?>
<section>
    
    <div class="clr"></div>
    <!-- home products -->

    <ul class="homeproduct" style="min-height: 500px">
    <?php
            
            foreach ($data as $sp) {
             
        
        ?>
        <li>
        
            <a href="?sanpham=<?php echo $sp->sp_ma ?>">
                <img style = "width:400px;height:185px" src="public/image/<?php echo $sp->anhdaidien ?>">
                <h3><?php echo $sp->sp_ten ?></h3>
                <strong><?php echo number_format($sp->sp_gia,0,',','.') ?></strong>
                <label class="installment">Trả góp 0%</label>
            </a>
            <figure class="bginfo">
                <span class="name"><?php echo $sp->sp_ten ?></span>
                <strong><?php echo number_format($sp->sp_gia,0,',','.') ?></strong>
                <span>Nhà Sản Xuất: <?php echo $sp->nsx_ten ?></span>
                <span>Loại Sản Phẩm: <?php echo $sp->lsp_ten ?></span>
                <span><?php echo $sp->sp_mota_ngan ?></span>
            </figure>
        </li>
        <?php
            
            }
        ?>
    </ul>


    

    
</section>
