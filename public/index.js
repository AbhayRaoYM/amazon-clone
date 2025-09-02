function scrollSlider(amount) {
    document.getElementById('slider-container').scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}
