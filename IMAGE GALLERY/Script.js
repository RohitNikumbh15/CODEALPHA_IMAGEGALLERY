// Get all file icons
const fileIcons = document.querySelectorAll('.file-icon');

// Add tooltip functionality
fileIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = 'Click to view more details';
        icon.appendChild(tooltip);
    });

    icon.addEventListener('mouseleave', function() {
        const tooltip = icon.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});
