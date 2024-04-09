
<div class="footer">
    <img class="footer-logo" src="<?php the_field('footer_logo')?>" />
    <img class="footer-separator" src="<?php echo get_template_directory_uri(); ?>/src/img/footer-separator.png" />
    <div class="legal-notice-legal-information"><?php the_field('footer_text')?></div>
</div>
<?php wp_footer();?>
</body>
</html>