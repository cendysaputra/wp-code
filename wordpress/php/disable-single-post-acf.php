<?php
add_action('template_redirect', 'nonaktifkan_single_pengunduhan');

function nonaktifkan_single_pengunduhan() {
    if (is_singular('pengunduhan')) {
        wp_redirect(home_url());
        exit;
    }
}



// Post Archive

add_action('template_redirect', 'redirect_single_after_sales_to_archive');

function redirect_single_after_sales_to_archive() {
    if (is_singular('after-sales')) {
        wp_redirect(get_post_type_archive_link('after-sales'), 301);
        exit;
    }
}
