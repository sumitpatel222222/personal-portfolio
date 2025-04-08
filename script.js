//toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           // active navbar links
           navlinks.forEach(links => {
             links.classList.remove('active');
             let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
             if(activeLink) {
                activeLink.classList.add('active');
             }
           });
        //    active section for animation on scroll
        sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate'); 
        }

    });


    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    //remove toggle icon and navbar when navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animate footer on scrool
    
    
}