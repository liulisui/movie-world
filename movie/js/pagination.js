 
document.addEventListener('DOMContentLoaded', function () {
     
    initPagination();
});


function initPagination() {
    const paginationContainers = document.querySelectorAll('.pagination-container');

    paginationContainers.forEach(container => {
         
        const totalItems = parseInt(container.dataset.total || '0');
        const itemsPerPage = parseInt(container.dataset.perPage || '10');
        const currentPage = parseInt(container.dataset.currentPage || '1');
        const baseUrl = container.dataset.baseUrl || '';

         
        if (totalItems <= itemsPerPage) {
            container.style.display = 'none';
            return;
        }

         
        const totalPages = Math.ceil(totalItems / itemsPerPage);

         
        container.innerHTML = generatePaginationHTML(currentPage, totalPages, baseUrl);
    });
}


function generatePaginationHTML(currentPage, totalPages, baseUrl) {
    let html = '<div class="pagination">';

     
    if (currentPage > 1) {
        html += `<a href="${getPageUrl(baseUrl, currentPage - 1)}" class="pagination-prev" title="上一页"><i class="fas fa-chevron-left"></i></a>`;
    } else {
        html += `<span class="pagination-prev disabled" title="上一页"><i class="fas fa-chevron-left"></i></span>`;
    }

     
    const pagesToShow = calculatePagesToShow(currentPage, totalPages);

     
    for (let i = 0; i < pagesToShow.length; i++) {
        if (pagesToShow[i] === '...') {
             
            html += `<span class="pagination-ellipsis">...</span>`;
        } else {
             
            const page = pagesToShow[i];
            if (page === currentPage) {
                html += `<span class="pagination-page active">${page}</span>`;
            } else {
                html += `<a href="${getPageUrl(baseUrl, page)}" class="pagination-page">${page}</a>`;
            }
        }
    }

     
    if (currentPage < totalPages) {
        html += `<a href="${getPageUrl(baseUrl, currentPage + 1)}" class="pagination-next" title="下一页"><i class="fas fa-chevron-right"></i></a>`;
    } else {
        html += `<span class="pagination-next disabled" title="下一页"><i class="fas fa-chevron-right"></i></span>`;
    }

    html += '</div>';

    return html;
}

function calculatePagesToShow(currentPage, totalPages) {
    const pages = [];

     
    pages.push(1);

     
    if (totalPages <= 7) {
        for (let i = 2; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

     
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

     
    if (currentPage > 4) {
        pages.push('...');
    }

     
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

     
    if (endPage < totalPages - 1) {
        pages.push('...');
    }

     
    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return pages;
}


function getPageUrl(baseUrl, page) {
     
    if (baseUrl.includes('?')) {
         
        if (baseUrl.includes('page=')) {
            return baseUrl.replace(/page=\d+/, `page=${page}`);
        } else {
            return `${baseUrl}&page=${page}`;
        }
    } else {
        return `${baseUrl}?page=${page}`;
    }
}

function createPagination(options, targetElement) {
    if (!targetElement) return;

    const defaultOptions = {
        totalItems: 0,
        itemsPerPage: 10,
        currentPage: 1,
        baseUrl: '',
        onPageChange: null  
    };

     
    const settings = { ...defaultOptions, ...options };

     
    const totalPages = Math.ceil(settings.totalItems / settings.itemsPerPage);
    if (totalPages <= 1) return;  

     
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    paginationContainer.dataset.total = settings.totalItems;
    paginationContainer.dataset.perPage = settings.itemsPerPage;
    paginationContainer.dataset.currentPage = settings.currentPage;
    paginationContainer.dataset.baseUrl = settings.baseUrl;

     
    paginationContainer.innerHTML = generatePaginationHTML(settings.currentPage, totalPages, settings.baseUrl);

     
    targetElement.parentNode.insertBefore(paginationContainer, targetElement.nextSibling);

     
    if (typeof settings.onPageChange === 'function') {
         
        paginationContainer.addEventListener('click', function (event) {
             
            event.preventDefault();

             
            const link = event.target.closest('a');
            if (!link) return;

             
            const pageUrl = link.getAttribute('href');
            const pageMatch = pageUrl.match(/page=(\d+)/);
            if (!pageMatch) return;

            const page = parseInt(pageMatch[1]);

             
            settings.currentPage = page;
            paginationContainer.dataset.currentPage = page;

             
            paginationContainer.innerHTML = generatePaginationHTML(page, totalPages, settings.baseUrl);

             
            settings.onPageChange(page);
        });
    }

    return paginationContainer;
}


function updatePagination(paginationContainer, options) {
    if (!paginationContainer) return;

     
    if (options.totalItems !== undefined) {
        paginationContainer.dataset.total = options.totalItems;
    }

    if (options.itemsPerPage !== undefined) {
        paginationContainer.dataset.perPage = options.itemsPerPage;
    }

    if (options.currentPage !== undefined) {
        paginationContainer.dataset.currentPage = options.currentPage;
    }

    if (options.baseUrl !== undefined) {
        paginationContainer.dataset.baseUrl = options.baseUrl;
    }

     
    const totalItems = parseInt(paginationContainer.dataset.total);
    const itemsPerPage = parseInt(paginationContainer.dataset.perPage);
    const currentPage = parseInt(paginationContainer.dataset.currentPage);
    const baseUrl = paginationContainer.dataset.baseUrl;

     
    const totalPages = Math.ceil(totalItems / itemsPerPage);

     
    if (totalItems <= itemsPerPage) {
        paginationContainer.style.display = 'none';
        return;
    }

    paginationContainer.style.display = 'block';

     
    paginationContainer.innerHTML = generatePaginationHTML(currentPage, totalPages, baseUrl);

     
    if (options.onPageChange && typeof options.onPageChange === 'function') {
        const links = paginationContainer.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();

                 
                let page;
                if (this.classList.contains('pagination-prev')) {
                    page = currentPage - 1;
                } else if (this.classList.contains('pagination-next')) {
                    page = currentPage + 1;
                } else {
                    page = parseInt(this.textContent);
                }

                 
                options.onPageChange(page);
            });
        });
    }
}

 
window.PaginationUtil = {
    initPagination,
    createPagination,
    updatePagination
}; 