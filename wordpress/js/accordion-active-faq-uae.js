document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".uael-faq-accordion");

    if (faqItems.length > 0) {
        const firstFaq = faqItems[0];
        const title = firstFaq.querySelector(".uael-accordion-title");
        const content = firstFaq.querySelector(".uael-accordion-content");

        if (title && content) {
            title.classList.add("uael-title-active");
            title.setAttribute("aria-expanded", "true");

            content.style.display = "block";
        }
    }
});
