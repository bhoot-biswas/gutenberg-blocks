<?php
/**
 * [bengal_studio_register_testimonials_block description]
 * @return [type] [description]
 */
function bengal_studio_register_testimonials_block() {
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
		'bengal-studio-testimonials',
		plugins_url( 'block.css', __FILE__ ),
		[ 'dashicons' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.css' )
	);

	/**
	 * [wp_register_script description]
	 * @var [type]
	 */
	wp_register_script(
		'bengal-studio-testimonials',
		plugins_url( 'block.js', __FILE__ ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	/**
	 * [register_block_type description]
	 * @var [type]
	 */
	register_block_type(
		'bengal-studio/testimonials',
		[
			'style'           => 'bengal-studio-testimonials',
			'editor_script'   => 'bengal-studio-testimonials',
			'render_callback' => 'my_plugin_render_block_latest_post',
		]
	);
}
add_action( 'init', 'bengal_studio_register_testimonials_block' );

/**
 * [my_plugin_render_block_latest_post description]
 * @param  [type] $attributes [description]
 * @param  [type] $content    [description]
 * @return [type]             [description]
 */
function my_plugin_render_block_latest_post( $attributes, $content ) {
	/**
	 * [$items description]
	 * @var [type]
	 */
	$items   = $attributes['items'];
	$options = $attributes['options'];
	$uniqid  = uniqid();
	ob_start();
	echo $content;
	?>
	<div id="carousel-<?php echo $uniqid; ?>" class="owl-carousel owl-theme">
		<?php foreach ( $items as $item ) : ?>
			<div class="owl-carousel__item">
				<div class="owl-carousel__background" style="background-image: url(<?php echo $item['backgroundUrl']; ?>)"></div>
				<div class="container">
					<div class="row justify-content-end">
						<div class="col-md-7">
							<div class="owl-carousel__body">
								<?php echo $item['content']; ?>
								<div class="owl-carousel__media">
									<img src="<?php echo $item['mediaUrl']; ?>" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		<?php endforeach; ?>
	</div>
	<script type="text/javascript">
	jQuery( document ).ready( function( $ ) {
		$("#carousel-<?php echo $uniqid; ?>").owlCarousel(<?php echo json_encode( $options ); ?>);
	} );
	</script>
	<?php
	return ob_get_clean();
}
