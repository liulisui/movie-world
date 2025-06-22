
 
document.addEventListener('DOMContentLoaded', function () {
     
    initBoxOfficeChart();

     
    initRatingCircle();

     
    initLoginCanvas();
});


function initBoxOfficeChart() {
    const canvas = document.getElementById('boxOfficeChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

     
    const boxOfficeData = [
        { name: '流浪地球2', value: 4.5, lightColor: '#e74c3c', darkColor: '#ff6b5b' },
        { name: '独行月球', value: 3.2, lightColor: '#3498db', darkColor: '#5dade2' },
        { name: '霍比特人3', value: 2.7, lightColor: '#2ecc71', darkColor: '#58d68d' },
        { name: '狮子王', value: 1.8, lightColor: '#f39c12', darkColor: '#f8c471' },
        { name: '爱乐之城', value: 1.5, lightColor: '#9b59b6', darkColor: '#c39bd3' }
    ];

     
    const total = boxOfficeData.reduce((sum, item) => sum + item.value, 0);

     
    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        drawChart();  
    }

     
    window.addEventListener('resize', resizeCanvas);

     
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === 'data-theme') {
                drawChart();  
            }
        });
    });

     
    observer.observe(document.documentElement, { attributes: true });

    resizeCanvas();

     
    function getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

     
    function getColorByTheme(movie) {
        return getCurrentTheme() === 'dark' ? movie.darkColor : movie.lightColor;
    }

     
    function drawChart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawPieChart();
        drawLegend();
    }

     
    function drawPieChart() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 50;

        let startAngle = -Math.PI / 2;  

         
        boxOfficeData.forEach(movie => {
            const percentage = movie.value / total;
            const endAngle = startAngle + (2 * Math.PI * percentage);

             
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            ctx.closePath();

             
            ctx.fillStyle = getColorByTheme(movie);
            ctx.fill();

             
            ctx.strokeStyle = getCurrentTheme() === 'dark' ? '#333' : '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();

             
            const labelAngle = startAngle + (endAngle - startAngle) / 2;
            const labelRadius = radius * 0.7;  
            const labelX = centerX + labelRadius * Math.cos(labelAngle);
            const labelY = centerY + labelRadius * Math.sin(labelAngle);

             
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(`${Math.round(percentage * 100)}%`, labelX, labelY);

             
            startAngle = endAngle;
        });

         
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.4, 0, 2 * Math.PI);
        ctx.fillStyle = getCurrentTheme() === 'dark' ? 'rgba(66, 66, 77, 0.9)' : 'rgba(44, 62, 80, 0.9)';
        ctx.fill();

         
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('总票房', centerX, centerY - 15);
        ctx.fillText(`${total.toFixed(1)}亿`, centerX, centerY + 15);
    }

     
    function drawLegend() {
        const legendX = 20;
        let legendY = canvas.height - boxOfficeData.length * 25 - 10;

         
        const isDark = getCurrentTheme() === 'dark';
        ctx.fillStyle = isDark ? 'rgba(50, 50, 50, 0.7)' : 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(legendX - 10, legendY - 30, 230, boxOfficeData.length * 25 + 40);
        ctx.strokeStyle = isDark ? 'rgba(200, 200, 200, 0.3)' : 'rgba(255, 255, 255, 0.3)';
        ctx.strokeRect(legendX - 10, legendY - 30, 230, boxOfficeData.length * 25 + 40);

         
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-color') || '#333';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('电影', legendX, legendY);
        ctx.fillText('票房(亿)', legendX + 160, legendY);

        legendY += 20;

         
        boxOfficeData.forEach(movie => {
             
            ctx.fillStyle = getColorByTheme(movie);
            ctx.fillRect(legendX, legendY - 10, 15, 15);

             
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-color') || '#333';
            ctx.font = '14px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(movie.name, legendX + 25, legendY);

             
            ctx.fillText(`${movie.value}亿`, legendX + 160, legendY);

            legendY += 25;
        });
    }
}


function initRatingCircle() {
    const ratingCanvas = document.getElementById('ratingCircle');
    if (!ratingCanvas) return;

    const ctx = ratingCanvas.getContext('2d');
    const centerX = ratingCanvas.width / 2;
    const centerY = ratingCanvas.height / 2;
    const radius = ratingCanvas.width / 2 - 10;

     
    const ratingElement = document.getElementById('rating-number');
    const rating = parseFloat(ratingElement?.textContent || ratingCanvas.getAttribute('data-rating') || '0');
    const normalizedRating = rating / 10;  

    function getColor(rating) {
        if (rating >= 8) {
            return '#4CAF50';  
        } else if (rating >= 6) {
            return '#FFC107';  
        } else {
            return '#F44336';  
        }
    }

    function drawBackground() {
        ctx.clearRect(0, 0, ratingCanvas.width, ratingCanvas.height);

         
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 10;
        ctx.stroke();
    }


    function drawRating(progress) {
         
        const endAngle = progress * normalizedRating * Math.PI * 2;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -Math.PI / 2, endAngle - Math.PI / 2);
        ctx.strokeStyle = getColor(rating);
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.stroke();
    }


    function animate(timestamp) {
        if (!startTime) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / 1000, 1);  

        drawBackground();
        drawRating(progress);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

     
    let startTime = null;
    requestAnimationFrame(animate);
}


function initLoginCanvas() {
    const canvas = document.getElementById('login-canvas');
    if (!canvas) return;

     
    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }

    resizeCanvas();

     
    const ctx = canvas.getContext('2d');

     
    class FilmStrip {
        constructor(x, y, width, height, speed) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.speed = speed;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
             
            this.y += this.speed;

             
            if (this.y > canvas.height) {
                this.reset();
            }
        }

        reset() {
            this.y = -this.height;
            this.x = Math.random() * canvas.width;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        draw() {
            ctx.globalAlpha = this.opacity;

             
            ctx.fillStyle = '#222';
            ctx.fillRect(this.x, this.y, this.width, this.height);

             
            const holeSize = this.width * 0.15;
            const holeMargin = this.width * 0.1;
            const holes = Math.floor(this.height / (holeSize * 2));

            ctx.fillStyle = '#444';
            for (let i = 0; i < holes; i++) {
                const holeY = this.y + holeSize + i * holeSize * 2;

                 
                ctx.beginPath();
                ctx.arc(this.x + holeMargin + holeSize / 2, holeY, holeSize / 2, 0, Math.PI * 2);
                ctx.fill();

                 
                ctx.beginPath();
                ctx.arc(this.x + this.width - holeMargin - holeSize / 2, holeY, holeSize / 2, 0, Math.PI * 2);
                ctx.fill();
            }

             
            ctx.globalAlpha = 1;
        }
    }

     
    const filmStrips = [];
    const stripCount = 8;

    function createFilmStrips() {
        filmStrips.length = 0;  

        for (let i = 0; i < stripCount; i++) {
            const width = Math.random() * 30 + 20;
            const height = Math.random() * 200 + 100;
            const x = Math.random() * (canvas.width - width);
            const y = Math.random() * canvas.height - height;
            const speed = Math.random() * 0.5 + 0.2;

            filmStrips.push(new FilmStrip(x, y, width, height, speed));
        }
    }

    createFilmStrips();

     
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    function animate(timestamp) {
         
        const elapsed = timestamp - lastTime;

         
        if (elapsed > frameInterval) {
            lastTime = timestamp - (elapsed % frameInterval);

             
            ctx.clearRect(0, 0, canvas.width, canvas.height);

             
            filmStrips.forEach(strip => {
                strip.update();
                strip.draw();
            });
        }

         
        requestAnimationFrame(animate);
    }

     
    requestAnimationFrame(animate);

     
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            resizeCanvas();
            createFilmStrips();
        }, 100);
    });
} 