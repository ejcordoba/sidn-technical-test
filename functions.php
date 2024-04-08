<?php

function scripts()
{
    wp_register_style('style', get_template_directory_uri() . '/dist/app.css', [], 1, 'all');
    wp_enqueue_style('style');

    wp_enqueue_script('jquery');

    wp_register_script('app', get_template_directory_uri() . '/dist/app.js', ['jquery'], 1, true);
    wp_enqueue_script('app');
}
add_action('wp_enqueue_scripts','scripts');

function wpb_add_google_fonts(){
    wp_enqueue_style('wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"', [],null );
}
add_action('wp_enqueue_scripts','wpb_add_google_fonts');

function enqueue_custom_scripts() {
    wp_enqueue_script('custom-script', get_template_directory_uri() . '/js/custom-script.js', array(), null, true);

    // Pass PHP variables to JavaScript
    wp_localize_script('custom-script', 'custom_script_vars', array(
        'rest_url' => esc_url_raw(get_rest_url(null, '/wp/v2/posts')),
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');

function load_posts() {
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 4,
        'paged' => $_GET['page']
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) :
        $response = array();
        while ($query->have_posts()) : $query->the_post();
            $post_data = array(
                'title' => get_the_title(),
                'excerpt' => get_the_excerpt(),
                'link' => get_permalink(),
                'featured_media' => (has_post_thumbnail()) ? get_the_post_thumbnail_url() : null
            );
            array_push($response, $post_data);
        endwhile;
        echo json_encode($response);
        wp_reset_postdata();
    else :
        echo json_encode(false);
    endif;
    wp_die();
}
add_action('wp_ajax_load_posts', 'load_posts');
add_action('wp_ajax_nopriv_load_posts', 'load_posts');
