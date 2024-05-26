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
				var gamepads = navigator.getGamepads();
				if (gamepads.length > 0 && gamepads[0] !== null) {
					var sample_gamepad = gamepads[0];
					var tests_passed = 0;
					let axes_test = "axes" in sample_gamepad;
					if (axes_test) { tests_passed++; }
					let buttons_test = "buttons" in sample_gamepad;
					if (buttons_test) { tests_passed++; }
					let connected_test = "connected" in sample_gamepad;
					if (connected_test) { tests_passed++; }
					let haptic_actuators_test = "hapticActuators" in sample_gamepad;
					if (haptic_actuators_test) { tests_passed++; }
					else { console.log("Gamepaad test: Your browser does not support the \"hapticActuators\" property."); }
					let id_test = "id" in sample_gamepad;
					if (id_test) { tests_passed++; }
					let index_test = "index" in sample_gamepad;
					if (index_test) { tests_passed++; }
					let mapping_test = "mapping" in sample_gamepad;
					if (mapping_test) { tests_passed++; }
					let timestamp_test = "timestamp" in sample_gamepad;
					if (timestamp_test) { tests_passed++; }
					document.getElementById("gamepadtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
				}
				else {
					document.getElementById("gamepadtest").textContent = "NOT CONNECTED";
					console.log("Gamepad test: Your device does not have a gamepad connected to it. Your browser does support the Gamepad API on its own, though.");
				}
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
};