//load header and footer for each page
//change the header h1 title to be the current page's title;

$(function() {
			$( "[data-role='header'], [data-role='footer']" ).toolbar();
		
});
		// Update the contents of the toolbars
		$( document ).on( "pagecontainerchange", function() {
			// Get the title of each active pages;
			
			var current = $( ".ui-page-active" ).jqmData( "title" );
			var idCurrent = $( ".ui-page-active" ).jqmData( "id" );
			
			// Change the heading
			$( "[data-role='header'] h1" ).text( current );
			//change the panel menu;
			//for example in case of page home, do not show in menu home;
			var myList = $("#mymenu");
			var allItems = myList.children().show();
			var item = myList.find("#"+idCurrent);
			item.hide();
			
			
			switch (idCurrent){
				case "home":
						
			}
		});