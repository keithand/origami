// JQuery Setup
$(document).ready(function(){

	var categories = new Array();

	var closeButton = function(){
		$("#overlay-close-button").on("click", function(){
			$("#overlay-back, #overlay-html-add-category").fadeOut(200);		
		});
	};
	// CREATE A NEW CATEGORY
	var categoryNew = function(){
		event.preventDefault();
		event.stopPropagation();
		$("#overlay-back, #overlay-html-add-category").fadeIn(200);
		$('#overlay-add-category-submit').on("click", function(){
			event.preventDefault();
			event.stopPropagation();
			var categoryText = $("#overlay-add-category-text").val();

			$("#overlay-back, #overlay-html-add-category").fadeOut(200);
			
			if($("#overlay-add-category-text").val().length >=1) {
			// DISPLAY NEW CATEGORY
			newCategory = [categoryText];
			categories.unshift(categoryText);

			var newDate = new Date().toString('MMMM d, yyyy');
			var categoryList = '<a href="#" class="categorynotelist"><li class="categorylistitem"><p class="category-name">' + categoryText + '</p> <p class="category-date">' + newDate + '</p> </a> </li> <hr>';
			$(".category-list").append(categoryList);
			
			// RESET CATEGORY VALUE
			$("#overlay-add-category-text").val('');
			$("#overlay-add-category-text > input[type=reset]").trigger('click');
			event.preventDefault();

			} else {
				alert("Text not understood. Please try again.")
			};
		});
	};

	$("#add-category").on("click", function(){
		categoryNew();
	});
	$("#top-nav-add-category").on("click", function(){
		categoryNew();
	});
	
	$(document.body).on("click", ".categorylistitem", function(){
		event.preventDefault();
		event.stopPropagation();		
		$(this).toggleClass("category-selected");
		if($(document.contains(".category-selected"))){
			console.log("Your document has a .category-selected item.")
			// $(".categorylistitem").not('category-selected')
		}

		var note;
		var noteTemplate = '<li class="category-point"><img src="img/expand.png" width="10" class="category-point-expand"><p class="category-point-text">Boston University - College of Liberal Arts</p><img src="img/close.png" width="15" class="category-point-close"><hr></li>'

	});

	
	
	
	closeButton();
});