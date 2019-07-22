<?php
/**
 * [bengal_studio_register_wrapper_block description]
 * @return [type] [description]
 */
function bengal_studio_register_wrapper_block() {
	/**
	 * [if description]
	 * @var [type]
	 */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/**
	 * [wp_register_style description]
	 * @var [type]
	 */
	wp_register_style(
		'bengal-studio-wrapper',
		plugins_url( 'style.css', __FILE__ ),
		[ 'dashicons' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	/**
	 * [wp_register_style description]
	 * @var [type]
	 */
	wp_register_style(
		'bengal-studio-wrapper-editor-style',
		plugins_url( 'editor.css', __FILE__ ),
		[ 'dashicons' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	/**
	 * [wp_register_script description]
	 * @var [type]
	 */
	wp_register_script(
		'bengal-studio-wrapper',
		plugins_url( 'block.js', __FILE__ ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	/**
	 * [register_block_type description]
	 * @var [type]
	 */
	register_block_type(
		'bengal-studio/wrapper',
		[
			'style'         => 'bengal-studio-wrapper',
			'editor_style'  => 'bengal-studio-wrapper-editor-style',
			'editor_script' => 'bengal-studio-wrapper',
		]
	);
}
add_action( 'init', 'bengal_studio_register_wrapper_block' );
