<div <?php echo get_block_wrapper_attributes(); ?>>
    <?php
        $args = array(
 	        'post_type' => 'post',
            'cat'         => $attributes['selectedCat'],
			'posts_per_page' =>  $attributes['postCount'],
            'ignore_sticky_posts' => 1
        );
        $blogloop = new WP_Query( $args );
    ?>

    <?php if ( $blogloop->have_posts()) : ?>
        <div class="post-list-container">
            <?php while($blogloop->have_posts()): $blogloop->the_post();?>
                <div class="post-list-item">
                    <?php if(has_post_thumbnail()): ?>
                        <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail('large'); ?></a>
                     <?php endif; ?>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <?php the_excerpt(); ?>
                </div><!-- close .post-list-item -->
            <?php  endwhile; // end of the loop. ?>
        </div><!-- close .post-list-container -->
    <?php else: ?>
        <?php esc_html_e( 'No posts were found', 'wp-challenges-pro' ); ?>
    <?php endif; ?>
</div>
