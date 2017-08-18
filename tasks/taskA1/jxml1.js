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
function AwesomeSlider(selector,xml)
{
 
	function Slide2Next(selector,count,content,items,slideID)
	{	
		if(slideID>0) count = slideID;
		else if(count<items) count++;
		else count = 1; // reached the last slide, get back to first
 
		$(selector+' .splash-content').animate({opacity:0},1000, function(){
			// faded out, changing content
			$(selector+ ' .splash-content').html(content[count]);
 
			// animating
			$(selector+' .splash-content').animate({height:'toggle'},1000, function(){
				// change style of controls
				$(selector+' .splash-controls a.selected').removeAttr("class");
				$(selector+' .splash-controls a[rel='+count+']').attr("class","selected");
				// fading back in
				$(selector+' .splash-content').animate({height: 'toggle'}, 1000, function(){
					$(selector+' .splash-content').animate({opacity:1},1000);
				});
			});
		});
                return count;
	}
 
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


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65

	

function AwesomeSlider(selector,xml)
{
 
	function Slide2Next(selector,count,content,items,slideID)
	{	
		if(slideID>0) count = slideID;
		else if(count<items) count++;
		else count = 1; // reached the last slide, get back to first
 
		$(selector+' .splash-content').animate({opacity:0},1000, function(){
			// faded out, changing content
			$(selector+ ' .splash-content').html(content[count]);
 
			// animating
			$(selector+' .splash-content').animate({height:'toggle'},1000, function(){
				// change style of controls
				$(selector+' .splash-controls a.selected').removeAttr("class");
				$(selector+' .splash-controls a[rel='+count+']').attr("class","selected");
				// fading back in
				$(selector+' .splash-content').animate({height: 'toggle'}, 1000, function(){
					$(selector+' .splash-content').animate({opacity:1},1000);
				});
			});
		});
                return count;
	}
 
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
		clearInterval(slideInterval);
		slideInterval = setInterval(function(){ count = Slide2Next(selector,count,content)}, 10000 );
		return false;
	});
 
 	var slideInterval = setInterval(function(){ count = Slide2Next(selector,count,content)}, 10000 );
}
