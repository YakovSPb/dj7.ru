$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салоно красоты СМитлер">'
		}
	});

    var api = $("#my-menu").data( "mmenu" );
    api.bind('open:finish', function () {
        $('.hamburger').toggleClass('is-active');
    }).bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
	});

});
