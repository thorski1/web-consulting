export function gtag_report_conversion(
	url?: Location | (string & Location)
) {
	var callback = function () {
		if (typeof url != "undefined") {
			window.location = url;
		}
	};
	// @ts-ignore
	gtag("event", "conversion", {
		send_to: "AW-16649285433/lsh5CJymt8QZELne_4I-",
		event_callback: callback,
	});
	return false;
}
