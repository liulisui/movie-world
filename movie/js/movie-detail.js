const moviesData = {
    "1": {
        title: "流浪地球2",
        originalTitle: "The Wandering Earth 2",
        year: "2023",
        runtime: "173分钟",
        voteCount: "1,234,567",
        ratingScore: "9.2",
        overview: "《流浪地球2》是《流浪地球》的前传，讲述了人类面对太阳即将膨胀为红巨星时的抉择。影片展现了人类在危机时刻的团结与勇气，以及科技与人性之间的平衡。",
        poster: "images/movie1.png",
        genres: ["科幻", "动作", "冒险"],
        director: "郭帆",
        cast: ["吴京", "刘德华", "李雪健", "宁理",],
        trailer: "videos/1.mp4"
    },
    "2": {
        title: "霍比特人3：五军之战",
        originalTitle: "The Hobbit: The Battle of the Five Armies",
        year: "2014",
        runtime: "144分钟",
        voteCount: "987,654",
        ratingScore: "8.6",
        overview: "《霍比特人3：五军之战》是彼得·杰克逊执导的《霍比特人》三部曲的终章。比尔博·巴金斯与矮人一行成功地从恶龙史矛革手中夺回了矮人的国土，却意外释放了一股危险的力量。愤怒的史矛革喷火袭击了长湖镇，而矮人首领索林逐渐被巨大的财富所迷惑，不惜牺牲友情和信义去保护他祖先的宝藏...",
        poster: "images/movie2.png",
        genres: ["动作", "奇幻", "冒险"],
        director: "彼得·杰克逊",
        cast: ["马丁·弗瑞曼", "伊恩·麦克莱恩", "理查德·阿米蒂奇", "奥兰多·布鲁姆"],
        trailer: "videos/2.mp4"
    },
    "3": {
        title: "独行月球",
        originalTitle: "Moon Man",
        year: "2022",
        runtime: "122分钟",
        voteCount: "765,432",
        ratingScore: "8.9",
        overview: "《独行月球》讲述了航天员杜刚意外成为月球上唯一的人类，他必须在月球基地独自生存直到救援到来的故事。这部科幻喜剧通过幽默的方式，展现了人类在极端环境下的生存智慧和对家园的深深眷恋。",
        poster: "images/movie3.png",
        genres: ["喜剧", "科幻", "冒险"],
        director: "张吃鱼",
        cast: ["沈腾", "马丽", "常远", "黄才伦"],
        trailer: "videos/3.mp4"
    },
    "4": {
        title: "爱乐之城",
        originalTitle: "La La Land",
        year: "2016",
        runtime: "128分钟",
        voteCount: "876,543",
        ratingScore: "8.3",
        overview: "《爱乐之城》讲述了在洛杉矶追求梦想的爵士钢琴家塞巴斯蒂安和有志成为演员的米娅之间的爱情故事。两人在各自追逐梦想的过程中相识相爱，却也面临着艺术理想与现实、爱情与事业之间的抉择。",
        poster: "images/movie4.png",
        genres: ["爱情", "音乐", "剧情"],
        director: "达米恩·查泽雷",
        cast: ["瑞恩·高斯林", "艾玛·斯通", "约翰·传奇", "罗丝玛丽·德薇特"],
        trailer: "videos/4.mp4"
    },
    "5": {
        title: "狮子王",
        originalTitle: "The Lion King",
        year: "2019",
        runtime: "118分钟",
        voteCount: "1,098,765",
        ratingScore: "9.3",
        overview: "《狮子王》是迪士尼经典动画的真人版重制电影，讲述了小狮子王辛巴在父亲木法沙被叔叔刀疤杀害后，被迫流亡荒野。在朋友的帮助下，成年后的辛巴返回家园，与刀疤展开了一场王位之争，最终夺回了属于自己的王国。",
        poster: "images/movie5.png",
        genres: ["动画", "冒险", "剧情"],
        director: "乔恩·费儒",
        cast: ["唐纳德·格洛沃", "碧昂丝·诺尔斯", "赛斯·罗根", "詹姆斯·厄尔·琼斯"],
        trailer: "videos/5.mp4"
    },
    "6": {
        title: "死寂",
        originalTitle: "Dead Silence",
        year: "2007",
        runtime: "89分钟",
        voteCount: "542,876",
        ratingScore: "7.8",
        overview: "《死寂》讲述了年轻人杰米在妻子丽莎离奇死亡后回到家乡寻找真相的故事。他发现丽莎的死与一个关于被称为玛丽·肖的复仇腹语师的恐怖传说有关。传说中，如果你看到玛丽·肖，千万不要尖叫，否则她会割掉你的舌头。杰米必须揭开这个诅咒背后的秘密，才能阻止更多人遭遇相同的命运。",
        poster: "images/movie6.png",
        genres: ["恐怖", "惊悚", "悬疑"],
        director: "温子仁",
        cast: ["瑞恩·柯万腾", "唐尼·沃尔伯格", "安贝尔·瓦莱塔", "琼·海伊"],
        trailer: "videos/6.mp4"
    }
};

const movieReviews = {
    "1": [
        {
            id: "1-1",
            name: "星光闪烁",
            date: "2023-02-15",
            rating: 5.0,
            title: "中国科幻电影的里程碑",
            content: `<p>《流浪地球2》作为前传，将故事背景设定在"流浪地球计划"启动之初，探讨了人类面对太阳即将膨胀为红巨星时的抉择。相比第一部，本片在叙事深度、情感表达和视觉效果上都有明显提升。</p>
                      <p>特效方面堪称国产科幻电影的新高度，太空场景、数字地球运动、行星发动机等元素都呈现得极为震撼。故事线虽然复杂，但编剧巧妙地将多条线索编织在一起，既有宏大的灾难场面，也不乏人物间的情感纽带。</p>`,
            helpful: 132
        },
        {
            id: "1-2",
            name: "电影达人",
            date: "2023-02-10",
            rating: 4.0,
            title: "情感与科技的完美平衡",
            content: `<p>《流浪地球2》在视觉特效上无疑是令人惊叹的，太空电梯、数字生命等设定都非常有想象力。影片对人类命运的思考也相当深刻，尤其是数字生命与人类生命价值的对比，引发了我不少思考。</p>
                      <p>唯一的缺点可能是某些情节稍显拖沓，173分钟的片长对部分观众来说可能有些疲劳。不过总体而言，这是一部值得反复观看的佳作。</p>`,
            helpful: 87
        }
    ],
    "2": [
        {
            id: "2-1",
            name: "魔戒迷",
            date: "2023-01-15",
            rating: 4.5,
            title: "中土世界的辉煌终章",
            content: `<p>《霍比特人3：五军之战》完美收官，彼得·杰克逊再次展现了他对托尔金世界的深刻理解。虽然相比《魔戒》三部曲，《霍比特人》在故事深度上有所欠缺，但作为前传，它成功地连接了两个系列。</p>
                      <p>战斗场面非常宏大，精灵、人类、矮人、兽人和老鹰的五军之战场面令人叹为观止。</p>`,
            helpful: 95
        }
    ],
    "3": [
        {
            id: "3-1",
            name: "喜剧粉",
            date: "2023-03-20",
            rating: 4.8,
            title: "沈腾的另类英雄之旅",
            content: `<p>《独行月球》将科幻与喜剧元素完美结合，沈腾饰演的宇航员角色既搞笑又感人。影片在保持了喜剧节奏的同时，也不乏科幻大片的宏大场面。</p>
                      <p>故事设定很有创意，一个人独自被困月球的处境既充满绝望又蕴含希望，沈腾的表演把这种矛盾诠释得恰到好处。</p>`,
            helpful: 108
        }
    ],
    "4": [
        {
            id: "4-1",
            name: "电影音乐爱好者",
            date: "2023-02-28",
            rating: 5.0,
            title: "现代歌舞片的巅峰之作",
            content: `<p>《爱乐之城》是对经典好莱坞歌舞片的致敬，同时又注入了现代元素，创造出一种既怀旧又创新的风格。瑞恩·高斯林和艾玛·斯通的化学反应超赞，两人的歌舞表演充满魅力。</p>
                      <p>影片的配乐和场景设计都非常出色，每一个音符都与情节完美契合，那句"Here's to the fools who dream"道出了电影的核心主题。</p>`,
            helpful: 125
        }
    ],
    "5": [
        {
            id: "5-1",
            name: "迪士尼迷",
            date: "2023-01-05",
            rating: 4.7,
            title: "经典动画的完美CG重现",
            content: `<p>2019版《狮子王》在视觉上达到了令人难以置信的高度，逼真的CG技术几乎让人以为在看一部真实动物的纪录片。影片忠实于1994年动画版的故事，同时增加了一些新的情感层次。</p>
                      <p>原版的经典音乐在新版中依然动人，《Circle of Life》的开场简直震撼人心。虽然有些观众认为动物的表情不如动画版丰富，但这是为了保持自然纪录片的风格而做出的艺术选择。</p>`,
            helpful: 87
        }
    ],
    "6": [
        {
            id: "6-1",
            name: "恐怖片爱好者",
            date: "2023-03-10",
            rating: 4.5,
            title: "经典恐怖片，细思极恐",
            content: `<p>《死寂》是温子仁导演初期的作品，但已经展现出他对恐怖氛围的精准把控。这部电影选择了一个独特的主题——腹语师娃娃，将其打造成了一个令人毛骨悚然的恐怖元素。</p>
                     <p>影片中"不要尖叫"的设定非常巧妙，既增加了紧张感，又为角色处境增添了更多危险。最后的反转结局出人意料，让整个故事达到高潮。虽然有些情节有些老套，但整体来说依然是恐怖片中的佳作。</p>`,
            helpful: 96
        },
        {
            id: "6-2",
            name: "午夜电影人",
            date: "2023-02-25",
            rating: 4.0,
            title: "腹语娃娃从此成为噩梦",
            content: `<p>如果你有恋物癖恐惧症，那这部电影绝对能激发你的恐惧。《死寂》成功将腹语娃娃这一普通物件转变为恐怖的载体，电影中阴森诡异的气氛和精心设计的跳吓场景令人印象深刻。</p>
                     <p>影片的摄影和美术设计也值得称赞，每一个场景都散发着令人不安的气息。唯一的缺点是某些角色的发展不够深入，但考虑到影片的重点在于营造恐怖气氛，这也是可以理解的。</p>`,
            helpful: 78
        }
    ]
};

let currentMovieId = null;
let currentRating = 0;

let currentTheme = localStorage.getItem('theme') || 'light';

document.addEventListener('DOMContentLoaded', function () {
    console.log("电影详情页面加载中...");

    initTheme();

    initMovieDetail();

    loadMovieData();

    loadMovieReviews(getUrlParameter('id'));
    setupHelpfulButtons();
    setupReplyButtons();
    setupRatingSystem();
});

function initTheme() {
    applyTheme(currentTheme);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        updateThemeIcon(currentTheme);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon(currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('#theme-toggle i');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
}

function initMovieDetail() {
    console.log("初始化电影详情页组件...");

    initCastScroll();

    initFavoriteButton();

    initShareButton();

    initImageGallery();
}

function setupEventListeners() {
    console.log("设置事件监听器...");

    setupRatingSystem();

    setupReviewButtons();
    setupHelpfulButtons();

    const movieId = getUrlParameter('id');
    if (movieId) {
        loadMovieReviews(movieId);
    }
}

function loadMovieData() {
    try {
        const movieId = getUrlParameter('id');
        console.log("加载电影ID:", movieId);

        if (!movieId) {
            throw new Error("未找到电影ID参数");
        }

        currentMovieId = movieId;

        const movie = moviesData[movieId];
        console.log("电影数据:", movie);

        if (!movie) {
            throw new Error("未找到ID为 " + movieId + " 的电影数据");
        }

        updateMovieUI(movie);

        return true;
    } catch (error) {
        console.error("加载电影数据失败:", error);
        showErrorMessage("无法加载电影数据，请稍后再试：" + error.message);
        return false;
    }
}

function updateMovieUI(movie) {
    console.log("更新电影UI:", movie.title);

    document.title = `${movie.title} | 电影世界`;
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) pageTitle.textContent = `${movie.title} | 电影世界`;

    const titleElement = document.getElementById('movie-title');
    if (titleElement) titleElement.textContent = movie.title || '';

    const originalTitleElement = document.getElementById('movie-original-title');
    if (originalTitleElement) originalTitleElement.textContent = movie.originalTitle || movie.title || '';

    const yearElement = document.getElementById('movie-year');
    if (yearElement) yearElement.textContent = movie.year || '';

    const runtimeElement = document.getElementById('movie-runtime');
    if (runtimeElement) runtimeElement.textContent = movie.runtime || '';

    const overviewElement = document.getElementById('movie-overview');
    if (overviewElement) overviewElement.textContent = movie.overview || '暂无简介';

    const posterElement = document.getElementById('movie-poster');
    if (posterElement) {
        const posterPath = `images/movie${currentMovieId}.png`;
        posterElement.src = posterPath;
        posterElement.alt = movie.title;
    }

    const backdropElement = document.getElementById('movie-backdrop');
    if (backdropElement) {
        const backdropPath = `images/movie${currentMovieId}.png`;
        backdropElement.style.backgroundImage = `url(${backdropPath})`;
    }

    updateGenres(movie.genres);

    updateRating(movie.ratingScore);

    updateCrewInfo(movie);

    setupTrailerButton(movie.trailer);
}

function updateGenres(genres) {
    const genresContainer = document.getElementById('movie-genres');
    if (!genresContainer || !genres || !genres.length) return;

    genresContainer.innerHTML = genres.map(genre =>
        `<span class="genre-tag">${genre}</span>`
    ).join('');
}

function updateRating(rating) {
    const ratingElement = document.getElementById('rating-number');
    if (ratingElement) {
        ratingElement.textContent = rating || '0.0';
    }
}

function updateCrewInfo(movie) {
    const directorNameElement = document.getElementById('director-name');
    if (directorNameElement && movie.director) {
        directorNameElement.textContent = movie.director;
    }

    const directorRoleElement = document.getElementById('director-role');
    if (directorRoleElement) {
        directorRoleElement.textContent = "导演";
    }

    const directorPhotoElement = document.getElementById('director-photo');
    if (directorPhotoElement) {
        directorPhotoElement.src = `images/${currentMovieId}a1.png`;
        directorPhotoElement.alt = movie.director;
    }

    const castList = document.getElementById('movie-cast-list');
    if (castList && movie.cast && movie.cast.length) {
        const actorLimit = Math.min(movie.cast.length, 5);

        const directorElement = castList.querySelector('.director');

        let castHTML = '';
        for (let i = 0; i < actorLimit; i++) {
            const photoPath = `images/${currentMovieId}a${i + 2}.png`;

            castHTML += `
                <div class="cast-member actor" style="flex-basis: 120px; text-align: center;">
                    <div class="cast-photo">
                        <img src="${photoPath}" alt="${movie.cast[i]}" 
                            style="width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
                            onerror="this.src='images/default-avatar.png'">
                    </div>
                    <div class="cast-info">
                        <h4>${movie.cast[i]}</h4>
                        <p class="cast-role">演员</p>
                    </div>
                </div>
            `;
        }

        if (directorElement) {
            directorElement.insertAdjacentHTML('afterend', castHTML);
        } else {
            castList.innerHTML = castHTML;
        }
    }

    loadMovieGallery(currentMovieId);

    updateTechnicalSpecs(movie);
}

function updateTechnicalSpecs(movie) {
    const releaseDateElement = document.getElementById('release-date');
    if (releaseDateElement) {
        releaseDateElement.textContent = movie.year || '-';
    }

    const runtimeElement = document.getElementById('runtime');
    if (runtimeElement) {
        runtimeElement.textContent = movie.runtime || '-';
    }

    const defaultSpecs = {
        country: '中国',
        language: '汉语',
        color: '彩色',
        sound: 'Dolby Atmos',
        format: 'IMAX'
    };

    const specs = ['country', 'language', 'color', 'sound', 'format'];
    specs.forEach(spec => {
        const element = document.getElementById(spec);
        if (element) {
            element.textContent = movie[spec] || defaultSpecs[spec] || '-';
        }
    });
}

function loadMovieGallery(movieId) {
    const galleryContainer = document.getElementById('movie-gallery');
    if (!galleryContainer) return;

    let galleryHTML = '';
    for (let i = 1; i <= 6; i++) {
        const imagePath = `images/${movieId}b${i}.png`;

        galleryHTML += `
            <div class="gallery-item">
                <a href="${imagePath}" class="gallery-link">
                    <img src="${imagePath}" alt="剧照 ${i}" onerror="this.src='images/image-placeholder.png'">
                </a>
            </div>
        `;
    }

    galleryContainer.innerHTML = galleryHTML;

    const galleryTitle = document.querySelector('.movie-gallery .section-title .count');
    if (galleryTitle) {
        galleryTitle.textContent = "(6)";
    }

    initImageGallery();
}

function setupTrailerButton(trailerSrc) {
    const trailerButton = document.querySelector('.btn-play-trailer');
    if (!trailerButton) return;

    if (trailerSrc) {
        trailerButton.dataset.trailer = trailerSrc;

        const newTrailerButton = trailerButton.cloneNode(true);
        trailerButton.parentNode.replaceChild(newTrailerButton, trailerButton);

        newTrailerButton.addEventListener('click', function () {
            const modal = document.getElementById('trailerModal');
            const video = document.getElementById('movieTrailer');

            if (modal && video) {
                video.src = this.dataset.trailer;
                modal.style.display = 'block';

                const closeBtn = modal.querySelector('.close-modal');
                if (closeBtn) {
                    closeBtn.onclick = function () {
                        modal.style.display = 'none';
                        video.pause();
                    };
                }

                window.onclick = function (event) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                        video.pause();
                    }
                };
            }
        });
    } else {
        trailerButton.style.display = 'none';
    }
}

function showErrorMessage(message) {
    const mainContent = document.querySelector('.movie-hero-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="error-message" style="padding: 30px; text-align: center; background-color: rgba(30, 30, 30, 0.8); border-radius: 10px;">
                <i class="fas fa-exclamation-circle" style="font-size: 48px; color: #e74c3c; margin-bottom: 20px;"></i>
                <h2>加载失败</h2>
                <p>${message}</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">返回首页</a>
            </div>
        `;
    }
    console.error("显示错误信息:", message);
}

function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function initCastScroll() {
    const castContainer = document.querySelector('.cast-container');
    const castScroll = document.querySelector('.cast-scroll');

    if (!castContainer || !castScroll) return;

    const prevBtn = document.querySelector('.cast-scroll-btn.prev');
    const nextBtn = document.querySelector('.cast-scroll-btn.next');

    if (prevBtn && nextBtn) {
        prevBtn.style.opacity = '0.5';
        prevBtn.style.pointerEvents = 'none';

        nextBtn.addEventListener('click', function () {
            const scrollAmount = castScroll.offsetWidth * 0.8;

            castScroll.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', function () {
            const scrollAmount = castScroll.offsetWidth * 0.8;

            castScroll.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        castScroll.addEventListener('scroll', function () {
            const scrollLeft = castScroll.scrollLeft;
            const scrollWidth = castScroll.scrollWidth;
            const clientWidth = castScroll.clientWidth;

            if (scrollLeft <= 0) {
                prevBtn.style.opacity = '0.5';
                prevBtn.style.pointerEvents = 'none';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            }

            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                nextBtn.style.opacity = '0.5';
                nextBtn.style.pointerEvents = 'none';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        });

        castScroll.dispatchEvent(new Event('scroll'));
    }
}

function initFavoriteButton() {
    const favoriteBtn = document.getElementById('favoriteMovie');
    const watchlistItems = document.querySelector('.watchlist-items');
    const loginMessage = document.querySelector('.login-message');
    const emptyMessage = document.querySelector('.empty-message');

    if (!favoriteBtn) return;

    const isLoggedIn = checkLoginStatus();

    if (!isLoggedIn) {
        if (watchlistItems) watchlistItems.style.display = 'none';
        if (loginMessage) loginMessage.style.display = 'block';
        if (emptyMessage) emptyMessage.style.display = 'none';

        favoriteBtn.title = '请先登录以收藏电影';

        favoriteBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            showToast('请先登录后再收藏电影');

            // 可选：跳转到登录页面
            // setTimeout(() => {
            //     window.location.href = 'login.html';
            // }, 1500);
        });

        return;
    }

    if (watchlistItems) watchlistItems.style.display = 'block';
    if (loginMessage) loginMessage.style.display = 'none';
    if (emptyMessage) emptyMessage.style.display = 'none';

    const movieId = getUrlParameter('id');

    if (!movieId) return;

    const isFavorited = checkIfFavorited(movieId);

    updateFavoriteButton(favoriteBtn, isFavorited);

    favoriteBtn.addEventListener('click', function () {
        const newState = toggleFavorite(movieId);

        updateFavoriteButton(favoriteBtn, newState);

        updateWatchlistDisplay();
    });

    updateWatchlistDisplay();
}

function checkLoginStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

function updateWatchlistDisplay() {
    try {
        const watchlistItems = document.querySelector('.watchlist-items');
        const loginMessage = document.querySelector('.login-message');
        const emptyMessage = document.querySelector('.empty-message');

        // 首先检查登录状态
        const isLoggedIn = checkLoginStatus();
        if (!isLoggedIn) {
            if (watchlistItems) watchlistItems.style.display = 'none';
            if (loginMessage) loginMessage.style.display = 'block';
            if (emptyMessage) emptyMessage.style.display = 'none';
            return;
        }

        const favorites = JSON.parse(localStorage.getItem('movieWorld.favorites') || '[]');

        if (favorites.length === 0) {
            if (watchlistItems) watchlistItems.style.display = 'none';
            if (loginMessage) loginMessage.style.display = 'none';
            if (emptyMessage) emptyMessage.style.display = 'block';
            return;
        } else {
            if (watchlistItems) watchlistItems.style.display = 'block';
            if (loginMessage) loginMessage.style.display = 'none';
            if (emptyMessage) emptyMessage.style.display = 'none';
        }

        if (watchlistItems) {
            watchlistItems.innerHTML = '';

            const watchlistMovies = [];

            favorites.forEach(movieId => {
                if (moviesData[movieId]) {
                    watchlistMovies.push({
                        id: movieId,
                        title: moviesData[movieId].title,
                        poster: moviesData[movieId].poster || `images/movie${movieId}.png`
                    });
                }
            });

            let savedOrder = [];
            try {
                savedOrder = JSON.parse(localStorage.getItem('movieWorld.watchlistOrder') || '[]');
            } catch (e) {
                console.error('Error parsing saved order:', e);
            }

            if (savedOrder.length > 0) {
                watchlistMovies.sort((a, b) => {
                    const aIndex = savedOrder.indexOf(a.title);
                    const bIndex = savedOrder.indexOf(b.title);

                    if (aIndex === -1) return 1;
                    if (bIndex === -1) return -1;
                    return aIndex - bIndex;
                });
            }

            watchlistMovies.forEach(movie => {
                const item = document.createElement('div');
                item.className = 'watchlist-item';
                item.draggable = true;
                item.dataset.id = movie.id;

                item.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <div class="watchlist-item-info">
                        <h4>${movie.title}</h4>
                    </div>
                    <button class="btn-remove" title="从收藏列表中移除">
                        <i class="fas fa-times"></i>
                    </button>
                `;

                item.addEventListener('click', function (e) {
                    if (e.target.closest('.btn-remove')) {
                        e.preventDefault();
                        e.stopPropagation();

                        toggleFavorite(movie.id.toString());
                        updateWatchlistDisplay();

                        const favoriteBtn = document.getElementById('favoriteMovie');
                        if (favoriteBtn) {
                            updateFavoriteButton(favoriteBtn, false);
                        }

                        return;
                    }

                    window.location.href = `movie-detail.html?id=${movie.id}`;
                });

                watchlistItems.appendChild(item);
            });

            if (typeof initWatchlistDrag === 'function') {
                initWatchlistDrag();
            }
        }
    } catch (error) {
        console.error('Error updating watchlist display:', error);
    }
}

function checkIfFavorited(movieId) {
    try {
        const favorites = JSON.parse(localStorage.getItem('movieWorld.favorites') || '[]');
        return favorites.includes(movieId);
    } catch (error) {
        console.error('Error checking if favorited:', error);
        localStorage.setItem('movieWorld.favorites', JSON.stringify([]));
        return false;
    }
}

function toggleFavorite(movieId) {
    try {
        let favorites = JSON.parse(localStorage.getItem('movieWorld.favorites') || '[]');
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
    } catch (error) {
        console.error('Error toggling favorite:', error);
        localStorage.setItem('movieWorld.favorites', JSON.stringify([]));
        return false;
    }
}

function updateFavoriteButton(button, isFavorited) {
    const icon = button.querySelector('i');

    if (isFavorited) {
        button.title = '取消收藏';
        button.classList.add('active');

        if (icon) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.classList.add('favorited');
            icon.style.color = '#e74c3c';
        }
    } else {
        button.title = '收藏电影';
        button.classList.remove('active');

        if (icon) {
            icon.classList.remove('fas');
            icon.classList.remove('favorited');
            icon.classList.add('far');
            icon.style.color = '#f8f8f8';
        }
    }
}

function initShareButton() {
    const shareBtn = document.querySelector('.btn-share');

    if (!shareBtn) return;

    shareBtn.addEventListener('click', function () {
        const url = window.location.href;
        const title = document.querySelector('.movie-title').textContent;

        if (navigator.share) {
            navigator.share({
                title: title,
                text: `推荐电影：${title}`,
                url: url
            }).catch(console.error);
        } else {
            copyToClipboard(url);

            showToast("链接已复制，请分享给您的朋友！");
        }
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('无法复制链接：', err);
    }

    document.body.removeChild(textarea);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function initImageGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!galleryItems.length) return;

    galleryItems.forEach(item => {
        const link = item.querySelector('.gallery-link');
        if (!link) return;

        link.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');

            const viewer = document.createElement('div');
            viewer.className = 'image-viewer';
            viewer.innerHTML = `
                <div class="viewer-backdrop"></div>
                <div class="viewer-content">
                    <img src="${imgSrc}" alt="剧照大图">
                    <button class="viewer-close">&times;</button>
                </div>
            `;

            viewer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
            `;

            const backdrop = viewer.querySelector('.viewer-backdrop');
            backdrop.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.9);
            `;

            const content = viewer.querySelector('.viewer-content');
            content.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
            `;

            const img = viewer.querySelector('img');
            img.style.cssText = `
                max-width: 100%;
                max-height: 80vh;
                box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
            `;

            const closeBtn = viewer.querySelector('.viewer-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 30px;
                cursor: pointer;
            `;

            document.body.appendChild(viewer);

            document.body.style.overflow = 'hidden';

            function closeViewer() {
                document.body.removeChild(viewer);
                document.body.style.overflow = '';
            }

            closeBtn.addEventListener('click', closeViewer);
            backdrop.addEventListener('click', closeViewer);

            document.addEventListener('keydown', function closeOnEsc(event) {
                if (event.key === 'Escape') {
                    closeViewer();
                    document.removeEventListener('keydown', closeOnEsc);
                }
            });
        });
    });
}

function loadMovieReviews(movieId) {
    const reviews = movieReviews[movieId] || [];
    const reviewsList = document.getElementById('reviews-list');

    if (!reviewsList) return;

    reviewsList.innerHTML = reviews.map(review => createReviewElement(review)).join('');
    updateReviewCount(reviews.length);
}

function createReviewElement(review) {
    return `
        <div class="review-item" data-id="${review.id}" data-date="${review.date}" data-rating="${review.rating}">
            <div class="review-header">
                <div class="reviewer-info">
                    <h4>${review.name}</h4>
                    <div class="review-meta" style="margin-left: 4px;margin-top: 4px; color: #aaa;">
                        <span class="review-date">${review.date}</span>
                    </div>
                </div>
                <div class="review-rating">
                    ${generateStarsHTML(review.rating)}
                    <span class="rating-value">${review.rating.toFixed(1)}</span>
                </div>
            </div>
            <h3 class="review-title">${review.title}</h3>
            <div class="review-content">${review.content}</div>
            <div class="review-actions">
                <button class="btn-helpful" data-review-id="${review.id}">
                    <i class="far fa-thumbs-up"></i>
                    <span class="helpful-count">${review.helpful || 0}</span>
                </button>
                <button class="btn-reply">回复</button>
            </div>
            <div class="reply-form" style="display: none;">
                <textarea placeholder="写下您的回复..."></textarea>
                <div class="reply-actions" style="margin-top: 10px; display: flex; gap: 10px; justify-content: flex-end;">
                    <button class="btn-cancel-reply" style="padding: 6px 15px; border-radius: 4px; border: 1px solid #ddd; background: transparent; cursor: pointer;">取消</button>
                    <button class="btn-submit-reply" style="padding: 6px 15px; border-radius: 4px; border: none; background: #e50914; color: white; cursor: pointer;">提交</button>
                </div>
            </div>
            <div class="review-moderation" style="display: none; background-color: rgba(40, 40, 40, 0.95); border-radius: 12px; padding: 20px; text-align: center; margin-top: 15px;">
                <div class="moderation-content">
                    <div class="moderation-icon">
                        <i class="fas fa-check-circle" style="font-size: 32px; color: #4CAF50; margin-bottom: 10px;"></i>
                    </div>
                    <h3 style="font-size: 18px; margin-bottom: 8px;">评论提交成功</h3>
                    <p style="font-size: 14px; margin-bottom: 5px;">您的评论已提交，正在等待审核</p>
                    <p class="moderation-info" style="font-size: 12px; color: #bbb; margin-bottom: 5px;">为保证社区质量，所有评论将在审核后显示</p>
                    <p class="moderation-time" style="font-size: 14px; background-color: rgba(60, 60, 60, 0.5); display: inline-block; padding: 5px 10px; border-radius: 15px;">预计审核时间：24小时内</p>
                </div>
            </div>
        </div>
    `;
}

function generateStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    return starsHTML;
}

function updateReviewCount(count) {
    const countElement = document.querySelector('.movie-reviews .section-title .count');
    if (countElement) {
        countElement.textContent = `(${count})`;
    }
}

function setupHelpfulButtons() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.btn-helpful')) {
            const button = e.target.closest('.btn-helpful');
            const reviewId = button.dataset.reviewId;
            const countElement = button.querySelector('.helpful-count');

            const isActive = button.classList.toggle('active');
            const icon = button.querySelector('i');
            if (icon) {
                icon.classList.toggle('far');
                icon.classList.toggle('fas');
            }

            let count = parseInt(countElement.textContent || '0');
            count = isActive ? count + 1 : count - 1;
            countElement.textContent = count;

            const helpfulState = JSON.parse(localStorage.getItem('movieWorld.helpfulState') || '{}');
            helpfulState[reviewId] = isActive;
            localStorage.setItem('movieWorld.helpfulState', JSON.stringify(helpfulState));
        }
    });
}

function setupReplyButtons() {
    document.addEventListener('click', function (e) {
        if (e.target.closest('.btn-reply')) {
            const reviewItem = e.target.closest('.review-item');
            if (!reviewItem) return;

            const replyForm = reviewItem.querySelector('.reply-form');
            if (replyForm) {
                replyForm.style.display = replyForm.style.display === 'none' ? 'block' : 'none';
            }
        }

        if (e.target.closest('.btn-cancel-reply')) {
            const replyForm = e.target.closest('.reply-form');
            if (replyForm) {
                replyForm.style.display = 'none';
            }
        }

        if (e.target.closest('.btn-submit-reply')) {
            const reviewItem = e.target.closest('.review-item');
            const replyForm = reviewItem.querySelector('.reply-form');
            const moderationDiv = reviewItem.querySelector('.review-moderation');

            if (!replyForm || !moderationDiv) return;

            const textarea = replyForm.querySelector('textarea');
            if (!textarea) return;

            const content = textarea.value.trim();

            if (content) {
                replyForm.style.display = 'none';
                textarea.value = '';

                moderationDiv.style.display = 'block';

                setTimeout(() => {
                    moderationDiv.style.display = 'none';
                }, 3000);
            }
        }
    });
}

function setupRatingSystem() {
    const stars = document.querySelectorAll('.stars-container i');
    const ratingValue = document.querySelector('.rating-form .rating-value');

    if (!stars.length || !ratingValue) {
        console.log('评分系统元素未找到');
        return;
    }

    stars.forEach(star => {
        star.removeEventListener('click', handleStarClick);
        star.removeEventListener('mouseover', handleStarMouseover);
        star.removeEventListener('mouseout', handleStarMouseout);
    });

    stars.forEach(star => {
        star.addEventListener('click', handleStarClick);
        star.addEventListener('mouseover', handleStarMouseover);
        star.addEventListener('mouseout', handleStarMouseout);
    });

    function handleStarClick(e) {
        const value = parseInt(e.target.getAttribute('data-value'));
        currentRating = value;
        highlightStars(value);
        ratingValue.textContent = value.toFixed(1);
        console.log('设置评分为:', value);
    }

    function handleStarMouseover(e) {
        const value = parseInt(e.target.getAttribute('data-value'));
        highlightStars(value);
    }

    function handleStarMouseout() {
        highlightStars(currentRating);
    }

    function highlightStars(value) {
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= value) {
                star.className = 'fas fa-star';
            } else {
                star.className = 'far fa-star';
            }
        });
    }

    const reviewForm = document.getElementById('review-form');
    const reviewModeration = document.getElementById('review-moderation');

    if (reviewForm) {
        reviewForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const reviewTitle = document.getElementById('review-title').value;
            const reviewContent = document.getElementById('review-content').value;

            if (currentRating === 0) {
                alert('请为电影评分');
                return;
            }

            if (!reviewTitle.trim()) {
                alert('请输入评论标题');
                return;
            }

            if (!reviewContent.trim()) {
                alert('请输入评论内容');
                return;
            }

            console.log('提交评论:', {
                movieId: currentMovieId,
                rating: currentRating,
                title: reviewTitle,
                content: reviewContent
            });

            reviewForm.style.display = 'none';
            if (reviewModeration) {
                reviewModeration.style.display = 'block';

                setTimeout(() => {
                    reviewModeration.style.display = 'none';
                    reviewForm.style.display = 'block';

                    reviewForm.reset();
                    currentRating = 0;
                    highlightStars(0);
                    ratingValue.textContent = '0';
                }, 3000);
            }
        });
    }

    const newReviewBtn = document.getElementById('new-review-btn');
    if (newReviewBtn) {
        newReviewBtn.addEventListener('click', function () {
            if (reviewModeration) {
                reviewModeration.style.display = 'none';
            }
            if (reviewForm) {
                reviewForm.style.display = 'block';

                reviewForm.reset();
                currentRating = 0;
                highlightStars(0);
                ratingValue.textContent = '0';
            }
        });
    }
} 