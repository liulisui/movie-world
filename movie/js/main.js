document.addEventListener('DOMContentLoaded', function () {

    initThemeToggle();
    initMobileMenu();
    initBackToTop();
    initLocalStorage();


    if (document.querySelector('.subscribe-form')) {
        initSubscribeForm();
    }

    setupNewMoviesPagination();
    setupReviewsPagination();
    setupReadMoreButtons();

    if (document.getElementById('category-title')) {
        initCategoryPage();
    }


    setupContactForm();


    setupFAQ();


    initShareButton();
});


function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle ? themeToggle.querySelector('i') : null;


    const currentTheme = localStorage.getItem('theme') || 'light';


    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }


    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');

            if (currentTheme === 'dark') {

                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');


                if (icon) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            } else {

                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');


                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
            }
        });
    }
}

function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {

            document.body.classList.toggle('mobile-menu-open');


            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (document.body.classList.contains('mobile-menu-open')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });


        document.addEventListener('click', function (event) {
            if (document.body.classList.contains('mobile-menu-open') &&
                !event.target.closest('.mobile-menu-toggle') &&
                !event.target.closest('.main-nav')) {
                document.body.classList.remove('mobile-menu-open');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {

        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });


        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

function initLocalStorage() {

    if (!localStorage.getItem('movieWorld.viewHistory')) {
        localStorage.setItem('movieWorld.viewHistory', JSON.stringify([]));
    }

    if (!localStorage.getItem('movieWorld.favorites')) {
        localStorage.setItem('movieWorld.favorites', JSON.stringify([]));
    }


    const currentPage = window.location.pathname;


    if (currentPage.includes('movie-detail.html')) {

        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get('id');

        if (movieId) {
            addToViewHistory(movieId);
        }
    }
}

function addToViewHistory(movieId) {
    let viewHistory = JSON.parse(localStorage.getItem('movieWorld.viewHistory'));


    viewHistory = viewHistory.filter(id => id !== movieId);


    viewHistory.unshift(movieId);


    if (viewHistory.length > 10) {
        viewHistory = viewHistory.slice(0, 10);
    }


    localStorage.setItem('movieWorld.viewHistory', JSON.stringify(viewHistory));
}

function toggleFavorite(movieId) {
    let favorites = JSON.parse(localStorage.getItem('movieWorld.favorites'));
    const index = favorites.indexOf(movieId);

    if (index === -1) {

        favorites.push(movieId);
        localStorage.setItem('movieWorld.favorites', JSON.stringify(favorites));
        return true;
    } else {

        favorites.splice(index, 1);
        localStorage.setItem('movieWorld.favorites', JSON.stringify(favorites));
        return false;
    }
}

function isFavorite(movieId) {
    const favorites = JSON.parse(localStorage.getItem('movieWorld.favorites'));
    return favorites.includes(movieId);
}

function initSubscribeForm() {
    const subscribeForm = document.querySelector('.subscribe-form');
    const emailInput = subscribeForm ? subscribeForm.querySelector('input[type="email"]') : null;

    if (!subscribeForm || !emailInput) return;

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (!validateEmail(email)) {

            alert('请输入有效的邮箱地址');
            return;
        }


        const submitBtn = subscribeForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';


        setTimeout(() => {

            subscribeForm.reset();


            submitBtn.disabled = false;
            submitBtn.textContent = originalText;


            alert('订阅成功！感谢您的关注。');
        }, 1500);
    });
}

function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

function formatDate(date) {
    if (!date) return '';

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    try {
        return new Date(date).toLocaleDateString('zh-CN', options);
    } catch (e) {
        const d = new Date(date);
        return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function setupNewMoviesPagination() {
    const moviesContainer = document.getElementById('new-movies-container');
    if (!moviesContainer) return;

    const moviesPages = moviesContainer.querySelectorAll('.movie-page');
    const prevButton = document.querySelector('.custom-pagination .prev-page');
    const nextButton = document.querySelector('.custom-pagination .next-page');
    const currentPageSpan = document.querySelector('.custom-pagination .current-page');
    const totalPagesSpan = document.querySelector('.custom-pagination .total-pages');

    let currentPage = 1;
    const totalPages = moviesPages.length;

    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;

    function goToMoviePage(pageNumber) {
        if (pageNumber < 1 || pageNumber > totalPages) return;

        moviesPages.forEach(page => {
            page.style.display = 'none';
        });

        const targetPage = moviesContainer.querySelector(`.movie-page[data-page="${pageNumber}"]`);
        if (targetPage) {
            targetPage.style.display = 'flex';
            currentPage = pageNumber;

            if (currentPageSpan) currentPageSpan.textContent = currentPage;

            // 更新按钮状态
            if (prevButton) {
                prevButton.disabled = currentPage === 1;
            }

            if (nextButton) {
                nextButton.disabled = currentPage === totalPages;
            }
        }
    }

    // 初始化显示第一页
    goToMoviePage(1);

    // 添加按钮事件监听器
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goToMoviePage(currentPage - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goToMoviePage(currentPage + 1);
        });
    }
}

function setupReviewsPagination() {
    const reviewsContainer = document.getElementById('reviews-container');
    if (!reviewsContainer) return;

    const reviewsPages = reviewsContainer.querySelectorAll('.reviews-page');
    const prevButton = document.querySelector('.reviews-prev-page');
    const nextButton = document.querySelector('.reviews-next-page');
    const currentPageSpan = document.querySelector('.reviews-current-page');
    const totalPagesSpan = document.querySelector('.reviews-total-pages');

    let currentPage = 1;
    const totalPages = reviewsPages.length;

    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;

    function goToReviewPage(pageNumber) {
        if (pageNumber < 1 || pageNumber > totalPages) return;

        reviewsPages.forEach(page => {
            page.style.display = 'none';
        });

        const targetPage = reviewsContainer.querySelector(`.reviews-page[data-page="${pageNumber}"]`);
        if (targetPage) {
            targetPage.style.display = 'grid';
            currentPage = pageNumber;

            if (currentPageSpan) currentPageSpan.textContent = currentPage;


            if (prevButton) {
                prevButton.disabled = currentPage === 1;
            }

            if (nextButton) {
                nextButton.disabled = currentPage === totalPages;
            }
        }
    }


    goToReviewPage(1);


    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goToReviewPage(currentPage - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goToReviewPage(currentPage + 1);
        });
    }
}

function setupReadMoreButtons() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const reviewCard = this.closest('.review-card');
            const excerpt = reviewCard.querySelector('.review-excerpt');
            const fullContent = reviewCard.querySelector('.review-full-content');

            if (fullContent.style.display === 'none') {

                excerpt.style.display = 'none';
                fullContent.style.display = 'block';
                this.textContent = '收起';
            } else {

                excerpt.style.display = 'block';
                fullContent.style.display = 'none';
                this.textContent = '阅读全文';
            }
        });
    });
}


const categoryData = {

    categories: {
        "action": {
            title: "动作电影",
            description: "精彩刺激的动作电影合集，展现惊险的打斗场面和紧张的剧情",
            icon: "fa-fire"
        },
        "comedy": {
            title: "喜剧电影",
            description: "轻松幽默的喜剧电影合集，带来欢乐的观影体验",
            icon: "fa-smile"
        },
        "romance": {
            title: "爱情电影",
            description: "感人至深的爱情故事合集，展现爱的力量和美好",
            icon: "fa-heart"
        },
        "scifi": {
            title: "科幻电影",
            description: "探索未来世界的科幻电影合集，展现科技与人性的思考",
            icon: "fa-rocket"
        },
        "horror": {
            title: "恐怖电影",
            description: "紧张刺激的恐怖电影合集，带来毛骨悚然的观影体验",
            icon: "fa-ghost"
        },
        "animation": {
            title: "动画电影",
            description: "适合全家观看的精彩动画电影合集",
            icon: "fa-child"
        }
    },


    movies: {
        "action": [
            {
                id: 2,
                title: "霍比特人3：五军之战",
                poster: "images/movie2.png",
                year: "2014",
                rating: "8.6",
                genres: ["动作", "奇幻", "冒险"],
                duration: "144分钟"
            }
        ],
        "comedy": [
            {
                id: 3,
                title: "独行月球",
                poster: "images/movie3.png",
                year: "2022",
                rating: "8.9",
                genres: ["喜剧", "科幻"],
                duration: "122分钟"
            }
        ],
        "romance": [
            {
                id: 4,
                title: "爱乐之城",
                poster: "images/movie4.png",
                year: "2016",
                rating: "8.3",
                genres: ["爱情", "音乐", "剧情"],
                duration: "128分钟"
            }
        ],
        "scifi": [
            {
                id: 1,
                title: "流浪地球2",
                poster: "images/movie1.png",
                year: "2023",
                rating: "9.2",
                genres: ["科幻", "动作", "冒险"],
                duration: "173分钟"
            }
        ],
        "horror": [
            {
                id: 6,
                title: "死寂",
                poster: "images/movie6.png",
                year: "2007",
                rating: "7.8",
                genres: ["恐怖", "惊悚"],
                duration: "89分钟"
            }
        ],
        "animation": [
            {
                id: 5,
                title: "狮子王",
                poster: "images/movie5.png",
                year: "1994",
                rating: "9.0",
                genres: ["动画", "冒险", "家庭"],
                duration: "88分钟"
            }
        ]
    }
};


function initCategoryPage() {
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    const movieContainer = document.getElementById('movie-container');
    const filterLinks = document.querySelectorAll('.filter-menu a');


    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category') || 'action';


    if (categoryData.categories[category]) {
        categoryTitle.textContent = categoryData.categories[category].title;
        categoryDescription.textContent = categoryData.categories[category].description;
    }


    filterLinks.forEach(link => {
        if (link.id === `filter-${category}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


    if (categoryData.movies[category]) {
        movieContainer.innerHTML = categoryData.movies[category].map(movie => `
            <div class="movie-card">
                <a href="movie-detail.html?id=${movie.id}">
                    <div class="movie-poster">
                        <img src="${movie.poster}" alt="${movie.title}">
                        <div class="movie-rating">${movie.rating}</div>
                    </div>
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <div class="movie-meta">
                            <span class="year">${movie.year}</span>
                            <span class="rating"><i class="fas fa-star"></i> ${movie.rating}</span>
                        </div>
                        <div class="movie-genres">
                            ${movie.genres.map(genre => `<span class="genre">${genre}</span>`).join('')}
                        </div>
                        <div class="movie-duration">
                            <i class="fas fa-clock"></i> ${movie.duration}
                        </div>
                    </div>
                </a>
            </div>
        `).join('');
    } else {
        movieContainer.innerHTML = '<p class="no-movies">暂无该分类的电影</p>';
    }
}


function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();


        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();


        let isValid = true;

        if (!name) {
            document.getElementById('name-error').textContent = '请输入您的姓名';
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('name-error').style.display = 'none';
        }

        if (!email) {
            document.getElementById('email-error').textContent = '请输入您的邮箱';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('email-error').textContent = '请输入有效的邮箱地址';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('email-error').style.display = 'none';
        }

        if (!subject) {
            document.getElementById('subject-error').textContent = '请输入消息主题';
            document.getElementById('subject-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('subject-error').style.display = 'none';
        }

        if (!message) {
            document.getElementById('message-error').textContent = '请输入消息内容';
            document.getElementById('message-error').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('message-error').style.display = 'none';
        }

        if (isValid) {

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';


            setTimeout(() => {

                console.log('发送邮件到: 111@movieworld.com');
                console.log('姓名:', name);
                console.log('邮箱:', email);
                console.log('主题:', subject);
                console.log('消息:', message);


                contactForm.innerHTML = `
                    <div class="success-message">
                        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                        <h3>消息发送成功！</h3>
                        <p>感谢您的留言，我们将尽快回复您。</p>
                        <p>您的消息已发送至: 111@movieworld.com</p>
                    </div>
                `;
            }, 1500);
        }
    });
}


function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {

            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const toggle = otherItem.querySelector('.faq-toggle i');
                    toggle.className = 'fas fa-plus';
                }
            });


            item.classList.toggle('active');
            const toggle = item.querySelector('.faq-toggle i');
            if (item.classList.contains('active')) {
                toggle.className = 'fas fa-minus';
            } else {
                toggle.className = 'fas fa-plus';
            }
        });
    });
}


function initShareButton() {

    const socialIcons = document.querySelectorAll('.social-icon');


    socialIcons.forEach(icon => {
        icon.addEventListener('click', function (e) {
            e.preventDefault();

            const title = document.title;
            const url = window.location.href;
            const shareText = `${title} - 电影世界`;

            let shareUrl = '';


            if (this.querySelector('.fa-weixin')) {

                navigator.clipboard.writeText(url).then(() => {
                    showShareMessage('链接已复制，请粘贴到微信中分享');
                });
                return;
            } else if (this.querySelector('.fa-weibo')) {

                shareUrl = `http://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareText)}`;
            } else if (this.querySelector('.fa-qq')) {

                shareUrl = `http://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(shareText)}`;
            } else if (this.querySelector('.fa-share-alt')) {

                navigator.clipboard.writeText(url).then(() => {
                    showShareMessage('链接已复制到剪贴板');
                });
                return;
            }


            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=500');
            }
        });
    });
}



function showShareMessage(message) {

    const toast = document.createElement('div');
    toast.className = 'share-toast';
    toast.textContent = message;


    document.body.appendChild(toast);


    setTimeout(() => {
        toast.classList.add('show');
    }, 10);


    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
} 