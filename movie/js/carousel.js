

document.addEventListener('DOMContentLoaded', function () {

    initHeroCarousel();
});

function initHeroCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (!carouselContainer) return;

    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    const prevBtn = carouselContainer.querySelector('.carousel-control.prev');
    const nextBtn = carouselContainer.querySelector('.carousel-control.next');
    const indicators = carouselContainer.querySelectorAll('.carousel-indicators .indicator');

    let currentIndex = 0;
    let interval;
    const slideCount = slides.length;
    let startX, moveX;
    let isDragging = false;


    function showSlide(index) {

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;


        slides.forEach((slide, i) => {
            slide.classList.remove('active');


            const position = i - index;
            const normalizedPosition = (position + slideCount) % slideCount;


            if (normalizedPosition === 0) {
                slide.style.transform = 'translateX(0) scale(1)';
                slide.style.zIndex = '3';
                slide.style.opacity = '1';
            } else if (normalizedPosition === 1 || normalizedPosition === slideCount - 1) {
                const direction = normalizedPosition === 1 ? 1 : -1;
                slide.style.transform = `translateX(${direction * 30}%) scale(0.85)`;
                slide.style.zIndex = '2';
                slide.style.opacity = '0.7';
            } else {
                slide.style.transform = 'translateX(0) scale(0.7)';
                slide.style.zIndex = '1';
                slide.style.opacity = '0.5';
            }
        });


        slides[index].classList.add('active');


        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        indicators[index].classList.add('active');


        currentIndex = index;


        updateSlideLinks();
    }


    function updateSlideLinks() {
        slides.forEach((slide, index) => {
            const slideLink = slide.querySelector('a');
            const captionBtn = slide.querySelector('.carousel-caption a');

            if (slideLink && captionBtn) {

                const originalHref = slideLink.getAttribute('data-original-href') || slideLink.getAttribute('href');


                if (!slideLink.hasAttribute('data-original-href')) {
                    slideLink.setAttribute('data-original-href', originalHref);
                }


                slideLink.setAttribute('href', originalHref);
                captionBtn.setAttribute('href', originalHref);


                if (!slide.hasAttribute('data-event-attached')) {
                    slide.setAttribute('data-event-attached', 'true');

                    slide.addEventListener('click', function (e) {

                        if (!slide.classList.contains('active')) {
                            e.preventDefault();
                            showSlide(index);
                            return;
                        }


                        if (e.target !== slideLink && !slideLink.contains(e.target) &&
                            e.target !== captionBtn && !captionBtn.contains(e.target) &&
                            e.target !== prevBtn && !prevBtn.contains(e.target) &&
                            e.target !== nextBtn && !nextBtn.contains(e.target) &&
                            !e.target.closest('.carousel-indicators')) {
                            window.location.href = originalHref;
                        }
                    });
                }
            }
        });
    }


    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }


    function startAutoPlay() {

        stopAutoPlay();
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }


    function handleSwipe() {
        carouselContainer.addEventListener('touchstart', function (e) {
            startX = e.touches[0].clientX;
            isDragging = true;
            stopAutoPlay();
        }, { passive: true });

        carouselContainer.addEventListener('touchmove', function (e) {
            if (!isDragging) return;
            moveX = e.touches[0].clientX;
        }, { passive: true });

        carouselContainer.addEventListener('touchend', function () {
            if (!isDragging) return;
            isDragging = false;

            const diff = startX - moveX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }

            startAutoPlay();
        }, { passive: true });
    }


    if (prevBtn) {
        prevBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('上一张按钮被点击');
            prevSlide();

            stopAutoPlay();
            startAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('下一张按钮被点击');
            nextSlide();

            stopAutoPlay();
            startAutoPlay();
        });
    }


    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('指示器' + index + '被点击');
            showSlide(index);

            stopAutoPlay();
            startAutoPlay();
        });
    });


    carouselContainer.addEventListener('mouseenter', stopAutoPlay);
    carouselContainer.addEventListener('mouseleave', startAutoPlay);


    showSlide(0);


    console.log('启动轮播自动播放');
    startAutoPlay();


    handleSwipe();
} 