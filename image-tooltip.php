<?php
/**
 * Plugin Name:       Image Tooltip
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       image-tooltip
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_image_tooltip_block_init() {
	register_block_type( __DIR__ . '/build' );


}
add_action( 'init', 'create_block_image_tooltip_block_init' );

function image_tooltip_block_scripts() {
	// $sharedBlockPath = '/src/rolldice.js';
	//$info = include plugin_dir_path(__FILE__) . "/js/rolldice.asset.php";
  // Enqueue frontend and editor JS
  wp_enqueue_script(
	'image-tooltip-script',
	plugin_dir_url(__FILE__) . "src/js/script.js",
	array( 'jquery', 'wp-element', 'wp-components', 'wp-i18n'),
	'1.0.0'
  );

}

// // Hook scripts function into block editor hook
add_action( 'enqueue_block_assets', 'image_tooltip_block_scripts' );

add_action( 'init' ,'image_tooltip_block_scripts' );
add_action( 'wp_enqueue_scripts' ,'image_tooltip_block_scripts' );
