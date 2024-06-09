/***************************
* HTML5 STANDARDS AND SECURITY TEST
* Version 1.0
* Written by Kelly "Mac" Young
* March 6, 2023
***************************/
window.onload = function() {
	/* PARSING */
	
	/* DOCTYPE Standards Mode test */
	try {
		let is_HTML5_mode = document.compatMode === "CSS1Compat";
		document.getElementById("doctypetest").textContent = is_HTML5_mode ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("doctypetest").textContent = "FAIL";
	}
	
	/* HTML Tokenizer test */
	var validhtml5 = '<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Test</title></head><body><h1>Hello, world!</h1></body></html>';
	try {
		let tokenizer_test = document.createElement("div");
		tokenizer_test.innerHTML = validhtml5;
		document.getElementById("tokentest").textContent = (tokenizer_test.childNodes.length > 0) ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("tokentest").textContent = "FAIL";
	}
	
	/* HTML Tree building test */
	let tree_test_element = document.getElementById("treetest");
	if (tree_test_element) {
		try {
			let tree_building_works = document.createElement("div") instanceof HTMLDivElement;
			tree_test_element.textContent = tree_building_works ? "PASS" : "FAIL";
		}
		catch (error) {
			tree_test_element.textContent = "FAIL";
		}
	}
	
	/* Inline SVG test */
	try {
		let svg_works = !!document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
		document.getElementById("insvgtest").textContent = svg_works ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("insvgtest").textContent = "FAIL";
	}
	
	/* Inline MathML test */
	try {
		let mathml_works = !!document.createElement("math") && !! document.createElement("math").style && "textContent" in document.createElement("math");
		document.getElementById("inmathmltest").textContent = mathml_works ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("inmathmltest").textContent = "FAIL";
	}
	
	/* ELEMENTS */
	
	/* Embedding custom non-visible data test */
	try {
		var data_test_elemnt = document.createElement("div");
		data_test_elemnt.setAttribute("data-test", "test-value");
		let data_attribute_works = "dataset" in data_test_elemnt && data_test_elemnt.dataset.test === "test-value";
		document.getElementById("datasettest").textContent = data_attribute_works ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("datasettest").textContent = "FAIL";
	}
	
	/* Section tag test */
	try {
		let section_test = !(document.createElement("section") instanceof HTMLUnknownElement);
		document.getElementById("sectiontest").textContent = section_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("sectiontest").textContent = "FAIL";
	}
	
	/* Nav tag test */
	try {
		let nav_test = !(document.createElement("nav") instanceof HTMLUnknownElement);
		document.getElementById("navtest").textContent = nav_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("navtest").textContent = "FAIL";
	}
	
	/* Article tag test */
	try {
		let article_test = !(document.createElement("article") instanceof HTMLUnknownElement);
		document.getElementById("articletest").textContent = article_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("articletest").textContent = "FAIL";
	}
	
	/* Aside tag test */
	try {
		let aside_test = !(document.createElement("aside") instanceof HTMLUnknownElement);
		document.getElementById("asidetest").textContent = aside_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("asidetest").textContent = "FAIL";
	}
	
	/* Header tag test */
	try {
		let header_test = !(document.createElement("header") instanceof HTMLUnknownElement);
		document.getElementById("headertest").textContent = header_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("headertest").textContent = "FAIL";
	}
	
	/* Footer tag test */
	try {
		let footer_test = !(document.createElement("footer") instanceof HTMLUnknownElement);
		document.getElementById("footertest").textContent = footer_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("footertest").textContent = "FAIL";
	}
	
	/* Main tag test */
	try {
		let main_test = !(document.createElement("main") instanceof HTMLUnknownElement);
		document.getElementById("maintest").textContent = main_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("maintest").textContent = "FAIL";
	}
	
	/* Figure tag test */
	try {
		let figure_test = !(document.createElement("figure") instanceof HTMLUnknownElement);
		document.getElementById("figuretest").textContent = figure_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("figuretest").textContent = "FAIL";
	}
	
	/* Figcaption tag test */
	try {
		let figcaption_test = !(document.createElement("figcaption") instanceof HTMLUnknownElement);
		document.getElementById("figcaptiontest").textContent = figcaption_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("figcaptiontest").textContent = "FAIL";
	}
	
	/* Reversed attribute in ol test */
	try {
		var sample_ol = document.createElement("ol");
		let reversed_ol_test = "reversed" in sample_ol;
		document.getElementById("reversedoltest").textContent = reversed_ol_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("reversedoltest").textContent = "FAIL";
	}
	
	/* Download attribute in "a" test */
	try {
		var sample_a = document.createElement("a");
		let download_a_test = "download" in sample_a;
		document.getElementById("downloadatest").textContent = download_a_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("downloadatest").textContent = "FAIL";
	}
	
	/* Ping attribute in "a" test */
	try {
		sample_a = document.createElement("a");
		let ping_a_test = "ping" in sample_a;
		document.getElementById("pingatest").textContent = ping_a_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("pingatest").textContent = "FAIL";
	}
	
	/* Mark tag test */
	try {
		let mark_test = !(document.createElement("mark") instanceof HTMLUnknownElement);
		document.getElementById("marktest").textContent = mark_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("marktest").textContent = "FAIL";
	}
	
	/* Ruby tags test */
	try {
		let ruby_test = !(document.createElement("ruby") instanceof HTMLUnknownElement);
		let rt_test = !(document.createElement("rt") instanceof HTMLUnknownElement);
		let rp_test = !(document.createElement("rp") instanceof HTMLUnknownElement);
		document.getElementById("rubytest").textContent = (ruby_test && rt_test && rp_test) ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("figcaptiontest").textContent = "FAIL";
	}
	
	/* Time tag test */
	// Test for "datetime" attribute moved to manual testing.
	try {
		let time_test = !(document.createElement("time") instanceof HTMLUnknownElement);
		document.getElementById("timetest").textContent = time_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("timetest").textContent = "FAIL";
	}
	
	/* Data tag test */
	try {
		let data_test = !(document.createElement("data") instanceof HTMLUnknownElement);
		document.getElementById("datatest").textContent = data_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("datatest").textContent = "FAIL";
	}
	
	/* Word break tag test */
	try {
		let wbr_test = !(document.createElement("wbr") instanceof HTMLUnknownElement);
		document.getElementById("wbrtest").textContent = wbr_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("wbrtest").textContent = "FAIL";
	}
	
	/* Details tag test */
	try {
		let details_tag_test = !(document.createElement("details") instanceof HTMLUnknownElement);
		if (details_tag_test === true) {
			sample_details = document.createElement("details");
			let details_test = "open" in sample_details;
			document.getElementById("detailstest").textContent = details_test ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("detailstest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("detailstest").textContent = "FAIL";
	}
	
	/* Summary tag test */
	try {
		let summary_test = !(document.createElement("summary") instanceof HTMLUnknownElement);
		document.getElementById("summarytest").textContent = summary_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("summarytest").textContent = "FAIL";
	}
	
	/* Dialog tag test */
	try {
		let dialog_tag_test = !(document.createElement("dialog") instanceof HTMLUnknownElement);
		if (dialog_tag_test === true) {
			sample_dialog = document.createElement("dialog");
			let dialog_test = "open" in sample_details;
			document.getElementById("dialogtest").textContent = dialog_test ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("dialogtest").textContent = "FAIL";
			console.log("<dialog>: Your browser does not support the dialog element.");
		}
	}
	catch (error) {
		document.getElementById("dialogtest").textContent = "FAIL";
	}
	
	/* Hidden attribute test */
	try {
		var sample_p = document.createElement("p");
		let hidden_test = "hidden" in sample_p;
		document.getElementById("hiddentest").textContent = hidden_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("hiddentest").textContent = "FAIL";
	}
	
	/* Translate attribute test */
	try {
		var sample_p = document.createElement("p");
		let translate_test = "translate" in sample_p;
		document.getElementById("translatetest").textContent = translate_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("translatetest").textContent = "FAIL";
	}
	
	/* Access Key Label property test */
	// The accesskey attribute is removed for manual testing.
	try {
		var sample_p = document.createElement("p");
		let access_key_label_test = "accessKeyLabel" in sample_p;
		document.getElementById("accesskeylabeltest").textContent = access_key_label_test ? "PASS" : "FAIL";
		if (!access_key_label_test) {
			console.log("\"accessKeyLabel\" property: Your browser does not support the \"accessKeyLabel\" property.");
		}
	}
	catch (error) {
		document.getElementById("accesskeylabeltest").textContent = "FAIL";
	}
	
	/* outerHTML property test */
	try {
		if ("outerHTML" in document.createElement("div")) {
			document.getElementById("outerhtmltest").textContent = "PASS";
		}
		else {
			document.getElementById("outerhtmltest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("outerhtmltest").textContent = "FAIL";
	}
	
	/* insertAdjacentHTML function test */
	try {
		if ("insertAdjacentHTML" in document.createElement("div")) {
			document.getElementById("iahtmltest").textContent = "PASS";
		}
		else {
			document.getElementById("iahtmltest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("iahtmltest").textContent = "FAIL";
	}
	
	/* FORMS */
	
	/* Input of type Text test */
	try {
		let input_text_test = document.createElement("input");
		input_text_test.type = "text";
		if (input_text_test.type === "text") {
			let selection_direction_test = "selectionDirection" in input_text_test;
			document.getElementById("textinputtest").textContent = selection_direction_test ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("textinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("textinputtest").textContent = "FAIL";
	}
	
	/* Input of type Search test */
	try {
		let input_search_test = document.createElement("input");
		input_search_test.type = "search";
		document.getElementById("searchinputtest").textContent = (input_search_test.type === "search") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("searchinputtest").textContent = "FAIL";
	}
	
	/* Input of type Tel test */
	try {
		let input_tel_test = document.createElement("input");
		input_tel_test.type = "tel";
		document.getElementById("telinputtest").textContent = (input_tel_test.type === "tel") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("telinputtest").textContent = "FAIL";
	}
	
	/* Input of type URL test */
	try {
		let input_url_test = document.createElement("input");
		input_url_test.type = "url";
		if (input_url_test.type === "url") {
			input_url_test.value = "bad-url";
			document.getElementById("urlinputtest").textContent = (!input_url_test.checkValidity()) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("urlinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("urlinputtest").textContent = "FAIL";
	}
	
	/* Input of type Email test */
	try {
		let input_email_test = document.createElement("input");
		input_email_test.type = "email";
		if (input_email_test.type === "email") {
			input_email_test.value = "bad-email";
			document.getElementById("emailinputtest").textContent = (!input_email_test.checkValidity()) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("emailinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("emailinputtest").textContent = "FAIL";
	}
	
	/* Input of type Date test */
	try {
		let input_date_test = document.createElement("input");
		input_date_test.type = "date";
		if (input_date_test.type === "date") {
			var tests_passed = 0;
			input_date_test.value = "bad-date";
			if (input_date_test.value === "") { tests_passed++; }
			let min_date_test = "min" in input_date_test;
			if (min_date_test) { tests_passed++; }
			let max_date_test = "max" in input_date_test;
			if (max_date_test) { tests_passed++; }
			let step_date_test = "step" in input_date_test;
			if (step_date_test) { tests_passed++; }
			if ("stepDown" in input_date_test) { tests_passed++; }
			if ("stepUp" in input_date_test) { tests_passed++; }
			if ("valueAsDate" in input_date_test) { tests_passed++; }
			if ("valueAsNumber" in input_date_test) { tests_passed++; }
			document.getElementById("dateinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("dateinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("dateinputtest").textContent = "FAIL";
	}
	
	/* Input of type Month test */
	try {
		let input_month_test = document.createElement("input");
		input_month_test.type = "month";
		if (input_month_test.type === "month") {
			var tests_passed = 0;
			input_month_test.value = "bad-month";
			if (input_month_test.value === "") { tests_passed++; }
			let min_month_test = "min" in input_month_test;
			if (min_month_test) { tests_passed++; }
			let max_month_test = "max" in input_month_test;
			if (max_month_test) { tests_passed++; }
			let step_month_test = "step" in input_month_test;
			if (step_month_test) { tests_passed++; }
			if ("stepDown" in input_month_test) { tests_passed++; }
			if ("stepUp" in input_month_test) { tests_passed++; }
			if ("valueAsDate" in input_month_test) { tests_passed++; }
			if ("valueAsNumber" in input_month_test) { tests_passed++; }
			document.getElementById("monthinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("monthinputtest").textContent = "FAIL";
			console.log("Input of type \"month\": Your browser does not support the \"month\" input type.");
		}
	}
	catch (error) {
		document.getElementById("monthinputtest").textContent = "FAIL";
	}
	
	/* Input of type Week test */
	try {
		let input_week_test = document.createElement("input");
		input_week_test.type = "week";
		if (input_week_test.type === "week") {
			var tests_passed = 0;
			input_week_test.value = "bad-week";
			if (input_week_test.value === "") { tests_passed++; }
			let min_week_test = "min" in input_week_test;
			if (min_week_test) { tests_passed++; }
			let max_week_test = "max" in input_week_test;
			if (max_week_test) { tests_passed++; }
			let step_week_test = "step" in input_week_test;
			if (step_week_test) { tests_passed++; }
			if ("stepDown" in input_week_test) { tests_passed++; }
			if ("stepUp" in input_week_test) { tests_passed++; }
			if ("valueAsDate" in input_week_test) { tests_passed++; }
			if ("valueAsNumber" in input_week_test) { tests_passed++; }
			document.getElementById("weekinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("weekinputtest").textContent = "FAIL";
			console.log("Input of type \"week\": Your browser does not support the \"week\" input type.");
		}
	}
	catch (error) {
		document.getElementById("weekinputtest").textContent = "FAIL";
	}
	
	/* Input of type Time test */
	try {
		let input_time_test = document.createElement("input");
		input_time_test.type = "time";
		if (input_time_test.type === "time") {
			var tests_passed = 0;
			input_time_test.value = "bad-time";
			if (input_time_test.value === "") { tests_passed++; }
			let min_time_test = "min" in input_time_test;
			if (min_time_test) { tests_passed++; }
			let max_time_test = "max" in input_time_test;
			if (max_time_test) { tests_passed++; }
			let step_time_test = "step" in input_time_test;
			if (step_time_test) { tests_passed++; }
			if ("stepDown" in input_time_test) { tests_passed++; }
			if ("stepUp" in input_time_test) { tests_passed++; }
			if ("valueAsDate" in input_time_test) { tests_passed++; }
			if ("valueAsNumber" in input_time_test) { tests_passed++; }
			document.getElementById("timeinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("timeinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("timeinputtest").textContent = "FAIL";
	}
	
	/* Input of type Local Date and Time test */
	try {
		let input_dtl_test = document.createElement("input");
		input_dtl_test.type = "datetime-local";
		if (input_dtl_test.type === "datetime-local") {
			var tests_passed = 0;
			input_dtl_test.value = "bad-dtl";
			if (input_dtl_test.value === "") {
				input_dtl_test.value = "1998-04-26T12:34";
				if (input_dtl_test.value === "1998-04-26T12:34") { tests_passed++; }
			}
			let min_dtl_test = "min" in input_dtl_test;
			if (min_dtl_test) { tests_passed++; }
			let max_dtl_test = "max" in input_dtl_test;
			if (max_dtl_test) { tests_passed++; }
			let step_dtl_test = "step" in input_dtl_test;
			if (step_dtl_test) { tests_passed++; }
			if ("stepDown" in input_dtl_test) { tests_passed++; }
			if ("stepUp" in input_dtl_test) { tests_passed++; }
			if ("valueAsDate" in input_dtl_test) { tests_passed++; }
			document.getElementById("dtlinputtest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("dtlinputtest").textContent = "FAIL";
			console.log("Input of type \"datetime-local\": Your browser does not support the local date and time input type.");
		}
	}
	catch (error) {
		document.getElementById("dtlinputtest").textContent = "FAIL";
	}
	
	/* Input of type Number test */
	try {
		let input_number_test = document.createElement("input");
		input_number_test.type = "number";
		if (input_number_test.type === "number") {
			var tests_passed = 0;
			input_number_test.value = "bad-number";
			if (input_number_test.value === "") { tests_passed++; }
			let min_number_test = "min" in input_number_test;
			if (min_number_test) { tests_passed++; }
			let max_number_test = "max" in input_number_test;
			if (max_number_test) { tests_passed++; }
			let step_number_test = "step" in input_number_test;
			if (step_number_test) { tests_passed++; }
			if ("stepDown" in input_number_test) { tests_passed++; }
			if ("stepUp" in input_number_test) { tests_passed++; }
			if ("valueAsDate" in input_number_test) { tests_passed++; }
			document.getElementById("numberinputtest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("numberinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("numberinputtest").textContent = "FAIL";
	}
	
	/* Input of type Range test */
	try {
		let input_range_test = document.createElement("input");
		input_range_test.type = "range";
		if (input_range_test.type === "range") {
			var tests_passed = 0;
			input_range_test.value = "bad-range";
			if (!isNaN(input_range_test.value)) { tests_passed++; }
			let min_range_test = "min" in input_range_test;
			if (min_range_test) { tests_passed++; }
			let max_range_test = "max" in input_range_test;
			if (max_range_test) { tests_passed++; }
			let step_range_test = "step" in input_range_test;
			if (step_range_test) { tests_passed++; }
			if ("stepDown" in input_range_test) { tests_passed++; }
			if ("stepUp" in input_range_test) { tests_passed++; }
			if ("valueAsDate" in input_range_test) { tests_passed++; }
			document.getElementById("rangeinputtest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("rangeinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("rangeinputtest").textContent = "FAIL";
	}
	
	/* Input of type Color test */
	try {
		let input_color_test = document.createElement("input");
		input_color_test.type = "color";
		if (input_color_test.type === "color") {
			var tests_passed = 0;
			input_color_test.value = "bad-color";
			if (input_color_test.value === "#000000") {
				input_color_test.value = "#AbCdEf";
				if (input_color_test.value === "#abcdef") { tests_passed++; }
			}
			document.getElementById("colorinputtest").textContent = (tests_passed === 1) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("colorinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("colorinputtest").textContent = "FAIL";
	}
	
	/* Input of type Checkbox test */
	try {
		let input_checkbox_test = document.createElement("input");
		input_checkbox_test.type = "checkbox";
		if (input_checkbox_test.type === "checkbox") {
			if ("indeterminate" in input_checkbox_test) {
				document.getElementById("checkboxinputtest").textContent = "PASS";
			}
			else {
				document.getElementById("checkboxinputtest").textContent = "PARTIAL";
			}
		}
		else {
			document.getElementById("checkboxinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("checkboxinputtest").textContent = "FAIL";
	}
	
	/* Input of type Image test */
	try {
		let input_image_test = document.createElement("input");
		input_image_test.type = "image";
		if (input_image_test.type === "image") {
			var tests_passed = 0;
			if ("width" in input_image_test) { tests_passed++; }
			if ("height" in input_image_test) { tests_passed++; }
			document.getElementById("imageinputtest").textContent = (tests_passed === 2) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("imageinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("imageinputtest").textContent = "FAIL";
	}
	
	/* Input of type File test */
	try {
		let input_file_test = document.createElement("input");
		input_file_test.type = "file";
		if (input_file_test.type === "file") {
			var tests_passed = 0;
			let files_file_test = "files" in input_file_test;
			if (files_file_test) { tests_passed++; }
			let accept_file_test = "accept" in input_file_test;
			if (accept_file_test) { tests_passed++; }
			let capture_file_test = "capture" in input_file_test;
			if (capture_file_test) { tests_passed++; }
			else { console.log("Input of type \"file\": Your browser does not support the \"capture\" attribute. If you are using a desktop browser, this doesn't matter as much. Its real importance is on mobile."); }
			let multiple_file_test = "multiple" in input_file_test;
			if (multiple_file_test) { tests_passed++; }
			document.getElementById("fileinputtest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("fileinputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("fileinputtest").textContent = "FAIL";
	}
	
	/* Textarea tag test */
	// Test for "maxlength" attribute moved to manual testing.
	try {
		let textarea_tag_test = !(document.createElement("textarea") instanceof HTMLUnknownElement);
		if (textarea_tag_test === true) {
			sample_textarea = document.createElement("textarea");
			let textarea_wrap = "wrap" in sample_textarea;
			if (textarea_wrap) {
				document.getElementById("textareatest").textContent = (textarea_wrap) ? "PASS" : "PARTIAL";
			}
		}
		else {
			document.getElementById("textareatest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("textareatest").textContent = "FAIL";
	}
	
	/* Select tag test */
	try {
		let select_tag_test = !(document.createElement("select") instanceof HTMLUnknownElement);
		if (select_tag_test === true) {
			sample_select = document.createElement("select");
			let select_required = "required" in sample_select;
			if (select_required) {
				document.getElementById("selecttest").textContent = select_required ? "PASS" : "PARTIAL";
			}
		}
		else {
			document.getElementById("selecttest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("selecttest").textContent = "FAIL";
	}
	
	/* Fieldset tag test */
	try {
		let fieldset_tag_test = !(document.createElement("fieldset") instanceof HTMLUnknownElement);
		if (fieldset_tag_test === true) {
			sample_fieldset = document.createElement("fieldset");
			let fieldset_disabled = "disabled" in sample_fieldset;
			document.getElementById("fieldsettest").textContent = fieldset_disabled ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("fieldsettest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("fieldsettest").textContent = "FAIL";
	}
	
	/* Datalist tag test */
	try {
		let datalist_tag_test = !(document.createElement("datalist") instanceof HTMLUnknownElement);
		document.getElementById("datalisttest").textContent = datalist_tag_test ? "PASS" : "PARTIAL";
	}
	catch (error) {
		document.getElementById("datalisttest").textContent = "FAIL";
	}
	
	/* Output tag test */
	try {
		let output_tag_test = !(document.createElement("output") instanceof HTMLUnknownElement);
		document.getElementById("outputtest").textContent = output_tag_test ? "PASS" : "PARTIAL";
	}
	catch (error) {
		document.getElementById("outputtest").textContent = "FAIL";
	}
	
	/* Progress tag test */
	try {
		let progress_tag_test = !(document.createElement("progress") instanceof HTMLUnknownElement);
		document.getElementById("progresstest").textContent = progress_tag_test ? "PASS" : "PARTIAL";
	}
	catch (error) {
		document.getElementById("progresstest").textContent = "FAIL";
	}
	
	/* Meter tag test */
	try {
		let meter_tag_test = !(document.createElement("meter") instanceof HTMLUnknownElement);
		document.getElementById("metertest").textContent = meter_tag_test ? "PASS" : "PARTIAL";
	}
	catch (error) {
		document.getElementById("metertest").textContent = "FAIL";
	}
	
	/* Field validation test */
	try {
		var sample_input = document.createElement("input");
		var tests_passed = 0;
		let pattern_test = "pattern" in sample_input;
		if (pattern_test) { tests_passed++; }
		let required_test = "required" in sample_input;
		if (required_test) { tests_passed++; }
		document.getElementById("fieldvalidtest").textContent = (tests_passed === 2) ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("fieldvalidtest").textContent = "FAIL";
	}
	
	/* Association of controls and forms test */
	// Removed for manual testing.
	// This invloved testing for the "control" property in the "label," while testing for
	// "form," "formaction," "formenctype," "formmethod," "formnovalidate," "formtaget," and
	// "labels" prperties on either "image" or "submit."
	
	/* Autofocus attribute test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		let autofocus_test = "autofocus" in sample_input;
		document.getElementById("autofocustest").textContent = autofocus_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("autofocustest").textContent = "FAIL";
	}
	
	/* Autocomplete attribute test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		let autocomplete_test = "autocomplete" in sample_input;
		document.getElementById("autocomptest").textContent = autocomplete_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("autocomptest").textContent = "FAIL";
	}
	
	/* Placeholder attribute test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		let placeholder_test = "placeholder" in sample_input;
		document.getElementById("placeholdertest").textContent = placeholder_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("placeholdertest").textContent = "FAIL";
	}
	
	/* Multiple attribute test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "email";
		let multiple_test = "multiple" in sample_input;
		document.getElementById("multipletest").textContent = multiple_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("multipletest").textContent = "FAIL";
	}
	
	/* Dirname attribute test */
	// Removed for manual testing.
	
	/* Valid CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "valid_test";
		sample_input.type = "text";
		sample_input.value = "TEST";
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_valid_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssvalidtest").textContent = (css_valid_test === "rgb(240, 255, 240)") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssvalidtest").textContent = "FAIL";
	}
	
	/* Invalid CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "invalid_test";
		sample_input.type = "email";
		sample_input.value = "bad-email";
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_invalid_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssinvalidtest").textContent = (css_invalid_test === "rgb(255, 250, 250)") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssinvalidtest").textContent = "FAIL";
	}
	
	/* Optional CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "optional_test";
		sample_input.type = "text";
		sample_input.value = "TEST";
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_optional_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssoptionaltest").textContent = (css_optional_test === "rgb(255, 255, 240)") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssoptionaltest").textContent = "FAIL";
	}
	
	/* Required CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "required_test";
		sample_input.type = "text";
		sample_input.value = "TEST";
		sample_input.setAttribute("required", "");
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_required_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssrequiredtest").textContent = (css_required_test === "rgb(255, 228, 225)") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssrequiredtest").textContent = "FAIL";
	}
	
	/* In-range CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "inrange_test";
		sample_input.type = "number";
		sample_input.setAttribute("min", 1);
		sample_input.setAttribute("max", 10);
		sample_input.value = 5;
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_inrange_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssinrangetest").textContent = (css_inrange_test === "rgb(240, 255, 240)") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssinrangetest").textContent = "FAIL";
	}
	
	/* Out-of-range CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "oor_test";
		sample_input.type = "number";
		sample_input.setAttribute("min", 1);
		sample_input.setAttribute("max", 10);
		sample_input.value = 12;
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_oor_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssoortest").textContent = (css_oor_test === "rgb(255, 228, 225)") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssoortest").textContent = "FAIL";
	}
	
	/* Read-write CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "rw_test";
		sample_input.type = "text";
		sample_input.value = "TEST";
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_rw_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssrwtest").textContent = (css_rw_test === "rgb(240, 255, 240)") ? "PASS" : "FAIL";
		if (document.getElementById("cssrwtest").textContent === "FAIL") {
			console.log("\"read-write\" CSS Selector: Your browser does not support the \"read-write\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssrwtest").textContent = "FAIL";
	}
	
	/* Read-only CSS Selector test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.className = "ro_test";
		sample_input.type = "text";
		sample_input.value = "TEST";
		sample_input.setAttribute("readonly", "");
		sample_form.appendChild(sample_input);
		document.body.appendChild(sample_form);
		let computed_style = window.getComputedStyle(sample_input);
		let css_ro_test = computed_style.backgroundColor;
		document.body.removeChild(sample_form);
		document.getElementById("cssrotest").textContent = (css_ro_test === "rgb(211, 211, 211)") ? "PASS" : "FAIL";
		if (document.getElementById("cssrotest").textContent === "FAIL") {
			console.log("\"read-only\" CSS Selector: Your browser does not support the \"read-only\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssrotest").textContent = "FAIL";
	}
	
	/* On Input event test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		if ("oninput" in sample_input) {
			document.getElementById("oninputtest").textContent = "PASS";
		}
		else {
			document.getElementById("oninputtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("oninputtest").textContent = "FAIL";
	}
	
	/* On Change event test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		if ("onchange" in sample_input) {
			document.getElementById("onchangetest").textContent = "PASS";
		}
		else {
			document.getElementById("onchangetest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("onchangetest").textContent = "FAIL";
	}
	
	/* On Invalid event test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		if ("oninvalid" in sample_input) {
			document.getElementById("invalideventtest").textContent = "PASS";
		}
		else {
			document.getElementById("invalideventtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("invalideventtest").textContent = "FAIL";
	}
	
	/* Form validation test */
	try {
		var sample_form = document.createElement("form");
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		sample_input.value = "TEST";
		sample_form.appendChild(sample_input);
		var tests_passed = 0;
		let check_validity_test = "checkValidity" in sample_input;
		if (check_validity_test) { tests_passed++; }
		let no_validate_test = "noValidate" in sample_form;
		if (no_validate_test) { tests_passed++; }
		document.getElementById("formvalidationtest").textContent = (tests_passed === 2) ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("formvalidationtest").textContent = "FAIL";
	}
	
	/* WEB COMPONENTS API */
	
	/* Custom elements test */
	try {
		let custom_elements_test = "customElements" in window;
		document.getElementById("customelementtest").textContent = custom_elements_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("customelementtest").textContent = "FAIL";
	}
	
	/* Shadow trees test */
	try {
		let sample_div = document.createElement("div");
		let shadow_tree_test = "attachShadow" in sample_div;
		document.getElementById("shadowtreetest").textContent = shadow_tree_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("shadowtreetest").textContent = "FAIL";
	}
	
	/* Template tag test */
	try {
		let template_test = !(document.createElement("template") instanceof HTMLUnknownElement);
		document.getElementById("templatetest").textContent = template_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("templatetest").textContent = "FAIL";
	}
	
	/* Slot tag test */
	try {
		let slot_tag_test = !(document.createElement("slot") instanceof HTMLUnknownElement);
		if (slot_tag_test === true) {
			sample_template = document.createElement("template");
			sample_slot = document.createElement("slot");
			sample_template.appendChild(sample_slot);
			let slot_test = "name" in sample_slot;
			document.getElementById("slottest").textContent = slot_test ? "PASS" : "FAIL";
		}
		else {
			document.getElementById("slottest").textContent = "FAIL";
			console.log("<slot>: Your browser does not support the slot element.");
		}
	}
	catch (error) {
		document.getElementById("slottest").textContent = "FAIL";
	}
	
	/* LOCATION AND ORIENTATION */
	
	/* Geolocation test */
	try {
		document.getElementById("geolocationtest").textContent = "Testing...";
		if (window.isSecureContext) {
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition(
					() => document.getElementById("geolocationtest").textContent = "PASS",
					(error) => {
						switch (error.code) {
							case error.PERMISSION_DENIED:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								console.log("Geolocation test: You have chosen to block access to your location. Nevertheless, your browser supports the Geolocation API, which is all that really matters here.");
								break;
							case error.POSITION_UNAVAILABLE:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								console.log("Geolocation test: Your browser supports the Geolocation API, but your position could not be obtained. The Geolocation server your browser is using could be at fault.");
								break;
							case error.TIMEOUT:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								console.log("Geolocation test: Your browser supports the Geolocation API, but the request timed out.");
								break;
							default:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								console.log("Geolocation test: Your browser supports the Geolocation API, but there was an error in processing the request for the current position.");
						}
					},
					{timeout: 10000}
				);
			}
			else {
				document.getElementById("geolocationtest").textContent = "FAIL";
				console.log("Geolocation test: Your browser does not support the Geolocation API.");
			}
		}
		else {
			document.getElementById("geolocationtest").textContent = "FAIL";
			console.log("Geolocation test: Geolocation requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("geolocationtest").textContent = "FAIL";
	}
	
	/* Device orientation test */
	try {
		if (window.isSecureContext) {
			document.getElementById("devorienttest").textContent = (window.DeviceOrientationEvent) ? "PASS" : "FAIL";
		}
		else {
			document.getElementById("devorienttest").textContent = "FAIL";
			console.log("Device orientation test: The orientation sensor requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("devorienttest").textContent = "FAIL";
	}
	
	/* Device motion test */
	try {
		if (window.isSecureContext) {
			document.getElementById("devmotiontest").textContent = (window.DeviceMotionEvent) ? "PASS" : "FAIL";
		}
		else {
			document.getElementById("devmotiontest").textContent = "FAIL";
			console.log("Device motion test: The motion sensor requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("devmotiontest").textContent = "FAIL";
	}
	
	/* INPUT AND OUTPUT */
	
	/* Gamepad test */
	try {
		if (window.isSecureContext) {
			if ("getGamepads" in navigator) {
				document.getElementById("gamepadtest").textContent = "PASS";
			}
			else {
				document.getElementById("gamepadtest").textContent = "FAIL";
				console.log("Gamepad test: Your browser does not support the Gamepad API.");
			}
		}
		else {
			document.getElementById("gamepadtest").textContent = "FAIL";
			console.log("Gamepad test: The Gamepad API requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("gamepadtest").textContent = "FAIL";
	}
	
	/* Pointer events test */
	try {
		if (window.PointerEvent) {
			var sample_pointer_event = new PointerEvent("pointerdown");
			var tests_passed = 0;
			let coalesced_test = "getCoalescedEvents" in sample_pointer_event;
			if (coalesced_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support coalesced pointer events."); }
			let predicted_test = "getPredictedEvents" in sample_pointer_event;
			if (predicted_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support predicted pointer events."); }
			let height_test = "height" in sample_pointer_event;
			if (height_test) { tests_passed++; }
			let primary_test = "isPrimary" in sample_pointer_event;
			if (primary_test) { tests_passed++; }
			let pointer_id_test = "pointerId" in sample_pointer_event;
			if (pointer_id_test) { tests_passed++; }
			let pointer_type_test = "pointerType" in sample_pointer_event;
			if (pointer_type_test) { tests_passed++; }
			let pressure_test = "pressure" in sample_pointer_event;
			if (pressure_test) { tests_passed++; }
			let tangential_pressure_test = "tangentialPressure" in sample_pointer_event;
			if (tangential_pressure_test) { tests_passed++; }
			let tiltx_test = "tiltX" in sample_pointer_event;
			if (tiltx_test) { tests_passed++; }
			let tilty_test = "tiltY" in sample_pointer_event;
			if (tilty_test) { tests_passed++; }
			let twist_test = "twist" in sample_pointer_event;
			if (twist_test) { tests_passed++; }
			let width_test = "width" in sample_pointer_event;
			if (width_test) { tests_passed++; }
			document.getElementById("pointereventstest").textContent = (tests_passed === 12) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("pointereventstest").textContent = "FAIL";
			console.log("Pointer events test: Your browser does not support pointer events.");
		}
	}
	catch (error) {
		document.getElementById("pointereventstest").textContent = "FAIL";
	}
	
	/* Pointer Lock API test */
	try {
		let pointer_lock_test = "requestPointerLock" in document.documentElement;
		let pointer_exit_lock_test = "exitPointerLock" in document;
		if (pointer_lock_test == true && pointer_exit_lock_test == true) {
			document.getElementById("pointerlocktest").textContent = "PASS";
		}
		else {
			document.getElementById("pointerlocktest").textContent = "FAIL";
			console.log("Pointer lock test: Your browser does not support the Pointer Lock API.");
		}
	}
	catch (error) {
		document.getElementById("pointerlocktest").textContent = "FAIL";
	}
	
	/* Fullscreen test */
	// Tests for navigationUI and returns for promises are to be done manually.
	try {
		var tests_passed = 0;
		if ("fullscreenElement" in document) {
			tests_passed++;
			if ("fullscreenEnabled" in document) { tests_passed++; }
			if ("exitFullscreen" in document) { tests_passed++; }
			if ("requestFullscreen" in document.documentElement) { tests_passed++; }
			document.getElementById("fullscreentest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("fullscreentest").textContent = "FAIL";
			console.log("Fullscreen test: Your browser does not support the Fullscreen API.");
		}
	}
	catch (error) {
		document.getElementById("fullscreentest").textContent = "FAIL";
	}
	
	/* Web notifications test */
	try {
		if (window.isSecureContext) {
			if ("Notification" in window) {
				Notification.requestPermission().then(permission => {
					if (permission === "granted" || permission === "denied" || permission === "default") {
						var sample_notification = new Notification("You should not see this notification. It's silent.", { silent: true });
						var tests_passed = 0;
						let badge_test = "badge" in sample_notification;
						if (badge_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"badge\" property."); }
						let body_test = "body" in sample_notification;
						if (body_test) { tests_passed++; }
						let click_test = "onclick" in sample_notification;
						if (click_test) { tests_passed++; }
						let close_test = "close" in sample_notification;
						if (close_test) { tests_passed++; }
						let data_test = "data" in sample_notification;
						if (data_test) { tests_passed++; }
						let dir_test = "dir" in sample_notification;
						if (dir_test) { tests_passed++; }
						let error_test = "onerror" in sample_notification;
						if (error_test) { tests_passed++; }
						let icon_test = "icon" in sample_notification;
						if (icon_test) { tests_passed++; }
						let lang_test = "lang" in sample_notification;
						if (lang_test) { tests_passed++; }
						let require_interact_test = "requireInteraction" in sample_notification;
						if (require_interact_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"requireInteraction\" property."); }
						let show_test = "onshow" in sample_notification;
						if (show_test) { tests_passed++; }
						let silent_test = "silent" in sample_notification;
						if (silent_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"silent\" property."); }
						let tag_test = "tag" in sample_notification;
						if (tag_test) { tests_passed++; }
						let title_test = "title" in sample_notification;
						if (title_test) { tests_passed++; }
						let close_func_test = typeof sample_notification.close === "function";
						if (close_func_test) {
							tests_passed++;
							sample_notification.close();
						}
						document.getElementById("webnotificationstest").textContent = (tests_passed === 15) ? "PASS" : "PARTIAL";
					}
					else {
						document.getElementById("webnotificationstest").textContent = "FAIL";
						console.log("Web notifications test: There was an error in requesting permission.");
					}
				});
			}
			else {
				document.getElementById("webnotificationstest").textContent = "FAIL";
				console.log("Web notifications test: Your browser does not support web notifications.");
			}
		}
		else {
			document.getElementById("webnotificationstest").textContent = "FAIL";
			console.log("Web notifications test: Web notifications require a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("webnotificationstest").textContent = "FAIL";
	}
	
	/* CODEC DETECTION TEST */
	
	try {
		var sample_audio = document.createElement("audio");
		let au_test = sample_audio.canPlayType("audio/basic");
		if (au_test === "probably" || au_test === "maybe") {
			document.getElementById("autest").textContent = "PASS";
		}
		else {
			document.getElementById("autest").textContent = "FAIL";
			console.log("Au: Your browser does not support the Au file format.");
		}
	}
	catch (error) {
		document.getElementById("autest").textContent = "FAIL";
	}
	
	/* AUDIO TESTS */
	
	/* Audio tag test */
	try {
		let audio_test = !(document.createElement("audio") instanceof HTMLUnknownElement);
		if (audio_test === true) {
			let sample_audio = document.createElement("audio");
			let codec_detect_test = "canPlayType" in sample_audio;
			if (codec_detect_test) {
				document.getElementById("audiotest").textContent = "PASS";
			}
			else {
				document.getElementById("audiotest").textContent = "FAIL";
				console.log("<audio>: Your browser does not support codec detection.");
			}
		}
		else {
			document.getElementById("audiotest").textContent = "FAIL";
			console.log("<audio>: Your browser does not support the \"audio\" tag.");
		}
	}
	catch (error) {
		document.getElementById("audiotest").textContent = "FAIL";
	}
	
	/* Loop audio test */
	try {
		var sample_audio = document.createElement("audio");
		let loop_audio_test = "loop" in sample_audio;
		document.getElementById("loopaudiotest").textContent = loop_audio_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("loopaudiotest").textContent = "FAIL";
	}
	
	/* Background preload test */
	try {
		var sample_audio = document.createElement("audio");
		let background_preload_test = "preload" in sample_audio;
		document.getElementById("bgpreloadtest").textContent = background_preload_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("bgpreloadtest").textContent = "FAIL";
	}
	
	/* Web Audio API test */
	try {
		if (window.AudioContext) {
			let sample_audiocontext = new AudioContext();
			var tests_passed = 0;
			let lh_test = "latencyHint" in sample_audiocontext;
			if (lh_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the latencyHint option."); }
			let sr_test = "sampleRate" in sample_audiocontext;
			if (sr_test) { tests_passed++; }
			let bl_test = "baseLatency" in sample_audiocontext;
			if (bl_test) { tests_passed++; }
			let cmes_test = typeof sample_audiocontext.createMediaElementSource === "function";
			if (cmes_test) { tests_passed++; }
			let cmsd_test = typeof sample_audiocontext.createMediaStreamDestination === "function";
			if (cmsd_test) { tests_passed++; }
			let cmss_test = typeof sample_audiocontext.createMediaStreamSource === "function";
			if (cmss_test) { tests_passed++; }
			let cmsts_test = typeof sample_audiocontext.createMediaStreamTrackSource === "function";
			if (cmsts_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the createMediaStreamTrackSource method."); }
			let getot_test = typeof sample_audiocontext.gotOutputTimestamp === "function";
			if (getot_test) { tests_passed++; }
			let output_latency_test = "outputLatency" in sample_audiocontext;
			if (output_latency_test) { tests_passed++; }
			let resume_test = typeof sample_audiocontext.resume === "function";
			if (resume_test) { tests_passed++; }
			let suspend_test = typeof sample_audiocontext.suspend === "function";
			if (suspend_test) { tests_passed++; }
			let close_func_test = typeof sample_audiocontext.close === "function";
			if (close_func_test) {
				tests_passed++;
				sample_audiocontext.close();
			}
			document.getElementById("webaudiotest").textContent = (tests_passed === 11) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("webaudiotest").textContent = "FAIL";
			console.log("Web Audio API test: Your browser does not support the Web Audio API.");
		}
	}
	catch (error) {
		document.getElementById("webaudiotest").textContent = "FAIL";
	}
	
	/* Speech Synthesis test */
	try {
		if (window.speechSynthesis) {
			document.getElementById("speechsynthtest").textContent = "PASS";
		}
		else {
			document.getElementById("speechsynthtest").textContent = "FAIL";
			console.log("Speech Synthesis test: Your browser does not support speech synthesis.");
		}
	}
	catch (error) {
		document.getElementById("speechsynthtest").textContent = "FAIL";
	}
	
	/* AAC-LC in ADTS test */
	try {
		var sample_audio = document.createElement("audio");
		let aaclc_adts_test = sample_audio.canPlayType("audio/aac; codecs=mp4a.40.02");
		if (aaclc_adts_test === "probably" || aaclc_adts_test === "maybe") {
			document.getElementById("aaclcadtstest").textContent = "PASS";
		}
		else {
			document.getElementById("aaclcadtstest").textContent = "FAIL";
			console.log("AAC-LC in ADTS: Your browser does not support AAC-LC in ADTS containers.");
		}
	}
	catch (error) {
		document.getElementById("aaclcadtstest").textContent = "FAIL";
	}
	
	/* Au test */
	try {
		var sample_audio = document.createElement("audio");
		let au_test = sample_audio.canPlayType("audio/basic");
		if (au_test === "probably" || au_test === "maybe") {
			document.getElementById("autest").textContent = "PASS";
		}
		else {
			document.getElementById("autest").textContent = "FAIL";
			console.log("Au: Your browser does not support the Au file format.");
		}
	}
	catch (error) {
		document.getElementById("autest").textContent = "FAIL";
	}
	
	/* CAF test */
	try {
		var sample_audio = document.createElement("audio");
		let opus_caf_test = sample_audio.canPlayType("audio/x-caf; codecs:opus");
		if (opus_caf_test === "probably" || opus_caf_test === "maybe") {
			document.getElementById("xcaftest").textContent = "PASS";
		}
		else {
			document.getElementById("xcaftest").textContent = "FAIL";
			console.log("CAF: Your browser does not support the X-CAF mime type.");
		}
	}
	catch (error) {
		document.getElementById("xcaftest").textContent = "FAIL";
	}
	
	/* Dolby Digital test */
	try {
		var sample_audio = document.createElement("audio");
		let ac3_test = sample_audio.canPlayType("audio/ac3; codecs:'ac3'");
		if (ac3_test === "probably" || ac3_test === "maybe") {
			document.getElementById("ac3test").textContent = "PASS";
		}
		else {
			document.getElementById("ac3test").textContent = "FAIL";
			console.log("Dolby Digital: Your browser does not support Dolby Digital AC-3.");
		}
	}
	catch (error) {
		document.getElementById("ac3test").textContent = "FAIL";
	}
	
	/* Dolby Digital Plus test */
	try {
		var sample_audio = document.createElement("audio");
		let eac3_test = sample_audio.canPlayType("audio/eac3; codecs:'eac3'");
		if (eac3_test === "probably" || eac3_test === "maybe") {
			document.getElementById("eac3test").textContent = "PASS";
		}
		else {
			document.getElementById("eac3test").textContent = "FAIL";
			console.log("Dolby Digital Plus: Your browser does not support Dolby Digital Plus E-AC-3.");
		}
	}
	catch (error) {
		document.getElementById("eac3test").textContent = "FAIL";
	}
	
	/* FLAC test */
	try {
		var sample_audio = document.createElement("audio");
		let flac_test = sample_audio.canPlayType("audio/flac");
		if (flac_test === "probably" || flac_test === "maybe") {
			document.getElementById("flactest").textContent = "PASS";
		}
		else {
			document.getElementById("flactest").textContent = "FAIL";
			console.log("FLAC: Your browser does not support FLAC.");
		}
	}
	catch (error) {
		document.getElementById("flactest").textContent = "FAIL";
	}
	
	/* FLAC in Ogg test */
	/*try {
		var sample_audio = document.createElement("audio");
		let flac_ogg_test = sample_audio.canPlayType("audio/ogg; codecs:flac");
		if (flac_ogg_test === "probably" || flac_ogg_test === "maybe") {
			document.getElementById("flacoggtest").textContent = "PASS";
		}
		else {
			document.getElementById("flacoggtest").textContent = "FAIL";
			console.log("FLAC in Ogg: Your browser does not support FLAC in Ogg containers.");
		}
	}
	catch (error) {
		document.getElementById("flacoggtest").textContent = "FAIL";
	}*/
	
	/* M4A test */
	try {
		var sample_audio = document.createElement("audio");
		let aaclc_mp4_test = sample_audio.canPlayType("audio/mp4; codecs=mp4a.40.02");
		if (aaclc_mp4_test === "probably" || aaclc_mp4_test === "maybe") {
			document.getElementById("m4atest").textContent = "PASS";
		}
		else {
			document.getElementById("m4atest").textContent = "FAIL";
			console.log("M4A: Your browser does not support the MP4 audio mimetype.");
		}
	}
	catch (error) {
		document.getElementById("m4atest").textContent = "FAIL";
	}
	
	/* MP3 test */
	try {
		var sample_audio = document.createElement("audio");
		let mp3_test = sample_audio.canPlayType("audio/mpeg");
		if (mp3_test === "probably" || mp3_test === "maybe") {
			document.getElementById("mp3test").textContent = "PASS";
		}
		else {
			document.getElementById("mp3test").textContent = "FAIL";
			console.log("MP3: Your browser does not support MP3.");
		}
	}
	catch (error) {
		document.getElementById("mp3test").textContent = "FAIL";
	}
	
	/* Ogg Audio test */
	try {
		var sample_audio = document.createElement("audio");
		let ogg_vorbis_test = sample_audio.canPlayType("audio/ogg; codecs:vorbis");
		if (ogg_vorbis_test === "probably" || ogg_vorbis_test === "maybe") {
			document.getElementById("oggaudiotest").textContent = "PASS";
		}
		else {
			document.getElementById("oggaudiotest").textContent = "FAIL";
			console.log("Ogg Audio: Your browser does not support the Ogg audio media type.");
		}
	}
	catch (error) {
		document.getElementById("oggaudiotest").textContent = "FAIL";
	}
	
	/* Vorbis in WebM test */
	/*try {
		var sample_audio = document.createElement("audio");
		let vorbis_webm_test = sample_audio.canPlayType("audio/webm; codecs:vorbis");
		if (vorbis_webm_test === "probably" || vorbis_webm_test === "maybe") {
			document.getElementById("vorbiswebmtest").textContent = "PASS";
		}
		else {
			document.getElementById("vorbiswebmtest").textContent = "FAIL";
			console.log("Vorbis in WebM: Your browser does not support Vorbis in WebM containers.");
		}
	}
	catch (error) {
		document.getElementById("vorbiswebmtest").textContent = "FAIL";
	}*/
	
	/* Opus in Ogg test */
	/*try {
		var sample_audio = document.createElement("audio");
		let opus_ogg_test = sample_audio.canPlayType("audio/ogg; codecs:opus");
		if (opus_ogg_test === "probably" || opus_ogg_test === "maybe") {
			document.getElementById("opustest").textContent = "PASS";
		}
		else {
			document.getElementById("opustest").textContent = "FAIL";
			console.log("Opus in Ogg: Your browser does not support Opus in Ogg containers.");
		}
	}
	catch (error) {
		document.getElementById("opustest").textContent = "FAIL";
	}*/
	
	/* WAVE test */
	try {
		var sample_audio = document.createElement("audio");
		let wave_test = sample_audio.canPlayType("audio/wav");
		if (wave_test === "probably" || wave_test === "maybe") {
			document.getElementById("wavetest").textContent = "PASS";
		}
		else {
			document.getElementById("wavetest").textContent = "FAIL";
			console.log("WAVE: Your browser does not support the Waveform Audio File Format.");
		}
	}
	catch (error) {
		document.getElementById("wavetest").textContent = "FAIL";
	}
	
	/* WebM Audio test */
	try {
		var sample_audio = document.createElement("audio");
		let opus_webm_test = sample_audio.canPlayType("audio/webm; codecs:opus");
		if (opus_webm_test === "probably" || opus_webm_test === "maybe") {
			document.getElementById("webmaudiotest").textContent = "PASS";
		}
		else {
			document.getElementById("webmaudiotest").textContent = "FAIL";
			console.log("WebM Audio: Your browser does not support the WebM audio mime type.");
		}
	}
	catch (error) {
		document.getElementById("webmaudiotest").textContent = "FAIL";
	}
	
	/* VIDEO TESTS */
	
	/* Video tag test */
	try {
		let video_test = !(document.createElement("video") instanceof HTMLUnknownElement);
		document.getElementById("videotest").textContent = video_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("videotest").textContent = "FAIL";
	}
	
	/* Track tag test */
	try {
		let track_test = !(document.createElement("video") instanceof HTMLUnknownElement);
		if (track_test === true) {
			let sample_track = document.createElement("track");
			let kind_test = "kind" in sample_track;
			document.getElementById("tracktest").textContent = kind_test ? "PASS" : "FAIL";
			if (kind_test === false) { console.log("<track>: Your browser does not the \"kind\" attribute."); }
		}
		else {
			document.getElementById("tracktest").textContent = "FAIL";
			console.log("<track>: Your browser does not support the \"track\" element.");
		}
	}
	catch (error) {
		document.getElementById("tracktest").textContent = "FAIL";
	}
	
	/* Poster images test */
	try {
		var sample_video = document.createElement("video");
		let poster_test = "poster" in sample_video;
		if (poster_test === true) {
			document.getElementById("posterimagetest").textContent = "PASS";
		}
		else {
			document.getElementById("posterimagestest").textContent = "FAIL";
			console.log("Poster images test: Your browser does not support the \"poster\" attribute in the \"video\" element.");
		}
	}
	catch (error) {
		document.getElementById("posterimagestest").textContent = "FAIL";
	}
	
	/* MP4 test */
	try {
		var sample_video = document.createElement("video");
		let av1_mp4_test = sample_video.canPlayType("video/mp4; codecs:'av01.0.05H.10, opus'");
		if (av1_mp4_test === "probably" || av1_mp4_test === "maybe") {
			document.getElementById("mp4test").textContent = "PASS";
		}
		else {
			document.getElementById("mp4test").textContent = "FAIL";
			console.log("MP4: Your browser does not support the MP4 video mime type.");
		}
	}
	catch (error) {
		document.getElementById("mp4test").textContent = "FAIL";
	}
	
	/* AV1 in WebM test */
	/*try {
		var sample_video = document.createElement("video");
		let av1_webm_test = sample_video.canPlayType("video/webm; codecs:'av01.0.05H.10, opus'");
		if (av1_webm_test === "probably" || av1_webm_test === "maybe") {
			document.getElementById("av1webmtest").textContent = "PASS";
		}
		else {
			document.getElementById("av1webmtest").textContent = "FAIL";
			console.log("AV1 in WebM: Your browser does not support AV1 in WebM containers. Please note your browser must also support Opus to pass this test.");
		}
	}
	catch (error) {
		document.getElementById("av1webmtest").textContent = "FAIL";
	}*/
	
	/* H.264 High Profile in MP4 test */
	/*try {
		var sample_video = document.createElement("video");
		let h264_mp4_test = sample_video.canPlayType("video/mp4; codecs:'avc1.640028, mp4a.40.2'");
		if (h264_mp4_test === "probably" || h264_mp4_test === "maybe") {
			document.getElementById("h264mp4test").textContent = "PASS";
		}
		else {
			document.getElementById("h264mp4test").textContent = "FAIL";
			console.log("H.264 High Profile in MP4: Your browser does not support H.264 High Profile in MP4 containers. Please note your browser must also support AAC-LC to pass this test.");
		}
	}
	catch (error) {
		document.getElementById("h264mp4test").textContent = "FAIL";
	}*/
	
	/* MPEG Transport Stream test */
	try {
		var sample_video = document.createElement("video");
		let h264_ts_test = sample_video.canPlayType("video/mp2t; codecs:'avc1.640028, mp4a.40.2'");
		if (h264_ts_test === "probably" || h264_ts_test === "maybe") {
			document.getElementById("tstest").textContent = "PASS";
		}
		else {
			document.getElementById("tstest").textContent = "FAIL";
			console.log("MPEG Transport Stream: Your browser does not support the MP2T mime type.");
		}
	}
	catch (error) {
		document.getElementById("tstest").textContent = "FAIL";
	}
	
	/* H.264 High Profile with AC-3 and E-AC-3 test */
	/*try {
		var sample_video = document.createElement("video");
		var tests_passed = 0;
		let h264_mp4dd_test = sample_video.canPlayType("video/mp4; codecs:'avc1.640028, ac3'");
		if (h264_mp4dd_test === "probably" || h264_mp4dd_test === "maybe") { tests_passed++; }
		else {
			console.log("H.264 High Profile with Dolby Digital and Dolby Digital Plus: Your browser does not support H.264 High Profile paired with Dolby Digital in MP4 containers.");
		}
		let h264_mp4ddp_test = sample_video.canPlayType("video/mp4; codecs:'avc1.640028, eac3'");
		if (h264_mp4ddp_test === "probably" || h264_mp4ddp_test === "maybe") { tests_passed++; }
		else {
			console.log("H.264 High Profile with Dolby Digital and Dolby Digital Plus: Your browser does not support H.264 High Profile paired with Dolby Digital Plus in MP4 containers.");
		}
		let h264_tsdd_test = sample_video.canPlayType("video/mp2t; codecs:'avc1.640028, ac3'");
		if (h264_tsdd_test === "probably" || h264_tsdd_test === "maybe") { tests_passed++; }
		else {
			console.log("H.264 High Profile with Dolby Digital and Dolby Digital Plus: Your browser does not support H.264 High Profile paired with Dolby Digital in MPEG Transport Streams.");
		}
		let h264_tsddp_test = sample_video.canPlayType("video/mp2t; codecs:'avc1.640028, eac3'");
		if (h264_tsddp_test === "probably" || h264_tsddp_test === "maybe") { tests_passed++; }
		else {
			console.log("H.264 High Profile with Dolby Digital and Dolby Digital Plus: Your browser does not support H.264 High Profile paired with Dolby Digital Plus in MPEG Transport Streams.");
		}
		if (tests_passed > 0) {
			document.getElementById("h264ac3test").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
		}
		else { document.getElementById("h264ac3test").textContent = "FAIL"; }
	}
	catch (error) {
		document.getElementById("h264ac3test").textContent = "FAIL";
	}*/
	
	/* Ogg video test */
	try {
		var sample_video = document.createElement("video");
		let ogg_theora_test = sample_video.canPlayType("video/ogg; codecs:'theora, vorbis'");
		if (ogg_theora_test === "probably" || ogg_theora_test === "maybe") {
			document.getElementById("oggvideotest").textContent = "PASS";
		}
		else {
			document.getElementById("oggvideotest").textContent = "FAIL";
			console.log("Ogg video: Your browser does not support The Ogg audio mime type.");
		}
	}
	catch (error) {
		document.getElementById("oggvideotest").textContent = "FAIL";
	}
	
	/* VP8 test */
	/*try {
		var sample_video = document.createElement("video");
		let vp8_test = sample_video.canPlayType("video/webm; codecs:'vp8, vorbis'");
		if (vp8_test === "probably" || vp8_test === "maybe") {
			document.getElementById("vp8test").textContent = "PASS";
		}
		else {
			document.getElementById("vp8test").textContent = "FAIL";
			console.log("VP8: Your browser does not support VP8 in WebM containers. Please note your browser must also support Vorbis to pass this test.");
		}
	}
	catch (error) {
		document.getElementById("vp8test").textContent = "FAIL";
	}*/
	
	/* WebM video test */
	try {
		var sample_video = document.createElement("video");
		let vp9_test = sample_video.canPlayType("video/webm; codecs:'vp9, opus'");
		if (vp9_test === "probably" || vp9_test === "maybe") {
			document.getElementById("webmvideotest").textContent = "PASS";
		}
		else {
			document.getElementById("webmvideotest").textContent = "FAIL";
			console.log("WebM video: Your browser does not support the WebM video mime type.");
		}
	}
	catch (error) {
		document.getElementById("webmvideotest").textContent = "FAIL";
	}
	
	/* STREAMING TESTS */
	
	/* Media Source Extensions test */
	try {
		let mse_test = !!window.MediaSource && !!window.SourceBuffer && !!window.MediaSource.isTypeSupported;
		if (mse_test === true) {
			document.getElementById("msetest").textContent = "PASS";
		}
		else {
			document.getElementById("msetest").textContent = "FAIL";
			console.log("Media Source Extensions test: Your browser does not support Media Source Extensions.");
		}
	}
	catch (error) {
		document.getElementById("msetest").textContent = "FAIL";
	}
	
	/* HTTP live streaming test */
	try {
		var sample_video = document.createElement("video");
		let hls_test = sample_video.canPlayType("application/vnd.apple.mpegurl") || sample_video.canPlayType("application/x-mpegURL");
		if (hls_test === true) {
			document.getElementById("hlstest").textContent = "PASS";
		}
		else {
			document.getElementById("hlstest").textContent = "FAIL";
			console.log("HTTP live streaming test: Your browser does not support HLS natively. It can still be used via a JavaScript library, so it doesn't matter as much.");
		}
	}
	catch (error) {
		document.getElementById("hlstest").textContent = "FAIL";
	}
	
	/* RESPONSIVE IMAGES TESTS */
	
	/* Picture tag test */
	try {
		let picture_test = !(document.createElement("picture") instanceof HTMLUnknownElement);
		document.getElementById("picturetest").textContent = picture_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("picturetest").textContent = "FAIL";
	}
	
	/* Sizes attribute test */
	try {
		var sample_source = document.createElement("source");
		let sizes_test = "sizes" in sample_source;
		if (sizes_test === true) {
			document.getElementById("sizestest").textContent = "PASS";
		}
		else {
			document.getElementById("sizestest").textContent = "FAIL";
			console.log("\"sizes\" attribute: Your browser does not support the \"sizes\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("sizestest").textContent = "FAIL";
	}
	
	/* Srcset attribute test */
	try {
		var sample_source = document.createElement("source");
		let srcset_test = "srcset" in sample_source;
		if (srcset_test === true) {
			document.getElementById("srcsettest").textContent = "PASS";
		}
		else {
			document.getElementById("srcsettest").textContent = "FAIL";
			console.log("\"srcset\" attribute: Your browser does not support the \"srcset\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("srcsettest").textContent = "FAIL";
	}
	
	/* RASTER IMAGE FORMATS TESTS */
	
	/* APNG test */
	try {
		var sample_apng = new Image();
		sample_apng.src = "test_files/spinfox.apng";
		sample_apng.style.display = "none";
		document.body.appendChild(sample_apng);
		sample_apng.onload = () => {
			let apng_test = sample_apng.width > 0 && sample_apng.height > 0 
			&& sample_apng.src.includes("test_files/spinfox.apng");
			document.getElementById("apngtest").textContent = apng_test ? "PASS" : "FAIL";
			if (!apng_test) {
				console.log("APNG: Your browser does not support Animated PNGs.");
			}
			document.body.removeChild(sample_apng);
		};
		sample_apng.onerror = () => {
			document.getElementById("apngtest").textContent = "FAIL";
			console.log("APNG: Your browser does not support Animated PNGs.");
			document.body.removeChild(sample_apng);
		};
	}
	catch (error) {
		document.getElementById("apngtest").textContent = "FAIL";
	}
	
	/* AVIF test */
	try {
		var sample_avif = new Image();
		sample_avif.src = "test_files/my_avif.avif";
		sample_avif.style.display = "none";
		document.body.appendChild(sample_avif);
		sample_avif.onload = () => {
			let avif_test = sample_avif.width > 0 && sample_avif.height > 0 
			&& sample_avif.src.includes("test_files/my_avif.avif");
			document.getElementById("aviftest").textContent = avif_test ? "PASS" : "FAIL";
			if (!avif_test) {
				console.log("AVIF: Your browser does not support AVIF.");
			}
			document.body.removeChild(sample_avif);
		};
		sample_avif.onerror = () => {
			document.getElementById("aviftest").textContent = "FAIL";
			console.log("AVIF: Your browser does not support AVIF.");
			document.body.removeChild(sample_avif);
		};
	}
	catch (error) {
		document.getElementById("aviftest").textContent = "FAIL";
	}
	
	/* GIF test */
	try {
		var sample_gif = new Image();
		sample_gif.src = "test_files/Rotating_earth.gif";
		sample_gif.style.display = "none";
		document.body.appendChild(sample_gif);
		sample_gif.onload = () => {
			let gif_test = sample_gif.width > 0 && sample_gif.height > 0 
			&& sample_gif.src.includes("test_files/Rotating_earth.gif");
			document.getElementById("giftest").textContent = gif_test ? "PASS" : "FAIL";
			if (!gif_test) {
				console.log("GIF: Your browser does not support GIF.");
			}
			document.body.removeChild(sample_gif);
		};
		sample_gif.onerror = () => {
			document.getElementById("giftest").textContent = "FAIL";
			console.log("GIF: Your browser does not support GIF.");
			document.body.removeChild(sample_gif);
		};
	}
	catch (error) {
		document.getElementById("giftest").textContent = "FAIL";
	}
	
	/* ICO and CUR test */
	try {
		var sample_ico = new Image();
		sample_ico.src = "test_files/my_ico.ico";
		sample_ico.style.display = "none";
		document.body.appendChild(sample_ico);
		sample_ico.onload = () => {
			let ico_test = sample_ico.width > 0 && sample_ico.height > 0 
			&& sample_ico.src.includes("test_files/my_ico.ico");
			document.getElementById("icotest").textContent = ico_test ? "PASS" : "FAIL";
			if (!ico_test) {
				console.log("ICO & CUR: Your browser does not support ICO. It wouldn't support CUR either.");
			}
			document.body.removeChild(sample_ico);
		};
		sample_ico.onerror = () => {
			document.getElementById("icotest").textContent = "FAIL";
			console.log("ICO & CUR: Your browser does not support ICO. It wouldn't support CUR either.");
			document.body.removeChild(sample_ico);
		};
	}
	catch (error) {
		document.getElementById("icotest").textContent = "FAIL";
	}
	
	/* JPEG test */
	try {
		var sample_jpeg = new Image();
		sample_jpeg.src = "test_files/my_jpeg.jpg";
		sample_jpeg.style.display = "none";
		document.body.appendChild(sample_jpeg);
		sample_jpeg.onload = () => {
			let jpeg_test = sample_jpeg.width > 0 && sample_jpeg.height > 0 
			&& sample_jpeg.src.includes("test_files/my_jpeg.jpg");
			document.getElementById("jpegtest").textContent = jpeg_test ? "PASS" : "FAIL";
			if (!jpeg_test) {
				console.log("JPEG: Your browser does not support JPEG.");
			}
			document.body.removeChild(sample_jpeg);
		};
		sample_jpeg.onerror = () => {
			document.getElementById("jpegtest").textContent = "FAIL";
			console.log("JPEG: Your browser does not support JPEG.");
			document.body.removeChild(sample_jpeg);
		};
	}
	catch (error) {
		document.getElementById("jpegtest").textContent = "FAIL";
	}
	
	/* JPEG-XL test */
	try {
		var sample_jpegxl = new Image();
		sample_jpegxl.src = "test_files/my_jxl.jxl";
		sample_jpegxl.style.display = "none";
		document.body.appendChild(sample_jpegxl);
		sample_jpegxl.onload = () => {
			let jpegxl_test = sample_jpegxl.width > 0 && sample_jpegxl.height > 0 
			&& sample_jpegxl.src.includes("test_files/my_jxl.jxl");
			document.getElementById("jpegxltest").textContent = jpegxl_test ? "PASS" : "FAIL";
			if (!jpegxl_test) {
				console.log("JPEG-XL: Your browser does not support JPEG-XL.");
			}
			document.body.removeChild(sample_jpegxl);
		};
		sample_jpegxl.onerror = () => {
			document.getElementById("jpegxltest").textContent = "FAIL";
			console.log("JPEG-XL: Your browser does not support JPEG-XL.");
			document.body.removeChild(sample_jpegxl);
		};
	}
	catch (error) {
		document.getElementById("jpegxltest").textContent = "FAIL";
	}
	
	/* PNG test */
	try {
		var sample_png = new Image();
		sample_png.src = "test_files/pnglogo.png";
		sample_png.style.display = "none";
		document.body.appendChild(sample_png);
		sample_png.onload = () => {
			let png_test = sample_png.width > 0 && sample_png.height > 0 
			&& sample_png.src.includes("test_files/pnglogo.png");
			document.getElementById("pngtest").textContent = png_test ? "PASS" : "FAIL";
			if (!png_test) {
				console.log("PNG: Your browser does not support PNG.");
			}
			document.body.removeChild(sample_png);
		};
		sample_png.onerror = () => {
			document.getElementById("pngtest").textContent = "FAIL";
			console.log("PNG: Your browser does not support PNG.");
			document.body.removeChild(sample_png);
		};
	}
	catch (error) {
		document.getElementById("pngtest").textContent = "FAIL";
	}
	
	/* TIFF test */
	try {
		var sample_tiff = new Image();
		sample_tiff.src = "test_files/my_tiff.tiff";
		sample_tiff.style.display = "none";
		document.body.appendChild(sample_tiff);
		sample_tiff.onload = () => {
			let tiff_test = sample_tiff.width > 0 && sample_tiff.height > 0 
			&& sample_tiff.src.includes("test_files/my_tiff.tiff");
			document.getElementById("tifftest").textContent = tiff_test ? "PASS" : "FAIL";
			if (!tiff_test) {
				console.log("TIFF: Your browser does not support TIFF.");
			}
			document.body.removeChild(sample_tiff);
		};
		sample_tiff.onerror = () => {
			document.getElementById("tifftest").textContent = "FAIL";
			console.log("TIFF: Your browser does not support TIFF.");
			document.body.removeChild(sample_tiff);
		};
	}
	catch (error) {
		document.getElementById("tifftest").textContent = "FAIL";
	}
	
	/* WebP test */
	try {
		var sample_webp = new Image();
		sample_webp.src = "test_files/my_webp.webp";
		sample_webp.style.display = "none";
		document.body.appendChild(sample_webp);
		sample_webp.onload = () => {
			let webp_test = sample_webp.width > 0 && sample_webp.height > 0 
			&& sample_webp.src.includes("test_files/my_webp.webp");
			document.getElementById("webptest").textContent = webp_test ? "PASS" : "FAIL";
			if (!webp_test) {
				console.log("WebP: Your browser does not support WebP.");
			}
			document.body.removeChild(sample_webp);
		};
		sample_webp.onerror = () => {
			document.getElementById("webptest").textContent = "FAIL";
			console.log("WebP: Your browser does not support WebP.");
			document.body.removeChild(sample_webp);
		};
	}
	catch (error) {
		document.getElementById("webptest").textContent = "FAIL";
	}
	
	/* Windows Bitmap test */
	try {
		var sample_bmp = new Image();
		sample_bmp.src = "test_files/windowslogo.bmp";
		sample_bmp.style.display = "none";
		document.body.appendChild(sample_bmp);
		sample_bmp.onload = () => {
			let bmp_test = sample_bmp.width > 0 && sample_bmp.height > 0 
			&& sample_bmp.src.includes("test_files/windowslogo.bmp");
			document.getElementById("windowsbmptest").textContent = bmp_test ? "PASS" : "FAIL";
			if (!bmp_test) {
				console.log("Windows Bitmap: Your browser does not support Windows Bitmap images.");
			}
			document.body.removeChild(sample_bmp);
		};
		sample_bmp.onerror = () => {
			document.getElementById("windowsbmptest").textContent = "FAIL";
			console.log("Windows Bitmap: Your browser does not support Windows Bitmap images.");
			document.body.removeChild(sample_bmp);
		};
	}
	catch (error) {
		document.getElementById("windowsbmptest").textContent = "FAIL";
	}
};