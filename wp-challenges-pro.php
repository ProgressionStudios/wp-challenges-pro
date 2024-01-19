<?php
/**
 * Plugin Name:       WP Challenges Pro
 * Description:       Custom Blocks built for WordPress Challenges
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Michael Garcia
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-challenges-pro
 *
 * @package           wp-challenges-pro
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function wp_challenges_pro_wp_challenges_pro_block_init() {
	register_block_type( __DIR__ . '/build/accordion' );
	register_block_type( __DIR__ . '/build/accordion/accordion-child' );
	register_block_type( __DIR__ . '/build/testimonial' );
	register_block_type( __DIR__ . '/build/post-list' );
}
add_action( 'init', 'wp_challenges_pro_wp_challenges_pro_block_init' );

function block_categories_wp_challenges_pro( $block_categories, $editor_context ) {
		if ( ! empty( $editor_context->post ) ) {
			array_push(
				$block_categories,
				array(
					'slug'  => 'wp-challenges-pro',
					'title' => __( 'WP Challenges Pro', 'wp-challenges-pro' ),
					'icon'  => null,
				)
			);
		}
		return $block_categories;
	}
	add_filter( 'block_categories_all', 'block_categories_wp_challenges_pro', 10, 2 );