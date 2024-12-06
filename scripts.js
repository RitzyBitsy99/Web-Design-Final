// Ensure jQuery is loaded
$(document).ready(function() {
    // Smooth Scroll for Navigation Links
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Basic Form Validation
    $('form').on('submit', function(event) {
        var isValid = true;
        $(this).find('input, textarea').each(function() {
            if ($(this).val() === "") {
                $(this).css('border', '1px solid red');
                isValid = false;
            } else {
                $(this).css('border', '1px solid #ddd');
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });

    // Load More Button Interactivity
    $('#load-more').on('click', function() {
        $('<article><h2 class="blog-title">New Blog Entry</h2><p class="blog-content">More content loaded...</p></article>').appendTo('.blog');
    });

    // Hover Effect for Blog Titles
    $('.blog-title').hover(function() {
        $(this).css('color', '#b66a85');
    }, function() {
        $(this).css('color', '#d081a1');
    });

    // Function to toggle Show/Hide Content
    window.toggleContent = function() {
        var content = document.getElementById('hiddenContent');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    };
});
