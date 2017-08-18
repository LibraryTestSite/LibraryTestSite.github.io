//http://www.webia.info/articles/tutorials/make-your-own-jquery-slider-using-xml/
function AwesomeSlider(selector,xml)
{
 
	// slider
	var items = 0;
	var content = new Array(10);
	var control = '';
	var count = 1;
 
	$.get(xml, function(data)
	{ // get contents from xml
 
		$(data).find('slide').each(function()
		{
			// populate array
			items++;
			var $slide = $(this); 
			content[items] = $slide.find('content').text();
			// create controls
			if(items==1) control = control + '<a href="#" class="selected" rel="'+items+'">'+items+'</a>';
			else control = control + '<a href="#" rel="'+items+'">'+items+'</a>';
		});
 
		$(selector+' .splash-content').html(content[count]);
 
		// add controls
 
		$(selector+' .splash-controls').html(control);
	});
 
	// control is clicked
	$(selector+' .splash-controls a').live('click',function (){
		var slideID = $(this).attr('rel');
		count = Slide2Next(selector,count,content,items,slideID);
		return false;
	});
}
