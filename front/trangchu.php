<?php include_once("/../admin/controller/c_trangchu.php") ?>

<section>
    
     <aside class="homebanner">
        <div id="sync1">
        <?php
           $data = C_trangchu::trangchu();
            $slide = $data['slide'];
           foreach ($slide as $key) {
        ?>
            <div class="item">
                <a href='#'><img src='public/image/<?php echo $key->sl_anh ?>' alt='quang cao' /></a>
            </div>
        <?php
            
            }
        ?>   
        </div>
        <div id="sync2">
        <?php
            
           foreach ($slide as $key) {
            
        ?>
            <div class="item">
                <h3><?php echo $key->sl_ten ?></h3>
                <i class="arrowbar"></i>
            </div>
        <?php
           
            }
        ?>   
        </div>
    </aside>
    <aside class="homenews">

        <figure style="background:white">
            <h2><a href="#">Tin công nghệ</a></h2>
            <b></b>
            <br/>
            <a title="Liên Hệ Hổ Trợ" href="#" class="liveevent card" target="_blank"><span id="dot"><span class="ping"></span></span><span class="text"><strong>Cần tư vấn? </strong> Liên hệ hổ trợ ngay</span></a>
        </figure>
        <ul>
            <?php
            $tintuc = $data['tintuc'];
        
           foreach ($tintuc as $key) {
        ?>
            <li>
                <a href="#">
                    <img width="100" height="70" src="<?php echo $key->tt_anh ?>">
                    <h3><?php echo $key->tt_ten ?></h3>
                    <span><?php  echo date('d-m-Y',time($key->thoigian)) ?></span>
                </a>
            </li>
            <?php
           
            }
        ?> 
        </ul>
        
    </aside>
    <div class="clr"></div>
    <!-- home products -->

    <ul class="homeproduct">
    <?php
            $sanpham = $data['sanpham'];
            
            foreach ($sanpham as $sp) {
             
        
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
