$.get( "http://digital.usfsp.edu/events/slidefeed.rss", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
