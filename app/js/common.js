$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салоно красоты СМитлер">'
		}
	});

    var api = $("#my-menu").data( "mmenu" );
    api.bind('open:start', function () {
        $('.hamburger').toggleClass('is-active');
    }).bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
	});

});
