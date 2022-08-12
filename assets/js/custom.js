jQuery(function(){
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});

  jQuery(".menu_bar").click(function() {
  	jQuery('.mobile_menu').addClass('mobile_menu_open'); 
  	jQuery('.mobile_menu').slideDown('slow'); 
  });
  jQuery(".menu_close").click(function() { 
  	jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
  	jQuery('.mobile_menu').slideUp('slow'); 
  });
});

jQuery(document).ready(function() {
  jQuery('.datepicker').pickadate({
    formatSubmit: 'dd-mm-yyyy',
    min: [30,12,1900],
    max: [30,12,2021],
    closeOnSelect: false,
    closeOnClear: false,
  });

  // Autotab
  jQuery('.date-field').autotab('number');
  
  jQuery('.single-date-field').mask('00/00/0000', 
    {placeholder: " /                     / "});
// });

// jQuery(window).load(function() {
  jQuery('.flexslider').flexslider({
    controlNav: false,
    directionNav: false,
    prevText: "",
    nextText: "",
    animation: "slide",
    controlNav: "thumbnails",
    slideshowSpeed: 3000,
    animationSpeed: 950
  });
});
