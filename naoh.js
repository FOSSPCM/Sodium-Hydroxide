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
		}
	}
	catch (error) {
		document.getElementById("dialogtest").textContent = "FAIL";
	}
	
	/* Hidden attribute test */
	try {
		var sample_p = document.createElement("p");
		let hidden_test = "hidden" in sample_ol;
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
};