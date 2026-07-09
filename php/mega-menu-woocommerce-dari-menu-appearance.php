<?php
function mega_menu_category_with_products_shortcode() {
    ob_start();

    // Ambil item dari menu yang bernama "Category Menu Product"
    $menu = wp_get_nav_menu_object('Category Menu Product');
    if (!$menu) return '<p>Menu tidak ditemukan.</p>';

    $menu_items = wp_get_nav_menu_items($menu->term_id);
    if (empty($menu_items)) return '<p>Item menu kosong.</p>';

    // Kumpulan kategori dari menu
    $categories = array();
    foreach ($menu_items as $item) {
        $url_path = wp_parse_url($item->url, PHP_URL_PATH);
        $slug = basename($url_path);
        $term = get_term_by('slug', $slug, 'product_cat');
        if ($term && !is_wp_error($term)) {
            $categories[] = $term;
        }
    }

    if (!empty($categories)) {
        echo '<div class="mega-menu-wrapper">';
        echo '<div class="mega-menu-left"><ul>';
        foreach ($categories as $index => $cat) {
            $active_class = $index === 0 ? 'active' : '';
            echo '<li><a href="#" class="category-link ' . $active_class . '" data-cat-id="cat-' . esc_attr($cat->term_id) . '">' . esc_html($cat->name) . '</a></li>';
        }
        echo '</ul></div>'; // mega-menu-left

        echo '<div class="mega-menu-right" id="mega-menu-products">';
        foreach ($categories as $index => $cat) {
            $display_style = $index === 0 ? '' : 'style="display:none;"';
            echo '<div class="product-group" id="cat-' . esc_attr($cat->term_id) . '" ' . $display_style . '>';
            $products = new WP_Query(array(
                'post_type' => 'product',
                'posts_per_page' => 6,
                'tax_query' => array(
                    array(
                        'taxonomy' => 'product_cat',
                        'field' => 'term_id',
                        'terms' => $cat->term_id,
                    ),
                ),
            ));
            if ($products->have_posts()) {
                while ($products->have_posts()) {
                    $products->the_post();
                    echo '<div class="product-box">';
                    echo '<a href="' . get_permalink() . '">';
                    echo '<div class="product-image">';
                    echo woocommerce_get_product_thumbnail('medium');
                    echo '</div>';
                    echo '<div class="product-title">' . get_the_title() . '</div>';
                    echo '</a></div>';
                }
                wp_reset_postdata();
            }
            echo '</div>'; // .product-group
        }
        echo '</div>'; // .mega-menu-right
        echo '</div>'; // .mega-menu-wrapper

        // CSS & JS tetap sama
        wp_enqueue_script('mega-menu-js', get_template_directory_uri() . '/js/mega-menu.js', array('jquery'), '1.0.0', true);
        wp_enqueue_style('mega-menu-css', get_template_directory_uri() . '/css/mega-menu.css', array(), '1.0.0');

        ?>
        <script>
        jQuery(document).ready(function($) {
            $('.category-link').on('mouseenter click', function(e) {
                e.preventDefault();
                $('.category-link').removeClass('active');
                $(this).addClass('active');
                var targetId = $(this).data('cat-id');
                $('.product-group').hide();
                $('#' + targetId).fadeIn(200);
            });

            function equalizeProductTitleHeights() {
                $('.product-group:visible .product-title').css('height', 'auto');
                var maxHeight = Math.max.apply(null, $('.product-group:visible .product-title').map(function() {
                    return $(this).outerHeight();
                }).get());
                if (maxHeight > 0) {
                    $('.product-group:visible .product-title').css('height', maxHeight + 'px');
                }
            }

            setTimeout(equalizeProductTitleHeights, 100);
            $('.category-link').on('mouseenter click', function() {
                setTimeout(equalizeProductTitleHeights, 250);
            });
            $(window).on('resize', equalizeProductTitleHeights);
        });
        </script>
        <?php
    }

    return ob_get_clean();
}
add_shortcode('mega_menu_categories', 'mega_menu_category_with_products_shortcode');
