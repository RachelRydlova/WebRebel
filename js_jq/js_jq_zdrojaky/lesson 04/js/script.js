(function($) {

	var list = $('.jokes');

	// skryjeme elementy 
	list.find('dd').slideUp();

	// zobrazime dd po kliknuti na term
	list.find('dt').on('click', function(event)
	{
		$(this).next().slideToggle()
			   .siblings('dd').slideUp();

		event.preventDefault();
	});

	// nechceme ist
	$('a.nope').on('click', function(event) {
		alert('NIE, RADSEJ ALERT!');
		event.preventDefault();
	});

})(jQuery);