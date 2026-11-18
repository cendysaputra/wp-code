<?php
/**
 * Elementor Form - Populate Dropdown & Capture Dynamic Fields
 * Type: PHP Snippet
 */

add_action('wp_footer', 'inject_products_to_dropdown');
function inject_products_to_dropdown() {
    if (is_admin()) {
        return;
    }
    
    $products = get_posts([
        'post_type' => 'product',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'title',
        'order' => 'ASC'
    ]);
    
    $product_options = [];
    foreach ($products as $product) {
        $product_options[] = [
            'id' => $product->ID,
            'title' => esc_js($product->post_title),
            'slug' => $product->post_name
        ];
    }
    ?>
    
    <script>
    window.productsData = <?php echo json_encode($product_options, JSON_HEX_TAG | JSON_HEX_AMP); ?>;
    
    window.populateProductDropdown = function(selectElement) {
        if (!selectElement) return;
        
        const selectInput = selectElement.tagName === 'SELECT' 
            ? selectElement 
            : selectElement.querySelector('select');
        
        if (!selectInput) return;
        
        selectInput.innerHTML = '<option value="">Select Products</option>';
        
        window.productsData.forEach(function(product) {
            const option = document.createElement('option');
            option.value = product.title;
            option.textContent = product.title;
            selectInput.appendChild(option);
        });
    };
    
    (function() {
        function init() {
            const firstSelect = document.querySelector('select[name="form_fields[product_title]"]');
            if (firstSelect) {
                window.populateProductDropdown(firstSelect);
            }
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
        
        window.addEventListener('load', function() {
            setTimeout(init, 300);
        });
    })();
    </script>
    <?php
}
