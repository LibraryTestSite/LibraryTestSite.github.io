
jQuery(function() {

jQuery.getFeed({
    // RSS path must be local unless using a proxy
    url: 'rss/rss.xml',
    success: function(feed) {
            
        var html = '';

        // Selects how many RSS items to parse
        for(var i = 0; i < feed.items.length && i < 3; i++) {
            
            var item = feed.items[i];
            html += '<div class=block&#62'
            // Gets the RSS link and title
            + '<h3>' + '<a href="' + item.link + '">' + item.title 
            + '</a>' + '</h3>';
                
            html += <div class="grey">'
            // Gets the RSS pubDate
            + item.updated
            + '</div>'
            // Gets the RSS description           
            + item.description
            + '</div>';
        }
        jQuery('#latestnews').append(html);

        // Adds the Flips element. The direction can left, top or bottom     
        $('#news').flips( { autorun_delay:1000, direction: 'right'});
    }    
    });
});

