$(document).ready(function() {
	$(".work__items").slick({
		dots: true,
		arrows: false
	});

	$(".reviews__items").slick({
		dots: true,
		arrows: false
	});

	$(window).on("scroll load ready", function () {
		if($(this).scrollTop() > 0 && $(window).width() > 767) {
			$("#header").addClass("header--white");
		} else {
			$("#header").removeClass("header--white");
		}
	});

	$(".fancy").fancybox({
		padding: 0
	});

	$(".js-form-rec").submit(function () {
		var rec = $(this).find(".js-input-rec").val();
		console.log($(this), $(this).find(".js-input-rec"), $(this).find(".js-input-rec").val())
		$("#rec .js-input-rec").val(rec);
		$.fancybox.open("#rec", {});

		return false;
	});

	$(".input--phone").mask("+7 (999) 999-99-99");

	$("form.popup").ajaxForm({
		url: "index.html",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger("reset");
			$.fancybox("#success", {padding: 0});
		}
	});

	$.scrollUp("white", "#be9020");

	if(!isMobile.any) {
		new WOW().init();
	}

});

$(window).on("load", function() {
	
});