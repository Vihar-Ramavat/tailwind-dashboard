document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener("click", function(event) {
            event.preventDefault();

            // Remove active class from all tab links and hide all tab contents
            tabLinks.forEach(function(link) {
                link.classList.remove("active");
            });
            tabContents.forEach(function(content) {
                content.classList.add("hidden");
            });

            // Add active class to the clicked tab link and show its corresponding content
            const tabId = this.getAttribute("data-tab");
            const tabContent = document.getElementById(tabId);
            this.classList.add("active");
            tabContent.classList.remove("hidden");
        });
    });
});

 // Get all tab links
const tabLinks = document.querySelectorAll('.tab-link');

// Add click event listener to each tab link
tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Remove active class from all tab links
        tabLinks.forEach(link => {
            link.classList.remove('active', 'font-semibold', 'underline');
        });

        // Add active class to the clicked tab link
        this.classList.add('active', 'underline');

        // Add font-bold class if it's not the Options tab
        if (this.getAttribute('data-tab') !== 'tab3') {
            this.classList.add('font-semibold');
        }
        if (this.getAttribute('data-tab') !== 'tab2') {
            this.classList.add('font-semibold');
        }
    });
});