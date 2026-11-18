<!-- Instruksi
     1. Gunakan elementor form
     2. tambahkan Redirect pada after action
     3. Isi link redirect dengan #whastapp jika joinchat plugin active
     4. Jika joinchat tidak ada, isi dengan link WhatsApp
-->


<?php
add_action( 'elementor_pro/forms/new_record', function( $record, $ajax_handler ) {
	$form_name = $record->get_form_settings( 'form_name' );
	
   // Form name elementor
   if ( 'Property Form' !== $form_name ) {
		return;
	}

	$redirect_to = trim( (string) $record->get_form_settings( 'redirect_to' ) );
	$wa_number   = '';

	if ( '#whatsapp' === $redirect_to ) {
		$joinchat = get_option( 'joinchat' );
		if ( empty( $joinchat['telephone'] ) ) {
			$joinchat = get_option( 'whatsappme' );
		}
		if ( ! empty( $joinchat['telephone'] ) ) {
			$wa_number = preg_replace( '/\D/', '', $joinchat['telephone'] );
		}
	} elseif ( preg_match( '#wa\.me/(\d+)#', $redirect_to, $match ) ) {
		$wa_number = $match[1];
	}

	if ( empty( $wa_number ) ) {
		return;
	}

	$fields = $record->get( 'fields' );

	$get = function( $id ) use ( $fields ) {
		return isset( $fields[ $id ]['value'] ) ? trim( wp_strip_all_tags( $fields[ $id ]['value'] ) ) : '';
	};

   // Field form
	$nama    = trim( $get( 'name' ) . ' ' . $get( 'field_54bd19b' ) );
	$email   = $get( 'email' );
	$telepon = $get( 'field_e3d2c62' );
	$pesan   = $get( 'message' );

   // Template pesan
	$lines = array(
		'Halo, saya ' . $nama,
		'',
		'*Email:* ' . $email,
		'*No. Telepon:* ' . $telepon,
		'',
		'*Pesan:*',
		$pesan,
	);

	$text = implode( "\n", $lines );
	$url  = 'https://wa.me/' . $wa_number . '?text=' . rawurlencode( $text );

	$ajax_handler->add_response_data( 'redirect_url', $url );

}, 10, 2 );

add_action( 'wp_enqueue_scripts', function() {
	$js = <<<'JS'
(function ($) {
	if (!$ || !$.ajaxPrefilter) return;

	$.ajaxPrefilter(function (options) {
		if (!(options.data instanceof FormData)) return;
		if (options.data.get('action') !== 'elementor_pro_forms_send_form') return;

		var originalSuccess = options.success;

		options.success = function (response) {
			var data = response && response.data && response.data.data;
			var url = data && data.redirect_url;

			if (url && url.indexOf('https://wa.me/') === 0) {
				var win = window.open(url, '_blank');
				if (win) {
					delete data.redirect_url;
				}
			}

			if (typeof originalSuccess === 'function') {
				return originalSuccess.apply(this, arguments);
			}
		};
	});
})(window.jQuery);
JS;

	wp_add_inline_script( 'jquery-core', $js );
}, 20 );