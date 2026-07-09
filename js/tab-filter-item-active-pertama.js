document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const firstItem = document.querySelector('.ue_taxonomy_item');
        if (firstItem) {
            firstItem.click();
        }
    }, 500);
});
