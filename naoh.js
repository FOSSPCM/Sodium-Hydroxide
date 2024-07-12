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
		if (is_HTML5_mode === true) {
			document.getElementById("doctypetest").textContent = "PASS";
		}
		else {
			document.getElementById("doctypetest").textContent = "FAIL";
			console.log("<!DOCTYPE> triggers standards mode: Your browser did not enter HTML5 standards mode.");
		}
	}
	catch (error) {
		document.getElementById("doctypetest").textContent = "FAIL";
		console.log("<!DOCTYPE> triggers standards mode: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* HTML Tokenizer test */
	var validhtml5 = '<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Test</title></head><body><h1>Hello, world!</h1></body></html>';
	try {
		let tokenizer_test = document.createElement("div");
		tokenizer_test.innerHTML = validhtml5;
		document.getElementById("tokentest").textContent = (tokenizer_test.childNodes.length > 0) ? "PASS" : "FAIL";
		if (tokenizer_test <= 0) { console.log("HTML Tokenizer test: Your browser did not tokenize correctly."); }
	}
	catch (error) {
		document.getElementById("tokentest").textContent = "FAIL";
		console.log("HTML Tokenizer test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* HTML Tree building test */
	let tree_test_element = document.getElementById("treetest");
	if (tree_test_element) {
		try {
			let tree_building_works = document.createElement("div") instanceof HTMLDivElement;
			tree_test_element.textContent = tree_building_works ? "PASS" : "FAIL";
			if (tree_building_works === false) { console.log("HTML Tree building test: Your browser does not support HTML Tree building."); }
		}
		catch (error) {
			tree_test_element.textContent = "FAIL";
			console.log("HTML Tree building test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
		}
	}
	
	/* Inline SVG test */
	try {
		let svg_works = !!document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
		document.getElementById("insvgtest").textContent = svg_works ? "PASS" : "FAIL";
		if (svg_works === false) { console.log("Inline SVG: Your browser does not support inline SVG."); }
	}
	catch (error) {
		document.getElementById("insvgtest").textContent = "FAIL";
		console.log("Inline SVG: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Inline MathML test */
	try {
		let mathml_works = !!document.createElement("math") && !! document.createElement("math").style && "textContent" in document.createElement("math");
		document.getElementById("inmathmltest").textContent = mathml_works ? "PASS" : "FAIL";
		if (mathml_works === false) { console.log("Inline MathML: Your browser does not support MathML."); }
	}
	catch (error) {
		document.getElementById("inmathmltest").textContent = "FAIL";
		console.log("Inline MathML: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
					function() {
						document.getElementById("geolocationtest").textContent = "PASS";
					},
					function(error) {
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
				Notification.requestPermission().then(function(permission) {
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
	
	/* AUDIO */
	
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
	
	/* VIDEO */
	
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
	
	/* STREAMING */
	
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
	
	/* RESPONSIVE IMAGES */
	
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
	
	/* RASTER IMAGE FORMATS */
	
	/* APNG test */
	try {
		var sample_apng = new Image();
		sample_apng.src = "test_files/spinfox.apng";
		sample_apng.style.display = "none";
		document.body.appendChild(sample_apng);
		sample_apng.onload = function() {
			let apng_test = sample_apng.width > 0 && sample_apng.height > 0 
			&& sample_apng.src.includes("test_files/spinfox.apng");
			document.getElementById("apngtest").textContent = apng_test ? "PASS" : "FAIL";
			if (!apng_test) {
				console.log("APNG: Your browser does not support Animated PNGs.");
			}
			document.body.removeChild(sample_apng);
		};
		sample_apng.onerror = function() {
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
		sample_avif.onload = function() {
			let avif_test = sample_avif.width > 0 && sample_avif.height > 0 
			&& sample_avif.src.includes("test_files/my_avif.avif");
			document.getElementById("aviftest").textContent = avif_test ? "PASS" : "FAIL";
			if (!avif_test) {
				console.log("AVIF: Your browser does not support AVIF.");
			}
			document.body.removeChild(sample_avif);
		};
		sample_avif.onerror = function() {
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
		sample_gif.onload = function() {
			let gif_test = sample_gif.width > 0 && sample_gif.height > 0 
			&& sample_gif.src.includes("test_files/Rotating_earth.gif");
			document.getElementById("giftest").textContent = gif_test ? "PASS" : "FAIL";
			if (!gif_test) {
				console.log("GIF: Your browser does not support GIF.");
			}
			document.body.removeChild(sample_gif);
		};
		sample_gif.onerror = function() {
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
		sample_ico.onload = function() {
			let ico_test = sample_ico.width > 0 && sample_ico.height > 0 
			&& sample_ico.src.includes("test_files/my_ico.ico");
			document.getElementById("icotest").textContent = ico_test ? "PASS" : "FAIL";
			if (!ico_test) {
				console.log("ICO & CUR: Your browser does not support ICO. It wouldn't support CUR either.");
			}
			document.body.removeChild(sample_ico);
		};
		sample_ico.onerror = function() {
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
		sample_jpeg.onload = function() {
			let jpeg_test = sample_jpeg.width > 0 && sample_jpeg.height > 0 
			&& sample_jpeg.src.includes("test_files/my_jpeg.jpg");
			document.getElementById("jpegtest").textContent = jpeg_test ? "PASS" : "FAIL";
			if (!jpeg_test) {
				console.log("JPEG: Your browser does not support JPEG.");
			}
			document.body.removeChild(sample_jpeg);
		};
		sample_jpeg.onerror = function() {
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
		sample_jpegxl.onload = function() {
			let jpegxl_test = sample_jpegxl.width > 0 && sample_jpegxl.height > 0 
			&& sample_jpegxl.src.includes("test_files/my_jxl.jxl");
			document.getElementById("jpegxltest").textContent = jpegxl_test ? "PASS" : "FAIL";
			if (!jpegxl_test) {
				console.log("JPEG-XL: Your browser does not support JPEG-XL.");
			}
			document.body.removeChild(sample_jpegxl);
		};
		sample_jpegxl.onerror = function() {
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
		sample_png.onload = function() {
			let png_test = sample_png.width > 0 && sample_png.height > 0 
			&& sample_png.src.includes("test_files/pnglogo.png");
			document.getElementById("pngtest").textContent = png_test ? "PASS" : "FAIL";
			if (!png_test) {
				console.log("PNG: Your browser does not support PNG.");
			}
			document.body.removeChild(sample_png);
		};
		sample_png.onerror = function() {
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
		sample_tiff.onload = function() {
			let tiff_test = sample_tiff.width > 0 && sample_tiff.height > 0 
			&& sample_tiff.src.includes("test_files/my_tiff.tiff");
			document.getElementById("tifftest").textContent = tiff_test ? "PASS" : "FAIL";
			if (!tiff_test) {
				console.log("TIFF: Your browser does not support TIFF.");
			}
			document.body.removeChild(sample_tiff);
		};
		sample_tiff.onerror = function() {
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
		sample_webp.onload = function() {
			let webp_test = sample_webp.width > 0 && sample_webp.height > 0 
			&& sample_webp.src.includes("test_files/my_webp.webp");
			document.getElementById("webptest").textContent = webp_test ? "PASS" : "FAIL";
			if (!webp_test) {
				console.log("WebP: Your browser does not support WebP.");
			}
			document.body.removeChild(sample_webp);
		};
		sample_webp.onerror = function() {
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
		sample_bmp.onload = function() {
			let bmp_test = sample_bmp.width > 0 && sample_bmp.height > 0 
			&& sample_bmp.src.includes("test_files/windowslogo.bmp");
			document.getElementById("windowsbmptest").textContent = bmp_test ? "PASS" : "FAIL";
			if (!bmp_test) {
				console.log("Windows Bitmap: Your browser does not support Windows Bitmap images.");
			}
			document.body.removeChild(sample_bmp);
		};
		sample_bmp.onerror = function() {
			document.getElementById("windowsbmptest").textContent = "FAIL";
			console.log("Windows Bitmap: Your browser does not support Windows Bitmap images.");
			document.body.removeChild(sample_bmp);
		};
	}
	catch (error) {
		document.getElementById("windowsbmptest").textContent = "FAIL";
	}
	
	/* VECTOR GRAPHICS */
	
	/* SVG tag test */
	try {
		let sample_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		let svg_test = sample_svg instanceof SVGSVGElement;
		document.getElementById("svgtest").textContent = svg_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("svgtest").textContent = "FAIL";
	}
	
	/* SVG as an image test */
	try {
		var sample_svg = new Image();
		sample_svg.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
		sample_svg.style.display = "none";
		document.body.appendChild(sample_svg);
		sample_svg.onload = function() {
			document.getElementById("svgasimagetest").textContent = "PASS";
			document.body.removeChild(sample_svg);
		};
		sample_svg.onerror = function() {
			document.getElementById("svgasimagetest").textContent = "FAIL";
			console.log("SVG as an image: Your browser does not support SVG as an image.");
			document.body.removeChild(sample_svg);
		};
	}
	catch (error) {
		document.getElementById("svgasimagetest").textContent = "FAIL";
	}
	
	/* Foreign Object tag test */
	try {
		let sample_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if (sample_svg instanceof SVGSVGElement) {
			let sample_fo = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
			sample_svg.appendChild(sample_fo);
			let fo_test = sample_fo instanceof SVGForeignObjectElement;
			document.getElementById("foreignobjecttest").textContent = fo_test ? "PASS" : "FAIL";
		}
		else {
			document.getElementById("foreignobjecttest").textContent = "FAIL";
			console.log("<foreignObject>: Your browser does not support the foreignObject element.");
		}
	}
	catch (error) {
		document.getElementById("foreignobjecttest").textContent = "FAIL";
	}
	
	/* Filter tag test */
	try {
		let sample_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if (sample_svg instanceof SVGSVGElement) {
			let sample_filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
			sample_svg.appendChild(sample_filter);
			let filter_test = sample_filter instanceof SVGFilterElement;
			document.getElementById("svgfiltertest").textContent = filter_test ? "PASS" : "FAIL";
		}
		else {
			document.getElementById("svgfiltertest").textContent = "FAIL";
			console.log("<filter>: Your browser does not support the foreignObject element.");
		}
	}
	catch (error) {
		document.getElementById("svgfiltertest").textContent = "FAIL";
	}
	
	/* 2D AND 3D GRAPHICS TEST */
	
	/* Canvas tag test */
	try {
		let canvas_test = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		document.getElementById("canvastest").textContent = canvas_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("canvastest").textContent = "FAIL";
	}
	
	/* Canvas text test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			var tests_passed = 0;
			if ("font" in canvas_context) { tests_passed++; }
			else { console.log("Canvas text test: Your browser does not support the \"font\" property."); }
			if (typeof canvas_context.fillText === "function") { tests_passed++; }
			else { console.log("Canvas text test: Your browser does not support the \"fillText\" method."); }
			if (typeof canvas_context.strokeText === "function") { tests_passed++; }
			else { console.log("Canvas text test: Your browser does not support the \"strokeText\" method."); }
			document.getElementById("canvastexttest").textContent = tests_passed === 3 ? "PASS" : "FAIL";
		}
		else {
			document.getElementById("canvastexttest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("canvastexttest").textContent = "FAIL";
	}
	
	/* Path2D test */
	try {
		let path2d_test = typeof Path2D !== "undefined";
		document.getElementById("path2dtest").textContent = path2d_test ? "PASS" : "FAIL";
		if (path2d_test === false) {
			console.log("Path2D test: Your browser does not support Path2D.");
		}
	}
	catch (error) {
		document.getElementById("path2dtest").textContent = "FAIL";
	}
	
	/* Canvas ellipse Test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			if (typeof canvas_context.ellipse === "function") {
				document.getElementById("canvasellipsetest").textContent = "PASS";
			}
			else {
				document.getElementById("canvasellipsetest").textContent = "FAIL";
				console.log("Canvas ellipse test: Your browser does not support the \"ellipse\" method.");
			}
		}
		else {
			document.getElementById("canvasellipsetest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("canvasellipsetest").textContent = "FAIL";
	}
	
	/* Canvas dashed lines Test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			if (typeof canvas_context.setLineDash === "function") {
				document.getElementById("canvasdltest").textContent = "PASS";
			}
			else {
				document.getElementById("canvasdltest").textContent = "FAIL";
				console.log("Canvas dashed lines test: Your browser does not support the \"setLineDash\" method.");
			}
		}
		else {
			document.getElementById("canvasdltest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("canvasdltest").textContent = "FAIL";
	}
	
	/* Canvas dashed lines Test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			if (typeof canvas_context.setLineDash === "function") {
				document.getElementById("canvasdltest").textContent = "PASS";
			}
			else {
				document.getElementById("canvasdltest").textContent = "FAIL";
				console.log("Canvas dashed lines test: Your browser does not support the \"setLineDash\" method.");
			}
		}
		else {
			document.getElementById("canvasdltest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("canvasdltest").textContent = "FAIL";
	}
	
	/* Canvas focus rings Test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			if (typeof canvas_context.drawFocusIfNeeded === "function") {
				document.getElementById("canvasfrtest").textContent = "PASS";
			}
			else {
				document.getElementById("canvasfrtest").textContent = "FAIL";
				console.log("Canvas focus rings test: Your browser does not support the \"drawFocusIfNeeded\" method.");
			}
		}
		else {
			document.getElementById("canvasfrtest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("canvasfrtest").textContent = "FAIL";
	}
	
	/* WebGL test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var webgl_test = sample_canvas.getContext("webgl");
			if (!!webgl_test) {
				document.getElementById("webgltest").textContent = "PASS";
			}
			else {
				document.getElementById("webgltest").textContent = "FAIL";
				console.log("WebGL test: Your browser does not support WebGL.");
			}
		}
		else {
			document.getElementById("webgltest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("webgltest").textContent = "FAIL";
	}
	
	/* WebGL 2.0 test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var webgl2_test = sample_canvas.getContext("webgl2");
			if (!!webgl2_test) {
				document.getElementById("webgl2test").textContent = "PASS";
			}
			else {
				document.getElementById("webgl2test").textContent = "FAIL";
				console.log("WebGL 2.0 test: Your browser does not support WebGL.");
			}
		}
		else {
			document.getElementById("webgl2test").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("webgl2test").textContent = "FAIL";
	}
	
	/* WebGPU test */
	try {
		if (window.isSecureContext) {
			if ("gpu" in navigator) {
				document.getElementById("webgputest").textContent = "PASS";
			}
			else {
				document.getElementById("webgputest").textContent = "FAIL";
				console.log("WebGPU test: Your browser does not support WebGPU.");
			}
		}
		else {
			document.getElementById("webgputest").textContent = "FAIL";
			console.log("WebGPU test: WebGPU requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("webgputest").textContent = "FAIL";
	}
	
	/* WebXR test */
	try {
		if (window.isSecureContext) {
			if ("xr" in navigator) {
				document.getElementById("webxrtest").textContent = "PASS";
			}
			else {
				document.getElementById("webxrtest").textContent = "FAIL";
				console.log("WebXR test: Your browser does not support WebXR.");
			}
		}
		else {
			document.getElementById("webxrtest").textContent = "FAIL";
			console.log("WebXR test: WebXR requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("webxrtest").textContent = "FAIL";
	}
	
	/* OFFSCREEN GRAPHICS */
	
	/* Bitmap renderer context test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var brc_test = sample_canvas.getContext("bitmaprenderer");
			if (!!brc_test) {
				document.getElementById("brctest").textContent = "PASS";
			}
			else {
				document.getElementById("brctest").textContent = "FAIL";
				console.log("Bitmap renderer context test: Your browser does not support the \"ImageBitmapRenderingContext\" interface.");
			}
		}
		else {
			document.getElementById("brctest").textContent = "FAIL";
		}
	}
	catch (error) {
		document.getElementById("brctest").textContent = "FAIL";
	}
	
	/* Bitmap data test */
	try {
		if ("ImageBitmap" in window) {
			var sample_canvas = document.createElement("canvas");
			createImageBitmap(sample_canvas).then(bitmap_data => {
				var tests_passed = 0;
				let height_test = "height" in bitmap_data;
				if (height_test) { tests_passed++; }
				else { console.log("Bitmap data test: Your browser does not support the \"height\" property."); }
				let width_test = "width" in bitmap_data;
				if (width_test) { tests_passed++; }
				else { console.log("Bitmap data test: Your browser does not support the \"width\" property."); }
				let close_func_test = typeof bitmap_data.close === "function";
				if (close_func_test) { tests_passed++; }
				document.getElementById("bitmapdatatest").textContent = (tests_passed === 3) ? "PASS" : "PARTIAL";
			});
		}
		else {
			document.getElementById("bitmapdatatest").textContent = "FAIL";
			console.log("Bitmap data test: Your browser does not support the \"ImageBitmap\" interface.");
		}
	}
	catch (error) {
		document.getElementById("bitmapdatatest").textContent = "FAIL";
	}
	
	/* Offscreen Canvas API test */
	try {
		if ("OffscreenCanvas" in window) {
			document.getElementById("offscreentest").textContent = "PASS";
		}
		else {
			document.getElementById("offscreentest").textContent = "FAIL";
			console.log("Offscreen Canvas API test: Your browser does not support the Offscreen Canvas API.");
		}
	}
	catch (error) {
		document.getElementById("offscreentest").textContent = "FAIL";
	}
	
	/* 2D support in Offscreen Canvas */
	try {
		if ("OffscreenCanvas" in window) {
			var sample_off_canvas = new OffscreenCanvas(0, 0);
			var twod_off_test = sample_off_canvas.getContext("2d");
			document.getElementById("2doffscreentest").textContent = (!!twod_off_test) ? "PASS" : "FAIL";
			if (twod_off_test === false) {
				console.log("2D support in Offscreen Canvas: Your browser does not support 2D graphics in an Offscreen Canvas.");
			}
		}
		else {
			document.getElementById("2doffscreentest").textContent = "FAIL";
			console.log("2D support in Offscreen Canvas: Your browser does not support the Offscreen Canvas API.");
		}
	}
	catch (error) {
		document.getElementById("2doffscreentest").textContent = "FAIL";
	}
	
	/* 3D support in Offscreen Canvas */
	try {
		if ("OffscreenCanvas" in window) {
			var sample_off_canvas = new OffscreenCanvas(0, 0);
			var threed_off_test = sample_off_canvas.getContext("webgl");
			document.getElementById("3doffscreentest").textContent = (!!threed_off_test) ? "PASS" : "FAIL";
			if (threed_off_test === false) {
				console.log("3D support in Offscreen Canvas: Your browser does not support 3D graphics (via WebGL) in an Offscreen Canvas.");
			}
		}
		else {
			document.getElementById("3doffscreentest").textContent = "FAIL";
			console.log("3D support in Offscreen Canvas: Your browser does not support the Offscreen Canvas API.");
		}
	}
	catch (error) {
		document.getElementById("3doffscreentest").textContent = "FAIL";
	}
	
	/* ANIMATION */
	
	/* requestAnimationFrame method */
	try {
		if (typeof window.requestAnimationFrame === "function") {
			document.getElementById("animationframetest").textContent = "PASS";
		}
		else {
			document.getElementById("animationframetest").textContent = "FAIL";
			console.log("\"requestAnimationFrame\" method: Your browser does not support the \"requestAnimationFrame\" method.");
		}
	}
	catch (error) {
		document.getElementById("animationframetest").textContent = "FAIL";
	}
	
	/* Web Animations API test */
	try {
		sample_div = document.createElement("div");
		if ("animate" in sample_div && "Animation" in window && "KeyframeEffect" in window && "timeline" in document) {
			document.getElementById("webanimationstest").textContent = "PASS";
		}
		else {
			document.getElementById("webanimationstest").textContent = "FAIL";
			console.log("Web Animations API test: Your browser does not support the Web Animations API.");
		}
	}
	catch (error) {
		document.getElementById("webanimationstest").textContent = "FAIL";
	}
	
	/* CSS3 */
	
	/* text-shadow property test */
	try {
		var sample_div = document.createElement("div");
		sample_div.className = "shadow_test";
		sample_div.textContent = "TEST";
		document.body.appendChild(sample_div);
		let computed_style = window.getComputedStyle(sample_div);
		let css_text_shadow_test = computed_style.getPropertyValue("text-shadow");
		document.body.removeChild(sample_div);
		document.getElementById("csstextshadowtest").textContent = (css_text_shadow_test !== "none") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("csstextshadowtest").textContent = "FAIL";
	}
	
	/* flexbox property test */
	try {
		var sample_div = document.createElement("div");
		sample_div.className = "flexbox_test";
		sample_div.textContent = "TEST";
		document.body.appendChild(sample_div);
		let computed_style = window.getComputedStyle(sample_div);
		let css_flexbox_test = computed_style.display === "flexbox";
		document.body.removeChild(sample_div);
		document.getElementById("cssflexboxtest").textContent = (css_flexbox_test !== "none") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssflexboxtest").textContent = "FAIL";
	}
	
	/* grid property test */
	try {
		var sample_div = document.createElement("div");
		sample_div.className = "grid_test";
		sample_div.textContent = "TEST";
		document.body.appendChild(sample_div);
		let computed_style = window.getComputedStyle(sample_div);
		let css_grid_test = computed_style.display === "grid";
		document.body.removeChild(sample_div);
		document.getElementById("cssgridtest").textContent = (css_grid_test !== "none") ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssgridtest").textContent = "FAIL";
	}
	
	/* CSS Subgrids test */
	try {
		var sample_div = document.createElement("div");
		sample_div.className = "grid_test";
		sample_div.textContent = "TEST";
		var second_sample_div = document.createElement("div");
		second_sample_div.className = "subgrid_test";
		sample_div.appendChild(second_sample_div);
		document.body.appendChild(sample_div);
		let computed_style = window.getComputedStyle(second_sample_div);
		let css_subgrid_test = (computed_style.gridTemplateColumns === "subgrid [] []" && computed_style.gridTemplateRows === "subgrid [] []");
		document.body.removeChild(sample_div);
		document.getElementById("csssubgridtest").textContent = css_subgrid_test ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("csssubgridtest").textContent = "FAIL";
	}
	
	/* offset-anchor property test */
	try {
		var sample_img = document.createElement("img");
		sample_img.className = "offset_anchor_test";
		document.body.appendChild(sample_img);
		let computed_style = window.getComputedStyle(sample_img);
		let css_offsetanchor_test = computed_style.offsetAnchor === "100% 50%";
		document.body.removeChild(sample_img);
		document.getElementById("cssoffsetanchortest").textContent = (css_offsetanchor_test) ? "PASS" : "FAIL";
	}
	catch (error) {
		document.getElementById("cssoffsetanchortest").textContent = "FAIL";
	}
	
	/* COMMUNICATION TEST */
	
	/* Server-sent events test */
	// 
	try {
		if ("EventSource" in window) {
			// Commented out due to issues with connecting to a valid event source URI.
			// Best moved to manual testing with a simple server written in Python or C++ or something.
			/*var sample_event_source = new EventSource("", { withCredentials: true });
			var tests_passed = 0;
			if ("withCredentials" in sample_event_source) { tests_passed++; }
			if ("url" in sample_event_source) { tests_passed++; }
			if ("readyState" in sample_event_source) { tests_passed++; }
			if ("withCredentials" in EventSource.prototype) { tests_passed++; }
			if (typeof sample_event_source.close === "function") {
				tests_passed++;
				sample_event_source.close();
			}
			document.getElementById("ssetest").textContent = (tests_passed === 5) ? "PASS" : "PARTIAL";*/
			document.getElementById("ssetest").textContent = "PASS";
		}
		else {
			document.getElementById("ssetest").textContent = "FAIL";
			console.log("Server-sent events test: Your browser does not support server-sent events.");
		}
	}
	catch (error) {
		document.getElementById("ssetest").textContent = "FAIL";
	}
	
	/* Beacon API Test */
	try {
		if ("sendBeacon" in navigator) {
			document.getElementById("beacontest").textContent = "PASS";
		}
		else {
			document.getElementById("beacontest").textContent = "FAIL";
			console.log("Beacon test: Your browser does not support the Beacon API.");
		}
	}
	catch (error) {
		document.getElementById("beacontest").textContent = "FAIL";
	}
	
	/* Fetch API Test */
	try {
		if ("fetch" in window) {
			document.getElementById("fetchtest").textContent = "PASS";
		}
		else {
			document.getElementById("fetchtest").textContent = "FAIL";
			console.log("Fetch test: Your browser does not support the Fetch API.");
		}
	}
	catch (error) {
		document.getElementById("fetchtest").textContent = "FAIL";
	}
	
	/* Upload files via XMLHttpRequest Level 2 Test */
	try {
		if ("XMLHttpRequest" in window && "FormData" in window) {
			let ufxl2_test = new XMLHttpRequest();
			if ("upload" in ufxl2_test) {
				document.getElementById("ufxl2test").textContent = "PASS";
			}
			else {
				document.getElementById("ufxl2test").textContent = "FAIL";
				console.log("Upload files via XMLHttpRequest Level 2: Your browser does not support XMLHttpRequest Level 2.");
			}
		}
		else {
			document.getElementById("ufxl2test").textContent = "FAIL";
			console.log("Upload files via XMLHttpRequest Level 2: Your browser does not support XMLHttpRequest or FormData.");
		}
	}
	catch (error) {
		document.getElementById("ufxl2test").textContent = "FAIL";
	}
	
	/* Text response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "text";
		if (sample_xhr.responseType === "text") {
			document.getElementById("textresponsetest").textContent = "PASS";
		}
		else {
			document.getElementById("textresponsetest").textContent = "FAIL";
			console.log("Text response type: Your browser does not support the text response type.");
		}
	}
	catch (error) {
		document.getElementById("textresponsetest").textContent = "FAIL";
	}
	
	/* Document response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "document";
		if (sample_xhr.responseType === "document") {
			document.getElementById("documentresponsetest").textContent = "PASS";
		}
		else {
			document.getElementById("documentresponsetest").textContent = "FAIL";
			console.log("Document response type: Your browser does not support the document response type.");
		}
	}
	catch (error) {
		document.getElementById("documentresponsetest").textContent = "FAIL";
	}
	
	/* ArrayBuffer response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "arraybuffer";
		if (sample_xhr.responseType === "arraybuffer") {
			document.getElementById("arraybufferresponsetest").textContent = "PASS";
		}
		else {
			document.getElementById("arraybufferresponsetest").textContent = "FAIL";
			console.log("ArrayBuffer response type: Your browser does not support the arrayBuffer response type.");
		}
	}
	catch (error) {
		document.getElementById("arraybufferresponsetest").textContent = "FAIL";
	}
	
	/* Blob response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "blob";
		if (sample_xhr.responseType === "blob") {
			document.getElementById("blobresponsetest").textContent = "PASS";
		}
		else {
			document.getElementById("blobresponsetest").textContent = "FAIL";
			console.log("Blob response type: Your browser does not support the blob response type.");
		}
	}
	catch (error) {
		document.getElementById("blobresponsetest").textContent = "FAIL";
	}
	
	/* JSON response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "json";
		if (sample_xhr.responseType === "json") {
			document.getElementById("jsonresponsetest").textContent = "PASS";
		}
		else {
			document.getElementById("jsonresponsetest").textContent = "FAIL";
			console.log("JSON response type: Your browser does not support the \"json\" response type.");
		}
	}
	catch (error) {
		document.getElementById("jsonresponsetest").textContent = "FAIL";
	}
	
	/* WebSocket API test */
	try {
		if ("WebSocket" in window) {
			document.getElementById("websockettest").textContent = "PASS";
		}
		else {
			document.getElementById("websockettest").textContent = "FAIL";
			console.log("WebSocket API test: Your browser does not support the WebSocket API.");
		}
	}
	catch (error) {
		document.getElementById("websockettest").textContent = "FAIL";
	}
	
	/* STREAMS */
	
	/* Readable streams test */
	try {
		if ("ReadableStream" in window) {
			var tests_passed = 0;
			let sample_rs = new ReadableStream();
			let get_reader_test = typeof sample_rs.getReader === "function";
			if (get_reader_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"getReader\" function."); }
			if ("locked" in sample_rs) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"locked\" property."); }
			let pipe_through_test = typeof sample_rs.pipeThrough === "function";
			if (pipe_through_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"pipeThrough\" function."); }
			let pipe_to_test = typeof sample_rs.pipeTo === "function";
			if (pipe_to_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"pipeTo\" function."); }
			let tee_test = typeof sample_rs.tee === "function";
			if (tee_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"tee\" function."); }
			let values_test = typeof sample_rs.values === "function";
			if (values_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"values\" function."); }
			let cancel_test = typeof sample_rs.cancel === "function";
			if (cancel_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"cancel\" function."); }
			let from_test = typeof sample_rs.from === "function";
			if (from_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"from\" static function."); }
			document.getElementById("readablestreamtest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("readablestreamtest").textContent = "FAIL";
			console.log("Readable streams: Your browser does not support readable streams.");
		}
	}
	catch (error) {
		document.getElementById("readablestreamtest").textContent = "FAIL";
	}
	
	/* Writable streams test */
	try {
		if ("WritableStream" in window) {
			var tests_passed = 0;
			let sample_ws = new WritableStream();
			let get_writer_test = typeof sample_ws.getWriter === "function";
			if (get_writer_test === true) { tests_passed++; }
			else { console.log("Writable streams: Your browser does not support the \"getReader\" function."); }
			if ("locked" in sample_ws) { tests_passed++; }
			else { console.log("Writable streams: Your browser does not support the \"locked\" property."); }
			let abort_test = typeof sample_ws.abort === "function";
			if (abort_test === true) { tests_passed++; }
			else { console.log("Writable streams: Your browser does not support the \"abort\" function."); }
			let close_test = typeof sample_ws.close === "function";
			if (close_test === true) { tests_passed++; }
			else { console.log("Writable streams: Your browser does not support the \"close\" function."); }
			document.getElementById("writablestreamtest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("writablestreamtest").textContent = "FAIL";
			console.log("Writable streams: Your browser does not support writable streams.");
		}
	}
	catch (error) {
		document.getElementById("writablestreamtest").textContent = "FAIL";
	}
	
	/* WEB APPLICATIONS */
	
	/* Service workers test */
	try {
		if ("serviceWorker" in navigator) {
			document.getElementById("serviceworkerstest").textContent = "PASS";
		}
		else {
			document.getElementById("serviceworkerstest").textContent = "FAIL";
			console.log("Service Workers: Your browser does not support service workers.");
		}
	}
	catch (error) {
		document.getElementById("serviceworkerstest").textContent = "FAIL";
	}
	
	/* Push messages test */
	try {
		if ("PushManager" in window) {
			document.getElementById("pushmessagestest").textContent = "PASS";
		}
		else {
			document.getElementById("pushmessagestest").textContent = "FAIL";
			console.log("Push messages: Your browser does not support push messages.");
		}
	}
	catch (error) {
		document.getElementById("pushmessagestest").textContent = "FAIL";
	}
	
	/* Web-based protocol handlers test */
	try {
		if ("registerProtocolHandler" in navigator) {
			document.getElementById("webprotocoltest").textContent = "PASS";
		}
		else {
			document.getElementById("webprotocoltest").textContent = "FAIL";
			console.log("Web protocol handlers: Your browser does not support web-based protocol handlers.");
		}
	}
	catch (error) {
		document.getElementById("webprotocoltest").textContent = "FAIL";
	}
	
	/* STORAGE */
	
	/* Session storage test */
	try {
		if ("sessionStorage" in window) {
			document.getElementById("sessionstoragetest").textContent = "PASS";
		}
		else {
			document.getElementById("sessionstoragetest").textContent = "FAIL";
			console.log("Session storage test: Your browser does not support session storage.");
		}
	}
	catch (error) {
		document.getElementById("sessionstoragetest").textContent = "FAIL";
	}
	
	/* Local storage test */
	try {
		if ("localStorage" in window) {
			document.getElementById("localstoragetest").textContent = "PASS";
		}
		else {
			document.getElementById("localstoragetest").textContent = "FAIL";
			console.log("Local storage test: Your browser does not support local storage.");
		}
	}
	catch (error) {
		document.getElementById("localstoragetest").textContent = "FAIL";
	}
	
	/* IndexedDB test */
	try {
		if ("indexedDB" in window) {
			document.getElementById("indexeddbtest").textContent = "PASS";
		}
		else {
			document.getElementById("indexeddbtest").textContent = "FAIL";
			console.log("IndexedDB test: Your browser does not support IndexedDB.");
		}
	}
	catch (error) {
		document.getElementById("indexeddbtest").textContent = "FAIL";
	}
	
	/* IDBObjectStore test */
	try {
		let request = indexedDB.open("testDatabase", 1);

		request.onerror = function(event) {
			document.getElementById("objectstoretest").textContent = "FAIL";
		};

		request.onsuccess = function(event) {
			let db = event.target.result;
			let transaction = db.transaction(["testStore"], "readwrite");
			let objectstore_test = transaction.objectStore("testStore");
			if (objectstore_test instanceof IDBObjectStore) {
				document.getElementById("objectstoretest").textContent = "PASS";
			}
			else {
				document.getElementById("objectstoretest").textContent = "FAIL";
			}
			db.close();
			indexedDB.deleteDatabase("testDatabase");
		};

		request.onupgradeneeded = function(event) {
			const db = event.target.result;
			if (!db.objectStoreNames.contains("testStore")) {
				db.createObjectStore("testStore", { keyPath: "id" });
			}
		};
	}
	catch (error) {
		document.getElementById("objectstoretest").textContent = "FAIL";
	}
	
	/* FILES */
	
	/* File interface test */
	try {
		if (typeof File !== "undefined") {
			var tests_passed = 0;
			let sample_file = new File(["content"], "test_files/test.txt", { lastModified: Date.now() });
			if ("lastModified" in sample_file) { tests_passed++; }
			else { console.log("File interface test: Your browser does not support the \"lastModified\" property."); }
			if ("name" in sample_file) { tests_passed++; }
			else { console.log("File interface test: Your browser does not support the \"name\" property."); }
			document.getElementById("fileintertest").textContent = (tests_passed === 2) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("fileintertest").textContent = "FAIL";
			console.log("File interface test: Your browser does not support the File interface.");
		}
	}
	catch (error) {
		document.getElementById("fileintertest").textContent = "FAIL";
	}
	
	/* FileReader interface test */
	try {
		if (typeof FileReader !== "undefined") {
			var tests_passed = 0;
			let sample_filereader = new FileReader();
			if ("abort" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"abort\" method."); }
			if ("error" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"error\" property."); }
			if ("onabort" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"onabort\" event."); }
			if ("onerror" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"onerror\" event."); }
			if ("onload" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"onload\" event."); }
			if ("onloadend" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"onloadend\" event."); }
			if ("onloadstart" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"onloadstart\" event."); }
			if ("onprogress" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"onprogress\" event."); }
			if ("readAsArrayBuffer" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"readAsArrayBuffer\" method."); }
			if ("readAsDataURL" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"readAsDataURL\" method."); }
			if ("readAsText" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"readAsText\" method."); }
			if ("readyState" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"readyState\" property."); }
			if ("result" in sample_filereader) { tests_passed++; }
			else { console.log("FileReader interface test: Your browser does not support the \"result\" property."); }
			document.getElementById("frintertest").textContent = (tests_passed === 13) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("frintertest").textContent = "FAIL";
			console.log("FileReader interface test: Your browser does not support the FileReader interface.");
		}
	}
	catch (error) {
		document.getElementById("frintertest").textContent = "FAIL";
	}
	
	/* Create a Blob from a file test */
	try {
		if ("Blob" in window) {
			let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
			if (sample_blob.size === 45 && sample_blob.type === "text/plain") {
				document.getElementById("blobfromfiletest").textContent = "PASS";
			}
			else {
				document.getElementById("blobfromfiletest").textContent = "FAIL";
				console.log("Create a Blob from a file: Your browser does not support creating a Blob from a file.");
			}
		}
		else {
			document.getElementById("blobfromfiletest").textContent = "FAIL";
			console.log("Create a Blob from a file: Your browser does not support the Blob interface.");
		}
	}
	catch (error) {
		document.getElementById("blobfromfiletest").textContent = "FAIL";
	}
	
	/* Create a Data URL from a Blob test */
	try {
		let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
		let sample_reader = new FileReader();
		sample_reader.onload = function(event) {
			let dataurl_test = (event.target.result).startsWith("data:");
			document.getElementById("dataurlfromblobtest").textContent = dataurl_test ? "PASS" : "FAIL";
			if (dataurl_test === false) {
				console.log("Create a Data URL from a Blob: Your browser does not support creation of Data URLs from Blobs.");
			}
		}
		sample_reader.onerror = function() {
			document.getElementById("dataurlfromblobtest").textContent = "FAIL";
			console.log("Create a Data URL from a Blob: There was an error in trying to read a Blob.");
		}
		sample_reader.readAsDataURL(sample_blob);
	}
	catch (error) {
		document.getElementById("dataurlfromblobtest").textContent = "FAIL";
	}
	
	/* Create an ArrayBuffer from a Blob test */
	try {
		let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
		let sample_reader = new FileReader();
		sample_reader.onload = function(event) {
			let arraybuffer_test = (event.target.result) instanceof ArrayBuffer;
			document.getElementById("arraybufferfromblobtest").textContent = arraybuffer_test ? "PASS" : "FAIL";
			if (arraybuffer_test === false) {
				console.log("Create an ArrayBuffer from a Blob: Your browser does not support creation of ArrayBuffers from Blobs.");
			}
		}
		sample_reader.onerror = function() {
			document.getElementById("arraybufferfromblobtest").textContent = "FAIL";
			console.log("Create an ArrayBuffer from a Blob: There was an error in trying to read a Blob.");
		}
		sample_reader.readAsArrayBuffer(sample_blob);
	}
	catch (error) {
		document.getElementById("arraybufferfromblobtest").textContent = "FAIL";
	}
	
	/* Create a Blob URL from a Blob test */
	try {
		let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
		let sample_bloburl = URL.createObjectURL(sample_blob);
		let bloburl_test = (typeof sample_bloburl === "string" && sample_bloburl.startsWith("blob:"));
		document.getElementById("bloburlfromblobtest").textContent = bloburl_test ? "PASS" : "FAIL";
		if (bloburl_test === false) {
			console.log("Create Blob URL from a Blob: Your browser does not support creation of Blob URLs from Blobs.");
		}
		URL.revokeObjectURL(sample_blob);
	}
	catch (error) {
		document.getElementById("bloburlfromblobtest").textContent = "FAIL";
	}
	
	/* USER INTERACTION */
	
	/* Draggable attribute test */
	try {
		var sample_div = document.createElement("div");
		let draggable_test = "draggable" in sample_div;
		document.getElementById("draggabletest").textContent = draggable_test ? "PASS" : "FAIL";
		if (draggable_test === false) {
			console.log("\"draggable\" attribute: Your browser does not support the \"draggable\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("draggabletest").textContent = "FAIL";
	}
	
	/* Ondrag event test */
	try {
		var sample_div = document.createElement("div");
		let ondrag_test = "ondrag" in sample_div;
		document.getElementById("ondragtest").textContent = ondrag_test ? "PASS" : "FAIL";
		if (ondrag_test === false) {
			console.log("\"ondrag\" event: Your browser does not support the \"ondrag\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragtest").textContent = "FAIL";
	}
	
	/* Ondragstart event test */
	try {
		var sample_div = document.createElement("div");
		let ondragstart_test = "ondragstart" in sample_div;
		document.getElementById("ondragstarttest").textContent = ondragstart_test ? "PASS" : "FAIL";
		if (ondragstart_test === false) {
			console.log("\"ondragstart\" event: Your browser does not support the \"ondragstart\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragstarttest").textContent = "FAIL";
	}
	
	/* Ondragenter event test */
	try {
		var sample_div = document.createElement("div");
		let ondragenter_test = "ondragenter" in sample_div;
		document.getElementById("ondragentertest").textContent = ondragenter_test ? "PASS" : "FAIL";
		if (ondragenter_test === false) {
			console.log("\"ondragenter\" event: Your browser does not support the \"ondragenter\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragentertest").textContent = "FAIL";
	}
	
	/* Ondragover event test */
	try {
		var sample_div = document.createElement("div");
		let ondragover_test = "ondragover" in sample_div;
		document.getElementById("ondragovertest").textContent = ondragover_test ? "PASS" : "FAIL";
		if (ondragover_test === false) {
			console.log("\"ondragover\" event: Your browser does not support the \"ondragover\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragovertest").textContent = "FAIL";
	}
	
	/* Ondragleave event test */
	try {
		var sample_div = document.createElement("div");
		let ondragleave_test = "ondragleave" in sample_div;
		document.getElementById("ondragleavetest").textContent = ondragleave_test ? "PASS" : "FAIL";
		if (ondragleave_test === false) {
			console.log("\"ondragleave\" event: Your browser does not support the \"ondragleave\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragleavetest").textContent = "FAIL";
	}
	
	/* Ondragend event test */
	try {
		var sample_div = document.createElement("div");
		let ondragend_test = "ondragend" in sample_div;
		document.getElementById("ondragendtest").textContent = ondragend_test ? "PASS" : "FAIL";
		if (ondragend_test === false) {
			console.log("\"ondragend\" event: Your browser does not support the \"ondragend\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragendtest").textContent = "FAIL";
	}
	
	/* Ondrop event test */
	try {
		var sample_div = document.createElement("div");
		let ondrop_test = "ondrop" in sample_div;
		document.getElementById("ondroptest").textContent = ondrop_test ? "PASS" : "FAIL";
		if (ondrop_test === false) {
			console.log("\"ondrop\" event: Your browser does not support the \"ondrop\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondroptest").textContent = "FAIL";
	}
	
	/* Editable elements test */
	try {
		var tests_passed = 0;
		var sample_blockquote = document.createElement("blockquote");
		sample_blockquote.setAttribute("contenteditable", "true");
		document.body.appendChild(sample_blockquote);
		let ce_test = sample_blockquote.isContentEditable;
		document.body.removeChild(sample_blockquote);
		if (ce_test === true) { tests_passed++; }
		else {
			console.log("Editable elements test: Your browser does not support editable elements.");
		}
		try {
			sample_blockquote.contentEditable = "plaintext-only";
		}
		catch (error) {
			console.log("Editable elements test: Your browser does not support the \"plaintext-only\" value.");
		}
		let plaintextonly_test = sample_blockquote.contentEditable == "plaintext-only";
		if (plaintextonly_test === true) { tests_passed++; }
		switch(tests_passed) {
			case 0:
				document.getElementById("editabletest").textContent = "FAIL";
				break;
			case 1:
				document.getElementById("editabletest").textContent = "PARTIAL";
				break;
			case 2:
				document.getElementById("editabletest").textContent = "PASS";
				break;
		}
	}
	catch (error) {
		document.getElementById("editabletest").textContent = "FAIL";
	}
	
	/* designMode attribute test */
	try {
		if ("designMode" in document) {
			document.getElementById("designmodetest").textContent = "PASS";
		}
		else {
			document.getElementById("designmodetest").textContent = "FAIL";
			console.log("\"designMode\" attribute: Your browser does not support the \"designMode\" attribute for editing documents.");
		}
	}
	catch (error) {
		document.getElementById("designmodetest").textContent = "FAIL";
	}
	
	/* Clipboard interface test */
	try {
		if (window.isSecureContext) {
			if ("clipboard" in navigator) {
				var tests_passed = 0;
				if (typeof navigator.clipboard.read === "function") { tests_passed++; }
				else { console.log("Clipboard interface: Your browser does not support the \"read\" method."); }
				if (typeof navigator.clipboard.readText === "function") { tests_passed++; }
				else { console.log("Clipboard interface: Your browser does not support the \"readText\" method."); }
				if (typeof navigator.clipboard.write === "function") { tests_passed++; }
				else { console.log("Clipboard interface: Your browser does not support the \"write\" method."); }
				if (typeof navigator.clipboard.writeText === "function") { tests_passed++; }
				else { console.log("Clipboard interface: Your browser does not support the \"writeText\" method."); }
				document.getElementById("clipboardtest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
			}
			else {
				document.getElementById("clipboardtest").textContent = "FAIL";
				console.log("Clipboard interface: Your browser does not support the Clipboard interface.");
			}
		}
		else {
			document.getElementById("clipboardtest").textContent = "FAIL";
			console.log("Clipboard interface: The Clipboard interface requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("clipboardtest").textContent = "FAIL";
	}
	
	/* Clipboard Event interface test */
	try {
		if (typeof ClipboardEvent === "function") {
			var tests_passed = 0;
			let sample_clipboardevent = new ClipboardEvent("copy");
			if ("clipboardData" in sample_clipboardevent) { tests_passed++; }
			else { console.log("Clipboard Event interface: Your browser does not support the \"clipboardData\" property."); }
			var sample_div = document.createElement("div");
			if ("oncopy" in sample_div) { tests_passed++; }
			else { console.log("Clipboard Event interface: Your browser does not support the \"oncopy\" event."); }
			if ("oncut" in sample_div) { tests_passed++; }
			else { console.log("Clipboard Event interface: Your browser does not support the \"oncut\" event."); }
			if ("onpaste" in sample_div) { tests_passed++; }
			else { console.log("Clipboard Event interface: Your browser does not support the \"onpaste\" event."); }
			document.getElementById("clipboardeventtest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("clipboardeventtest").textContent = "FAIL";
			console.log("Clipboard Event interface: Your browser does not support the Clipboard Event interface.");
		}
	}
	catch (error) {
		document.getElementById("clipboardeventtest").textContent = "FAIL";
	}
	
	/* Clipboard Item interface test */
	try {
		if (window.isSecureContext) {
			if ("ClipboardItem" in window) {
				var tests_passed = 0;
				let sample_item = new ClipboardItem({ "text/plain": "TEST" });
				if (typeof sample_item.getType === "function") { tests_passed++; }
				else { console.log("Clipboard Item interface: Your browser does not support the \"getType\" method."); }
				if ("presentationStyle" in sample_item) { tests_passed++; }
				else { console.log("Clipboard Item interface: Your browser does not support the \"presentationStyle\" property."); }
				if (typeof ClipboardItem.supports === "function") { tests_passed++; }
				else { console.log("Clipboard Item interface: Your browser does not support the \"supports\" static method."); }
				if ("types" in sample_item) { tests_passed++; }
				else { console.log("Clipboard Item interface: Your browser does not support the \"types\" property."); }
				document.getElementById("clipboarditemtest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
			}
			else {
				document.getElementById("clipboarditemtest").textContent = "FAIL";
				console.log("Clipboard Item interface: Your browser does not support the Clipboard Item interface.");
			}
		}
		else {
			document.getElementById("clipboarditemtest").textContent = "FAIL";
			console.log("Clipboard Item interface: The Clipboard Item interface requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("clipboarditemtest").textContent = "FAIL";
	}
	
	/* Spellcheck attribute test */
	try {
		var sample_textarea = document.createElement("textarea");
		if ("spellcheck" in sample_textarea) {
			document.getElementById("spellchecktest").textContent = "PASS";
		}
		else {
			document.getElementById("spellchecktest").textContent = "FAIL";
			console.log("\"spellcheck\" attribute: Your browser does not support the \"spellcheck\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("hiddentest").textContent = "FAIL";
	}
	
	/* SCRIPTING */
	
	/* Asynchronous script execution test */
	try {
		sample_script = document.createElement("script");
		if ("async" in sample_script) {
			document.getElementById("asyncscriptexectest").textContent = "PASS";
		}
		else {
			document.getElementById("asyncscriptexectest").textContent = "FAIL";
			console.log("Asynchronous script execution: Your browser does not support asynchronous script execution.");
		}
	}
	catch (error) {
		document.getElementById("asyncscriptexectest").textContent = "FAIL";
	}
	
	/* Defered script execution test */
	try {
		sample_script = document.createElement("script");
		if ("defer" in sample_script) {
			document.getElementById("deferedscriptexectest").textContent = "PASS";
		}
		else {
			document.getElementById("deferedscriptexectest").textContent = "FAIL";
			console.log("Defered script execution: Your browser does not support defered script execution.");
		}
	}
	catch (error) {
		document.getElementById("deferedscriptexectest").textContent = "FAIL";
	}
	
	/* Runtime script error reporting test */
	try {
		if ("onerror" in window) {
			document.getElementById("runtimeerrortest").textContent = "PASS";
		}
		else {
			document.getElementById("runtimeerrortest").textContent = "FAIL";
			console.log("Runtime script error reporting: Your browser does not support runtime script error reporting.");
		}
	}
	catch (error) {
		document.getElementById("runtimeerrortest").textContent = "FAIL";
	}
	
	/* JSON encoding and decoding test */
	try {
		if (typeof JSON === "object" && JSON !== null) {
			var tests_passed = 0;
			if (typeof JSON.parse === "function") { tests_passed++; }
			else { console.log("JSON encoding and decoding: Your browser does not support the \"parse\" static method."); }
			if (typeof JSON.stringify === "function") { tests_passed++; }
			else { console.log("JSON encoding and decoding: Your browser does not support the \"stringify\" static method."); }
			document.getElementById("jsonendectest").textContent = (tests_passed === 2) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("jsonendectest").textContent = "FAIL";
			console.log("JSON encoding and decoding: Your browser does not support JSON encoding and decoding.");
		}
	}
	catch (error) {
		document.getElementById("jsonendectest").textContent = "FAIL";
	}
	
	/* Modules test */
	try {
		let sample_script = document.createElement("script");
		sample_script.type = "module";
		sample_script.innerHTML = "document.getElementById('modulestest').textContent = 'PASS';";
		document.body.appendChild(sample_script);
		setTimeout(function() {
			if (document.getElementById("modulestest").textContent !== "PASS") {
				document.getElementById("modulestest").textContent = "FAIL";
				console.log("Modules: Your browser does not support scripts of type \"module.\"");
			}
		}, 10000);
	}
	catch (error) {
		document.getElementById("modulestesttest").textContent = "FAIL";
	}
	
	/* Classes test */
	try {
		new Function("class my_class {}")();
		document.getElementById("classestest").textContent = "PASS";
	}
	catch (error) {
		document.getElementById("classestest").textContent = "FAIL";
		console.log("Classes: Your browser does not support JavaScript classes. If you believe this to be incorrect, please file a bug report.");
	}
	
	/* Arrow functions test */
	try {
		new Function("return (() => {})()")();
		document.getElementById("arrowfunctest").textContent = "PASS";
	}
	catch (error) {
		document.getElementById("arrowfunctest").textContent = "FAIL";
		console.log("Arrow functions: Your browser does not support arrow functions. If you believe this to be incorrect, please file a bug report.");
	}
	
	/* Promises test */
	try {
		if (typeof Promise !== "undefined" && Promise.toString().indexOf("[native code]") !== -1) {
			var tests_passed = 0;
			if (typeof Promise.all === "function") { tests_passed++; }
			else { console.log("Promises: Your browser does not support the \"all\" static method."); }
			if (typeof Promise.allSettled === "function") { tests_passed++; }
			else { console.log("Promises: Your browser does not support the \"allSettled\" static method."); }
			if (typeof Promise.any === "function") { tests_passed++; }
			else { console.log("Promises: Your browser does not support the \"any\" static method."); }
			if (typeof Promise.race === "function") { tests_passed++; }
			else { console.log("Promises: Your browser does not support the \"race\" static method."); }
			if (typeof Promise.reject === "function") { tests_passed++; }
			else { console.log("Promises: Your browser does not support the \"reject\" static method."); }
			let promise_resolve_test = (typeof Promise.resolve === "function");
			if (promise_resolve_test) {
				tests_passed++;
				let sample_promise = Promise.resolve();
				if (typeof sample_promise.catch === "function") { tests_passed++; }
				else { console.log("Promises: Your browser does not support the \"catch\" method."); }
				if (typeof sample_promise.finally === "function") { tests_passed++; }
				else { console.log("Promises: Your browser does not support the \"finally\" method."); }
				if (typeof sample_promise.then === "function") { tests_passed++; }
				else { console.log("Promises: Your browser does not support the \"then\" method."); }
			}
			else { console.log("Promises: Your browser does not support the \"resolve\" static method."); }
			if (typeof Promise.withResolvers === "function") { tests_passed++; }
			else { console.log("Promises: Your browser does not support the \"withResolvers\" method."); }
			document.getElementById("promisestest").textContent = (tests_passed === 10) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("promisestest").textContent = "FAIL";
			console.log("Promises: Your browser does not support promises.");
		}
	}
	catch (error) {
		document.getElementById("promisestest").textContent = "FAIL";
	}
	
	/* Template literals test */
	try {
		let my_literal = `TEST`;
		if (my_literal === "TEST") {
			document.getElementById("templateliteralstest").textContent = "PASS";
		}
		else {
			document.getElementById("templateliteralstest").textContent = "FAIL";
			console.log("Template literals: Your browser does not support template literals.");
		}
	}
	catch (error) {
		document.getElementById("templateliteralstest").textContent = "FAIL";
		console.log("Template literals: Your browser does not support template literals. If you believe this to be incorrect, please file a bug report.");
	}
	
	/* Typed arrays test */
	try {
		var tests_passed = 0;
		try {
			new Int8Array;
			tests_passed++;
			let sample_array = new Int8Array(1);
			if (typeof sample_array[Symbol.iterator] === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"@@iterator\" method."); }
			if ("BYTES_PER_ELEMENT" in Int8Array) { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"BYTES_PER_ELEMENT\" static data property."); }
			if (typeof sample_array.at === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"at\" method."); }
			if ("buffer" in sample_array && sample_array.buffer instanceof ArrayBuffer) { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"buffer\" accessor property."); }
			if ("byteLength" in sample_array) { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"byteLength\" accessor property."); }
			if ("byteOffset" in sample_array) { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"byteOffset\" accessor property."); }
			if (typeof sample_array.copyWithin === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"copyWithin\" method."); }
			if (typeof sample_array.entries === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"entries\" method."); }
			if (typeof sample_array.every === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"every\" method."); }
			if (typeof sample_array.fill === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"fill\" method."); }
			if (typeof sample_array.filter === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"filter\" method."); }
			if (typeof sample_array.find === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"find\" method."); }
			if (typeof sample_array.findIndex === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"findIndex\" method."); }
			if (typeof sample_array.findLast === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"findLast\" method."); }
			if (typeof sample_array.findLastIndex === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"findLastIndex\" method."); }
			if (typeof sample_array.forEach === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"forEach\" method."); }
			if (typeof Int8Array.from === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"from\" static method."); }
			if (typeof sample_array.includes === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"includes\" method."); }
			if (typeof sample_array.indexOf === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"indexOf\" method."); }
			if (typeof sample_array.join === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"join\" method."); }
			if (typeof sample_array.keys === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"keys\" method."); }
			if (typeof sample_array.lastIndexOf === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"lastIndexOf\" method."); }
			if ("length" in sample_array) { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"length\" accessor property."); }
			if (typeof sample_array.map === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"map\" method."); }
			if ("name" in Int8Array) { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"name\" data property."); }
			if (typeof Int8Array.of === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"of\" static method."); }
			if (typeof sample_array.reduce === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"reduce\" method."); }
			if (typeof sample_array.reduceRight === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"reduceRight\" method."); }
			if (typeof sample_array.reverse === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"reverse\" method."); }
			if (typeof sample_array.set === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"set\" method."); }
			if (typeof sample_array.slice === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"slice\" method."); }
			if (typeof sample_array.some === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"some\" method."); }
			if (typeof sample_array.sort === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"sort\" method."); }
			if (typeof sample_array.subarray === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"subarray\" method."); }
			if (typeof sample_array.toLocaleString === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"toLocaleString\" method."); }
			if (typeof sample_array.toReversed === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"toReversed\" method."); }
			if (typeof sample_array.toSorted === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"toSorted\" method."); }
			if (typeof sample_array.toString === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"toString\" method."); }
			if (typeof sample_array.values === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"values\" method."); }
			if (typeof sample_array.with === "function") { tests_passed++; }
			else { console.log("Typed arrays: Your browser does not support the \"with\" method."); }
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Int8Array object."); }
		try {
			new Uint8Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Uint8Array object."); }
		try {
			new Uint8ClampedArray;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Uint8ClampedArray object."); }
		try {
			new Int16Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Int16Array object."); }
		try {
			new Uint16Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Uint16Array object."); }
		try {
			new Int32Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Int32Array object."); }
		try {
			new Uint32Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Uint32Array object."); }
		try {
			new Float16Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Float16Array object."); }
		try {
			new Float32Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Float32Array object."); }
		try {
			new Float64Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the Float64Array object."); }
		try {
			new BigInt64Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the BigInt64Array object."); }
		try {
			new BigUint64Array;
			tests_passed++;
		}
		catch (error) { console.log("Typed arrays: Your browser does not support the BigUint64Array object."); }
		switch (tests_passed) {
			case 0:
				document.getElementById("typedarraystest").textContent = "FAIL";
				break;
			case 52:
				document.getElementById("typedarraystest").textContent = "PASS";
				break;
			default:
				document.getElementById("typedarraystest").textContent = "PARTIAL";
		}
	}
	catch (error) {
		document.getElementById("typedarraystest").textContent = "FAIL";
	}
	
	/* Internationalization test */
	try {
		if (typeof Intl === "object") {
			var tests_passed = 0;
			try {
				let sample_collator = new Intl.Collator("en-US");
				tests_passed++;
				if (typeof sample_collator.compare === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"compare\" method on the Collator object."); }
				if (typeof sample_collator.resolvedOptions === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"resolvedOptions\" method on the Collator object."); }
				if (typeof Intl.Collator.supportedLocalesOf === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"supportedLocalesOf\" method on the Collator object."); }
			}
			catch (error) { console.log("Internationalization: Your browser does not support the Collator object."); }
			try {
				let sample_datetime_format = new Intl.DateTimeFormat("en-US");
				tests_passed++;
				if (typeof sample_datetime_format.format === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"format\" method on the DateTimeFormat object."); }
				if (typeof sample_datetime_format.formatRange === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"formatRange\" method on the DateTimeFormat object."); }
				if (typeof sample_datetime_format.formatRangeToParts === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"formatRangeToParts\" method on the DateTimeFormat object."); }
				if (typeof sample_datetime_format.resolvedOptions === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"resolvedOptions\" method on the DateTimeFormat object."); }
				if (typeof Intl.DateTimeFormat.supportedLocalesOf === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"supportedLocalesOf\" method on the DateTimeFormat object."); }
			}
			catch (error) { console.log("Internationalization: Your browser does not support the DateTimeFormat object."); }
			try {
				let sample_display_names = new Intl.DisplayNames(["en"], {type: "region" });
				tests_passed++;
				if (typeof sample_display_names.of === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"of\" method on the DisplayNames object."); }
				if (typeof sample_display_names.resolvedOptions === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"resolvedOptions\" method on the DisplayNames object."); }
				if (typeof Intl.DisplayNames.supportedLocalesOf === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"supportedLocalesOf\" method on the DisplayNames object."); }
			}
			catch (error) { console.log("Internationalization: Your browser does not support the DisplayNames object."); }
			try {
				let sample_list_format = new Intl.ListFormat("en-US");
				tests_passed++;
				if (typeof sample_list_format.format === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"format\" method on the ListFormat object."); }
				if (typeof sample_list_format.formatToParts === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"formatToParts\" method on the ListFormat object."); }
				if (typeof sample_list_format.resolvedOptions === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"resolvedOptions\" method on the ListFormat object."); }
				if (typeof Intl.ListFormat.supportedLocalesOf === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"supportedLocalesOf\" method on the ListFormat object."); }
			}
			catch (error) { console.log("Internationalization: Your browser does not support the ListFormat object."); }
			try {
				let sample_locale = new Intl.Locale("en-US");
				tests_passed++;
				if ("baseName" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"baseName\" accessor property on the Locale object."); }
				if ("calendar" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"calendar\" accessor property on the Locale object."); }
				if ("caseFirst" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"caseFirst\" accessor property on the Locale object."); }
				if ("collation" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"collation\" accessor property on the Locale object."); }
				if (typeof sample_locale.getCalendars === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getCalendars\" method on the Locale object."); }
				if (typeof sample_locale.getCollations === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getCollations\" method on the Locale object."); }
				if (typeof sample_locale.getHourCycles === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getHourCycles\" method on the Locale object."); }
				if (typeof sample_locale.getNumberingSystems === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getNumberingSystems\" method on the Locale object."); }
				if (typeof sample_locale.getTextInfo === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getTextInfo\" method on the Locale object."); }
				if (typeof sample_locale.getTimeZones === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getTimeZones\" method on the Locale object."); }
				if (typeof sample_locale.getCalendars === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getCalendars\" method on the Locale object."); }
				if (typeof sample_locale.getWeekInfo === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"getWeekInfo\" method on the Locale object."); }
				if ("hourCycle" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"hourCycle\" accessor property on the Locale object."); }
				if ("language" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"language\" accessor property on the Locale object."); }
				if (typeof sample_locale.maximize === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"maximize\" method on the Locale object."); }
				if (typeof sample_locale.minimize === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"minimize\" method on the Locale object."); }
				if ("numberingSystem" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"numberingSystem\" accessor property on the Locale object."); }
				if ("numeric" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"numeric\" accessor property on the Locale object."); }
				if ("region" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"region\" accessor property on the Locale object."); }
				if ("script" in sample_locale) { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"script\" accessor property on the Locale object."); }
				if (typeof sample_locale.toString === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"toString\" method on the Locale object."); }
			}
			catch (error) { console.log("Internationalization: Your browser does not support the Locale object."); }
			try {
				let sample_number_format = new Intl.NumberFormat("en-US");
				var format_test_passed = false;
				tests_passed++;
				if (typeof sample_number_format.format === "function") {
					tests_passed++;
					format_test_passed = true;
				}
				else { console.log("Internationalization: Your browser does not support the \"format\" method on the NumberFormat object."); }
				if (typeof sample_number_format.formatRange === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"formatRange\" method on the NumberFormat object."); }
				if (typeof sample_number_format.formatRangeToParts === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"formatRangeToParts\" method on the NumberFormat object."); }
				if (format_test_passed === true) {
					let negative_test = sample_number_format.format(-128);
					if (negative_test.includes('-')) { tests_passed++; }
					else { console.log("Internationalization: Your browser does not support negative values on the NumberFormat object."); }
				}
				if (typeof sample_number_format.resolvedOptions === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"resolvedOptions\" method on the NumberFormat object."); }
				if (typeof Intl.NumberFormat.supportedLocalesOf === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"supportedLocalesOf\" method on the NumberFormat object."); }
			}
			catch (error) { console.log("Internationalization: Your browser does not support the NumberFormat object."); }
			try {
				let sample_plural_rules = new Intl.PluralRules("en-US");
				tests_passed++;
				if (typeof sample_plural_rules.resolvedOptions === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"resolvedOptions\" method on the DisplayNames object."); }
				if (typeof sample_plural_rules.select === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"select\" method on the DisplayNames object."); }
				if (typeof sample_plural_rules.selectRange === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"selectRange\" method on the DisplayNames object."); }
				if (typeof Intl.PluralRules.supportedLocalesOf === "function") { tests_passed++; }
				else { console.log("Internationalization: Your browser does not support the \"supportedLocalesOf\" method on the DisplayNames object."); }
			}
			catch (error) { console.log("Internationalization: Your browser does not support the DisplayNames object."); }
			switch (tests_passed) {
				case 0:
					document.getElementById("internationaltest").textContent = "FAIL";
					break;
				case 53:
					document.getElementById("internationaltest").textContent = "PASS";
					break;
				default:
					document.getElementById("internationaltest").textContent = "PARTIAL";
			}
		}
		else {
			document.getElementById("internationaltest").textContent = "FAIL";
			console.log("Internationalization: Your browser does not support the Intl object.");
		}
	}
	catch (error) {
		document.getElementById("internationaltest").textContent = "FAIL";
	}
	
	/* Async and Await test */
	try {
		new Function("return async function(){}")();
		new Function("return async function(){ await Promise.resolve(); }")();
		document.getElementById("asyncawaittest").textContent = "PASS";
	}
	catch (error) {
		document.getElementById("asyncawaittest").textContent = "FAIL";
		console.log("Async and Await: Your browser does not support the async and await functions. If you believe this to be incorrect, please file a bug report.");
	}
	
	/* Base64 encoding and decoding test */
	try {
		if (typeof window.atob === "function") {
			document.getElementById("base64endectest").textContent = "PASS";
		}
		else {
			document.getElementById("base64endectest").textContent = "FAIL";
			console.log("Base64 encoding and decoding: Your browser does not support the \"atob\" method which is required for Base64 encoding and decoding.");
		}
	}
	catch (error) {
		document.getElementById("base64endectest").textContent = "FAIL";
		console.log("Base64 encoding and decoding: There was an error in running this test. If you believe this to be incorrect, please file a bug report.");
	}
	
	/* Mutation Observer test */
	try {
		if (typeof MutationObserver !== "undefined") {
			var tests_passed = 0;
			let sample_mutation_observer = new MutationObserver(function() {});
			if (typeof sample_mutation_observer.disconnect === "function") { tests_passed++; }
			else { console.log("Mutation Observer test: Your browser does not support the \"disconnect\" method."); }
			if (typeof sample_mutation_observer.observe === "function") { tests_passed++; }
			else { console.log("Mutation Observer test: Your browser does not support the \"observe\" method."); }
			if (typeof sample_mutation_observer.takeRecords === "function") { tests_passed++; }
			else { console.log("Mutation Observer test: Your browser does not support the \"takeRecords\" method."); }
			document.getElementById("mutationobservertest").textContent = (tests_passed === 3) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("mutationobservertest").textContent = "FAIL";
			console.log("Mutation Observer test: Your browser does not support the MutationObserver interface.");
		}
	}
	catch (error) {
		document.getElementById("mutationobservertest").textContent = "FAIL";
	}
	
	/* Intersection Observer test */
	try {
		if (typeof IntersectionObserver !== "undefined") {
			var tests_passed = 0;
			let sample_intersection_observer = new IntersectionObserver(function() {});
			if (typeof sample_intersection_observer.disconnect === "function") { tests_passed++; }
			else { console.log("Intersection Observer test: Your browser does not support the \"disconnect\" method."); }
			if (typeof sample_intersection_observer.observe === "function") { tests_passed++; }
			else { console.log("Intersection Observer test: Your browser does not support the \"observe\" method."); }
			if ("root" in sample_intersection_observer) { tests_passed++; }
			else { console.log("Intersection Observer test: Your browser does not support the \"root\" property."); }
			if ("rootMargin" in sample_intersection_observer) { tests_passed++; }
			else { console.log("Intersection Observer test: Your browser does not support the \"rootMargin\" property."); }
			if (typeof sample_intersection_observer.takeRecords === "function") { tests_passed++; }
			else { console.log("Intersection Observer test: Your browser does not support the \"takeRecords\" method."); }
			if ("thresholds" in sample_intersection_observer) { tests_passed++; }
			else { console.log("Intersection Observer test: Your browser does not support the \"thresholds\" property."); }
			if (typeof sample_intersection_observer.unobserve === "function") { tests_passed++; }
			else { console.log("Intersection Observer test: Your browser does not support the \"unobserve\" method."); }
			document.getElementById("intersectionobservertest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("intersectionobservertest").textContent = "FAIL";
			console.log("Intersection Observer test: Your browser does not support the IntersectionObserver interface.");
		}
	}
	catch (error) {
		document.getElementById("intersectionobservertest").textContent = "FAIL";
	}
	
	/* Resize Observer test */
	try {
		if (typeof ResizeObserver !== "undefined") {
			var tests_passed = 0;
			let sample_resize_observer = new ResizeObserver(function() {});
			if (typeof sample_resize_observer.disconnect === "function") { tests_passed++; }
			else { console.log("Resize Observer test: Your browser does not support the \"disconnect\" method."); }
			if (typeof sample_resize_observer.observe === "function") { tests_passed++; }
			else { console.log("Resize Observer test: Your browser does not support the \"observe\" method."); }
			if (typeof sample_resize_observer.unobserve === "function") { tests_passed++; }
			else { console.log("Resize Observer test: Your browser does not support the \"unobserve\" method."); }
			document.getElementById("resizeobservertest").textContent = (tests_passed === 3) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("resizeobservertest").textContent = "FAIL";
			console.log("Resize Observer test: Your browser does not support the ResizeObserver interface.");
		}
	}
	catch (error) {
		document.getElementById("resizeobservertest").textContent = "FAIL";
	}
	
	/* URL interface test*/
	try {
		if (typeof URL !== "undefined") {
			var tests_passed = 0;
			let sample_url = new URL("https://example.org");
			if (typeof URL.canParse === "function") { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"canParse\" static method."); }
			if (typeof URL.createObjectURL === "function") { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"createObjectURL\" static method."); }
			if ("hash" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"hash\" property."); }
			if ("host" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"host\" property."); }
			if ("hostname" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"hostname\" property."); }
			if ("hash" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"hash\" property."); }
			if ("href" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"href\" property."); }
			if ("origin" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"origin\" property."); }
			if (typeof URL.parse === "function") { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"parse\" static method."); }
			if ("password" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"password\" property."); }
			if ("pathname" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"pathname\" property."); }
			if ("port" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"port\" property."); }
			if ("origin" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"origin\" property."); }
			if ("protocol" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"protocol\" property."); }
			if (typeof URL.revokeObjectURL === "function") { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"revokeObjectURL\" static method."); }
			if ("search" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"search\" property."); }
			if ("searchParams" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"searchParams\" property."); }
			if (typeof sample_url.toJSON === "function") { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"toJSON\" method."); }
			if (typeof sample_url.toString === "function") { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"toString\" method."); }
			if ("username" in sample_url) { tests_passed++; }
			else { console.log("URL interface: Your browser does not support the \"username\" property."); }
			document.getElementById("urlinttest").textContent = (tests_passed === 20) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("urlinttest").textContent = "FAIL";
			console.log("URL interface: Your browser does not support the URL API.");
		}
	}
	catch (error) {
		document.getElementById("urlinttest").textContent = "FAIL";
	}
	
	/* URLSearchParams interface */
	try {
		if (typeof URLSearchParams !== "undefined") {
			var tests_passed = 0;
			let sample_urlsp = new URLSearchParams("?key=value");
			if (typeof sample_urlsp[Symbol.iterator] === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"@@iterator\" method."); }
			if (typeof sample_urlsp.append === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"append\" method."); }
			if (typeof sample_urlsp.delete === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"delete\" method."); }
			if (typeof sample_urlsp.entries === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"entries\" method."); }
			if (typeof sample_urlsp.forEach === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"forEach\" method."); }
			if (typeof sample_urlsp.get === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"get\" method."); }
			if (typeof sample_urlsp.getAll === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"getAll\" method."); }
			if (typeof sample_urlsp.has === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"has\" method."); }
			if (typeof sample_urlsp.keys === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"keys\" method."); }
			if (typeof sample_urlsp.set === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"set\" method."); }
			if ("size" in sample_urlsp) { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"size\" property."); }
			if (typeof sample_urlsp.sort === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"sort\" method."); }
			if (typeof sample_urlsp.toString === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"toString\" method."); }
			if (typeof sample_urlsp.values === "function") { tests_passed++; }
			else { console.log("URLSearchParams interface: Your browser does not support the \"values\" method."); }
			document.getElementById("urlspinttest").textContent = (tests_passed === 14) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("urlspinttest").textContent = "FAIL";
			console.log("URLSearchParams interface: Your browser does not support the URLSearchParams interface.");
		}
	}
	catch (error) {
		document.getElementById("urlspinttest").textContent = "FAIL";
	}
	
	/* Encoding API test */
	try {
		var tests_passed = 0;
		if (typeof TextDecoder !== "undefined") {
			let sample_text_decoder = new TextDecoder();
			if (typeof sample_text_decoder.decode === "function") { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"decode\" method of the TextDecoder interface."); }
			if ("encoding" in sample_text_decoder) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"encoding\" property of the TextDecoder interface."); }
			if ("fatal" in sample_text_decoder) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"fatal\" property of the TextDecoder interface."); }
			if ("ignoreBOM" in sample_text_decoder) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"ignoreBOM\" property of the TextDecoder interface."); }
		}
		else {
			console.log("Encoding API test: Your browser does not support the TextDecoder interface.");
		}
		if (typeof TextEncoder !== "undefined") {
			let sample_text_encoder = new TextEncoder();
			if (typeof sample_text_encoder.encode === "function") { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"encode\" method of the TextEncoder interface."); }
			if (typeof sample_text_encoder.encodeInto === "function") { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"encodeInto\" method of the TextEncoder interface."); }
			if ("encoding" in sample_text_encoder) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"encoding\" property of the TextEncoder interface."); }
		}
		else {
			console.log("Encoding API test: Your browser does not support the TextEncoder interface.");
		}
		if (typeof TextDecoderStream !== "undefined") {
			let sample_text_decoder_stream = new TextDecoderStream("utf8");
			if ("encoding" in sample_text_decoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"encoding\" property of the TextDecoderStream interface."); }
			if ("fatal" in sample_text_decoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"fatal\" property of the TextDecoderStream interface."); }
			if ("ignoreBOM" in sample_text_decoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"ignoreBOM\" property of the TextDecoderStream interface."); }
			if ("readable" in sample_text_decoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"readable\" property of the TextDecoderStream interface."); }
			if ("writable" in sample_text_decoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"writable\" property of the TextDecoderStream interface."); }
		}
		else {
			console.log("Encoding API test: Your browser does not support the TextDecoderStream interface.");
		}
		if (typeof TextEncoderStream !== "undefined") {
			let sample_text_encoder_stream = new TextEncoderStream();
			if ("encoding" in sample_text_encoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"encoding\" property of the TextEncoderStream interface."); }
			if ("readable" in sample_text_encoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"readable\" property of the TextEncoderStream interface."); }
			if ("writable" in sample_text_encoder_stream) { tests_passed++; }
			else { console.log("Encoding API test: Your browser does not support the \"writable\" property of the TextEncoderStream interface."); }
		}
		else {
			console.log("Encoding API test: Your browser does not support the TextEncoderStream interface.");
		}
		switch (tests_passed) {
			case 0:
				document.getElementById("enapitest").textContent = "FAIL";
				break;
			case 15:
				document.getElementById("enapitest").textContent = "PASS";
				break;
			default:
				document.getElementById("enapitest").textContent = "PARTIAL";
		}
	}
	catch (error) {
		document.getElementById("enapitest").textContent = "FAIL";
	}
	
	/* WebAssembly test */
	try {
		if (typeof WebAssembly !== "undefined") {
			var tests_passed = 0;
			if (typeof WebAssembly.compile === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"compile\" method."); }
			if (typeof WebAssembly.CompileError === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"CompileError\" object."); }
			if (typeof WebAssembly.compileStreaming === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"compileStreaming\" method."); }
			if (typeof WebAssembly.Exception === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"Exception\" object."); }
			if (typeof WebAssembly.Exception.prototype.getArg === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"getArg\" method of the Exception object."); }
			if (typeof WebAssembly.Exception.prototype.is === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"is\" method of the Exception object."); }
			if (typeof WebAssembly.Global === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"Global\" object."); }
			let my_global = new WebAssembly.Global({ value: 'i32', mutable: true }, 42);
			if ("value" in my_global) { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"value\" property of the Global object."); }
			if (typeof WebAssembly.Global.prototype.valueOf === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"valueOf\" method of the Global object."); }
			if (typeof WebAssembly.Instance === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"Instance\" object."); }
			if (typeof WebAssembly.instantiate === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"instantiate\" method."); }
			if (typeof WebAssembly.instantiateStreaming === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"instantiateStreaming\" method."); }
			if (typeof WebAssembly.LinkError === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"LinkError\" object."); }
			if (typeof WebAssembly.Memory === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"Memory\" object."); }
			let my_memory = new WebAssembly.Memory({ initial: 1 });
			if ("buffer"in my_memory) { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"buffer\" property of the Memory object."); }
			if (typeof WebAssembly.Memory.prototype.grow === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"grow\" method of the Memory object."); }
			if (typeof WebAssembly.Module === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"Module\" object."); }
			if (typeof WebAssembly.Module.customSections === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"customSections\" static method of the Module object."); }
			if (typeof WebAssembly.Module.exports === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"exports\" static method of the Module object."); }
			if (typeof WebAssembly.Module.imports === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"imports\" static method of the Module object."); }
			if (typeof WebAssembly.RuntimeError === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"RuntimeError\" object."); }
			if (typeof WebAssembly.Table === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"Table\" object."); }
			if (typeof WebAssembly.Table.prototype.get === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"get\" method of the Table object."); }
			if (typeof WebAssembly.Table.prototype.grow === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"grow\" method of the Table object."); }
			let my_table = new WebAssembly.Table({ element: 'anyfunc', initial: 1 });
			if ("length" in my_table) { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"length\" property of the Table object."); }
			if (typeof WebAssembly.Table.prototype.set === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"set\" method of the Table object."); }
			if (typeof WebAssembly.Tag === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"Tag\" object."); }
			if (typeof WebAssembly.Tag.prototype.type === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"type\" method of the Tag object."); }
			if (typeof WebAssembly.validate === "function") { tests_passed++; }
			else { console.log("WebAssembly test: Your browser does not support the \"validate\" method."); }
			document.getElementById("webassemblytest").textContent = (tests_passed === 29) ? "PASS" : "PARTIAL";
		}
		else {
			document.getElementById("webassemblytest").textContent = "FAIL";
			console.log("WebAssembly test: Your browser does not support WebAssembly.");
		}
	}
	catch (error) {
		document.getElementById("webassemblytest").textContent = "FAIL";
	}
};