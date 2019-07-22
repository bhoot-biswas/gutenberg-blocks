<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://bengal-studio.com/
 * @since      1.0.0
 *
 * @package    Gutenberg_Blocks
 * @subpackage Gutenberg_Blocks/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Gutenberg_Blocks
 * @subpackage Gutenberg_Blocks/public
 * @author     Bengal Studio <bhoot.biswas@gmail.com>
 */
class Gutenberg_Blocks_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

	public function gutenberg_boilerplate_block() {
		wp_register_script(
			'mkl-section-block',
			plugin_dir_url( __FILE__ ) . 'js/blocks/section/block.js',
			array( 'wp-block-library', 'wp-i18n', 'wp-element' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'js/blocks/section/block.js' )
		);

		wp_register_style(
			'mkl-section-block-editor',
			plugins_url( 'css/blocks/section/editor.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'css/blocks/section/editor.css' )
		);

		wp_register_style(
			'mkl-section-block-style',
			plugins_url( 'css/blocks/section/style.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'css/blocks/section/style.css' )
		);

		register_block_type(
			'mkl/section-block',
			[
				'editor_script' => 'mkl-section-block',
				'editor_style'  => 'mkl-section-block-editor',
				'style'         => 'mkl-section-block-style',
			]
		);
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Gutenberg_Blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Gutenberg_Blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style(
			'fontawesome',
			'https://use.fontawesome.com/releases/v5.8.2/css/all.css'
		);

		wp_enqueue_style(
			'animate',
			plugin_dir_url( __FILE__ ) . 'css/animate.css',
			[],
			filemtime( plugin_dir_path( __FILE__ ) . 'css/animate.css' ),
			'all'
		);

		wp_enqueue_style(
			'owl-carousel',
			plugin_dir_url( __FILE__ ) . 'css/owl.carousel.min.css',
			[ 'animate' ],
			filemtime( plugin_dir_path( __FILE__ ) . 'css/owl.carousel.min.css' ),
			'all'
		);

		wp_enqueue_style(
			'owl-theme-default',
			plugin_dir_url( __FILE__ ) . 'css/owl.theme.default.min.css',
			[ 'owl-carousel' ],
			filemtime( plugin_dir_path( __FILE__ ) . 'css/owl.theme.default.min.css' ),
			'all'
		);

		wp_enqueue_style(
			$this->plugin_name,
			plugin_dir_url( __FILE__ ) . 'css/gutenberg-blocks-public.css',
			[],
			filemtime( plugin_dir_path( __FILE__ ) . 'css/gutenberg-blocks-public.css' ),
			'all'
		);

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Gutenberg_Blocks_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Gutenberg_Blocks_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script(
			'popper',
			'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
			[ 'jquery' ],
			'4.3.1',
			false
		);

		wp_enqueue_script(
			'bootstrap',
			'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
			[ 'popper' ],
			'4.3.1',
			false
		);

		wp_enqueue_script(
			'owl-carousel',
			plugin_dir_url( __FILE__ ) . 'js/owl.carousel.min.js',
			[ 'jquery' ],
			filemtime( plugin_dir_path( __FILE__ ) . 'js/owl.carousel.min.js' ),
			false
		);

		wp_enqueue_script(
			$this->plugin_name,
			plugin_dir_url( __FILE__ ) . 'js/gutenberg-blocks-public.js',
			[ 'jquery' ],
			$this->version,
			false
		);

	}

}
