

 
document.addEventListener('DOMContentLoaded', function () {
     
    initWatchlistDrag();
});

function initWatchlistDrag() {
    const container = document.getElementById('drag-items');
    if (!container) return;

    const items = container.querySelectorAll('.watchlist-item');
     
    if (items.length === 0) return;

    let draggedItem = null;

     
    const dragStatusHint = document.createElement('div');
    dragStatusHint.className = 'drag-status-hint';
    dragStatusHint.style.display = 'none';

     
    const watchlistSection = container.closest('.watchlist');
    if (watchlistSection) {
         
        const watchlistTitle = watchlistSection.querySelector('h3');
        if (watchlistTitle) {
            watchlistTitle.insertAdjacentElement('afterend', dragStatusHint);
        } else {
            watchlistSection.insertBefore(dragStatusHint, watchlistSection.firstChild);
        }
    } else {
         
        container.parentNode.insertBefore(dragStatusHint, container);
    }

     
    items.forEach(item => {
         
        item.addEventListener('dragstart', function (e) {
            draggedItem = this;
            setTimeout(() => {
                this.classList.add('dragging');

                 
                const draggedTitle = this.querySelector('h4').textContent;
                dragStatusHint.innerHTML = `<i class="fas fa-arrows-alt"></i> 正在移动: <span>${draggedTitle}</span>`;
                dragStatusHint.style.display = 'block';
            }, 0);

             
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
        });

         
        item.addEventListener('dragend', function () {
            this.classList.remove('dragging');
            draggedItem = null;

             
            saveWatchlistOrder();

             
            dragStatusHint.style.display = 'none';
        });

         
        item.addEventListener('dragover', function (e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';

             
            if (this !== draggedItem) {
                const rect = this.getBoundingClientRect();
                const midY = rect.top + rect.height / 2;
                const insertBefore = e.clientY < midY;

                 
                const targetTitle = this.querySelector('h4').textContent;
                const draggedTitle = draggedItem.querySelector('h4').textContent;

                if (insertBefore) {
                     
                    dragStatusHint.innerHTML = `<i class="fas fa-level-up-alt fa-rotate-90"></i> 将 <span>${draggedTitle}</span> 移到 <span>${targetTitle}</span> 之前`;
                } else {
                     
                    dragStatusHint.innerHTML = `<i class="fas fa-level-down-alt fa-rotate-90"></i> 将 <span>${draggedTitle}</span> 移到 <span>${targetTitle}</span> 之后`;
                }
            }
        });

         
        item.addEventListener('dragenter', function (e) {
            e.preventDefault();
            if (this !== draggedItem) {
                this.classList.add('dragover');
            }
        });

         
        item.addEventListener('dragleave', function () {
            this.classList.remove('dragover');
        });

         
        item.addEventListener('drop', function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.classList.remove('dragover');

            if (this !== draggedItem) {
                const rect = this.getBoundingClientRect();
                const midY = rect.top + rect.height / 2;
                const insertBefore = e.clientY < midY;

                if (insertBefore) {
                     
                    this.parentNode.insertBefore(draggedItem, this);
                } else {
                     
                    this.parentNode.insertBefore(draggedItem, this.nextSibling);
                }
            }
        });
    });

     
    container.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    container.addEventListener('drop', function (e) {
        e.preventDefault();
        dragStatusHint.style.display = 'none';
    });

     
    container.addEventListener('mouseleave', function () {
        dragStatusHint.style.display = 'none';
    });

     
    addDragDropStyles();


    function isBefore(el1, el2) {
        let cur;
        if (el2.parentNode === el1.parentNode) {
            for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
                if (cur === el2) return true;
            }
        }
        return false;
    }


    function saveWatchlistOrder() {
         
        const items = container.querySelectorAll('.watchlist-item');
        const order = [];

        items.forEach(item => {
             
            const titleElement = item.querySelector('h4');
            if (titleElement) {
                const movieTitle = titleElement.textContent.trim();
                order.push(movieTitle);
            }
        });

         
        localStorage.setItem('movieWorld.watchlistOrder', JSON.stringify(order));

         
        checkEmptyList();
    }


    function checkEmptyList() {
        const items = container.querySelectorAll('.watchlist-item');
        const emptyMessage = document.querySelector('.empty-watchlist');

        if (items.length === 0 && !emptyMessage) {
            const message = document.createElement('div');
            message.className = 'empty-watchlist';
            message.innerHTML = '<i class="fas fa-film"></i><p>您的收藏列表为空</p>';
            container.appendChild(message);
        } else if (items.length > 0 && emptyMessage) {
            emptyMessage.parentNode.removeChild(emptyMessage);
        }
    }


    function addDragDropStyles() {
         
        if (document.getElementById('drag-drop-styles')) return;

         
        const style = document.createElement('style');
        style.id = 'drag-drop-styles';
        style.textContent = `
            .watchlist-item {
                cursor: grab;
                transition: all 0.2s ease;
                position: relative;
            }
            
            .watchlist-item.dragging {
                opacity: 0.5;
                transform: scale(0.98);
                cursor: grabbing;
            }
            
            .watchlist-item.dragover {
                border-color: var(--primary-color);
                box-shadow: 0 0 10px rgba(229, 9, 20, 0.2);
                transform: scale(1.02);
            }
            
            .drag-hint {
                text-align: center;
                padding: 8px;
                font-size: 0.9rem;
                color: var(--text-light);
                transition: all 0.3s ease;
            }
            
            .drag-status-hint {
                position: relative;
                margin: 8px 0;
                padding: 10px;
                background-color: rgba(245, 245, 245, 0.9);
                border-left: 3px solid var(--primary-color);
                border-radius: 4px;
                font-size: 13px;
                text-align: left;
                color: #333;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                transition: all 0.2s ease;
            }
            
            .drag-status-hint i {
                margin-right: 5px;
                color: var(--primary-color);
            }
            
            .drag-status-hint span {
                font-weight: bold;
                color: var(--primary-color);
            }
            
            [data-theme="dark"] .drag-status-hint {
                background-color: rgba(45, 45, 45, 0.9);
                color: #ddd;
            }
            
            .empty-watchlist {
                text-align: center;
                padding: 20px;
                color: var(--text-light);
            }
            
            .empty-watchlist i {
                font-size: 2rem;
                margin-bottom: 10px;
                opacity: 0.5;
            }
        `;

         
        document.head.appendChild(style);
    }
}


function addToWatchlist(movie) {
    if (!movie || !movie.id || !movie.title) {
        console.error('Invalid movie data for watchlist');
        return false;
    }

     
    let watchlist = JSON.parse(localStorage.getItem('movieWorld.watchlist') || '[]');

     
    const exists = watchlist.some(item => item.id === movie.id);
    if (exists) {
        console.log('Movie already in watchlist:', movie.title);
        return false;
    }

     
    watchlist.push(movie);
    localStorage.setItem('movieWorld.watchlist', JSON.stringify(watchlist));

     
    updateWatchlistDOM(movie);

    return true;
}


function updateWatchlistDOM(movie) {
    const container = document.getElementById('drag-items');
    if (!container) return;

     
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

     
    container.appendChild(item);

     
    const emptyMessage = document.querySelector('.empty-watchlist');
    if (emptyMessage) {
        emptyMessage.remove();
    }

     
    initWatchlistDrag();
}


function showAddedMessage(movieTitle, alreadyExists) {
     
    const message = document.createElement('div');
    message.className = 'watchlist-message';

    if (alreadyExists) {
        message.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <p>${movieTitle} 已在您的收藏列表中</p>
        `;
        message.classList.add('info');
    } else {
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>${movieTitle} 已添加到收藏列表</p>
        `;
        message.classList.add('success');
    }

     
    document.body.appendChild(message);

     
    setTimeout(() => {
        message.classList.add('show');
    }, 10);

     
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 300);
    }, 3000);
}