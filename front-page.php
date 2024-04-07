<?php get_header();?>

    <div id="posts-container">
    <!-- Posts will be rendered here -->
</div>
<button id="load-more" data-rest-url="<?php echo esc_url( rest_url( 'wp/v2/posts' ) ); ?>">Load More</button>

<?php get_footer();?>