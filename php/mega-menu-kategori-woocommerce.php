<?php
function mega_menu_category_with_products_shortcode() {
    ob_start();
    // Ambil kategori induk
    $parent_categories = get_terms(array(
        'taxonomy' => 'product_cat',
        'parent' => 0,
        'hide_empty' => false,
        'exclude' => array(15)
    ));
    if (!empty($parent_categories) && !is_wp_error($parent_categories)) {
        echo '<div class="mega-menu-wrapper">';
        // KIRI: Daftar Kategori
        echo '<div class="mega-menu-left">';
        echo '<ul>';
        foreach ($parent_categories as $index => $parent) {
            $active_class = $index === 0 ? 'active' : '';
            echo '<li><a href="#" class="category-link ' . $active_class . '" data-cat-id="cat-' . esc_attr($parent->term_id) . '">' . esc_html($parent->name) . '</a></li>';
        }
        echo '</ul>';
        echo '</div>';
        // KANAN: Semua Produk per Kategori, tapi tampilkan hanya kategori pertama saat load
        echo '<div class="mega-menu-right" id="mega-menu-products">';
        foreach ($parent_categories as $index => $parent) {
            $display_style = $index === 0 ? '' : 'style="display:none;"';
            echo '<div class="product-group" id="cat-' . esc_attr($parent->term_id) . '" ' . $display_style . '>';
            $products = new WP_Query(array(
                'post_type' => 'product',
                'posts_per_page' => 6,
                'tax_query' => array(
                    array(
                        'taxonomy' => 'product_cat',
                        'field' => 'term_id',
                        'terms' => $parent->term_id,
                    ),
                ),
            ));
            if ($products->have_posts()) {
                while ($products->have_posts()) {
                    $products->the_post();
                    global $product;
                    echo '<div class="product-box">';
                    echo '<a href="' . get_permalink() . '">';
                    echo '<div class="product-image">';
                    echo woocommerce_get_product_thumbnail('medium');
                    echo '</div>';
                    echo '<div class="product-title">' . get_the_title() . '</div>';
                    echo '</a>';
                    echo '</div>';
                }
                wp_reset_postdata();
            } else {
                echo '<p>Tidak ada produk dalam kategori ini.</p>';
            }
            echo '</div>'; // .product-group
        }
        echo '</div>'; // .mega-menu-right
        echo '</div>'; // .mega-menu-wrapper
        
        // Tambahkan CSS dan JavaScript
        wp_enqueue_script('mega-menu-js', get_template_directory_uri() . '/js/mega-menu.js', array('jquery'), '1.0.0', true);
        wp_enqueue_style('mega-menu-css', get_template_directory_uri() . '/css/mega-menu.css', array(), '1.0.0');
        
        // Inline JavaScript untuk kompatibilitas jika file js tidak ditemukan
        ?>
        <script>
        jQuery(document).ready(function($) {
            // Ubah click menjadi mouseenter (hover)
            $('.category-link').on('mouseenter', function(e) {
                $('.category-link').removeClass('active');
                $(this).addClass('active');
                var targetId = $(this).data('cat-id');
                $('.product-group').hide();
                $('#' + targetId).fadeIn(200);
            });
            
            // Tetap mempertahankan klik jika dibutuhkan untuk mobile
            $('.category-link').on('click', function(e) {
                e.preventDefault();
                $('.category-link').removeClass('active');
                $(this).addClass('active');
                var targetId = $(this).data('cat-id');
                $('.product-group').hide();
                $('#' + targetId).fadeIn(200);
            });
            
            // Menstandarkan tinggi judul produk
            function equalizeProductTitleHeights() {
                $('.product-group:visible .product-title').css('height', 'auto');
                var maxHeight = Math.max.apply(null, $('.product-group:visible .product-title').map(function() {
                    return $(this).outerHeight();
                }).get());
                if (maxHeight > 0) {
                    $('.product-group:visible .product-title').css('height', maxHeight + 'px');
                }
            }
            
            // Jalankan saat halaman dimuat dan ketika mengganti kategori
            setTimeout(equalizeProductTitleHeights, 100);
            $('.category-link').on('mouseenter click', function() {
                setTimeout(equalizeProductTitleHeights, 250);
            });
            
            // Jalankan juga ketika window diresize
            $(window).on('resize', equalizeProductTitleHeights);
        });
        </script>
        <?php
    }
    return ob_get_clean();
}
add_shortcode('mega_menu_categories', 'mega_menu_category_with_products_shortcode');
