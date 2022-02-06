/* ================================
 ==== FUNCTIONS ======================
 ==================================*/

// returns the Current Year
function get_current_year() {
    let date = new Date();
    let year = date.getFullYear();
    const footerYear = document.querySelector('#year');
    footerYear.innerText = year;
}
get_current_year();

// The functionality for the image slider with GSAP
function image_slider() {
    const swatches = document.querySelectorAll('.thumbnails img')
    const gallery = document.querySelector('.plant-gallery')
    const slides = document.querySelectorAll('.plant-gallery-container')
    
    swatches.forEach((swatch, index) => {
    
        const coord = slides[index].getBoundingClientRect().left 
    
        swatch.addEventListener('click', (e) => {
            // gallery
            gsap.to(gallery, {x: -coord, duration: 1, ease: "back.out(1)"})
        })
    
    })
}
image_slider();

