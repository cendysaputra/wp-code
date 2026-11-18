<?php
add_action('template_redirect', 'redirect_single_product_to_shop');
function redirect_single_product_to_shop() {
    if (is_product()) {
        wp_redirect(home_url('/products/'), 301);
        exit;
    }
}
