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
                    postElement.innerHTML = `
                        <h2>${post.title.rendered}</h2>
                        <p>${post.content.rendered}</p>
                    `;
                    postsContainer.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error fetching posts:', error));
    }

    // Initial load
    fetchPosts(page);
});
