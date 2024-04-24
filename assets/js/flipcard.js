const frontBtn = document.getElementById('frontBtn');
    const backBtn = document.getElementById('backBtn');
    const frontCard = document.querySelector('.front-card');
    const backCard = document.querySelector('.back-card');

    // Set initial button state
    frontBtn.classList.add('bg-white');
    backBtn.classList.add('bg-gray-200');

    frontBtn.addEventListener('click', function () {
        frontCard.style.display = 'block';
        backCard.style.display = 'none';

        // Update button styles
        frontBtn.classList.remove('bg-gray-200');
        frontBtn.classList.add('bg-white');
        backBtn.classList.remove('bg-white');
        backBtn.classList.add('bg-gray-200');
    });

    backBtn.addEventListener('click', function () {
        backCard.style.display = 'block';
        frontCard.style.display = 'none';

        // Update button styles
        backBtn.classList.remove('bg-gray-200');
        backBtn.classList.add('bg-white');
        frontBtn.classList.remove('bg-white');
        frontBtn.classList.add('bg-gray-200');
    });

    document.querySelectorAll('ul.flex li a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });