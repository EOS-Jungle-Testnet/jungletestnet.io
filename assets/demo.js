(function ($j) {

  switch_style = {

    onReady: function () {      
      this.switch_style_click();
    },
    
    switch_style_click: function(){
    	$(".color").click(function(){
    		var id = $(this).attr("id");
    		
    		$("#color-switch").attr("href", "css/colors/" + id + ".css");    		
    	});
    	
      $("#chose-typography").on("change", function() {
        var selected = $(this).val();

        $("#font-switch").attr("href", "css/typography/" + selected + ".css");
      });
    },
  };

  $j().ready(function () {
	  switch_style.onReady();
  });

})(jQuery);


/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
 $(document).ready(function(){
 $('#toggle-switcher').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('#switch-style').animate({'left':'-220px'});
		}else{
			$(this).addClass('open');
			$('#switch-style').animate({'left':'0'});
		}
	});
});