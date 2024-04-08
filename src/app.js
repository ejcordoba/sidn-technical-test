document.addEventListener("DOMContentLoaded", function() {
    var postsContainer = document.getElementById('posts-container');
    var loadMoreButton = document.getElementById('load-more');
    var page = 1;
    var perPage = 6; // Number of posts to load initially
    var restUrl = loadMoreButton.getAttribute('data-rest-url');

    loadMoreButton.addEventListener('click', function() {
        page++;
        fetchPosts(page);
    });

    function fetchPosts(page) {
        fetch(restUrl + '?page=' + page + '&per_page=' + perPage)
            .then(response => response.json())
            .then(data => {
                data.forEach(post => {
                    var postElement = document.createElement('div');
                    postElement.classList.add('card');
                    postElement.innerHTML = `
                        <div class="card-container">
                            <div class="card-title">
                                <img class="image-2" src="image-211.png" />
                                <div class="spec">${post.title.rendered}</div>
                            </div>
                            <div class="technical-specifications-monitoring-and-tracking-system">
                                ${post.content.rendered}
                            </div>
                            <div class="cta">
                                <div class="details">Details</div>
                                <img class="vector-812" src="vector-811.svg" />
                            </div>
                        </div>
                    `;
                    postsContainer.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }
    

    // Initial load
    fetchPosts(page);
});
