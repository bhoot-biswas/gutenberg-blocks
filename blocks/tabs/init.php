<?php
/**
 * [bengal_studio_register_tabs_block description]
 * @return [type] [description]
 */
function bengal_studio_register_tabs_block() {
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
		'bengal-studio-tabs',
		plugins_url( 'style.css', __FILE__ ),
		[ 'dashicons' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	/**
	 * [wp_register_style description]
	 * @var [type]
	 */
	wp_register_style(
		'bengal-studio-tabs-editor-style',
		plugins_url( 'editor.css', __FILE__ ),
		[ 'dashicons' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	/**
	 * [wp_register_script description]
	 * @var [type]
	 */
	wp_register_script(
		'bengal-studio-tabs',
		plugins_url( 'block.js', __FILE__ ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	/**
	 * [register_block_type description]
	 * @var [type]
	 */
	register_block_type(
		'bengal-studio/tabs',
		[
			'style'         => 'bengal-studio-tabs',
			'editor_style'  => 'bengal-studio-tabs-editor-style',
			'editor_script' => 'bengal-studio-tabs',
			'render_callback' => 'my_plugin_render_block_latest_postee',
		]
	);
}
add_action( 'init', 'bengal_studio_register_tabs_block' );

/**
 * [my_plugin_render_block_latest_postee description]
 * @param  [type] $attributes [description]
 * @param  [type] $content    [description]
 * @return [type]             [description]
 */
function my_plugin_render_block_latest_postee( $attributes, $content ) {
	/**
	 * [if description]
	 * @var [type]
	 */
	if ( ! isset( $attributes['tabsSettings'] ) ) {
		return;
	}

	ob_start();
	?>
	<div class="bengal-studio-tabs">
		<div class="row">
			<div class="col-3">
				<div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
					<?php foreach ( $attributes['tabsSettings'] as $key => $tab ) : ?>
						<a class="nav-link" data-toggle="pill" href="#<?php echo $key; ?>" role="tab">
							<?php echo $tab['label']; ?>
						</a>
					<?php endforeach; ?>
				</div>
			</div>
			<div class="col-9">
				<div class="tab-content">
					<?php echo $content; ?>
				</div>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}
