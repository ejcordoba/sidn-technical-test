<?php if( have_posts() ): while ( have_posts() ): the_post();?>
    <div class="card">
        <div class="card-body">
        <h6><?php the_title();?></h6>
    <?php /*the_content();*/?>
    <?php the_excerpt();?>
    <a href="<?php the_permalink();?>">Read more </a>
        </div>
    </div>
    
<?php endwhile; else: endif;?> 

<button class="btn btn-primary"><a href="<?php echo home_url();?>">Back to home</a></button>
