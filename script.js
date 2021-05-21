// about-me = 855
// my-provide-services = 1882
// latest-project = 3749

const mainNav = document.querySelectorAll('.main-inf__nav-element')

for(let i = 0; i < mainNav.length; i++) {
    mainNav[i].addEventListener('click', function(event) {
        if (mainNav[i].textContent == 'About') {
            event.preventDefault()
            let currentScroll = window.pageYOffset;
            window.scrollBy({
                top: 855 - currentScroll,
                behavior: 'smooth'
            })
        } if (mainNav[i].textContent == 'Services') {
            event.preventDefault()
            let currentScroll = window.pageYOffset;
            window.scrollBy({
                top: 1882 - currentScroll,
                behavior: 'smooth'
            })
        } if (mainNav[i].textContent == 'Protfolio') {
            event.preventDefault()
            let currentScroll = window.pageYOffset;
            window.scrollBy({
                top: 3749 - currentScroll,
                behavior: 'smooth'
            })
        }
    })
}