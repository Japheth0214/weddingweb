(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Show error message on the first visit
$(document).ready(function () {
    $('#desktopModeMessage').fadeIn('slow');
    setTimeout(function () {
        $('#desktopModeMessage').fadeOut('slow');
    }, 7000);
});

// Get the date and time for April 12, 2024, 04:00 PM PH Time (UTC+8)
var countDownDate = new Date("April 12, 2024 16:00:00 GMT+0800").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Check if the current date is before April 12, 2024
    if (now < countDownDate) {
        // Calculate the remaining time in milliseconds
        var remainingTime = countDownDate - now;

        // Calculate total months, days, hours, minutes, and seconds
        var totalMonths = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30));
        var totalDays = Math.floor((remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        var totalHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var totalMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var totalSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Convert hours, minutes, and seconds to military time (24-hour format)
        totalHours = (totalHours < 10) ? "0" + totalHours : totalHours;
        totalMinutes = (totalMinutes < 10) ? "0" + totalMinutes : totalMinutes;
        totalSeconds = (totalSeconds < 10) ? "0" + totalSeconds : totalSeconds;

        // Display the countdown
        document.getElementById("countdown").innerHTML = totalMonths + " Mos | " + totalDays + " Days | " + totalHours + " : " + totalMinutes + " : " + totalSeconds + "";
    } else {
        // If the current date is after April 12, 2024, display a message
        document.getElementById("countdown").innerHTML = "Event has passed!";
    }

    // If the countdown is over, clear the interval
    if (now >= countDownDate) {
        clearInterval(countdownInterval);
    }
}, 1000);


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

