<?php
function produk_dari_kategori_terbawah_tanpa_gambar_shortcode() {
    if ( ! is_singular( 'product' ) ) {
        return '';
    }

    global $post;
    $current_product_id = $post->ID;

    // Ambil semua kategori yang diceklis di produk saat ini
    $terms = get_the_terms( $current_product_id, 'product_cat' );
    if ( empty( $terms ) || is_wp_error( $terms ) ) {
        return '';
    }

    $all_term_ids = wp_list_pluck( $terms, 'term_id' );

    // Cari kategori paling bawah (diceklis dan tidak menjadi parent dari kategori lain yang juga diceklis)
    $leaf_terms = array_filter( $terms, function( $term ) use ( $all_term_ids ) {
        $children = get_term_children( $term->term_id, 'product_cat' );
        return empty( array_intersect( $children, $all_term_ids ) );
    });

    if ( empty( $leaf_terms ) ) {
        return '';
    }

    // Ambil salah satu kategori leaf (misalnya terakhir)
    $leaf_term = end( $leaf_terms );

    // Query semua produk dari kategori tersebut, urut berdasarkan nama A-Z
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
        'orderby'        => 'title',
        'order'          => 'ASC',
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'term_id',
                'terms'    => $leaf_term->term_id,
            ),
        ),
    );

    $query = new WP_Query( $args );

    if ( ! $query->have_posts() ) {
        return '<p>Tidak ada produk terkait.</p>';
    }

    ob_start();
    echo '<ul class="produk-terkait-kategori-terbawah">';
    while ( $query->have_posts() ) {
        $query->the_post();
        global $product;
        $is_active = ( get_the_ID() == $current_product_id ) ? ' active' : '';
        echo '<li class="produk-item' . esc_attr( $is_active ) . '">';
        echo '<a href="' . get_permalink() . '">';
        echo get_the_title() . '<br>';
        echo $product->get_price_html();
        echo '</a></li>';
    }
    echo '</ul>';

    wp_reset_postdata();
    return ob_get_clean();
}
add_shortcode( 'produk_kategori_terbawah', 'produk_dari_kategori_terbawah_tanpa_gambar_shortcode' );
