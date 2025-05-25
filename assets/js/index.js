//   navbar function 
$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(Window).scrollTop()  >  30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });

    
});

// script.js
// validation for contact us
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual submission

        // Clear previous error messages
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('messageError').textContent = '';

        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        let valid = true;

        // Validate full name
        if (name === '') {
            document.getElementById('nameError').textContent = 'Please enter your full name.';
            valid = false;
        }

        // Validate email
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Validate phone number
        if (phone === '' || isNaN(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
            valid = false;
        }

        // Validate message
        if (message === '') {
            document.getElementById('messageError').textContent = 'Please enter your message.';
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});



