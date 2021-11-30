(function($) {

	var list = $('.jokes'),
		copy = $('.copy');

	// skryjeme elementy 
	list.find('dd').slideUp();
	
	// zobrazime dd po kliknuti na term
	list.find('dt').on('click', function(event)
	{
		var dt = $(this),
			dd = dt.next();

		dd.slideToggle()
		  .siblings('dd').slideUp();

		// dt.clone().appendTo( list );
		// dd.clone().appendTo( list );

		/*dt.add( dd )
		  .clone(true)
		  .css({ backgroundColor: '#D2EB87' })
		  .hide()
		  .prependTo( list )
		  .fadeIn();*/

		// skopirujeme cely vtip .copy elementu
		var newContent = dt.text() + dd.html();
		copy.prepend( newContent + '<hr>' );

		event.preventDefault();
	});

	// --------------------------
	
	var ul = $('.list');
	
	// ul.find(':nth-child(3)').appendTo( copy );
	// ul.find(':eq(2)').css({ color: 'red', fontWeight: 'bold' });
	// ul.find('li').eq(2).appendTo(copy);
	// ul.children().eq(2).appendTo(copy);

	// copy.html( ul.find('li:not(:eq(2))') );

	// ul.find('li').on('click', function() {
	// 	copy.text( $(this).is('li:eq(2)') );
	// });

	// ul.find('li:not(:eq(2))').remove();


	// --------------------------

	$(document).on('click', 'ul.list li', function() {
		ul.append('<li>JA SOM TU NOVY</li>');
	});


})(jQuery);