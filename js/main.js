// JQuery Setup
$(document).ready(function(){

	var closeButton = function(){
		$("#overlay-close-button").on("click", function(){
			$("#overlay-back, #overlay-html-add-category").fadeOut(200);		
		});
	};

	$("#add-category").on("click", function(){
		event.preventDefault();
		event.stopPropagation();
		$("#overlay-back, #overlay-html-add-category").fadeIn(200);
		if($("#overlay-add-category-text").length >=1){
			
			}
	});
	
	
	
	closeButton();
});