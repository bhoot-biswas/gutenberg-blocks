<?php
/**
 * [bengal_studio_register_media_text_video_block description]
 * @return [type] [description]
 */
function bengal_studio_register_media_text_video_block() {
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
		'bengal-studio-media-text-video',
		plugins_url( 'style.css', __FILE__ ),
		[ 'dashicons' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	/**
	 * [wp_register_style description]
	 * @var [type]
	 */
	wp_register_style(
		'bengal-studio-media-text-video-editor-style',
		plugins_url( 'editor.css', __FILE__ ),
		[ 'dashicons' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);

	/**
	 * [wp_register_script description]
	 * @var [type]
	 */
	wp_register_script(
		'bengal-studio-media-text-video',
		plugins_url( 'block.js', __FILE__ ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);

	/**
	 * [register_block_type description]
	 * @var [type]
	 */
	register_block_type(
		'bengal-studio/media-text-video',
		[
			'style'           => 'bengal-studio-media-text-video',
			'editor_style'    => 'bengal-studio-media-text-video-editor-style',
			'editor_script'   => 'bengal-studio-media-text-video',
			'render_callback' => 'bengal_studio_render_media_text_video',
		]
	);
}
add_action( 'init', 'bengal_studio_register_media_text_video_block' );

/**
 * [bengal_studio_render_media_text_video description]
 * @param  [type] $attributes [description]
 * @param  [type] $content    [description]
 * @return [type]             [description]
 */
function bengal_studio_render_media_text_video( $attributes, $content ) {
	global $wp_embed;

	$enable_video = false;
	$xclass       = 'bengal-studio-block-media-text';
	if ( isset( $attributes['enableVideo'] ) && $attributes['enableVideo'] ) {
		$enable_video = true;
		$xclass       = 'bengal-studio-block-media-text-video';
	}

	ob_start();
	?>
	<div class="<?php echo $xclass; ?>">
		<?php if ( $enable_video ) : ?>
			<?php if ( $attributes['media']['id'] > 0 ) : ?>
				<div class="bengal-studio-block-media-text-video__media">
					<div class="bengal-studio-block-media-text-video__media-holder" style="background-image: url(<?php echo $attributes['media']['url']; ?>)"></div>
				</div>
			<?php endif; ?>
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<div class="bengal-studio-block-media-text-video__video" style="background-image: url(<?php echo $attributes['media']['url']; ?>)">
							<!-- Button trigger modal -->
							<div class="bengal-studio-block-media-text-video__play" data-toggle="modal" data-target="#exampleModalCenter">
								<i class="fas fa-play"></i>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="bengal-studio-block-media-text-video__content">
							<?php echo $content; ?>
						</div>
					</div>
				</div>
			</div>
		<?php else : ?>
			<div class="container">
				<div class="row no-gutters">
					<div class="col-md-6">
						<?php if ( $attributes['media']['id'] > 0 ) : ?>
							<div class="bengal-studio-block-media-text__media">
								<div class="bengal-studio-block-media-text__media-holder" style="background-image: url(<?php echo $attributes['media']['url']; ?>)"></div>
							</div>
						<?php endif; ?>
					</div>
					<div class="col-md-6">
						<div class="bengal-studio-block-media-text__content">
							<?php echo $content; ?>
						</div>
					</div>
				</div>
			</div>
		<?php endif; ?>
	</div>
	<?php if ( $enable_video ) : ?>
		<!-- Modal -->
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-centered" role="document">
				<div class="modal-content">
					<!-- 16:9 aspect ratio -->
					<div class="embed-responsive embed-responsive-16by9">
						<?php echo $wp_embed->run_shortcode( '[embed]http://www.youtube.com/watch?v=dQw4w9WgXcQ[/embed]' ); ?>
					</div>
				</div>
			</div>
		</div>
	<?php endif; ?>
	<?php
	return ob_get_clean();
}
