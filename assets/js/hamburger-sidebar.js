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
            // Close all other open dropdowns
            closeAllDropdowns(dropdown);

            // Toggle the current dropdown
            menu.classList.toggle('hidden');
            const isOpen = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !isOpen);
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

    function closeAllDropdowns(exceptThisDropdown) {
        dropdowns.forEach(function (dropdown) {
            let toggle = dropdown.querySelector('.dropdown-toggle');
            let menu = dropdown.querySelector('.dropdown-menu');
            if (dropdown !== exceptThisDropdown && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});
