$(document).on('pagebeforeshow', '#home' ,function(){
    //Create the list of links; 
	//Check for internet connection on device with cordova api;
	//Check if API's are available;
	//alert("You are home!");
	
	$(document).on('click', '#city-search-btn', function(){ 
		var cityName = $('#city-search').val();
		if (cityName.length == 0)
			return false;
	
		$.ajax({
			url: "http://query.yahooapis.com/v1/public/yql",
			jsonp: "callback",
  
    // tell jQuery we're expecting JSONP
			dataType: "jsonp",
  
    // tell YQL what we want and that we want JSON
			data: {
				q: "use 'http://github.com/yql/yql-tables/raw/master/weather/weather.bylocation.xml' as t_weather;"
				+ "select * from t_weather where location='" + cityName + "' and unit='c'",
				format: "json"
			},
			async: true,
            beforeSend: function() {
                    // This callback function will trigger before data is sent
                    $.mobile.loading('show', {theme:"a", text:"Please wait...", textonly:false, textVisible: true}); // This will show ajax spinner
            },
            complete: function() {
                    // This callback function will trigger on data sent/received complete
                    $.mobile.loading('hide'); // This will hide ajax spinner
                },       
			success: function( response ) {
				var channel = response.query.results.weather.rss.channel;
				//console.log(channel);
				$('#weather #content #for').text("Weather Information/Forecast for " + cityName);
				//console.log(channel.item.forecast);
				//astronomy part;
				var sunRise = channel.astronomy.sunrise;
				var sunSet = channel.astronomy.sunset;
				var riseSet = "Sunrise today is at <b>" + sunRise + "</b> and Sunset at <b>" + sunSet + "</b>";
				
				$('#weather #content #astronomy').html(riseSet); 
				$.each(channel, function(index, item){
					if (item.description) { 
						$('#weather #content #description').html(item.description); 
					}
				});
				
			},
			error: function (error){
				console.log(error);
			}
		});
	});
});	