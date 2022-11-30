// var tippy = require("tippy.js");

(function ($) {
	$(document).ready(function () {
		// $("body").on("click", function (event) {

		// 	if (!$(event.target).is(".wp-block-image-tooltip-popup-wrapper")) {
		// 		$(".wp-block-image-tooltip-popup").addClass("hidden");
		// 	} else {
		// 		if (
		// 			$(event.target)
		// 				.parent()
		// 				.find(".wp-block-image-tooltip-popup.hidden")[0]
		// 		) {
		// 			$(".wp-block-image-tooltip-popup").addClass("hidden");
		// 			$(event.target)
		// 				.parent()
		// 				.find(".wp-block-image-tooltip-popup")
		// 				.removeClass("hidden");
		// 		} else {
		// 			$(".wp-block-image-tooltip-popup").addClass("hidden");
		// 			$(event.target)
		// 				.parent()
		// 				.find(".wp-block-image-tooltip-popup")
		// 				.addClass("hidden");
		// 		}
		// 	}
		// });

		const elements = $(".wp-block-image-tooltip-popup-wrapper");

		elements.each(function (index, element) {
			const tooltip = $(element).find(".wp-block-image-tooltip-popup");

			tippy(element, {
				content: tooltip[0],
				allowHTML: true,
				placement: "bottom",
				theme: "light",
				arrow: true,
				trigger: "click",
				interactive: true,
				// interactiveBorder: 10,
				// appendTo: 'parent',
				// hideOnClick: false,
				// onShow(instance) {
			});
		});
	});
})(jQuery);
