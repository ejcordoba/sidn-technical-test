<?php get_header(); ?>
<div class="main-content">
    <div class="call-to-action-container">
        <div class="call-to-action-left">
            <div class="call-to-action-title">
                <div class="buy-poison"><?php the_field('cta_title1')?></div>
                <div class="trust-us"><?php the_field('cta_title2')?></div>
            </div>
            <div class="call-to-action-description"><?php the_field('cta_description')?></div>
            <div class="call-to-action-button">                
                Drink now!
                <div class="rectangle-shape-right"></div>
                <div class="rectangle-shape-left"></div>                
            </div>
            <div class="call-to-action-scrolldown">
                <img class="baja" src="<?php echo get_template_directory_uri(); ?>/src/img/scrolldown.svg" />
            </div>
            <div class="call-to-action-notice-mobile"><?php the_field('cta_text_under_image')?></div>

        </div>
        <div class="call-to-action-right">
            <img class="call-to-action-image" src="<?php the_field('cta_image')?>" />
            <div class="call-to-action-notice"><?php the_field('cta_text_under_image')?></div>
        </div>        
    </div>
    <div class="description-container">
        <div class="description-top">
            <div class="description-shape-wrapper">
                <div class="numbers"><?php the_field('desc_pre-title')?></div>
                <div class="description-shape"></div>
            </div>
            <div class="cruelty-free"><?php the_field('desc_title1')?></div>
            <div class="development"><?php the_field('desc_title2')?></div>
            <div class="description-callout"><?php the_field('desc_callout')?></div>
        </div>
        <div class="description-bottom">
            <div class="description-bottom-left">
                <div class="description-bottom-title"><?php the_field('desc_bottom_title')?></div>
                <div class="description-text"><?php the_field('desc_text')?></div>
                <div class="description-bottom-shape"></div>
            </div>
            <div class="description-bottom-right">
                <img class="description-bottom-right-image" src="<?php the_field('desc_image')?>" />
            </div>

        </div> 
    </div>
    <div class="posts-section-container">
        <div class="posts-title">
            <div class="numbers"><?php the_field('posts_pre-title')?></div>
            <div class="our"><?php the_field('posts_title1')?></div>
            <div class="flavours"><?php the_field('posts_title2')?></div>
        </div>
        <div class="posts-container">
        </div>
        <div class="load-more-button-row">
            <button class="btn btn-primary" id="load-more-posts">Load More</button>
        </div>
    </div>
</div>
<?php get_footer(); ?>