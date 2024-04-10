document.addEventListener('DOMContentLoaded', function () {
    var page = 1;
    var canLoad = true;
    var container = document.querySelector('.posts-container');
    var loadMoreButton = document.getElementById('load-more-posts');

    function loadInitialPosts() {
        fetch(custom_script_vars.rest_url + '?per_page=8&page=' + page)
            .then(response => response.json())
            .then(posts => {
                if (posts.length > 0) {
                    posts.forEach(post => {
                        container.insertAdjacentHTML('beforeend', `
                            <div class="card">
                                <div class="card-header">
                                    ${post.featured_media ? `<img class="card-img" src="${post.featured_image_src}" alt="${post.title.rendered}">` : ''}
                                    <div class="card-title">${post.title.rendered}</div>
                                </div>
                                <div class="card-body">
                                    <div class="card-description">${post.excerpt.rendered}</div>
                                    <div class="details-button-wrapper">
                                        <a href="${post.link}" class="details-button">Details <svg xmlns="http://www.w3.org/2000/svg" width="17" height="7" viewBox="0 0 17 7" fill="none">
                                        <path d="M16.6112 3.78436L11.6112 0.897611V6.67111L16.6112 3.78436ZM0.5 4.28436H12.1112V3.28436H0.5V4.28436Z" fill="white"/>
                                      </svg></a>
                                    </div>
                                </div>
                            </div>
                        `);
                    });
                    canLoad = true;
                } else {
                    loadMoreButton.style.display = 'none';
                }
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    loadInitialPosts();

    loadMoreButton.addEventListener('click', function () {
        if (canLoad) {
            canLoad = false;
            page++;
            fetch(custom_script_vars.rest_url + '?per_page=4&page=' + page)
                .then(response => response.json())
                .then(posts => {
                    if (posts.length > 0) {
                        posts.forEach(post => {
                            container.insertAdjacentHTML('beforeend', `
                                <div class="card">
                                    <div class="card-header">
                                        ${post.featured_media ? `<img class="card-img" src="${post.featured_image_src}" alt="${post.title.rendered}">` : ''}
                                        <div class="card-title">${post.title.rendered}</div>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-description">${post.excerpt.rendered}</div>
                                        <div class="details-button-wrapper">
                                            <a href="${post.link}" class="details-button">Details -></a>
                                        </div>
                                    </div>
                                </div>
                            `);
                        });
                        canLoad = true;
                    } else {
                        loadMoreButton.style.display = 'none';
                    }
                })
                .catch(error => console.error('Error fetching posts:', error));
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var page = 1;
    var canLoad = true;
    var container = document.querySelector('.posts-container-mobile');
    var loadMoreButton = document.getElementById('load-more-posts');

    function loadInitialPosts() {
        fetch(custom_script_vars.rest_url + '?per_page=8&page=' + page)
            .then(response => response.json())
            .then(posts => {
                if (posts.length > 0) {
                    posts.forEach(post => {
                        container.insertAdjacentHTML('beforeend', `
                            <div class="card">
                                <div class="card-header">
                                    ${post.featured_media ? `<img class="card-img" src="${post.featured_image_src}" alt="${post.title.rendered}">` : ''}
                                    <div class="card-title">${post.title.rendered}</div>
                                </div>
                                <div class="card-body">
                                    <div class="card-description">${post.excerpt.rendered}</div>
                                    <div class="details-button-wrapper">
                                        <a href="${post.link}" class="details-button">Details <svg xmlns="http://www.w3.org/2000/svg" width="17" height="7" viewBox="0 0 17 7" fill="none">
                                        <path d="M16.6112 3.78436L11.6112 0.897611V6.67111L16.6112 3.78436ZM0.5 4.28436H12.1112V3.28436H0.5V4.28436Z" fill="white"/>
                                      </svg></a>
                                    </div>
                                </div>
                            </div>
                        `);
                    });
                    canLoad = true;
                } else {
                    loadMoreButton.style.display = 'none';
                }
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    loadInitialPosts();

    loadMoreButton.addEventListener('click', function () {
        if (canLoad) {
            canLoad = false;
            page++;
            fetch(custom_script_vars.rest_url + '?per_page=4&page=' + page)
                .then(response => response.json())
                .then(posts => {
                    if (posts.length > 0) {
                        posts.forEach(post => {
                            container.insertAdjacentHTML('beforeend', `
                                <div class="card">
                                    <div class="card-header">
                                        ${post.featured_media ? `<img class="card-img" src="${post.featured_image_src}" alt="${post.title.rendered}">` : ''}
                                        <div class="card-title">${post.title.rendered}</div>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-description">${post.excerpt.rendered}</div>
                                        <div class="details-button-wrapper">
                                            <a href="${post.link}" class="details-button">Details -></a>
                                        </div>
                                    </div>
                                </div>
                            `);
                        });
                        canLoad = true;
                    } else {
                        loadMoreButton.style.display = 'none';
                    }
                })
                .catch(error => console.error('Error fetching posts:', error));
        }
    });
});
