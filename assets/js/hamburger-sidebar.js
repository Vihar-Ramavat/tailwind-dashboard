document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle sidebar and overlay
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        const body = document.body;

        // Toggle classes to show/hide sidebar and overlay
        sidebar.classList.toggle('translate-x-full');
        overlay.classList.toggle('hidden');

        // Add or remove the 'overflow-hidden' class from the body
        body.classList.toggle('overflow-hidden');
    }

    // Event listener for sidebar toggle button
    document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);

    // Event listener for overlay click
    document.getElementById('overlay').addEventListener('click', toggleSidebar);

    // JavaScript to toggle dropdown menus
    let dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        let toggle = dropdown.querySelector('.dropdown-toggle');
        let menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });
    });

    // Prevent default behavior for anchor links inside flex list items
    document.querySelectorAll('ul.flex li a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });

    // Event listener for sidebar toggle button
    document.getElementById('sidebar-toggle-button').addEventListener('click', function() {
        // Toggle 'sidebar-open' class on body
        document.body.classList.toggle('sidebar-open');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-toggle");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const isOpen = this.getAttribute("aria-expanded") === "true";

            // Close all dropdowns
            closeAllDropdowns();

            // Toggle the current dropdown
            this.setAttribute("aria-expanded", !isOpen);

            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle("hidden");
        });
    });

    function closeAllDropdowns() {
        const allDropdowns = document.querySelectorAll(".dropdown-menu");
        allDropdowns.forEach(menu => {
            menu.classList.add("hidden");
            const toggleButton = menu.previousElementSibling;
            toggleButton.setAttribute("aria-expanded", "false");
        });
    }
});