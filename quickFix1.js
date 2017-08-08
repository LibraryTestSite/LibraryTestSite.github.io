

$(document).ready(function () {
$("#header-search input").focus(function () {
  $(".topbox").css({"display":"block"});
  $(".topbox input:first-child").focus();
});
$('#main').click(function() {
  $(".topbox").css({"display":"none"});
});
/*
$('.topbox').click(function(event){
    event.stopPropagation();
});
*/

$('body').keypress(function(e){
  if(e.which == 27){
    alert('z');
    $(".topbox").css({"display":"none"});
  }
});

var searchTerm='';
var searchType=0;
$(".searchbox a, .searchbox2 a, .searchbox3 a").click(function () {
  $(this).parent().parent().find("li").removeClass("active");
  $(this).parent().addClass("active");
  searchType = $(this).parent().index();
});

//var lastSearchString = '';

$(".searchbox :submit, .searchbox2 :submit, .searchbox3 :submit").click(function () {
    siteSearch();
});
$(".searchbox :text, .searchbox2 :text, .searchbox3 :text").keypress(function (e) {
  if (e.which == 13) {
    siteSearch();
  }
});
function siteSearch () {
  if ($(".bottombox").length > 0 && $(".bottombox :text").val() != '') {
    searchTerm = $(".bottombox :text").val();
  } else if ($(".topbox :text").val() != '') {
    searchTerm = $(".topbox :text").val();
  }
  $(".topbox :text").val('');
  $(".bottombox :text").val('');
  switch (searchType) {
    case 0:
      window.location.assign("http://search.ebscohost.com/login.aspx?login.aspx?mode=and&cli0=FT1&amp;clv0=Y&direct=true&scope=site&site=eds-live&profile=eds&authtype=ip,guest&custid=s3654090&groupid=main&bquery="+searchTerm+"&uquery="+searchTerm);
      break;
    case 1:
      window.location.assign("http://usf.catalog.fcla.edu/sf.jsp?st="+searchTerm+"&ix=Keyword");
      break;
    case 2:
      window.location.assign("http://scholar.google.com/scholar?hl=en&q="+searchTerm+"&btnG=Search");
      break;
    case 3:
      window.location.assign("http://lib.usfsp.edu/?s="+searchTerm);
      break;
    case 3Alternate1:
      window.location.assign("http://guides.nelson.usf.edu/RIHome/#s-lg-guide-search-terms?q="+searchTerm);
      break;
     case 3Alternate2:
      window.location.assign("http://guides.nelson.usf.edu/RIHome/?q="+searchTerm);
      break;  
    case 4:
      window.location.assign("http://digital.usfsp.edu/do/search/?q="+searchTerm);
      break;	
  }
}

$(".searchbox_sc .nav-tabs li").click(function () {
  $(this).parent().find("li").removeClass("active");
  $(this).addClass("active");
  $('.searchbox_sc div').css({'display':'none'});
  var tabbedContent = $(this).attr('id');
  $("#"+tabbedContent.substring(0, tabbedContent.length-4)).css({'display':'block'});
});


});
