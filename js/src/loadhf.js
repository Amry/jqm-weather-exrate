//load header and footer for each page
//change the header h1 title to be the current page's title;

$(function() {
			$( "[data-role='header'], [data-role='footer']" ).toolbar();
		
});
		// Update the contents of the toolbars
		$( document ).on( "pagecontainerchange", function() {
			// Get the title of each active pages;
			
			var current = $( ".ui-page-active" ).jqmData( "title" );
			// Change the heading
			$( "[data-role='header'] h1" ).text( current );
			// Remove active class from nav buttons
			//$( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
			// Add active class to current nav button
			//$( "[data-role='navbar'] a" ).each(function() {
			//	if ( $( this ).text() === current ) {
			//		$( this ).addClass( "ui-btn-active" );
			//	}
			//});
		});