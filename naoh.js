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
			document.getElementById("doctypetest").style.color = "green";
		}
		else {
			document.getElementById("doctypetest").textContent = "FAIL";
			document.getElementById("doctypetest").style.color = "red";
			console.log("<!DOCTYPE> triggers standards mode: Your browser did not enter HTML5 standards mode.");
		}
	}
	catch (error) {
		document.getElementById("doctypetest").textContent = "FAIL";
		document.getElementById("doctypetest").style.color = "red";
		console.log("<!DOCTYPE> triggers standards mode: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* HTML Tokenizer test */
	var validhtml5 = '<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>Test</title></head><body><h1>Hello, world!</h1></body></html>';
	try {
		let tokenizer_test = document.createElement("div");
		tokenizer_test.innerHTML = validhtml5;
		document.getElementById("tokentest").textContent = (tokenizer_test.childNodes.length > 0) ? "PASS" : "FAIL";
		document.getElementById("tokentest").style.color = (tokenizer_test.childNodes.length > 0) ? "green" : "red";
		if (tokenizer_test <= 0) { console.log("HTML Tokenizer test: Your browser did not tokenize correctly."); }
	}
	catch (error) {
		document.getElementById("tokentest").textContent = "FAIL";
		document.getElementById("tokentest").style.color = "red";
		console.log("HTML Tokenizer test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* HTML Tree building test */
	let tree_test_element = document.getElementById("treetest");
	if (tree_test_element) {
		try {
			let tree_building_works = document.createElement("div") instanceof HTMLDivElement;
			tree_test_element.textContent = tree_building_works ? "PASS" : "FAIL";
			document.getElementById("treetest").style.color = (tree_building_works) ? "green" : "red";
			if (tree_building_works === false) { console.log("HTML Tree building test: Your browser does not support HTML Tree building."); }
		}
		catch (error) {
			tree_test_element.textContent = "FAIL";
			document.getElementById("treetest").style.color = "red";
			console.log("HTML Tree building test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
		}
	}
	
	/* Inline SVG test */
	try {
		let svg_works = !!document.createElementNS && !! document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
		document.getElementById("insvgtest").textContent = svg_works ? "PASS" : "FAIL";
		document.getElementById("insvgtest").style.color = (svg_works) ? "green" : "red";
		if (svg_works === false) { console.log("Inline SVG: Your browser does not support inline SVG."); }
	}
	catch (error) {
		document.getElementById("insvgtest").textContent = "FAIL";
		document.getElementById("insvgtest").style.color = "red";
		console.log("Inline SVG: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Inline MathML test */
	try {
		let mathml_works = !!document.createElement("math") && !! document.createElement("math").style && "textContent" in document.createElement("math");
		document.getElementById("inmathmltest").textContent = mathml_works ? "PASS" : "FAIL";
		document.getElementById("inmathmltest").style.color = (mathml_works) ? "green" : "red";
		if (mathml_works === false) { console.log("Inline MathML: Your browser does not support MathML."); }
	}
	catch (error) {
		document.getElementById("inmathmltest").textContent = "FAIL";
		document.getElementById("inmathmltest").style.color = "red";
		console.log("Inline MathML: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* ELEMENTS */
	
	/* Embedding custom non-visible data test */
	try {
		var data_test_elemnt = document.createElement("div");
		data_test_elemnt.setAttribute("data-test", "test-value");
		let data_attribute_works = "dataset" in data_test_elemnt && data_test_elemnt.dataset.test === "test-value";
		document.getElementById("datasettest").textContent = data_attribute_works ? "PASS" : "FAIL";
		document.getElementById("datasettest").style.color = data_attribute_works ? "green" : "red";
		if (!data_attribute_works) {
			console.log("Embedding custom non-visible data: Your browser does not support embedding custom non-visible data.");
		}
	}
	catch (error) {
		document.getElementById("datasettest").textContent = "FAIL";
		document.getElementById("datasettest").style.color = "red";
		console.log("Enabling custom non-visible data: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Section tag test */
	try {
		let section_test = !(document.createElement("section") instanceof HTMLUnknownElement);
		document.getElementById("sectiontest").textContent = section_test ? "PASS" : "FAIL";
		document.getElementById("sectiontest").style.color = section_test ? "green" : "red";
		if (!section_test) {
			console.log("<section>: Your browser does not support the \"section\" element.");
		}
	}
	catch (error) {
		document.getElementById("sectiontest").textContent = "FAIL";
		document.getElementById("sectiontest").style.color = "red";
		console.log("<section>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Nav tag test */
	try {
		let nav_test = !(document.createElement("nav") instanceof HTMLUnknownElement);
		document.getElementById("navtest").textContent = nav_test ? "PASS" : "FAIL";
		document.getElementById("navtest").style.color = nav_test ? "green" : "red";
		if (!nav_test) {
			console.log("<nav>: Your browser does not support the \"nav\" element.");
		}
	}
	catch (error) {
		document.getElementById("navtest").textContent = "FAIL";
		document.getElementById("navtest").style.color = "red";
		console.log("<nav>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Article tag test */
	try {
		let article_test = !(document.createElement("article") instanceof HTMLUnknownElement);
		document.getElementById("articletest").textContent = article_test ? "PASS" : "FAIL";
		document.getElementById("articletest").style.color = article_test ? "green" : "red";
		if (!article_test) {
			console.log("<article>: Your browser does not support the \"article\" element.");
		}
	}
	catch (error) {
		document.getElementById("articletest").textContent = "FAIL";
		document.getElementById("articletest").style.color = "red";
		console.log("<article>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Aside tag test */
	try {
		let aside_test = !(document.createElement("aside") instanceof HTMLUnknownElement);
		document.getElementById("asidetest").textContent = aside_test ? "PASS" : "FAIL";
		document.getElementById("asidetest").style.color = aside_test ? "green" : "red";
		if (!aside_test) {
			console.log("<aside>: Your browser does not support the \"aside\" element.");
		}
	}
	catch (error) {
		document.getElementById("asidetest").textContent = "FAIL";
		document.getElementById("asidetest").style.color = "red";
		console.log("<aside>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Header tag test */
	try {
		let header_test = !(document.createElement("header") instanceof HTMLUnknownElement);
		document.getElementById("headertest").textContent = header_test ? "PASS" : "FAIL";
		document.getElementById("headertest").style.color = header_test ? "green" : "red";
		if (!header_test) {
			console.log("<header>: Your browser does not support the \"header\" element.");
		}
	}
	catch (error) {
		document.getElementById("headertest").textContent = "FAIL";
		document.getElementById("headertest").style.color = "red";
		console.log("<header>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Footer tag test */
	try {
		let footer_test = !(document.createElement("footer") instanceof HTMLUnknownElement);
		document.getElementById("footertest").textContent = footer_test ? "PASS" : "FAIL";
		document.getElementById("footertest").style.color = footer_test ? "green" : "red";
		if (!footer_test) {
			console.log("<footer>: Your browser does not support the \"footer\" element.");
		}
	}
	catch (error) {
		document.getElementById("footertest").textContent = "FAIL";
		document.getElementById("footertest").style.color = "red";
		console.log("<footer>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Main tag test */
	try {
		let main_test = !(document.createElement("main") instanceof HTMLUnknownElement);
		document.getElementById("maintest").textContent = main_test ? "PASS" : "FAIL";
		document.getElementById("maintest").style.color = main_test ? "green" : "red";
		if (!main_test) {
			console.log("<main>: Your browser does not support the \"main\" element.");
		}
	}
	catch (error) {
		document.getElementById("maintest").textContent = "FAIL";
		document.getElementById("maintest").style.color = "red";
		console.log("<main>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Figure tag test */
	try {
		let figure_test = !(document.createElement("figure") instanceof HTMLUnknownElement);
		document.getElementById("figuretest").textContent = figure_test ? "PASS" : "FAIL";
		document.getElementById("figuretest").style.color = figure_test ? "green" : "red";
		if (!figure_test) {
			console.log("<figure>: Your browser does not support the \"figure\" element.");
		}
	}
	catch (error) {
		document.getElementById("figuretest").textContent = "FAIL";
		document.getElementById("figuretest").style.color = "red";
		console.log("<figure>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Figcaption tag test */
	try {
		let figcaption_test = !(document.createElement("figcaption") instanceof HTMLUnknownElement);
		document.getElementById("figcaptiontest").textContent = figcaption_test ? "PASS" : "FAIL";
		document.getElementById("figcaptiontest").style.color = figcaption_test ? "green" : "red";
		if (!figcaption_test) {
			console.log("<figcaption>: Your browser does not support the \"figcaption\" element.");
		}
	}
	catch (error) {
		document.getElementById("figcaptiontest").textContent = "FAIL";
		document.getElementById("figcaptiontest").style.color = "red";
		console.log("<figcaption>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Reversed attribute in ol test */
	try {
		var sample_ol = document.createElement("ol");
		let reversed_ol_test = "reversed" in sample_ol;
		document.getElementById("reversedoltest").textContent = reversed_ol_test ? "PASS" : "FAIL";
		document.getElementById("reversedoltest").style.color = reversed_ol_test ? "green" : "red";
		if (!reversed_ol_test) {
			console.log("\"reversed\" attribute works on the \"ol\" element: Your browser does not support the \"reversed\" attribute on the \"ol\" element.");
		}
	}
	catch (error) {
		document.getElementById("reversedoltest").textContent = "FAIL";
		document.getElementById("reversedoltest").style.color = "red";
		console.log("\"reversed\" attribute works on the \"ol\" element: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Download attribute in "a" test */
	try {
		var sample_a = document.createElement("a");
		let download_a_test = "download" in sample_a;
		document.getElementById("downloadatest").textContent = download_a_test ? "PASS" : "FAIL";
		document.getElementById("downloadatest").style.color = download_a_test ? "green" : "red";
		if (!download_a_test) {
			console.log("\"download\" attribute works on the \"a\" element: Your browser does not support the \"download\" attribute on the \"a\" element.");
		}
	}
	catch (error) {
		document.getElementById("downloadatest").textContent = "FAIL";
		document.getElementById("downloadatest").style.color = "red";
		console.log("\"download\" attribute works on the \"a\" element: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ping attribute in "a" test */
	try {
		sample_a = document.createElement("a");
		let ping_a_test = "ping" in sample_a;
		document.getElementById("pingatest").textContent = ping_a_test ? "PASS" : "FAIL";
		document.getElementById("pingatest").style.color = ping_a_test ? "green" : "red";
		if (!ping_a_test) {
			console.log("\"ping\" attribute works on the \"a\" element: Your browser does not support the \"ping\" attribute on the \"a\" element.");
		}
	}
	catch (error) {
		document.getElementById("pingatest").textContent = "FAIL";
		document.getElementById("pingatest").style.color = "red";
		console.log("\"ping\" attribute works on the \"a\" element: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* RelList attribute in "a" test */
	try {
		sample_a = document.createElement("a");
		let rellist_a_test = "relList" in sample_a;
		document.getElementById("rellistatest").textContent = rellist_a_test ? "PASS" : "FAIL";
		document.getElementById("rellistatest").style.color = rellist_a_test ? "green" : "red";
		if (!rellist_a_test) {
			console.log("\"relList\" attribute works on the \"a\" element: Your browser does not support the \"relList\" attribute on the \"a\" element.");
		}
	}
	catch (error) {
		document.getElementById("rellistatest").textContent = "FAIL";
		document.getElementById("rellistatest").style.color = "red";
		console.log("\"relList\" attribute works on the \"a\" element: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Mark tag test */
	try {
		let mark_test = !(document.createElement("mark") instanceof HTMLUnknownElement);
		document.getElementById("marktest").textContent = mark_test ? "PASS" : "FAIL";
		document.getElementById("marktest").style.color = mark_test ? "green" : "red";
		if (!mark_test) {
			console.log("<mark>: Your browser does not support the \"mark\" element.");
		}
	}
	catch (error) {
		document.getElementById("marktest").textContent = "FAIL";
		document.getElementById("marktest").style.color = "red";
		console.log("<mark>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ruby tags test */
	try {
		let ruby_test = !(document.createElement("ruby") instanceof HTMLUnknownElement);
		let rt_test = !(document.createElement("rt") instanceof HTMLUnknownElement);
		let rp_test = !(document.createElement("rp") instanceof HTMLUnknownElement);
		document.getElementById("rubytest").textContent = (ruby_test && rt_test && rp_test) ? "PASS" : "FAIL";
		document.getElementById("rubytest").style.color = (ruby_test && rt_test && rp_test) ? "green" : "red";
		if (!ruby_test || !rt_test || !rp_test) {
			console.log("<ruby>, <rt>, and <rp>: Your browser does not support the \"ruby,\" \"rt,\" and/or the \"rp\" elements.");
		}
	}
	catch (error) {
		document.getElementById("rubytest").textContent = "FAIL";
		document.getElementById("rubytest").style.color = "red";
		console.log("<ruby>, <rt>, and <rp>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Time tag test */
	// Test for "datetime" attribute moved to manual testing.
	try {
		let time_test = !(document.createElement("time") instanceof HTMLUnknownElement);
		document.getElementById("timetest").textContent = time_test ? "PASS" : "FAIL";
		document.getElementById("timetest").style.color = time_test ? "green" : "red";
		if (!time_test) {
			console.log("<time>: Your browser does not support the \"time\" element.");
		}
	}
	catch (error) {
		document.getElementById("timetest").textContent = "FAIL";
		document.getElementById("timetest").style.color = "red";
		console.log("<time>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Data tag test */
	try {
		let data_test = !(document.createElement("data") instanceof HTMLUnknownElement);
		document.getElementById("datatest").textContent = data_test ? "PASS" : "FAIL";
		document.getElementById("datatest").style.color = data_test ? "green" : "red";
		if (!data_test) {
			console.log("<data>: Your browser does not support the \"data\" element.");
		}
	}
	catch (error) {
		document.getElementById("datatest").textContent = "FAIL";
		document.getElementById("datatest").style.color = "red";
		console.log("<data>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Word break tag test */
	try {
		let wbr_test = !(document.createElement("wbr") instanceof HTMLUnknownElement);
		document.getElementById("wbrtest").textContent = wbr_test ? "PASS" : "FAIL";
		document.getElementById("wbrtest").style.color = wbr_test ? "green" : "red";
		if (!wbr_test) {
			console.log("<wbr>: Your browser does not support the \"wbr\" element.");
		}
	}
	catch (error) {
		document.getElementById("wbrtest").textContent = "FAIL";
		document.getElementById("wbrtest").style.color = "red";
		console.log("<wbr>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Details tag test */
	try {
		let details_tag_test = !(document.createElement("details") instanceof HTMLUnknownElement);
		if (details_tag_test === true) {
			sample_details = document.createElement("details");
			let details_test = "open" in sample_details;
			document.getElementById("detailstest").textContent = details_test ? "PASS" : "PARTIAL";
			document.getElementById("detailstest").style.color = details_test ? "green" : "black";
		}
		else {
			document.getElementById("detailstest").textContent = "FAIL";
			console.log("<details>: Your browser does not support the \"details\" element.");
		}
	}
	catch (error) {
		document.getElementById("detailstest").textContent = "FAIL";
		document.getElementById("detailstest").style.color = "red";
		console.log("<details>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Summary tag test */
	try {
		let summary_test = !(document.createElement("summary") instanceof HTMLUnknownElement);
		document.getElementById("summarytest").textContent = summary_test ? "PASS" : "FAIL";
		document.getElementById("summarytest").style.color = summary_test ? "green" : "red";
		if (!summary_test) {
			console.log("<summary>: Your browser does not support the \"summary\" element.");
		}
	}
	catch (error) {
		document.getElementById("summarytest").textContent = "FAIL";
		document.getElementById("summarytest").style.color = "red";
		console.log("<summary>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Dialog tag test */
	try {
		let dialog_tag_test = !(document.createElement("dialog") instanceof HTMLUnknownElement);
		if (dialog_tag_test === true) {
			sample_dialog = document.createElement("dialog");
			let dialog_test = "open" in sample_details;
			document.getElementById("dialogtest").textContent = dialog_test ? "PASS" : "PARTIAL";
			document.getElementById("dialogtest").style.color = dialog_test ? "green" : "black";
		}
		else {
			document.getElementById("dialogtest").textContent = "FAIL";
			document.getElementById("dialogtest").style.color = "red";
			console.log("<dialog>: Your browser does not support the \"dialog\" element.");
		}
	}
	catch (error) {
		document.getElementById("dialogtest").textContent = "FAIL";
		document.getElementById("dialogtest").style.color = "red";
		console.log("<dialog>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Hidden attribute test */
	try {
		var sample_p = document.createElement("p");
		let hidden_test = "hidden" in sample_p;
		document.getElementById("hiddentest").textContent = hidden_test ? "PASS" : "FAIL";
		document.getElementById("hiddentest").style.color = hidden_test ? "green" : "red";
		if (!hidden_test) {
			console.log("\"hidden\" attribute: Your browser does not support the \"hidden\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("hiddentest").textContent = "FAIL";
		document.getElementById("hiddentest").style.color = "red";
		console.log("\"hidden\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Translate attribute test */
	try {
		var sample_p = document.createElement("p");
		let translate_test = "translate" in sample_p;
		document.getElementById("translatetest").textContent = translate_test ? "PASS" : "FAIL";
		document.getElementById("translatetest").style.color = translate_test ? "green" : "red";
		if (!translate_test) {
			console.log("\"translate\" attribute: Your browser does not support the \"translate\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("translatetest").textContent = "FAIL";
		document.getElementById("translatetest").style.color = "red";
		console.log("\"translate\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Access Key Label property test */
	// The accesskey attribute is removed for manual testing.
	try {
		var sample_p = document.createElement("p");
		let access_key_label_test = "accessKeyLabel" in sample_p;
		document.getElementById("accesskeylabeltest").textContent = access_key_label_test ? "PASS" : "FAIL";
		document.getElementById("accesskeylabeltest").style.color = access_key_label_test ? "green" : "red";
		if (!access_key_label_test) {
			console.log("\"accessKeyLabel\" property: Your browser does not support the \"accessKeyLabel\" property.");
		}
	}
	catch (error) {
		document.getElementById("accesskeylabeltest").textContent = "FAIL";
		document.getElementById("accesskeylabeltest").style.color = "red";
		console.log("\"accessKeyLabel\" property: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* outerHTML property test */
	try {
		if ("outerHTML" in document.createElement("div")) {
			document.getElementById("outerhtmltest").textContent = "PASS";
			document.getElementById("outerhtmltest").style.color = "green";
		}
		else {
			document.getElementById("outerhtmltest").textContent = "FAIL";
			document.getElementById("outerhtmltest").style.color = "red";
			console.log("\"outerHTML\" property: Your browser does not support the \"outerHTML\" property.");
		}
	}
	catch (error) {
		document.getElementById("outerhtmltest").textContent = "FAIL";
		document.getElementById("outerhtmltest").style.color = "red";
		console.log("\"outerHTML\" property: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* insertAdjacentHTML method test */
	try {
		if ("insertAdjacentHTML" in document.createElement("div")) {
			document.getElementById("iahtmltest").textContent = "PASS";
			document.getElementById("iahtmltest").style.color = "green";
		}
		else {
			document.getElementById("iahtmltest").textContent = "FAIL";
			document.getElementById("iahtmltest").style.color = "red";
			console.log("\"insertAdjacentHTML\" method: Your browser does not support the \"insertAdjacentHTML\" method.");
		}
	}
	catch (error) {
		document.getElementById("iahtmltest").textContent = "FAIL";
		document.getElementById("iahtmltest").style.color = "red";
		console.log("\"insertAdjacentHTML\" method: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* FORMS */
	
	/* Input of type Text test */
	try {
		let input_text_test = document.createElement("input");
		input_text_test.type = "text";
		if (input_text_test.type === "text") {
			let selection_direction_test = "selectionDirection" in input_text_test;
			document.getElementById("textinputtest").textContent = selection_direction_test ? "PASS" : "PARTIAL";
			document.getElementById("textinputtest").style.color = selection_direction_test ? "green" : "black";
			if (!selection_direction_test) {
				console.log("Input of type \"text\": Your browser does not support the \"selectionDirection\" property.");
			}
		}
		else {
			document.getElementById("textinputtest").textContent = "FAIL";
			document.getElementById("textinputtest").style.color = "red";
			console.log("Input of type \"text\": Your browser does not support the \"text\" input type.");
		}
	}
	catch (error) {
		document.getElementById("textinputtest").textContent = "FAIL";
		document.getElementById("textinputtest").style.color = "red";
		console.log("Input of type \"text\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Search test */
	try {
		let input_search_test = document.createElement("input");
		input_search_test.type = "search";
		document.getElementById("searchinputtest").textContent = (input_search_test.type === "search") ? "PASS" : "FAIL";
		document.getElementById("searchinputtest").style.color = (input_search_test.type === "search") ? "green" : "red";
		if (input_search_test.type !== "search") {
			console.log("Input of type \"search\": Your browser does not support the \"search\" input type.");
		}
	}
	catch (error) {
		document.getElementById("searchinputtest").textContent = "FAIL";
		document.getElementById("searchinputtest").style.color = "red";
		console.log("Input of type \"search\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Tel test */
	try {
		let input_tel_test = document.createElement("input");
		input_tel_test.type = "tel";
		document.getElementById("telinputtest").textContent = (input_tel_test.type === "tel") ? "PASS" : "FAIL";
		document.getElementById("telinputtest").style.color = (input_tel_test.type === "tel") ? "green" : "red";
		if (input_tel_test.type !== "tel") {
			console.log("Input of type \"tel\": Your browser does not support the \"tel\" input type.");
		}
	}
	catch (error) {
		document.getElementById("telinputtest").textContent = "FAIL";
		document.getElementById("telinputtest").style.color = "red";
		console.log("Input of type \"tel\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type URL test */
	try {
		let input_url_test = document.createElement("input");
		input_url_test.type = "url";
		if (input_url_test.type === "url") {
			input_url_test.value = "bad-url";
			document.getElementById("urlinputtest").textContent = (!input_url_test.checkValidity()) ? "PASS" : "PARTIAL";
			document.getElementById("urlinputtest").style.color = (!input_url_test.checkValidity()) ? "green" : "black";
			if (document.getElementById("urlinputtest").textContent === "PARTIAL") {
				console.log("Input of type \"url\": Your browser does not handle an ivalid URL correctly.");
			}
		}
		else {
			document.getElementById("urlinputtest").textContent = "FAIL";
			document.getElementById("urlinputtest").style.color = "red";
			console.log("Input of type \"url\": Your browser does not support the \"url\" input type.");
		}
	}
	catch (error) {
		document.getElementById("urlinputtest").textContent = "FAIL";
		document.getElementById("urlinputtest").style.color = "red";
		console.log("Input of type \"url\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Email test */
	try {
		let input_email_test = document.createElement("input");
		input_email_test.type = "email";
		if (input_email_test.type === "email") {
			input_email_test.value = "bad-email";
			document.getElementById("emailinputtest").textContent = (!input_email_test.checkValidity()) ? "PASS" : "PARTIAL";
			document.getElementById("emailinputtest").style.color = (!input_email_test.checkValidity()) ? "green" : "black";
			if (document.getElementById("emailinputtest").textContent === "PARTIAL") {
				console.log("Input of type \"email\": Your browser does not handle an ivalid Email address correctly.");
			}
		}
		else {
			document.getElementById("emailinputtest").textContent = "FAIL";
			document.getElementById("emailinputtest").style.color = "red";
			console.log("Input of type \"email\": Your browser does not support the \"email\" input type.");
		}
	}
	catch (error) {
		document.getElementById("emailinputtest").textContent = "FAIL";
		document.getElementById("emailinputtest").style.color = "red";
		console.log("Input of type \"email\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Date test */
	try {
		let input_date_test = document.createElement("input");
		input_date_test.type = "date";
		if (input_date_test.type === "date") {
			var tests_passed = 0;
			input_date_test.value = "bad-date";
			if (input_date_test.value === "") { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not handle invalid dates correctly."); }
			let min_date_test = "min" in input_date_test;
			if (min_date_test) { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not support the \"min\" attribute."); }
			let max_date_test = "max" in input_date_test;
			if (max_date_test) { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not support the \"max\" attribute."); }
			let step_date_test = "step" in input_date_test;
			if (step_date_test) { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not support the \"step\" attribute."); }
			if ("stepDown" in input_date_test) { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not support the \"stepDown\" method."); }
			if ("stepUp" in input_date_test) { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not support the \"stepUp\" method."); }
			if ("valueAsDate" in input_date_test) { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not support the \"valueAsDate\" method."); }
			if ("valueAsNumber" in input_date_test) { tests_passed++; }
			else { console.log("Input of type \"date\": Your browser does not support the \"valueAsNumber\" method."); }
			document.getElementById("dateinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
			document.getElementById("dateinputtest").style.color = (tests_passed === 8) ? "green" : "black";
		}
		else {
			document.getElementById("dateinputtest").textContent = "FAIL";
			document.getElementById("dateinputtest").style.color = "red";
			console.log("Input of type \"date\": Your browser does not support the \"date\" input type.");
		}
	}
	catch (error) {
		document.getElementById("dateinputtest").textContent = "FAIL";
		document.getElementById("dateinputtest").style.color = "red";
		console.log("Input of type \"date\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Month test */
	try {
		let input_month_test = document.createElement("input");
		input_month_test.type = "month";
		if (input_month_test.type === "month") {
			var tests_passed = 0;
			input_month_test.value = "bad-month";
			if (input_month_test.value === "") { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not handle invalid months correctly."); }
			let min_month_test = "min" in input_month_test;
			if (min_month_test) { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not support the \"min\" attribute."); }
			let max_month_test = "max" in input_month_test;
			if (max_month_test) { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not support the \"max\" attribute."); }
			let step_month_test = "step" in input_month_test;
			if (step_month_test) { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not support the \"step\" attribute."); }
			if ("stepDown" in input_month_test) { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not support the \"stepDown\" method."); }
			if ("stepUp" in input_month_test) { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not support the \"stepUp\" method."); }
			if ("valueAsDate" in input_month_test) { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not support the \"valueAsDate\" method."); }
			if ("valueAsNumber" in input_month_test) { tests_passed++; }
			else { console.log("Input of type \"month\": Your browser does not support the \"valueAsNumber\" method."); }
			document.getElementById("monthinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
			document.getElementById("monthinputtest").style.color = (tests_passed === 8) ? "green" : "black";
		}
		else {
			document.getElementById("monthinputtest").textContent = "FAIL";
			document.getElementById("monthinputtest").style.color = "red";
			console.log("Input of type \"month\": Your browser does not support the \"month\" input type.");
		}
	}
	catch (error) {
		document.getElementById("monthinputtest").textContent = "FAIL";
		document.getElementById("monthinputtest").style.color = "red";
		console.log("Input of type \"month\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Week test */
	try {
		let input_week_test = document.createElement("input");
		input_week_test.type = "week";
		if (input_week_test.type === "week") {
			var tests_passed = 0;
			input_week_test.value = "bad-week";
			if (input_week_test.value === "") { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not handle invalid weeks correctly."); }
			let min_week_test = "min" in input_week_test;
			if (min_week_test) { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not support the \"min\" attribute."); }
			let max_week_test = "max" in input_week_test;
			if (max_week_test) { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not support the \"max\" attribute."); }
			let step_week_test = "step" in input_week_test;
			if (step_week_test) { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not support the \"step\" attribute."); }
			if ("stepDown" in input_week_test) { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not support the \"stepDown\" method."); }
			if ("stepUp" in input_week_test) { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not support the \"stepUp\" method."); }
			if ("valueAsDate" in input_week_test) { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not support the \"valueAsDate\" method."); }
			if ("valueAsNumber" in input_week_test) { tests_passed++; }
			else { console.log("Input of type \"week\": Your browser does not support the \"valueAsNumber\" method."); }
			document.getElementById("weekinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
			document.getElementById("weekinputtest").style.color = (tests_passed === 8) ? "green" : "black";
		}
		else {
			document.getElementById("weekinputtest").textContent = "FAIL";
			document.getElementById("weekinputtest").style.color = "red";
			console.log("Input of type \"week\": Your browser does not support the \"week\" input type.");
		}
	}
	catch (error) {
		document.getElementById("weekinputtest").textContent = "FAIL";
		document.getElementById("weekinputtest").style.color = "red";
		console.log("Input of type \"week\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Time test */
	try {
		let input_time_test = document.createElement("input");
		input_time_test.type = "time";
		if (input_time_test.type === "time") {
			var tests_passed = 0;
			input_time_test.value = "bad-time";
			if (input_time_test.value === "") { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not handle invalid times correctly."); }
			let min_time_test = "min" in input_time_test;
			if (min_time_test) { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not support the \"min\" attribute."); }
			let max_time_test = "max" in input_time_test;
			if (max_time_test) { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not support the \"max\" attribute."); }
			let step_time_test = "step" in input_time_test;
			if (step_time_test) { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not support the \"step\" attribute."); }
			if ("stepDown" in input_time_test) { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not support the \"stepDown\" method."); }
			if ("stepUp" in input_time_test) { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not support the \"stepUp\" method."); }
			if ("valueAsDate" in input_time_test) { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not support the \"valueAsDate\" method."); }
			if ("valueAsNumber" in input_time_test) { tests_passed++; }
			else { console.log("Input of type \"time\": Your browser does not support the \"valueAsNumber\" method."); }
			document.getElementById("timeinputtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
			document.getElementById("timeinputtest").style.color = (tests_passed === 8) ? "green" : "black";
		}
		else {
			document.getElementById("timeinputtest").textContent = "FAIL";
			document.getElementById("timeinputtest").style.color = "red";
			console.log("Input of type \"time\": Your browser does not support the \"time\" input type.");
		}
	}
	catch (error) {
		document.getElementById("timeinputtest").textContent = "FAIL";
		document.getElementById("timeinputtest").style.color = "red";
		console.log("Input of type \"time\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				else { console.log("Input of type \"datetime-local\": Your browser does not support value sanitization of local date and time."); }
			}
			let min_dtl_test = "min" in input_dtl_test;
			if (min_dtl_test) { tests_passed++; }
			else { console.log("Input of type \"datetime-local\": Your browser does not support the \"min\" attribute."); }
			let max_dtl_test = "max" in input_dtl_test;
			if (max_dtl_test) { tests_passed++; }
			else { console.log("Input of type \"datetime-local\": Your browser does not support the \"max\" attribute."); }
			let step_dtl_test = "step" in input_dtl_test;
			if (step_dtl_test) { tests_passed++; }
			else { console.log("Input of type \"datetime-local\": Your browser does not support the \"step\" attribute."); }
			if ("stepDown" in input_dtl_test) { tests_passed++; }
			else { console.log("Input of type \"datetime-local\": Your browser does not support the \"stepDown\" method."); }
			if ("stepUp" in input_dtl_test) { tests_passed++; }
			else { console.log("Input of type \"datetime-local\": Your browser does not support the \"stepUp\" method."); }
			if ("valueAsDate" in input_dtl_test) { tests_passed++; }
			else { console.log("Input of type \"datetime-local\": Your browser does not support the \"valueAsDate\" method."); }
			document.getElementById("dtlinputtest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
			document.getElementById("dtlinputtest").style.color = (tests_passed === 7) ? "green" : "black";
		}
		else {
			document.getElementById("dtlinputtest").textContent = "FAIL";
			document.getElementById("dtlinputtest").style.color = "red";
			console.log("Input of type \"datetime-local\": Your browser does not support the local date and time input type.");
		}
	}
	catch (error) {
		document.getElementById("dtlinputtest").textContent = "FAIL";
		document.getElementById("dtlinputtest").style.color = "red";
		console.log("Input of type \"datetime-local\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Number test */
	try {
		let input_number_test = document.createElement("input");
		input_number_test.type = "number";
		if (input_number_test.type === "number") {
			var tests_passed = 0;
			input_number_test.value = "bad-number";
			if (input_number_test.value === "") { tests_passed++; }
			else { console.log("Input of type \"number\": Your browser does not handle invalid numbers correctly."); }
			let min_number_test = "min" in input_number_test;
			if (min_number_test) { tests_passed++; }
			else { console.log("Input of type \"number\": Your browser does not support the \"min\" attribute."); }
			let max_number_test = "max" in input_number_test;
			if (max_number_test) { tests_passed++; }
			else { console.log("Input of type \"number\": Your browser does not support the \"max\" attribute."); }
			let step_number_test = "step" in input_number_test;
			if (step_number_test) { tests_passed++; }
			else { console.log("Input of type \"number\": Your browser does not support the \"step\" attribute."); }
			if ("stepDown" in input_number_test) { tests_passed++; }
			else { console.log("Input of type \"number\": Your browser does not support the \"stepDown\" method."); }
			if ("stepUp" in input_number_test) { tests_passed++; }
			else { console.log("Input of type \"number\": Your browser does not support the \"stepUp\" method."); }
			if ("valueAsDate" in input_number_test) { tests_passed++; }
			else { console.log("Input of type \"number\": Your browser does not support the \"valueAsDate\" method."); }
			document.getElementById("numberinputtest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
			document.getElementById("numberinputtest").style.color = (tests_passed === 7) ? "green" : "black";
		}
		else {
			document.getElementById("numberinputtest").textContent = "FAIL";
			document.getElementById("numberinputtest").style.color = "red";
			console.log("Input of type \"number\": Your browser does not support the \"number\" input type.");
		}
	}
	catch (error) {
		document.getElementById("numberinputtest").textContent = "FAIL";
		document.getElementById("numberinputtest").style.color = "red";
		console.log("Input of type \"number\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Range test */
	try {
		let input_range_test = document.createElement("input");
		input_range_test.type = "range";
		if (input_range_test.type === "range") {
			var tests_passed = 0;
			input_range_test.value = "bad-range";
			if (!isNaN(input_range_test.value)) { tests_passed++; }
			else { console.log("Input of type \"range\": Your browser does not handle invalid ranges correctly."); }
			let min_range_test = "min" in input_range_test;
			if (min_range_test) { tests_passed++; }
			else { console.log("Input of type \"range\": Your browser does not support the \"min\" attribute."); }
			let max_range_test = "max" in input_range_test;
			if (max_range_test) { tests_passed++; }
			else { console.log("Input of type \"range\": Your browser does not support the \"max\" attribute."); }
			let step_range_test = "step" in input_range_test;
			if (step_range_test) { tests_passed++; }
			else { console.log("Input of type \"range\": Your browser does not support the \"step\" attribute."); }
			if ("stepDown" in input_range_test) { tests_passed++; }
			else { console.log("Input of type \"range\": Your browser does not support the \"stepDown\" method."); }
			if ("stepUp" in input_range_test) { tests_passed++; }
			else { console.log("Input of type \"range\": Your browser does not support the \"stepUp\" method."); }
			if ("valueAsDate" in input_range_test) { tests_passed++; }
			else { console.log("Input of type \"range\": Your browser does not support the \"valueAsDate\" method."); }
			document.getElementById("rangeinputtest").textContent = (tests_passed === 7) ? "PASS" : "PARTIAL";
			document.getElementById("rangeinputtest").style.color = (tests_passed === 7) ? "green" : "black";
		}
		else {
			document.getElementById("rangeinputtest").textContent = "FAIL";
			document.getElementById("rangeinputtest").style.color = "red";
			console.log("Input of type \"range\": Your browser does not support the \"range\" input type.");
		}
	}
	catch (error) {
		document.getElementById("rangeinputtest").textContent = "FAIL";
		document.getElementById("rangeinputtest").style.color = "red";
		console.log("Input of type \"range\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				else { console.log("Input of type \"color\": Your browser does not support value sanitization of colors."); }
			}
			document.getElementById("colorinputtest").textContent = (tests_passed === 1) ? "PASS" : "PARTIAL";
			document.getElementById("colorinputtest").style.color = (tests_passed === 1) ? "green" : "black";
		}
		else {
			document.getElementById("colorinputtest").textContent = "FAIL";
			document.getElementById("colorinputtest").style.color = "red";
			console.log("Input of type \"color\": Your browser does not support the \"color\" input type.");
		}
	}
	catch (error) {
		document.getElementById("colorinputtest").textContent = "FAIL";
		document.getElementById("colorinputtest").style.color = "red";
		console.log("Input of type \"color\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Checkbox test */
	try {
		let input_checkbox_test = document.createElement("input");
		input_checkbox_test.type = "checkbox";
		if (input_checkbox_test.type === "checkbox") {
			if ("indeterminate" in input_checkbox_test) {
				document.getElementById("checkboxinputtest").textContent = "PASS";
				document.getElementById("checkboxinputtest").style.color = "green";
			}
			else {
				document.getElementById("checkboxinputtest").textContent = "PARTIAL";
				console.log("Input of type \"checkbox\": Your browser does not support the \"indeterminate\" property.");
			}
		}
		else {
			document.getElementById("checkboxinputtest").textContent = "FAIL";
			document.getElementById("checkboxinputtest").style.color = "red";
			console.log("Input of type \"checkbox\": Your browser does not support the \"checkbox\" input type.");
		}
	}
	catch (error) {
		document.getElementById("checkboxinputtest").textContent = "FAIL";
		document.getElementById("checkboxinputtest").style.color = "red";
		console.log("Input of type \"checkbox\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type Image test */
	try {
		let input_image_test = document.createElement("input");
		input_image_test.type = "image";
		if (input_image_test.type === "image") {
			var tests_passed = 0;
			if ("width" in input_image_test) { tests_passed++; }
			else { console.log("Input of type \"image\": Your browser does not support the \"width\" attribute."); }
			if ("height" in input_image_test) { tests_passed++; }
			else { console.log("Input of type \"image\": Your browser does not support the \"height\" attribute."); }
			document.getElementById("imageinputtest").textContent = (tests_passed === 2) ? "PASS" : "PARTIAL";
			document.getElementById("imageinputtest").style.color = (tests_passed === 2) ? "green" : "black";
		}
		else {
			document.getElementById("imageinputtest").textContent = "FAIL";
			document.getElementById("imageinputtest").style.color = "red";
			console.log("Input of type \"image\": Your browser does not support the \"image\" input type.");
		}
	}
	catch (error) {
		document.getElementById("imageinputtest").textContent = "FAIL";
		document.getElementById("imageinputtest").style.color = "red";
		console.log("Input of type \"image\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Input of type File test */
	try {
		let input_file_test = document.createElement("input");
		input_file_test.type = "file";
		if (input_file_test.type === "file") {
			var tests_passed = 0;
			let files_file_test = "files" in input_file_test;
			if (files_file_test) { tests_passed++; }
			else { console.log("Input of type \"file\": Your browser does not support the \"files\" attribute."); }
			let accept_file_test = "accept" in input_file_test;
			if (accept_file_test) { tests_passed++; }
			else { console.log("Input of type \"file\": Your browser does not support the \"accept\" attribute."); }
			let capture_file_test = "capture" in input_file_test;
			if (capture_file_test) { tests_passed++; }
			else { console.log("Input of type \"file\": Your browser does not support the \"capture\" attribute. If you are using a desktop browser, this doesn't matter as much. Its real importance is on mobile."); }
			let multiple_file_test = "multiple" in input_file_test;
			if (multiple_file_test) { tests_passed++; }
			else { console.log("Input of type \"file\": Your browser does not support the \"multiple\" attribute."); }
			document.getElementById("fileinputtest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
			document.getElementById("fileinputtest").style.color = (tests_passed === 4) ? "green" : "black";
		}
		else {
			document.getElementById("fileinputtest").textContent = "FAIL";
			document.getElementById("fileinputtest").style.color = "red";
			console.log("Input of type \"file\": Your browser does not support the \"file\" input type.");
		}
	}
	catch (error) {
		document.getElementById("fileinputtest").textContent = "FAIL";
		document.getElementById("fileinputtest").style.color = "red";
		console.log("Input of type \"file\": There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Textarea tag test */
	// Test for "maxlength" attribute moved to manual testing.
	try {
		let textarea_tag_test = !(document.createElement("textarea") instanceof HTMLUnknownElement);
		if (textarea_tag_test === true) {
			sample_textarea = document.createElement("textarea");
			let textarea_wrap = "wrap" in sample_textarea;
			document.getElementById("textareatest").textContent = (textarea_wrap) ? "PASS" : "PARTIAL";
			document.getElementById("textareatest").style.color = (textarea_wrap) ? "green" : "black";
			if (!textarea_wrap) {
				console.log("<textarea>: Your browser does not support the \"wrap\" attribute.");
			}
		}
		else {
			document.getElementById("textareatest").textContent = "FAIL";
			document.getElementById("textareatest").style.color = "red";
			console.log("<textarea>: Your browser does not support the \"textarea\" element.");
		}
	}
	catch (error) {
		document.getElementById("textareatest").textContent = "FAIL";
		document.getElementById("textareatest").style.color = "red";
		console.log("<textarea>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Select tag test */
	try {
		let select_tag_test = !(document.createElement("select") instanceof HTMLUnknownElement);
		if (select_tag_test === true) {
			sample_select = document.createElement("select");
			let select_required = "required" in sample_select;
			document.getElementById("selecttest").textContent = (select_required) ? "PASS" : "PARTIAL";
			document.getElementById("selecttest").style.color = (select_required) ? "green" : "black";
			if (!select_required) {
				console.log("<select>: Your browser does not support the \"required\" attribute.");
			}
		}
		else {
			document.getElementById("selecttest").textContent = "FAIL";
			document.getElementById("selecttest").style.color = "red";
			console.log("<select>: Your browser does not support the \"select\" element.");
		}
	}
	catch (error) {
		document.getElementById("selecttest").textContent = "FAIL";
		document.getElementById("selecttest").style.color = "red";
		console.log("<select>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Fieldset tag test */
	try {
		let fieldset_tag_test = !(document.createElement("fieldset") instanceof HTMLUnknownElement);
		if (fieldset_tag_test === true) {
			sample_fieldset = document.createElement("fieldset");
			let fieldset_disabled = "disabled" in sample_fieldset;
			document.getElementById("fieldsettest").textContent = fieldset_disabled ? "PASS" : "PARTIAL";
			document.getElementById("fieldsettest").style.color = fieldset_disabled ? "green" : "black";
			if (!fieldset_disabled) {
				console.log("<fieldset>: Your browser does not support the \"disabled\" attribute.");
			}
		}
		else {
			document.getElementById("fieldsettest").textContent = "FAIL";
			document.getElementById("fieldsettest").style.color = "red";
			console.log("<fieldset>: Your browser does not support the \"fieldset\" element.");
		}
	}
	catch (error) {
		document.getElementById("fieldsettest").textContent = "FAIL";
		document.getElementById("fieldsettest").style.color = "red";
		console.log("<fieldset>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Datalist tag test */
	try {
		let datalist_tag_test = !(document.createElement("datalist") instanceof HTMLUnknownElement);
		document.getElementById("datalisttest").textContent = datalist_tag_test ? "PASS" : "PARTIAL";
		document.getElementById("datalisttest").style.color = datalist_tag_test ? "green" : "black";
		if (!datalist_tag_test) {
			console.log("<datalist>: Your browser does not support the \"datalist\" element.");
		}
	}
	catch (error) {
		document.getElementById("datalisttest").textContent = "FAIL";
		document.getElementById("detailsttest").style.color = "red";
		console.log("<datalist>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Output tag test */
	try {
		let output_tag_test = !(document.createElement("output") instanceof HTMLUnknownElement);
		document.getElementById("outputtest").textContent = output_tag_test ? "PASS" : "PARTIAL";
		document.getElementById("outputtest").style.color = output_tag_test ? "green" : "black";
		if (!output_tag_test) {
			console.log("<output>: Your browser does not support the \"output\" element.");
		}
	}
	catch (error) {
		document.getElementById("outputtest").textContent = "FAIL";
		document.getElementById("outputtest").style.color = "red";
		console.log("<output>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Progress tag test */
	try {
		let progress_tag_test = !(document.createElement("progress") instanceof HTMLUnknownElement);
		document.getElementById("progresstest").textContent = progress_tag_test ? "PASS" : "PARTIAL";
		document.getElementById("progresstest").style.color = progress_tag_test ? "green" : "black";
		if (!progress_tag_test) {
			console.log("<progress>: Your browser does not support the \"progress\" element.");
		}
	}
	catch (error) {
		document.getElementById("progresstest").textContent = "FAIL";
		document.getElementById("progresstest").style.color = "red";
		console.log("<progress>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Meter tag test */
	try {
		let meter_tag_test = !(document.createElement("meter") instanceof HTMLUnknownElement);
		document.getElementById("metertest").textContent = meter_tag_test ? "PASS" : "PARTIAL";
		document.getElementById("metertest").style.color = meter_tag_test ? "green" : "black";
		if (!meter_tag_test) {
			console.log("<meter>: Your browser does not support the \"meter\" element.");
		}
	}
	catch (error) {
		document.getElementById("metertest").textContent = "FAIL";
		document.getElementById("metertest").style.color = "red";
		console.log("<meter>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Field validation test */
	try {
		var sample_input = document.createElement("input");
		var tests_passed = 0;
		let pattern_test = "pattern" in sample_input;
		if (pattern_test) { tests_passed++; }
		else { console.log("Field validation test: Your browser does not support the \"pattern\" attribute."); }
		let required_test = "required" in sample_input;
		if (required_test) { tests_passed++; }
		else { console.log("Field validation test: Your browser does not support the \"required\" atribute."); }
		document.getElementById("fieldvalidtest").textContent = (tests_passed === 2) ? "PASS" : "FAIL";
		document.getElementById("fieldvalidtest").style.color = (tests_passed === 2) ? "green" : "red";
	}
	catch (error) {
		document.getElementById("fieldvalidtest").textContent = "FAIL";
		document.getElementById("fieldvalidtest").style.color = "red";
		console.log("Field validation test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("autofocustest").style.color = autofocus_test ? "green" : "red";
		if (!autofocus_test) {
			console.log("\"autofocus\" attribute: Your browser does not support the \"autofocus\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("autofocustest").textContent = "FAIL";
		document.getElementById("autofocustest").style.color = "red";
		console.log("\"autofocus\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Autocomplete attribute test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		let autocomplete_test = "autocomplete" in sample_input;
		document.getElementById("autocomptest").textContent = autocomplete_test ? "PASS" : "FAIL";
		document.getElementById("autocomptest").style.color = autocomplete_test ? "green" : "red";
		if (!autocomplete_test) {
			console.log("\"autocomplete\" attribute: Your browser does not support the \"autocomplete\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("autocomptest").textContent = "FAIL";
		document.getElementById("autocomptest").style.color = "red";
		console.log("\"autocomplete\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Placeholder attribute test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		let placeholder_test = "placeholder" in sample_input;
		document.getElementById("placeholdertest").textContent = placeholder_test ? "PASS" : "FAIL";
		document.getElementById("placeholdertest").style.color = placeholder_test ? "green" : "red";
		if (!placeholder_test) {
			console.log("\"placeholder\" attribute: Your browser does not support the \"placeholder\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("placeholdertest").textContent = "FAIL";
		document.getElementById("placeholdertest").style.color = "red";
		console.log("\"placeholder\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Multiple attribute test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "email";
		let multiple_test = "multiple" in sample_input;
		document.getElementById("multipletest").textContent = multiple_test ? "PASS" : "FAIL";
		document.getElementById("multipletest").style.color = multiple_test ? "green" : "red";
		if (!multiple_test) {
			console.log("\"multiple\" attribute: Your browser does not support the \"multiple\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("multipletest").textContent = "FAIL";
		document.getElementById("multipletest").style.color = "red";
		console.log("\"multiple\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssvalidtest").style.color = (css_valid_test === "rgb(240, 255, 240)") ? "green" : "red";
		if (document.getElementById("cssvalidtest").textContent === "FAIL") {
			console.log("\"valid\" CSS Selector: Your browser does not support the \"valid\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssvalidtest").textContent = "FAIL";
		document.getElementById("cssvalidtest").style.color = "red";
		console.log("\"valid\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssinvalidtest").style.color = (css_invalid_test === "rgb(255, 250, 250)") ? "green" : "red";
		if (document.getElementById("cssinvalidtest").textContent === "FAIL") {
			console.log("\"invalid\" CSS Selector: Your browser does not support the \"invalid\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssinvalidtest").textContent = "FAIL";
		document.getElementById("cssinvalidtest").style.color = "red";
		console.log("\"invalid\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssoptionaltest").style.color = (css_optional_test === "rgb(255, 255, 240)") ? "green" : "red";
		if (document.getElementById("cssoptionaltest").textContent === "FAIL") {
			console.log("\"optional\" CSS Selector: Your browser does not support the \"optional\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssoptionaltest").textContent = "FAIL";
		document.getElementById("cssoptionaltest").style.color = "red";
		console.log("\"optional\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssrequiredtest").style.color = (css_required_test === "rgb(255, 228, 225)") ? "green" : "red";
		if (document.getElementById("cssrequiredtest").textContent === "FAIL") {
			console.log("\"required\" CSS Selector: Your browser does not support the \"required\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssrequiredtest").textContent = "FAIL";
		document.getElementById("cssrequiredtest").style.color = "red";
		console.log("\"required\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssinrangetest").style.color = (css_inrange_test === "rgb(240, 255, 240)") ? "green" : "red";
		if (document.getElementById("cssinrangetest").textContent === "FAIL") {
			console.log("\"in-range\" CSS Selector: Your browser does not support the \"in-range\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssinrangetest").textContent = "FAIL";
		document.getElementById("cssinrangetest").style.color = "red";
		console.log("\"in-range\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssoortest").style.color = (css_oor_test === "rgb(255, 228, 225)") ? "green" : "red";
		if (document.getElementById("cssoortest").textContent === "FAIL") {
			console.log("\"out-of-range\" CSS Selector: Your browser does not support the \"out-of-range\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssoortest").textContent = "FAIL";
		document.getElementById("cssoortest").style.color = "red";
		console.log("\"out-of-range\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssrwtest").style.color = (css_rw_test === "rgb(240, 255, 240)") ? "green" : "red";
		if (document.getElementById("cssrwtest").textContent === "FAIL") {
			console.log("\"read-write\" CSS Selector: Your browser does not support the \"read-write\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssrwtest").textContent = "FAIL";
		document.getElementById("cssrwtest").style.color = "red";
		console.log("\"read-write\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssrotest").style.color = (css_ro_test === "rgb(211, 211, 211)") ? "green" : "red";
		if (document.getElementById("cssrotest").textContent === "FAIL") {
			console.log("\"read-only\" CSS Selector: Your browser does not support the \"read-only\" CSS Selector.");
		}
	}
	catch (error) {
		document.getElementById("cssrotest").textContent = "FAIL";
		document.getElementById("cssrotest").style.color = "red";
		console.log("\"read-only\" CSS Selector: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* On Input event test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		if ("oninput" in sample_input) {
			document.getElementById("oninputtest").textContent = "PASS";
			document.getElementById("oninputtest").style.color = "green";
		}
		else {
			document.getElementById("oninputtest").textContent = "FAIL";
			document.getElementById("oninputtest").style.color = "red";
			console.log("\"oninput\" event: Your browser does not support the \"oninput\" event.");
		}
	}
	catch (error) {
		document.getElementById("oninputtest").textContent = "FAIL";
		document.getElementById("oninputtest").style.color = "red";
		console.log("\"oninput\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* On Change event test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		if ("onchange" in sample_input) {
			document.getElementById("onchangetest").textContent = "PASS";
			document.getElementById("onchangetest").style.color = "green";
		}
		else {
			document.getElementById("onchangetest").textContent = "FAIL";
			document.getElementById("onchangetest").style.color = "red";
			console.log("\"onchange\" event: Your browser does not support the \"onchange\" event.");
		}
	}
	catch (error) {
		document.getElementById("onchangetest").textContent = "FAIL";
		document.getElementById("onchangetest").style.color = "red";
		console.log("\"onchange\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* On Invalid event test */
	try {
		var sample_input = document.createElement("input");
		sample_input.type = "text";
		if ("oninvalid" in sample_input) {
			document.getElementById("invalideventtest").textContent = "PASS";
			document.getElementById("invalideventtest").style.color = "green";
		}
		else {
			document.getElementById("invalideventtest").textContent = "FAIL";
			document.getElementById("invalideventtest").style.color = "red";
			console.log("\"oninvalid\" event: Your browser does not support the \"oninvalid\" event.");
		}
	}
	catch (error) {
		document.getElementById("invalideventtest").textContent = "FAIL";
		document.getElementById("invalideventtest").style.color = "red";
		console.log("\"oninvalid\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		else { console.log("Form validation test: Your browser does not support the \"checkValidity\" method."); }
		let no_validate_test = "noValidate" in sample_form;
		if (no_validate_test) { tests_passed++; }
		else { console.log("Form validation test: Your browser does not support the \"noValidate\" property."); }
		document.getElementById("formvalidationtest").textContent = (tests_passed === 2) ? "PASS" : "FAIL";
		document.getElementById("formvalidationtest").style.color = (tests_passed === 2) ? "green" : "red";
	}
	catch (error) {
		document.getElementById("formvalidationtest").textContent = "FAIL";
		document.getElementById("formvalidationtest").style.color = "red";
		console.log("Form validation test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WEB COMPONENTS API */
	
	/* Custom elements test */
	try {
		let custom_elements_test = "customElements" in window;
		document.getElementById("customelementtest").textContent = custom_elements_test ? "PASS" : "FAIL";
		document.getElementById("customelementtest").style.color = custom_elements_test ? "green" : "red";
		if (!custom_elements_test) {
			console.log("Custom elements test: Your browser does not support custom elements.");
		}
	}
	catch (error) {
		document.getElementById("customelementtest").textContent = "FAIL";
		document.getElementById("customelementtest").style.color = "red";
		console.log("Custom elements test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Shadow trees test */
	try {
		let sample_div = document.createElement("div");
		let shadow_tree_test = "attachShadow" in sample_div;
		document.getElementById("shadowtreetest").textContent = shadow_tree_test ? "PASS" : "FAIL";
		document.getElementById("shadowtreetest").style.color = shadow_tree_test ? "green" : "red";
		if (!shadow_tree_test) {
			console.log("Shadow trees test: Your browser does not support shdaow trees.");
		}
	}
	catch (error) {
		document.getElementById("shadowtreetest").textContent = "FAIL";
		document.getElementById("shadowtreetest").style.color = "red";
		console.log("Shadow trees test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Template tag test */
	try {
		let template_test = !(document.createElement("template") instanceof HTMLUnknownElement);
		document.getElementById("templatetest").textContent = template_test ? "PASS" : "FAIL";
		document.getElementById("templatetest").style.color = template_test ? "green" : "red";
		if (!template_test) {
			console.log("<template>: Your browser does not support the \"template\" element.");
		}
	}
	catch (error) {
		document.getElementById("templatetest").textContent = "FAIL";
		document.getElementById("templatetest").style.color = "red";
		console.log("<template>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("slottest").style.color = slot_test ? "green" : "red";
		}
		else {
			document.getElementById("slottest").textContent = "FAIL";
			document.getElementById("slottest").style.color = "red";
			console.log("<slot>: Your browser does not support the \"slot\" element.");
		}
	}
	catch (error) {
		document.getElementById("slottest").textContent = "FAIL";
		document.getElementById("slottest").style.color = "red";
		console.log("<slot>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
						document.getElementById("geolocationtest").style.color = "green";
					},
					function(error) {
						switch (error.code) {
							case error.PERMISSION_DENIED:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								document.getElementById("geolocationtest").style.color = "green";
								console.log("Geolocation test: You have chosen to block access to your location. Nevertheless, your browser supports the Geolocation API, which is all that really matters here.");
								break;
							case error.POSITION_UNAVAILABLE:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								document.getElementById("geolocationtest").style.color = "green";
								console.log("Geolocation test: Your browser supports the Geolocation API, but your position could not be obtained. The Geolocation server your browser is using could be at fault.");
								break;
							case error.TIMEOUT:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								document.getElementById("geolocationtest").style.color = "green";
								console.log("Geolocation test: Your browser supports the Geolocation API, but the request timed out.");
								break;
							default:
								document.getElementById("geolocationtest").textContent = "PASS (Check console)";
								document.getElementById("geolocationtest").style.color = "green";
								console.log("Geolocation test: Your browser supports the Geolocation API, but there was an error in processing the request for the current position.");
						}
					},
					{timeout: 10000}
				);
			}
			else {
				document.getElementById("geolocationtest").textContent = "FAIL";
				document.getElementById("geolocationtest").style.color = "red";
				console.log("Geolocation test: Your browser does not support the Geolocation API.");
			}
		}
		else {
			document.getElementById("geolocationtest").textContent = "FAIL";
			document.getElementById("geolocationtest").style.color = "red";
			console.log("Geolocation test: Geolocation requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("geolocationtest").textContent = "FAIL";
		document.getElementById("geolocationtest").style.color = "red";
		console.log("Geolocation test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Device orientation test */
	try {
		if (window.isSecureContext) {
			document.getElementById("devorienttest").textContent = (window.DeviceOrientationEvent) ? "PASS" : "FAIL";
			document.getElementById("devorienttest").style.color = (window.DeviceOrientationEvent) ? "green" : "red";
			if (document.getElementById("devorienttest").textContent === "FAIL") {
				console.log("Device orientation test: Your browser does not support device orientation.");
			}
		}
		else {
			document.getElementById("devorienttest").textContent = "FAIL";
			document.getElementById("devorienttest").style.color = "red";
			console.log("Device orientation test: The orientation sensor requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("devorienttest").textContent = "FAIL";
		document.getElementById("devorienttest").style.color = "red";
		console.log("Device orientation test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Device motion test */
	try {
		if (window.isSecureContext) {
			document.getElementById("devmotiontest").textContent = (window.DeviceMotionEvent) ? "PASS" : "FAIL";
			document.getElementById("devmotiontest").style.color = (window.DeviceMotionEvent) ? "green" : "red";
			if (document.getElementById("devmotiontest").textContent === "FAIL") {
				console.log("Device motion test: Your browser does not support device motion.");
			}
		}
		else {
			document.getElementById("devmotiontest").textContent = "FAIL";
			document.getElementById("devmotiontest").style.color = "red";
			console.log("Device motion test: The motion sensor requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("devmotiontest").textContent = "FAIL";
		document.getElementById("devmotiontest").style.color = "red";
		console.log("Device motion test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* INPUT AND OUTPUT */
	
	/* Gamepad test */
	try {
		if (window.isSecureContext) {
			if ("getGamepads" in navigator) {
				document.getElementById("gamepadtest").textContent = "PASS";
				document.getElementById("gamepadtest").style.color = "green";
			}
			else {
				document.getElementById("gamepadtest").textContent = "FAIL";
				document.getElementById("gamepadtest").style.color = "red";
				console.log("Gamepad test: Your browser does not support the Gamepad API.");
			}
		}
		else {
			document.getElementById("gamepadtest").textContent = "FAIL";
			document.getElementById("gamepadtest").style.color = "red";
			console.log("Gamepad test: The Gamepad API requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("gamepadtest").textContent = "FAIL";
		document.getElementById("gamepadtest").style.color = "red";
		console.log("Gamepad test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			else { console.log("Pointer events test: Your browser does not support the \"height\" property."); }
			let primary_test = "isPrimary" in sample_pointer_event;
			if (primary_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"isPrimary\" property."); }
			let pointer_id_test = "pointerId" in sample_pointer_event;
			if (pointer_id_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"pointerId\" property."); }
			let pointer_type_test = "pointerType" in sample_pointer_event;
			if (pointer_type_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"pointerType\" property."); }
			let pressure_test = "pressure" in sample_pointer_event;
			if (pressure_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"pressure\" property."); }
			let tangential_pressure_test = "tangentialPressure" in sample_pointer_event;
			if (tangential_pressure_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"tangentialPressure\" property."); }
			let tiltx_test = "tiltX" in sample_pointer_event;
			if (tiltx_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"tiltX\" property."); }
			let tilty_test = "tiltY" in sample_pointer_event;
			if (tilty_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"tiltY\" property."); }
			let twist_test = "twist" in sample_pointer_event;
			if (twist_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"twist\" property."); }
			let width_test = "width" in sample_pointer_event;
			if (width_test) { tests_passed++; }
			else { console.log("Pointer events test: Your browser does not support the \"width\" property."); }
			document.getElementById("pointereventstest").textContent = (tests_passed === 12) ? "PASS" : "PARTIAL";
			document.getElementById("pointereventstest").style.color = (tests_passed === 12) ? "green" : "black";
		}
		else {
			document.getElementById("pointereventstest").textContent = "FAIL";
			document.getElementById("pointereventstest").style.color = "red";
			console.log("Pointer events test: Your browser does not support pointer events.");
		}
	}
	catch (error) {
		document.getElementById("pointereventstest").textContent = "FAIL";
		document.getElementById("pointereventstest").style.color = "red";
		console.log("Pointer events test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Pointer Lock API test */
	try {
		let pointer_lock_test = "requestPointerLock" in document.documentElement;
		let pointer_exit_lock_test = "exitPointerLock" in document;
		if (pointer_lock_test == true && pointer_exit_lock_test == true) {
			document.getElementById("pointerlocktest").textContent = "PASS";
			document.getElementById("pointerlocktest").style.color = "green";
		}
		else {
			document.getElementById("pointerlocktest").textContent = "FAIL";
			document.getElementById("pointerlocktest").style.color = "red";
			console.log("Pointer lock test: Your browser does not support the Pointer Lock API.");
		}
	}
	catch (error) {
		document.getElementById("pointerlocktest").textContent = "FAIL";
		document.getElementById("pointerlocktest").style.color = "red";
		console.log("Pointer lock test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Fullscreen test */
	// Tests for navigationUI and returns for promises are to be done manually.
	try {
		var tests_passed = 0;
		if ("fullscreenElement" in document) {
			tests_passed++;
			if ("fullscreenEnabled" in document) { tests_passed++; }
			else { console.log("Fullscreen test: Your browser does not support the \"fullscreenEnabled\" property."); }
			if ("exitFullscreen" in document) { tests_passed++; }
			else { console.log("Fullscreen test: Your browser does not support the \"exitFullscreen\" method."); }
			if ("requestFullscreen" in document.documentElement) { tests_passed++; }
			else { console.log("Fullscreen test: Your browser does not support the \"requestFullscreen\" method."); }
			document.getElementById("fullscreentest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
			document.getElementById("fullscreentest").style.color = (tests_passed === 4) ? "green" : "black";
		}
		else {
			document.getElementById("fullscreentest").textContent = "FAIL";
			document.getElementById("fullscreentest").style.color = "red";
			console.log("Fullscreen test: Your browser does not support the Fullscreen API.");
		}
	}
	catch (error) {
		document.getElementById("fullscreentest").textContent = "FAIL";
		document.getElementById("fullscreentest").style.color = "red";
		console.log("Fullscreen test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
						else { console.log("Web notifications test: Your browser does not support the \"body\" property."); }
						let click_test = "onclick" in sample_notification;
						if (click_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"onclick\" event."); }
						let close_test = "close" in sample_notification;
						if (close_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"close\" event."); }
						let data_test = "data" in sample_notification;
						if (data_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"data\" property."); }
						let dir_test = "dir" in sample_notification;
						if (dir_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"dir\" property."); }
						let error_test = "onerror" in sample_notification;
						if (error_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"onerror\" event."); }
						let icon_test = "icon" in sample_notification;
						if (icon_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"icon\" property."); }
						let lang_test = "lang" in sample_notification;
						if (lang_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"lang\" property."); }
						let require_interact_test = "requireInteraction" in sample_notification;
						if (require_interact_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"requireInteraction\" property."); }
						let show_test = "onshow" in sample_notification;
						if (show_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"onshow\" event."); }
						let silent_test = "silent" in sample_notification;
						if (silent_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"silent\" property."); }
						let tag_test = "tag" in sample_notification;
						if (tag_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"tag\" property."); }
						let title_test = "title" in sample_notification;
						if (title_test) { tests_passed++; }
						else { console.log("Web notifications test: Your browser does not support the \"title\" property."); }
						let close_func_test = typeof sample_notification.close === "function";
						if (close_func_test) {
							tests_passed++;
							sample_notification.close();
						}
						else { console.log("Web notifications test: Your browser does not support the \"close\" mthod."); }
						document.getElementById("webnotificationstest").textContent = (tests_passed === 15) ? "PASS" : "PARTIAL";
						document.getElementById("webnotificationstest").style.color = (tests_passed === 15) ? "green" : "black";
					}
					else {
						document.getElementById("webnotificationstest").textContent = "FAIL";
						document.getElementById("webnotificationstest").style.color = "red";
						console.log("Web notifications test: There was an error in requesting permission.");
					}
				});
				if (Notification.permission !== "granted") {
					document.getElementById("webnotificationstest").textContent = "PARTIAL";
					document.getElementById("webnotificationstest").style.color = "black";
					console.log("Web notifications test: Your browser has refused to get permission for running this test. In your case, you may need to test this manually.");
				}
			}
			else {
				document.getElementById("webnotificationstest").textContent = "FAIL";
				document.getElementById("webnotificationstest").style.color = "red";
				console.log("Web notifications test: Your browser does not support web notifications.");
			}
		}
		else {
			document.getElementById("webnotificationstest").textContent = "FAIL";
			document.getElementById("webnotificationstest").style.color = "red";
			console.log("Web notifications test: Web notifications require a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("webnotificationstest").textContent = "FAIL";
		document.getElementById("webnotificationstest").style.color = "red";
		console.log("Web notifications test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("audiotest").style.color = "green";
			}
			else {
				document.getElementById("audiotest").textContent = "FAIL";
				document.getElementById("audiotest").style.color = "red";
				console.log("<audio>: Your browser does not support codec detection.");
			}
		}
		else {
			document.getElementById("audiotest").textContent = "FAIL";
			document.getElementById("audiotest").style.color = "red";
			console.log("<audio>: Your browser does not support the \"audio\" element.");
		}
	}
	catch (error) {
		document.getElementById("audiotest").textContent = "FAIL";
		document.getElementById("audiotest").style.color = "red";
		console.log("<audio>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Loop audio test */
	try {
		var sample_audio = document.createElement("audio");
		let loop_audio_test = "loop" in sample_audio;
		document.getElementById("loopaudiotest").textContent = loop_audio_test ? "PASS" : "FAIL";
		document.getElementById("loopaudiotest").style.color = loop_audio_test ? "green" : "red";
		if (!loop_audio_test) {
			console.log("Loop audio test: Your browser does not support the \"loop\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("loopaudiotest").textContent = "FAIL";
		document.getElementById("loopaudiotest").style.color = "red";
		console.log("Loop audio test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Background preload test */
	try {
		var sample_audio = document.createElement("audio");
		let background_preload_test = "preload" in sample_audio;
		document.getElementById("bgpreloadtest").textContent = background_preload_test ? "PASS" : "FAIL";
		document.getElementById("bgpreloadtest").style.color = background_preload_test ? "green" : "red";
		if (!background_preload_test) {
			console.log("Background preload test: Your browser does not support the \"preload\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("bgpreloadtest").textContent = "FAIL";
		document.getElementById("bpgreloadtest").style.color = "red";
		console.log("Background preload test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Web Audio API test */
	try {
		if (window.AudioContext) {
			let sample_audiocontext = new AudioContext();
			var tests_passed = 0;
			let lh_test = "latencyHint" in sample_audiocontext;
			if (lh_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"latencyHint\" option."); }
			let sr_test = "sampleRate" in sample_audiocontext;
			if (sr_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"sampleRate\" option."); }
			let bl_test = "baseLatency" in sample_audiocontext;
			if (bl_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"baseLatency\" property."); }
			let cmes_test = typeof sample_audiocontext.createMediaElementSource === "function";
			if (cmes_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"createMediaElementSource\" method."); }
			let cmsd_test = typeof sample_audiocontext.createMediaStreamDestination === "function";
			if (cmsd_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"createMediaStreamDestination\" method."); }
			let cmss_test = typeof sample_audiocontext.createMediaStreamSource === "function";
			if (cmss_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"createMediaStreamSource\" method."); }
			let cmsts_test = typeof sample_audiocontext.createMediaStreamTrackSource === "function";
			if (cmsts_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"createMediaStreamTrackSource\" method."); }
			let getot_test = typeof sample_audiocontext.gotOutputTimestamp === "function";
			if (getot_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"gotOutputTimestamp\" method."); }
			let output_latency_test = "outputLatency" in sample_audiocontext;
			if (output_latency_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"outputLatency\" property."); }
			let resume_test = typeof sample_audiocontext.resume === "function";
			if (resume_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"resume\" method."); }
			let suspend_test = typeof sample_audiocontext.suspend === "function";
			if (suspend_test) { tests_passed++; }
			else { console.log("Web Audio API test: Your browser does not support the \"suspend\" method."); }
			let close_func_test = typeof sample_audiocontext.close === "function";
			if (close_func_test) {
				tests_passed++;
				sample_audiocontext.close();
			}
			else { console.log("Web Audio API test: Your browser does not support the \"close\" method."); }
			document.getElementById("webaudiotest").textContent = (tests_passed === 11) ? "PASS" : "PARTIAL";
			document.getElementById("webaudiotest").style.color = (tests_passed === 11) ? "green" : "black";
		}
		else {
			document.getElementById("webaudiotest").textContent = "FAIL";
			document.getElementById("webaudiotest").style.color = "red";
			console.log("Web Audio API test: Your browser does not support the Web Audio API.");
		}
	}
	catch (error) {
		document.getElementById("webaudiotest").textContent = "FAIL";
		document.getElementById("webaudiotest").style.color = "red";
		console.log("Web Audio API test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Speech Synthesis test */
	try {
		if (window.speechSynthesis) {
			document.getElementById("speechsynthtest").textContent = "PASS";
			document.getElementById("speechsynthtest").style.color = "green";
		}
		else {
			document.getElementById("speechsynthtest").textContent = "FAIL";
			document.getElementById("speechsynthtest").style.color = "red";
			console.log("Speech Synthesis test: Your browser does not support speech synthesis.");
		}
	}
	catch (error) {
		document.getElementById("speechsynthtest").textContent = "FAIL";
		document.getElementById("speechsynthtest").style.color = "red";
		console.log("Speech Synthesis test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* AAC-LC in ADTS test */
	try {
		var sample_audio = document.createElement("audio");
		let aaclc_adts_test = sample_audio.canPlayType("audio/aac; codecs=mp4a.40.02");
		let xaaclc_adts_test = sample_audio.canPlayType("audio/x-aac; codecs=mp4a.40.02");
		if (aaclc_adts_test === "probably" || aaclc_adts_test === "maybe") {
			document.getElementById("aaclcadtstest").textContent = "PASS";
			document.getElementById("aaclcadtstest").style.color = "green";
		}
		else if (xaaclc_adts_test === "probably" || xaaclc_adts_test === "maybe") {
			document.getElementById("aaclcadtstest").textContent = "PASS";
			document.getElementById("aaclcadtstest").style.color = "green";
		}
		else {
			document.getElementById("aaclcadtstest").textContent = "FAIL";
			document.getElementById("aaclcadtstest").style.color = "red";
			console.log("AAC-LC in ADTS: Your browser does not support AAC-LC in ADTS containers.");
		}
	}
	catch (error) {
		document.getElementById("aaclcadtstest").textContent = "FAIL";
		document.getElementById("aaclcadtstest").style.color = "red";
		console.log("AAC-LC in ADTS: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Au test */
	try {
		var sample_audio = document.createElement("audio");
		let au_test = sample_audio.canPlayType("audio/basic");
		if (au_test === "probably" || au_test === "maybe") {
			document.getElementById("autest").textContent = "PASS";
			document.getElementById("autest").style.color = "green";
		}
		else {
			document.getElementById("autest").textContent = "FAIL";
			document.getElementById("autest").style.color = "red";
			console.log("Au: Your browser does not support the Au file format.");
		}
	}
	catch (error) {
		document.getElementById("autest").textContent = "FAIL";
		document.getElementById("autest").style.color = "red";
		console.log("Au: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* CAF test */
	try {
		var sample_audio = document.createElement("audio");
		let opus_caf_test = sample_audio.canPlayType("audio/x-caf; codecs:opus");
		if (opus_caf_test === "probably" || opus_caf_test === "maybe") {
			document.getElementById("xcaftest").textContent = "PASS";
			document.getElementById("xcaftest").style.color = "green";
		}
		else {
			document.getElementById("xcaftest").textContent = "FAIL";
			document.getElementById("xcaftest").style.color = "red";
			console.log("CAF: Your browser does not support the X-CAF mime type.");
		}
	}
	catch (error) {
		document.getElementById("xcaftest").textContent = "FAIL";
		document.getElementById("xcaftest").style.color = "red";
		console.log("CAF: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Dolby Digital test */
	try {
		var sample_audio = document.createElement("audio");
		let ac3_test = sample_audio.canPlayType("audio/ac3; codecs:'ac3'");
		if (ac3_test === "probably" || ac3_test === "maybe") {
			document.getElementById("ac3test").textContent = "PASS";
			document.getElementById("ac3test").style.color = "green";
		}
		else {
			document.getElementById("ac3test").textContent = "FAIL";
			document.getElementById("ac3test").style.color = "red";
			console.log("Dolby Digital: Your browser does not support Dolby Digital AC-3.");
		}
	}
	catch (error) {
		document.getElementById("ac3test").textContent = "FAIL";
		document.getElementById("ac3test").style.color = "red";
		console.log("Dolby Digital: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Dolby Digital Plus test */
	try {
		var sample_audio = document.createElement("audio");
		let eac3_test = sample_audio.canPlayType("audio/eac3; codecs:'eac3'");
		if (eac3_test === "probably" || eac3_test === "maybe") {
			document.getElementById("eac3test").textContent = "PASS";
			document.getElementById("eac3test").style.color = "green";
		}
		else {
			document.getElementById("eac3test").textContent = "FAIL";
			document.getElementById("eac3test").style.color = "red";
			console.log("Dolby Digital Plus: Your browser does not support Dolby Digital Plus E-AC-3.");
		}
	}
	catch (error) {
		document.getElementById("eac3test").textContent = "FAIL";
		document.getElementById("eac3test").style.color = "red";
		console.log("Dolby Digital Plus: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* FLAC test */
	try {
		var sample_audio = document.createElement("audio");
		let flac_test = sample_audio.canPlayType("audio/flac");
		if (flac_test === "probably" || flac_test === "maybe") {
			document.getElementById("flactest").textContent = "PASS";
			document.getElementById("flactest").style.color = "green";
		}
		else {
			document.getElementById("flactest").textContent = "FAIL";
			document.getElementById("flactest").style.color = "red";
			console.log("FLAC: Your browser does not support FLAC.");
		}
	}
	catch (error) {
		document.getElementById("flactest").textContent = "FAIL";
		document.getElementById("flactest").style.color = "red";
		console.log("FLAC: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("m4atest").style.color = "green";
		}
		else {
			document.getElementById("m4atest").textContent = "FAIL";
			document.getElementById("m4atest").style.color = "red"
			console.log("M4A: Your browser does not support the MP4 audio mimetype.");
		}
	}
	catch (error) {
		document.getElementById("m4atest").textContent = "FAIL";
		document.getElementById("m4atest").style.color = "red"
		console.log("M4A: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* MP3 test */
	try {
		var sample_audio = document.createElement("audio");
		let mp3_test = sample_audio.canPlayType("audio/mpeg");
		if (mp3_test === "probably" || mp3_test === "maybe") {
			document.getElementById("mp3test").textContent = "PASS";
			document.getElementById("mp3test").style.color = "green";
		}
		else {
			document.getElementById("mp3test").textContent = "FAIL";
			document.getElementById("mp3test").style.color = "red";
			console.log("MP3: Your browser does not support MP3.");
		}
	}
	catch (error) {
		document.getElementById("mp3test").textContent = "FAIL";
		document.getElementById("mp3test").style.color = "red";
		console.log("MP3: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ogg Audio test */
	try {
		var sample_audio = document.createElement("audio");
		let ogg_vorbis_test = sample_audio.canPlayType("audio/ogg; codecs:vorbis");
		if (ogg_vorbis_test === "probably" || ogg_vorbis_test === "maybe") {
			document.getElementById("oggaudiotest").textContent = "PASS";
			document.getElementById("oggaudiotest").style.color = "green";
		}
		else {
			document.getElementById("oggaudiotest").textContent = "FAIL";
			document.getElementById("oggaudiotest").style.color = "red";
			console.log("Ogg audio: Your browser does not support the Ogg audio media type.");
		}
	}
	catch (error) {
		document.getElementById("oggaudiotest").textContent = "FAIL";
		document.getElementById("oggaudiotest").style.color = "red";
		console.log("Ogg audio: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("wavetest").style.color = "green";
		}
		else {
			document.getElementById("wavetest").textContent = "FAIL";
			document.getElementById("wavetest").style.color = "red";
			console.log("WAVE: Your browser does not support the Waveform Audio File Format.");
		}
	}
	catch (error) {
		document.getElementById("wavetest").textContent = "FAIL";
		document.getElementById("wavetest").style.color = "red";
		console.log("WAVE: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WebM Audio test */
	try {
		var sample_audio = document.createElement("audio");
		let opus_webm_test = sample_audio.canPlayType("audio/webm; codecs:opus");
		if (opus_webm_test === "probably" || opus_webm_test === "maybe") {
			document.getElementById("webmaudiotest").textContent = "PASS";
			document.getElementById("webmaudiotest").style.color = "green";
		}
		else {
			document.getElementById("webmaudiotest").textContent = "FAIL";
			document.getElementById("webmaudiotest").style.color = "red";
			console.log("WebM Audio: Your browser does not support the WebM audio mime type.");
		}
	}
	catch (error) {
		document.getElementById("webmaudiotest").textContent = "FAIL";
		document.getElementById("webmaudiotest").style.color = "red";
		console.log("WebM: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* VIDEO */
	
	/* Video tag test */
	try {
		let video_test = !(document.createElement("video") instanceof HTMLUnknownElement);
		document.getElementById("videotest").textContent = video_test ? "PASS" : "FAIL";
		document.getElementById("videotest").style.color = video_test ? "green" : "red";
		if (!video_test) {
			console.log("WebM Audio: Your browser does not support the \"video\" element.");
		}
	}
	catch (error) {
		document.getElementById("videotest").textContent = "FAIL";
		document.getElementById("videotest").style.color = "red";
		console.log("<video>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Track tag test */
	try {
		let track_test = !(document.createElement("video") instanceof HTMLUnknownElement);
		if (track_test === true) {
			let sample_track = document.createElement("track");
			let kind_test = "kind" in sample_track;
			document.getElementById("tracktest").textContent = kind_test ? "PASS" : "FAIL";
			document.getElementById("tracktest").style.color = kind_test ? "green" : "red";
			if (kind_test === false) { console.log("<track>: Your browser does not support the \"kind\" attribute."); }
		}
		else {
			document.getElementById("tracktest").textContent = "FAIL";
			document.getElementById("tracktest").style.color = "red";
			console.log("<track>: Your browser does not support the \"track\" element.");
		}
	}
	catch (error) {
		document.getElementById("tracktest").textContent = "FAIL";
		document.getElementById("tracktest").style.color = "red";
		console.log("<track>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Poster images test */
	try {
		var sample_video = document.createElement("video");
		let poster_test = "poster" in sample_video;
		if (poster_test === true) {
			document.getElementById("posterimagetest").textContent = "PASS";
			document.getElementById("posterimagetest").style.color = "green";
		}
		else {
			document.getElementById("posterimagestest").textContent = "FAIL";
			document.getElementById("posterimagestest").style.color = "red";
			console.log("Poster images test: Your browser does not support the \"poster\" attribute in the \"video\" element.");
		}
	}
	catch (error) {
		document.getElementById("posterimagestest").textContent = "FAIL";
		document.getElementById("posterimagestest").style.color = "red";
		console.log("Poster images test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* MP4 test */
	try {
		var sample_video = document.createElement("video");
		let av1_mp4_test = sample_video.canPlayType("video/mp4; codecs:'av01.0.05H.10, opus'");
		if (av1_mp4_test === "probably" || av1_mp4_test === "maybe") {
			document.getElementById("mp4test").textContent = "PASS";
			document.getElementById("mp4test").style.color = "green";
		}
		else {
			document.getElementById("mp4test").textContent = "FAIL";
			document.getElementById("mp4test").style.color = "red";
			console.log("MP4: Your browser does not support the MP4 video mime type.");
		}
	}
	catch (error) {
		document.getElementById("mp4test").textContent = "FAIL";
		document.getElementById("mp4test").style.color = "red";
		console.log("MP4: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("tstest").style.color = "green";
		}
		else {
			document.getElementById("tstest").textContent = "FAIL";
			document.getElementById("tstest").style.color = "red";
			console.log("MPEG Transport Stream: Your browser does not support the MP2T mime type.");
		}
	}
	catch (error) {
		document.getElementById("tstest").textContent = "FAIL";
		document.getElementById("tstest").style.color = "red";
		console.log("MPEG Transport Stream: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("oggvideotest").style.color = "green";
		}
		else {
			document.getElementById("oggvideotest").textContent = "FAIL";
			document.getElementById("oggvideotest").style.color = "red";
			console.log("Ogg video: Your browser does not support The Ogg audio mime type.");
		}
	}
	catch (error) {
		document.getElementById("oggvideotest").textContent = "FAIL";
		document.getElementById("oggvideotest").style.color = "red";
		console.log("Ogg video: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("webmvideotest").style.color = "green";
		}
		else {
			document.getElementById("webmvideotest").textContent = "FAIL";
			document.getElementById("webmvideotest").style.color = "red";
			console.log("WebM video: Your browser does not support the WebM video mime type.");
		}
	}
	catch (error) {
		document.getElementById("webmvideotest").textContent = "FAIL";
		document.getElementById("webmvideotest").style.color = "red";
		console.log("WebM video: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* STREAMING */
	
	/* Media Source Extensions test */
	try {
		let mse_test = !!window.MediaSource && !!window.SourceBuffer && !!window.MediaSource.isTypeSupported;
		if (mse_test === true) {
			document.getElementById("msetest").textContent = "PASS";
			document.getElementById("msetest").style.color = "green";
		}
		else {
			document.getElementById("msetest").textContent = "FAIL";
			document.getElementById("msetest").style.color = "red";
			console.log("Media Source Extensions test: Your browser does not support Media Source Extensions.");
		}
	}
	catch (error) {
		document.getElementById("msetest").textContent = "FAIL";
		document.getElementById("msetest").style.color = "red";
		console.log("Media Source Extensions test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* HTTP live streaming test */
	try {
		var sample_video = document.createElement("video");
		let hls_test = sample_video.canPlayType("application/vnd.apple.mpegurl") || sample_video.canPlayType("application/x-mpegURL");
		if (hls_test === true) {
			document.getElementById("hlstest").textContent = "PASS";
			document.getElementById("hlstest").style.color = "green";
		}
		else {
			document.getElementById("hlstest").textContent = "FAIL";
			document.getElementById("hlstest").style.color = "red";
			console.log("HTTP live streaming test: Your browser does not support HLS natively. It can still be used via a JavaScript library, so it doesn't matter as much.");
		}
	}
	catch (error) {
		document.getElementById("hlstest").textContent = "FAIL";
		document.getElementById("hlstest").style.color = "red";
		console.log("HTTP live streaming test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* RESPONSIVE IMAGES */
	
	/* Picture tag test */
	try {
		let picture_test = !(document.createElement("picture") instanceof HTMLUnknownElement);
		document.getElementById("picturetest").textContent = picture_test ? "PASS" : "FAIL";
		document.getElementById("picturetest").style.color = picture_test ? "green" : "red";
		if (!picture_test) {
			console.log("<picture>: Your browser does not support the \"picture\" element.");
		}
	}
	catch (error) {
		document.getElementById("picturetest").textContent = "FAIL";
		document.getElementById("picturetest").style.color = "red";
		console.log("<picture>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Sizes attribute test */
	try {
		var sample_source = document.createElement("source");
		let sizes_test = "sizes" in sample_source;
		if (sizes_test === true) {
			document.getElementById("sizestest").textContent = "PASS";
			document.getElementById("sizestest").style.color = "green";
		}
		else {
			document.getElementById("sizestest").textContent = "FAIL";
			document.getElementById("sizestest").style.color = "red";
			console.log("\"sizes\" attribute: Your browser does not support the \"sizes\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("sizestest").textContent = "FAIL";
		document.getElementById("sizestest").style.color = "red";
		console.log("\"sizes\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Srcset attribute test */
	try {
		var sample_source = document.createElement("source");
		let srcset_test = "srcset" in sample_source;
		if (srcset_test === true) {
			document.getElementById("srcsettest").textContent = "PASS";
			document.getElementById("srcsettest").style.color = "green";
		}
		else {
			document.getElementById("srcsettest").textContent = "FAIL";
			document.getElementById("srcsettest").style.color = "red";
			console.log("\"srcset\" attribute: Your browser does not support the \"srcset\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("srcsettest").textContent = "FAIL";
		document.getElementById("srcsettest").style.color = "red";
		console.log("\"srcset\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("apngtest").style.color = apng_test ? "green" : "red";
			if (!apng_test) {
				console.log("APNG: Your browser does not support Animated PNGs.");
			}
			document.body.removeChild(sample_apng);
		};
		sample_apng.onerror = function() {
			document.getElementById("apngtest").textContent = "FAIL";
			document.getElementById("apngtest").style.color = "red";
			console.log("APNG: Your browser does not support Animated PNGs.");
			document.body.removeChild(sample_apng);
		};
	}
	catch (error) {
		document.getElementById("apngtest").textContent = "FAIL";
		document.getElementById("apngtest").style.color = "red";
		console.log("APNG: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("aviftest").style.color = avif_test ? "green" : "red";
			if (!avif_test) {
				console.log("AVIF: Your browser does not support AVIF.");
			}
			document.body.removeChild(sample_avif);
		};
		sample_avif.onerror = function() {
			document.getElementById("aviftest").textContent = "FAIL";
			document.getElementById("aviftest").style.color = "red";
			console.log("AVIF: Your browser does not support AVIF.");
			document.body.removeChild(sample_avif);
		};
	}
	catch (error) {
		document.getElementById("aviftest").textContent = "FAIL";
		document.getElementById("aviftest").style.color = "red";
		console.log("AVIF: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("giftest").style.color = gif_test ? "green" : "red";
			if (!gif_test) {
				console.log("GIF: Your browser does not support GIF.");
			}
			document.body.removeChild(sample_gif);
		};
		sample_gif.onerror = function() {
			document.getElementById("giftest").textContent = "FAIL";
			document.getElementById("giftest").style.color = "red";
			console.log("GIF: Your browser does not support GIF.");
			document.body.removeChild(sample_gif);
		};
	}
	catch (error) {
		document.getElementById("giftest").textContent = "FAIL";
		document.getElementById("giftest").style.color = "red";
		console.log("GIF: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("icotest").style.color = ico_test ? "green" : "red";
			if (!ico_test) {
				console.log("ICO & CUR: Your browser does not support ICO. It wouldn't support CUR either.");
			}
			document.body.removeChild(sample_ico);
		};
		sample_ico.onerror = function() {
			document.getElementById("icotest").textContent = "FAIL";
			document.getElementById("icotest").style.color = "red";
			console.log("ICO & CUR: Your browser does not support ICO. It wouldn't support CUR either.");
			document.body.removeChild(sample_ico);
		};
	}
	catch (error) {
		document.getElementById("icotest").textContent = "FAIL";
		document.getElementById("icotest").style.color = "red";
		console.log("ICO & CUR: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("jpegtest").style.color = jpeg_test ? "green" : "red";
			if (!jpeg_test) {
				console.log("JPEG: Your browser does not support JPEG.");
			}
			document.body.removeChild(sample_jpeg);
		};
		sample_jpeg.onerror = function() {
			document.getElementById("jpegtest").textContent = "FAIL";
			document.getElementById("jpegtest").style.color = "red";
			console.log("JPEG: Your browser does not support JPEG.");
			document.body.removeChild(sample_jpeg);
		};
	}
	catch (error) {
		document.getElementById("jpegtest").textContent = "FAIL";
		document.getElementById("jpegtest").style.color = "red";
		console.log("JPEG: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("jpegxltest").style.color = jpegxl_test ? "green" : "red";
			if (!jpegxl_test) {
				console.log("JPEG-XL: Your browser does not support JPEG-XL.");
			}
			document.body.removeChild(sample_jpegxl);
		};
		sample_jpegxl.onerror = function() {
			document.getElementById("jpegxltest").textContent = "FAIL";
			document.getElementById("jpegxltest").style.color = "red";
			console.log("JPEG-XL: Your browser does not support JPEG-XL.");
			document.body.removeChild(sample_jpegxl);
		};
	}
	catch (error) {
		document.getElementById("jpegxltest").textContent = "FAIL";
		document.getElementById("jpegxltest").style.color = "red";
		console.log("JPEG-XL: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("pngtest").style.color = png_test ? "green" : "red";
			if (!png_test) {
				console.log("PNG: Your browser does not support PNG.");
			}
			document.body.removeChild(sample_png);
		};
		sample_png.onerror = function() {
			document.getElementById("pngtest").textContent = "FAIL";
			document.getElementById("pngtest").style.color = "red";
			console.log("PNG: Your browser does not support PNG.");
			document.body.removeChild(sample_png);
		};
	}
	catch (error) {
		document.getElementById("pngtest").textContent = "FAIL";
		document.getElementById("pngtest").style.color = "red";
		console.log("PNG: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("tifftest").textContent = tiff_test ? "green" : "red";
			if (!tiff_test) {
				console.log("TIFF: Your browser does not support TIFF.");
			}
			document.body.removeChild(sample_tiff);
		};
		sample_tiff.onerror = function() {
			document.getElementById("tifftest").textContent = "FAIL";
			document.getElementById("tifftest").style.color = "red";
			console.log("TIFF: Your browser does not support TIFF.");
			document.body.removeChild(sample_tiff);
		};
	}
	catch (error) {
		document.getElementById("tifftest").textContent = "FAIL";
		document.getElementById("tifftest").style.color = "red";
		console.log("TIFF: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("webptest").style.color = webp_test ? "green" : "red";
			if (!webp_test) {
				console.log("WebP: Your browser does not support WebP.");
			}
			document.body.removeChild(sample_webp);
		};
		sample_webp.onerror = function() {
			document.getElementById("webptest").textContent = "FAIL";
			document.getElementById("webptest").style.color = "red";
			console.log("WebP: Your browser does not support WebP.");
			document.body.removeChild(sample_webp);
		};
	}
	catch (error) {
		document.getElementById("webptest").textContent = "FAIL";
		document.getElementById("webptest").style.color = "red";
		console.log("WebP: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("windowsbmptest").style.color = bmp_test ? "green" : "red";
			if (!bmp_test) {
				console.log("Windows Bitmap: Your browser does not support Windows Bitmap images.");
			}
			document.body.removeChild(sample_bmp);
		};
		sample_bmp.onerror = function() {
			document.getElementById("windowsbmptest").textContent = "FAIL";
			document.getElementById("windowsbmptest").style.color = "red";
			console.log("Windows Bitmap: Your browser does not support Windows Bitmap images.");
			document.body.removeChild(sample_bmp);
		};
	}
	catch (error) {
		document.getElementById("windowsbmptest").textContent = "FAIL";
		document.getElementById("windowsbmptest").style.color = "red";
		console.log("Windows Bitmap: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* VECTOR GRAPHICS */
	
	/* SVG tag test */
	try {
		let sample_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		let svg_test = sample_svg instanceof SVGSVGElement;
		document.getElementById("svgtest").textContent = svg_test ? "PASS" : "FAIL";
		document.getElementById("svgtest").style.color = svg_test ? "green" : "red";
		if (!svg_test) {
			console.log("<svg>: Your browser does not support the \"svg\" element.");
		}
	}
	catch (error) {
		document.getElementById("svgtest").textContent = "FAIL";
		document.getElementById("svgtest").style.color = "red";
		console.log("<svg>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* SVG as an image test */
	try {
		var sample_svg = new Image();
		sample_svg.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
		sample_svg.style.display = "none";
		document.body.appendChild(sample_svg);
		sample_svg.onload = function() {
			document.getElementById("svgasimagetest").textContent = "PASS";
			document.getElementById("svgasimagetest").style.color = "green";
			document.body.removeChild(sample_svg);
		};
		sample_svg.onerror = function() {
			document.getElementById("svgasimagetest").textContent = "FAIL";
			document.getElementById("svgasimagetest").style.color = "red";
			console.log("SVG as an image: Your browser does not support SVG as an image.");
			document.body.removeChild(sample_svg);
		};
	}
	catch (error) {
		document.getElementById("svgasimagetest").textContent = "FAIL";
		document.getElementById("svgasimagetest").style.color = "red";
		console.log("SVG as an image: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Foreign Object tag test */
	try {
		let sample_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if (sample_svg instanceof SVGSVGElement) {
			let sample_fo = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
			sample_svg.appendChild(sample_fo);
			let fo_test = sample_fo instanceof SVGForeignObjectElement;
			document.getElementById("foreignobjecttest").textContent = fo_test ? "PASS" : "FAIL";
			document.getElementById("foreignobjecttest").style.color = fo_test ? "green" : "red";
		}
		else {
			document.getElementById("foreignobjecttest").textContent = "FAIL";
			document.getElementById("foreignobjecttest").style.color = "red";
			console.log("<foreignObject>: Your browser does not support the \"foreignObject\" element.");
		}
	}
	catch (error) {
		document.getElementById("foreignobjecttest").textContent = "FAIL";
		document.getElementById("foreignobjecttest").style.color = "red";
		console.log("<foreignObject>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Filter tag test */
	try {
		let sample_svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if (sample_svg instanceof SVGSVGElement) {
			let sample_filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
			sample_svg.appendChild(sample_filter);
			let filter_test = sample_filter instanceof SVGFilterElement;
			document.getElementById("svgfiltertest").textContent = filter_test ? "PASS" : "FAIL";
			document.getElementById("svgfiltertest").style.color = filter_test ? "green" : "red";
		}
		else {
			document.getElementById("svgfiltertest").textContent = "FAIL";
			document.getElementById("svgfiltertest").style.color = "red";
			console.log("<filter>: Your browser does not support the \"filter\" element.");
		}
	}
	catch (error) {
		document.getElementById("svgfiltertest").textContent = "FAIL";
		document.getElementById("svgfiltertest").style.color = "red";
		console.log("<filter>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* 2D AND 3D GRAPHICS TEST */
	
	/* Canvas tag test */
	try {
		let canvas_test = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		document.getElementById("canvastest").textContent = canvas_test ? "PASS" : "FAIL";
		document.getElementById("canvastest").style.color = canvas_test ? "green" : "red";
		if (!canvas_test) {
			console.log("<canvas>: Your browser does not support the foreignObject element.");
		}
	}
	catch (error) {
		document.getElementById("canvastest").textContent = "FAIL";
		document.getElementById("canvastest").style.color = "red";
		console.log("<canvas>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("canvastexttest").style.color = tests_passed === 3 ? "green" : "red";
		}
		else {
			document.getElementById("canvastexttest").textContent = "FAIL";
			document.getElementById("canvastexttest").style.color = "red";
			console.log("Canvas text test: Your browser does not support the \"canvas\" element.");
		}
	}
	catch (error) {
		document.getElementById("canvastexttest").textContent = "FAIL";
		document.getElementById("canvastexttest").style.color = "red";
		console.log("Canvas text test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Path2D test */
	try {
		let path2d_test = typeof Path2D !== "undefined";
		document.getElementById("path2dtest").textContent = path2d_test ? "PASS" : "FAIL";
		document.getElementById("path2dtest").style.color = path2d_test ? "green" : "red";
		if (path2d_test === false) {
			console.log("Path2D test: Your browser does not support Path2D.");
		}
	}
	catch (error) {
		document.getElementById("path2dtest").textContent = "FAIL";
		document.getElementById("path2dtest").style.color = "red";
		console.log("Path2D test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Canvas ellipse Test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			if (typeof canvas_context.ellipse === "function") {
				document.getElementById("canvasellipsetest").textContent = "PASS";
				document.getElementById("canvasellipsetest").style.color = "green";
			}
			else {
				document.getElementById("canvasellipsetest").textContent = "FAIL";
				document.getElementById("canvasellipsetest").style.color = "red";
				console.log("Canvas ellipse test: Your browser does not support the \"ellipse\" method.");
			}
		}
		else {
			document.getElementById("canvasellipsetest").textContent = "FAIL";
			document.getElementById("canvasellipsetest").style.color = "red";
			console.log("Canvas ellipse test: Your browser does not support the \"canvas\" element.");
		}
	}
	catch (error) {
		document.getElementById("canvasellipsetest").textContent = "FAIL";
		document.getElementById("canvasellipsetest").style.color = "red";
		console.log("Canvas ellipse test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Canvas dashed lines Test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			if (typeof canvas_context.setLineDash === "function") {
				document.getElementById("canvasdltest").textContent = "PASS";
				document.getElementById("canvasdltest").style.color = "green";
			}
			else {
				document.getElementById("canvasdltest").textContent = "FAIL";
				document.getElementById("canvasdltest").style.color = "red";
				console.log("Canvas dashed lines test: Your browser does not support the \"setLineDash\" method.");
			}
		}
		else {
			document.getElementById("canvasdltest").textContent = "FAIL";
			document.getElementById("canvasdltest").style.color = "red";
			console.log("Canvas dashed lines test: Your browser does not support the \"canvas\" element.");
		}
	}
	catch (error) {
		document.getElementById("canvasdltest").textContent = "FAIL";
		document.getElementById("canvasdltest").style.color = "red";
		console.log("Canvas dashed lines test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Canvas focus rings Test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var canvas_context = sample_canvas.getContext("2d");
			if (typeof canvas_context.drawFocusIfNeeded === "function") {
				document.getElementById("canvasfrtest").textContent = "PASS";
				document.getElementById("canvasfrtest").style.color = "green";
			}
			else {
				document.getElementById("canvasfrtest").textContent = "FAIL";
				document.getElementById("canvasfrtest").style.color = "red";
				console.log("Canvas focus rings test: Your browser does not support the \"drawFocusIfNeeded\" method.");
			}
		}
		else {
			document.getElementById("canvasfrtest").textContent = "FAIL";
			document.getElementById("canvasfrtest").style.color = "red";
			console.log("Canvas focus rings test: Your browser does not support the \"canvas\" element.");
		}
	}
	catch (error) {
		document.getElementById("canvasfrtest").textContent = "FAIL";
		document.getElementById("canvasfrtest").style.color = "red";
		console.log("Canvas focus rings test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WebGL test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var webgl_test = sample_canvas.getContext("webgl");
			if (!!webgl_test) {
				document.getElementById("webgltest").textContent = "PASS";
				document.getElementById("webgltest").style.color = "green";
			}
			else {
				document.getElementById("webgltest").textContent = "FAIL";
				document.getElementById("webgltest").style.color = "red";
				console.log("WebGL test: Your browser does not support WebGL.");
			}
		}
		else {
			document.getElementById("webgltest").textContent = "FAIL";
			document.getElementById("webgltest").style.color = "red";
			console.log("WebGL test: Your browser does not support the \"canvas\" element.");
		}
	}
	catch (error) {
		document.getElementById("webgltest").textContent = "FAIL";
		document.getElementById("webgltest").style.color = "red";
		console.log("WebGL test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WebGL 2.0 test */
	try {
		let canvas_supported = !(document.createElement("canvas") instanceof HTMLUnknownElement);
		if (canvas_supported === true) {
			var sample_canvas = document.createElement("canvas");
			var webgl2_test = sample_canvas.getContext("webgl2");
			if (!!webgl2_test) {
				document.getElementById("webgl2test").textContent = "PASS";
				document.getElementById("webgl2test").style.color = "green";
			}
			else {
				document.getElementById("webgl2test").textContent = "FAIL";
				document.getElementById("webgl2test").style.color = "red";
				console.log("WebGL 2.0 test: Your browser does not support WebGL.");
			}
		}
		else {
			document.getElementById("webgl2test").textContent = "FAIL";
			document.getElementById("webgl2test").style.color = "red";
			console.log("WebGL 2.0 test: Your browser does not support the \"canvas\" element.");
		}
	}
	catch (error) {
		document.getElementById("webgl2test").textContent = "FAIL";
		document.getElementById("webgl2test").style.color = "red";
		console.log("WebGL 2.0 test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WebGPU test */
	try {
		if (window.isSecureContext) {
			if ("gpu" in navigator) {
				document.getElementById("webgputest").textContent = "PASS";
				document.getElementById("webgputest").style.color = "green";
			}
			else {
				document.getElementById("webgputest").textContent = "FAIL";
				document.getElementById("webgputest").style.color = "red";
				console.log("WebGPU test: Your browser does not support WebGPU.");
			}
		}
		else {
			document.getElementById("webgputest").textContent = "FAIL";
			document.getElementById("webgputest").style.color = "red";
			console.log("WebGPU test: WebGPU requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("webgputest").textContent = "FAIL";
		document.getElementById("webgputest").style.color = "red";
		console.log("WebGPU test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WebXR test */
	try {
		if (window.isSecureContext) {
			if ("xr" in navigator) {
				document.getElementById("webxrtest").textContent = "PASS";
				document.getElementById("webxrtest").style.color = "green";
			}
			else {
				document.getElementById("webxrtest").textContent = "FAIL";
				document.getElementById("webxrtest").style.color = "red";
				console.log("WebXR test: Your browser does not support WebXR.");
			}
		}
		else {
			document.getElementById("webxrtest").textContent = "FAIL";
			document.getElementById("webxrtest").style.color = "red";
			console.log("WebXR test: WebXR requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("webxrtest").textContent = "FAIL";
		document.getElementById("webxrtest").style.color = "red";
		console.log("WebXR test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("brctest").style.color = "green";
			}
			else {
				document.getElementById("brctest").textContent = "FAIL";
				document.getElementById("brctest").style.color = "red";
				console.log("Bitmap renderer context test: Your browser does not support the \"ImageBitmapRenderingContext\" interface.");
			}
		}
		else {
			document.getElementById("brctest").textContent = "FAIL";
			document.getElementById("brctest").style.color = "red";
			console.log("Bitmap renderer context test: Your browser does not support the \"canvas\" element.");
		}
	}
	catch (error) {
		document.getElementById("brctest").textContent = "FAIL";
		document.getElementById("brctest").style.color = "red";
		console.log("Bitmap renderer context test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("bitmapdatatest").style.color = (tests_passed === 3) ? "green" : "black";
			});
		}
		else {
			document.getElementById("bitmapdatatest").textContent = "FAIL";
			document.getElementById("bitmapdatatest").style.color = "red";
			console.log("Bitmap data test: Your browser does not support the \"ImageBitmap\" interface.");
		}
	}
	catch (error) {
		document.getElementById("bitmapdatatest").textContent = "FAIL";
		document.getElementById("bitmapdatatest").style.color = "red";
		console.log("Bitmap data test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Offscreen Canvas API test */
	try {
		if ("OffscreenCanvas" in window) {
			document.getElementById("offscreentest").textContent = "PASS";
			document.getElementById("offscreentest").style.color = "green";
		}
		else {
			document.getElementById("offscreentest").textContent = "FAIL";
			document.getElementById("offscreentest").style.color = "red";
			console.log("Offscreen Canvas API test: Your browser does not support the Offscreen Canvas API.");
		}
	}
	catch (error) {
		document.getElementById("offscreentest").textContent = "FAIL";
		document.getElementById("offscreentest").style.color = "red";
		console.log("Offscreen Canvas API test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* 2D support in Offscreen Canvas */
	try {
		if ("OffscreenCanvas" in window) {
			var sample_off_canvas = new OffscreenCanvas(0, 0);
			var twod_off_test = sample_off_canvas.getContext("2d");
			document.getElementById("2doffscreentest").textContent = (!!twod_off_test) ? "PASS" : "FAIL";
			document.getElementById("2doffscreentest").style.color = (!!twod_off_test) ? "green" : "red";
			if (twod_off_test === false) {
				console.log("2D support in Offscreen Canvas: Your browser does not support 2D graphics in an Offscreen Canvas.");
			}
		}
		else {
			document.getElementById("2doffscreentest").textContent = "FAIL";
			document.getElementById("2doffscreentest").style.color = "red";
			console.log("2D support in Offscreen Canvas: Your browser does not support the Offscreen Canvas API.");
		}
	}
	catch (error) {
		document.getElementById("2doffscreentest").textContent = "FAIL";
		document.getElementById("2doffscreentest").style.color = "red";
		console.log("2D support in Offscreen Canvas: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* 3D support in Offscreen Canvas */
	try {
		if ("OffscreenCanvas" in window) {
			var sample_off_canvas = new OffscreenCanvas(0, 0);
			var threed_off_test = sample_off_canvas.getContext("webgl");
			document.getElementById("3doffscreentest").textContent = (!!threed_off_test) ? "PASS" : "FAIL";
			document.getElementById("3doffscreentest").style.color = (!!threed_off_test) ? "green" : "red";
			if (threed_off_test === false) {
				console.log("3D support in Offscreen Canvas: Your browser does not support 3D graphics (via WebGL) in an Offscreen Canvas.");
			}
		}
		else {
			document.getElementById("3doffscreentest").textContent = "FAIL";
			document.getElementById("3doffscreentest").style.color = "red";
			console.log("3D support in Offscreen Canvas: Your browser does not support the Offscreen Canvas API.");
		}
	}
	catch (error) {
		document.getElementById("3doffscreentest").textContent = "FAIL";
		document.getElementById("3doffscreentest").style.color = "red";
		console.log("3D support in Offscreen Canvas: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* ANIMATION */
	
	/* requestAnimationFrame method */
	try {
		if (typeof window.requestAnimationFrame === "function") {
			document.getElementById("animationframetest").textContent = "PASS";
			document.getElementById("animationframetest").style.color = "green";
		}
		else {
			document.getElementById("animationframetest").textContent = "FAIL";
			document.getElementById("animationframetest").style.color = "red";
			console.log("\"requestAnimationFrame\" method: Your browser does not support the \"requestAnimationFrame\" method.");
		}
	}
	catch (error) {
		document.getElementById("animationframetest").textContent = "FAIL";
		document.getElementById("animationframetest").style.color = "red";
		console.log("\"requestAnimationFrame\" method: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Web Animations API test */
	try {
		sample_div = document.createElement("div");
		if ("animate" in sample_div && "Animation" in window && "KeyframeEffect" in window && "timeline" in document) {
			document.getElementById("webanimationstest").textContent = "PASS";
			document.getElementById("webanimationstest").style.color = "green";
		}
		else {
			document.getElementById("webanimationstest").textContent = "FAIL";
			document.getElementById("webanimationstest").style.color = "red";
			console.log("Web Animations API test: Your browser does not support the Web Animations API.");
		}
	}
	catch (error) {
		document.getElementById("webanimationstest").textContent = "FAIL";
		document.getElementById("webanimationstest").style.color = "red";
		console.log("Web Animations API test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("csstextshadowtest").style.color = (css_text_shadow_test !== "none") ? "green" : "red";
		if (!css_text_shadow_test) {
			console.log("\"text-shadow\" CSS Property: Your browser does not support the \"text-shadow\" CSS Property.");
		}
	}
	catch (error) {
		document.getElementById("csstextshadowtest").textContent = "FAIL";
		document.getElementById("csstextshadowtest").style.color = "red";
		console.log("\"text-shadow\" CSS Property: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssflexboxtest").style.color = (css_flexbox_test !== "none") ? "green" : "red";
		if (css_flexbox_test === "none") {
			console.log("\"flexbox\" CSS Property: Your browser does not support the \"flexbox\" CSS Property.");
		}
	}
	catch (error) {
		document.getElementById("cssflexboxtest").textContent = "FAIL";
		document.getElementById("cssflexboxtest").style.color = "red";
		console.log("\"flexbox\" CSS Property: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssgridtest").style.color = (css_grid_test !== "none") ? "green" : "red";
		if (!css_grid_test) {
			console.log("\"grid\" CSS Property: Your browser does not support the \"grid\" CSS Property.");
		}
	}
	catch (error) {
		document.getElementById("cssgridtest").textContent = "FAIL";
		document.getElementById("cssgridtest").style.color = "red";
		console.log("\"grid\" CSS Property: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("csssubgridtest").style.color = css_subgrid_test ? "green" : "red";
		if (!css_subgrid_test) {
			console.log("CSS subgrids: Your browser does not support CSS subgrids.");
		}
	}
	catch (error) {
		document.getElementById("csssubgridtest").textContent = "FAIL";
		document.getElementById("csssubgridtest").style.color = "red";
		console.log("CSS subgrids: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
		document.getElementById("cssoffsetanchortest").style.color = (css_offsetanchor_test) ? "green" : "red";
		if (!css_offsetanchor_test) {
			console.log("\"offset-anchor\" CSS Property: Your browser does not support the \"offset-anchor\" CSS Property.");
		}
	}
	catch (error) {
		document.getElementById("cssoffsetanchortest").textContent = "FAIL";
		document.getElementById("cssoffsetanchortest").style.color = "red";
		console.log("\"offset-anchor\" CSS Property: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* COMMUNICATION TEST */
	
	/* Server-sent events test */
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
			document.getElementById("ssetest").style.color = "green";
		}
		else {
			document.getElementById("ssetest").textContent = "FAIL";
			document.getElementById("ssetest").style.color = "red";
			console.log("Server-sent events test: Your browser does not support server-sent events.");
		}
	}
	catch (error) {
		document.getElementById("ssetest").textContent = "FAIL";
		document.getElementById("ssetest").style.color = "red";
		console.log("Server-sent events test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Beacon API Test */
	try {
		if ("sendBeacon" in navigator) {
			document.getElementById("beacontest").textContent = "PASS";
			document.getElementById("beacontest").style.color = "green";
		}
		else {
			document.getElementById("beacontest").textContent = "FAIL";
			document.getElementById("beacontest").style.color = "red";
			console.log("Beacon test: Your browser does not support the Beacon API.");
		}
	}
	catch (error) {
		document.getElementById("beacontest").textContent = "FAIL";
		document.getElementById("beacontest").style.color = "red";
		console.log("Beacon test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Fetch API Test */
	try {
		if ("fetch" in window) {
			document.getElementById("fetchtest").textContent = "PASS";
			document.getElementById("fetchtest").style.color = "green";
		}
		else {
			document.getElementById("fetchtest").textContent = "FAIL";
			document.getElementById("fetchtest").style.color = "red";
			console.log("Fetch test: Your browser does not support the Fetch API.");
		}
	}
	catch (error) {
		document.getElementById("fetchtest").textContent = "FAIL";
		document.getElementById("fetchtest").style.color = "red";
		console.log("Fetch test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Upload files via XMLHttpRequest Level 2 Test */
	try {
		if ("XMLHttpRequest" in window && "FormData" in window) {
			let ufxl2_test = new XMLHttpRequest();
			if ("upload" in ufxl2_test) {
				document.getElementById("ufxl2test").textContent = "PASS";
				document.getElementById("ufxl2test").style.color = "green";
			}
			else {
				document.getElementById("ufxl2test").textContent = "FAIL";
				document.getElementById("ufxl2test").style.color = "red";
				console.log("Upload files via XMLHttpRequest Level 2: Your browser does not support XMLHttpRequest Level 2.");
			}
		}
		else {
			document.getElementById("ufxl2test").textContent = "FAIL";
			document.getElementById("ufxl2test").style.color = "red";
			console.log("Upload files via XMLHttpRequest Level 2: Your browser does not support XMLHttpRequest or FormData.");
		}
	}
	catch (error) {
		document.getElementById("ufxl2test").textContent = "FAIL";
		document.getElementById("ufxl2test").style.color = "red";
		console.log("Upload files via XMLHttpRequest Level 2: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Text response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "text";
		if (sample_xhr.responseType === "text") {
			document.getElementById("textresponsetest").textContent = "PASS";
			document.getElementById("textresponsetest").style.color = "green";
		}
		else {
			document.getElementById("textresponsetest").textContent = "FAIL";
			document.getElementById("textresponsetest").style.color = "red";
			console.log("Text response type: Your browser does not support the text response type.");
		}
	}
	catch (error) {
		document.getElementById("textresponsetest").textContent = "FAIL";
		document.getElementById("textresponsetest").style.color = "red";
		console.log("Text response type: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Document response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "document";
		if (sample_xhr.responseType === "document") {
			document.getElementById("documentresponsetest").textContent = "PASS";
			document.getElementById("documentresponsetest").style.color = "green";
		}
		else {
			document.getElementById("documentresponsetest").textContent = "FAIL";
			document.getElementById("documentresponsetest").style.color = "red";
			console.log("Document response type: Your browser does not support the document response type.");
		}
	}
	catch (error) {
		document.getElementById("documentresponsetest").textContent = "FAIL";
		document.getElementById("documentresponsetest").style.color = "red";
		console.log("Document response type: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* ArrayBuffer response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "arraybuffer";
		if (sample_xhr.responseType === "arraybuffer") {
			document.getElementById("arraybufferresponsetest").textContent = "PASS";
			document.getElementById("arraybufferresponsetest").style.color = "green";
		}
		else {
			document.getElementById("arraybufferresponsetest").textContent = "FAIL";
			document.getElementById("arraybufferresponsetest").style.color = "red";
			console.log("ArrayBuffer response type: Your browser does not support the arrayBuffer response type.");
		}
	}
	catch (error) {
		document.getElementById("arraybufferresponsetest").textContent = "FAIL";
		document.getElementById("arraybufferresponsetest").style.color = "red";
		console.log("ArrayBuffer response type: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Blob response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "blob";
		if (sample_xhr.responseType === "blob") {
			document.getElementById("blobresponsetest").textContent = "PASS";
			document.getElementById("blobresponsetest").style.color = "green";
		}
		else {
			document.getElementById("blobresponsetest").textContent = "FAIL";
			document.getElementById("blobresponsetest").style.color = "red";
			console.log("Blob response type: Your browser does not support the blob response type.");
		}
	}
	catch (error) {
		document.getElementById("blobresponsetest").textContent = "FAIL";
		document.getElementById("blobresponsetest").style.color = "red";
		console.log("Blob response type: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* JSON response type test */
	try {
		let sample_xhr = new XMLHttpRequest();
		sample_xhr.open("GET", "/", true);
		sample_xhr.responseType = "json";
		if (sample_xhr.responseType === "json") {
			document.getElementById("jsonresponsetest").textContent = "PASS";
			document.getElementById("jsonresponsetest").style.color = "green";
		}
		else {
			document.getElementById("jsonresponsetest").textContent = "FAIL";
			document.getElementById("jsonresponsetest").style.color = "red";
			console.log("JSON response type: Your browser does not support the \"json\" response type.");
		}
	}
	catch (error) {
		document.getElementById("jsonresponsetest").textContent = "FAIL";
		document.getElementById("jsonresponsetest").style.color = "red";
		console.log("JSON response test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WebSocket API test */
	try {
		if ("WebSocket" in window) {
			document.getElementById("websockettest").textContent = "PASS";
			document.getElementById("websockettest").style.color = "green";
		}
		else {
			document.getElementById("websockettest").textContent = "FAIL";
			document.getElementById("websockettest").style.color = "red";
			console.log("WebSocket API test: Your browser does not support the WebSocket API.");
		}
	}
	catch (error) {
		document.getElementById("websockettest").textContent = "FAIL";
		document.getElementById("websockettest").style.color = "red";
		console.log("WebSocket API test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			let from_test = typeof ReadableStream.from === "function";
			if (from_test === true) { tests_passed++; }
			else { console.log("Readable streams: Your browser does not support the \"from\" static function."); }
			document.getElementById("readablestreamtest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
			document.getElementById("readablestreamtest").style.color = (tests_passed === 8) ? "green" : "black";
		}
		else {
			document.getElementById("readablestreamtest").textContent = "FAIL";
			document.getElementById("readablestreamtest").style.color = "red";
			console.log("Readable streams: Your browser does not support readable streams.");
		}
	}
	catch (error) {
		document.getElementById("readablestreamtest").textContent = "FAIL";
		document.getElementById("readablestreamtest").style.color = "red";
		console.log("Readable streams: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("writablestreamtest").style.color = (tests_passed === 4) ? "green" : "black";
		}
		else {
			document.getElementById("writablestreamtest").textContent = "FAIL";
			document.getElementById("writablestreamtest").style.color = "red";
			console.log("Writable streams: Your browser does not support writable streams.");
		}
	}
	catch (error) {
		document.getElementById("writablestreamtest").textContent = "FAIL";
		document.getElementById("writablestreamtest").style.color = "red";
		console.log("Writable streams: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* WEB APPLICATIONS */
	
	/* Service workers test */
	try {
		if ("serviceWorker" in navigator) {
			document.getElementById("serviceworkerstest").textContent = "PASS";
			document.getElementById("serviceworkerstest").style.color = "green";
		}
		else {
			document.getElementById("serviceworkerstest").textContent = "FAIL";
			document.getElementById("serviceworkerstest").style.color = "red";
			console.log("Service Workers: Your browser does not support service workers.");
		}
	}
	catch (error) {
		document.getElementById("serviceworkerstest").textContent = "FAIL";
		document.getElementById("serviceworkerstest").style.color = "red";
		console.log("Service workers: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Push messages test */
	try {
		if ("PushManager" in window) {
			document.getElementById("pushmessagestest").textContent = "PASS";
			document.getElementById("pushmessagestest").style.color = "green";
		}
		else {
			document.getElementById("pushmessagestest").textContent = "FAIL";
			document.getElementById("pushmessagestest").style.color = "red";
			console.log("Push messages: Your browser does not support push messages.");
		}
	}
	catch (error) {
		document.getElementById("pushmessagestest").textContent = "FAIL";
		document.getElementById("pushmessagestest").style.color = "red";
		console.log("Push messages: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Web-based protocol handlers test */
	try {
		if ("registerProtocolHandler" in navigator) {
			document.getElementById("webprotocoltest").textContent = "PASS";
			document.getElementById("webprotocoltest").style.color = "green";
		}
		else {
			document.getElementById("webprotocoltest").textContent = "FAIL";
			document.getElementById("webprotocoltest").style.color = "red";
			console.log("Web-based protocol handlers: Your browser does not support web-based protocol handlers.");
		}
	}
	catch (error) {
		document.getElementById("webprotocoltest").textContent = "FAIL";
		document.getElementById("webprotocoltest").style.color = "red";
		console.log("Web-based protocol handlers: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* STORAGE */
	
	/* Session storage test */
	try {
		if ("sessionStorage" in window) {
			document.getElementById("sessionstoragetest").textContent = "PASS";
			document.getElementById("sessionstoragetest").style.color = "green";
		}
		else {
			document.getElementById("sessionstoragetest").textContent = "FAIL";
			document.getElementById("sessionstoragetest").style.color = "red";
			console.log("Session storage test: Your browser does not support session storage.");
		}
	}
	catch (error) {
		document.getElementById("sessionstoragetest").textContent = "FAIL";
		document.getElementById("sessionstoragetest").style.color = "red";
		console.log("Session storage test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Local storage test */
	try {
		if ("localStorage" in window) {
			document.getElementById("localstoragetest").textContent = "PASS";
			document.getElementById("localstoragetest").style.color = "green";
		}
		else {
			document.getElementById("localstoragetest").textContent = "FAIL";
			document.getElementById("localstoragetest").style.color = "red";
			console.log("Local storage test: Your browser does not support local storage.");
		}
	}
	catch (error) {
		document.getElementById("localstoragetest").textContent = "FAIL";
		document.getElementById("localstoragetest").style.color = "red";
		console.log("Local storage test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* IndexedDB test */
	try {
		if ("indexedDB" in window) {
			document.getElementById("indexeddbtest").textContent = "PASS";
			document.getElementById("indexeddbtest").style.color = "green";
		}
		else {
			document.getElementById("indexeddbtest").textContent = "FAIL";
			document.getElementById("indexeddbtest").style.color = "red";
			console.log("IndexedDB test: Your browser does not support IndexedDB.");
		}
	}
	catch (error) {
		document.getElementById("indexeddbtest").textContent = "FAIL";
		document.getElementById("indexeddbtest").style.color = "red";
		console.log("IndexedDB test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* IDBObjectStore test */
	try {
		let request = indexedDB.open("testDatabase", 1);

		request.onerror = function(event) {
			document.getElementById("objectstoretest").textContent = "FAIL";
			document.getElementById("objectstoretest").style.color = "red";
			console.log("IDBObjectStore interface: Unable to open an IndexedDB database for testing. Your browser may not support IndexedDB.");
		};

		request.onsuccess = function(event) {
			let db = event.target.result;
			let transaction = db.transaction(["testStore"], "readwrite");
			let objectstore_test = transaction.objectStore("testStore");
			if (objectstore_test instanceof IDBObjectStore) {
				var tests_passed = 0;
				if (typeof objectstore_test.add === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"add\" method."); }
				if ("autoIncrement" in objectstore_test) { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"autoIncrement\" property."); }
				if (typeof objectstore_test.clear === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"clear\" method."); }
				if (typeof objectstore_test.count === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"count\" method."); }
				if (typeof objectstore_test.createIndex === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"createIndex\" method."); }
				if (typeof objectstore_test.delete === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"delete\" method."); }
				if (typeof objectstore_test.deleteIndex === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"deleteIndex\" method."); }
				if (typeof objectstore_test.get === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"get\" method."); }
				if (typeof objectstore_test.getAll === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"getAll\" method."); }
				if (typeof objectstore_test.getAllKeys === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"getAllKeys\" method."); }
				if (typeof objectstore_test.getKey === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"getKey\" method."); }
				if (typeof objectstore_test.index === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"index\" method."); }
				if ("indexNames" in objectstore_test) { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"indexNames\" property."); }
				if ("keyPath" in objectstore_test) { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"keyPath\" property."); }
				if ("name" in objectstore_test) { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"name\" property."); }
				if (typeof objectstore_test.openCursor === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"openCursor\" method."); }
				if (typeof objectstore_test.openKeyCursor === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"openKeyCursor\" method."); }
				if (typeof objectstore_test.put === "function") { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"put\" method."); }
				if ("transaction" in objectstore_test) { tests_passed++; }
				else { console.log("IDBObjectStore interface: Your browser does not support the \"transaction\" property."); }
				document.getElementById("objectstoretest").textContent = (tests_passed === 19) ? "PASS" : "PARTIAL";
				document.getElementById("objectstoretest").style.color = (tests_passed === 19) ? "green" : "black";
			}
			else {
				document.getElementById("objectstoretest").textContent = "FAIL";
				document.getElementById("objectstoretest").style.color = "red";
				console.log("IDBObjectStore interface: Your browser does not support the \"IDBObjectStore\" interface.");
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
		document.getElementById("objectstoretest").style.color = "red";
		console.log("IDBObjectStore interface: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("fileintertest").style.color = (tests_passed === 2) ? "green" : "black";
		}
		else {
			document.getElementById("fileintertest").textContent = "FAIL";
			document.getElementById("fileintertest").style.color = "red";
			console.log("File interface test: Your browser does not support the File interface.");
		}
	}
	catch (error) {
		document.getElementById("fileintertest").textContent = "FAIL";
		document.getElementById("fileintertest").style.color = "red";
		console.log("File interface test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("frintertest").style.color = (tests_passed === 13) ? "green" : "black";
		}
		else {
			document.getElementById("frintertest").textContent = "FAIL";
			document.getElementById("frintertest").style.color = "red";
			console.log("FileReader interface test: Your browser does not support the FileReader interface.");
		}
	}
	catch (error) {
		document.getElementById("frintertest").textContent = "FAIL";
		document.getElementById("frintertest").style.color = "red";
		console.log("FileReader interface test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Create a Blob from a file test */
	try {
		if ("Blob" in window) {
			let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
			if (sample_blob.size === 45 && sample_blob.type === "text/plain") {
				document.getElementById("blobfromfiletest").textContent = "PASS";
				document.getElementById("blobfromfiletest").style.color = "green";
			}
			else {
				document.getElementById("blobfromfiletest").textContent = "FAIL";
				document.getElementById("blobfromfiletest").style.color = "red";
				console.log("Create a Blob from a file: Your browser does not support creating a Blob from a file.");
			}
		}
		else {
			document.getElementById("blobfromfiletest").textContent = "FAIL";
			document.getElementById("blobfromfiletest").style.color = "red";
			console.log("Create a Blob from a file: Your browser does not support the Blob interface.");
		}
	}
	catch (error) {
		document.getElementById("blobfromfiletest").textContent = "FAIL";
		document.getElementById("blobfromfiletest").style.color = "red";
		console.log("Create a Blob from a file: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Create a Data URL from a Blob test */
	try {
		let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
		let sample_reader = new FileReader();
		sample_reader.onload = function(event) {
			let dataurl_test = (event.target.result).startsWith("data:");
			document.getElementById("dataurlfromblobtest").textContent = dataurl_test ? "PASS" : "FAIL";
			document.getElementById("dataurlfromblobtest").style.color = dataurl_test ? "green" : "red";
			if (dataurl_test === false) {
				console.log("Create a Data URL from a Blob: Your browser does not support creation of Data URLs from Blobs.");
			}
		}
		sample_reader.onerror = function() {
			document.getElementById("dataurlfromblobtest").textContent = "FAIL";
			document.getElementById("dataurlfromblobtest").style.color = "red";
			console.log("Create a Data URL from a Blob: There was an error in trying to read a Blob.");
		}
		sample_reader.readAsDataURL(sample_blob);
	}
	catch (error) {
		document.getElementById("dataurlfromblobtest").textContent = "FAIL";
		document.getElementById("dataurlfromblobtest").style.color = "red";
		console.log("Create a Data URL from a Blob: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Create an ArrayBuffer from a Blob test */
	try {
		let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
		let sample_reader = new FileReader();
		sample_reader.onload = function(event) {
			let arraybuffer_test = (event.target.result) instanceof ArrayBuffer;
			document.getElementById("arraybufferfromblobtest").textContent = arraybuffer_test ? "PASS" : "FAIL";
			document.getElementById("arraybufferfromblobtest").style.color = arraybuffer_test ? "green" : "red";
			if (arraybuffer_test === false) {
				console.log("Create an ArrayBuffer from a Blob: Your browser does not support creation of ArrayBuffers from Blobs.");
			}
		}
		sample_reader.onerror = function() {
			document.getElementById("arraybufferfromblobtest").textContent = "FAIL";
			document.getElementById("arraybufferfromblobtest").style.color = "red";
			console.log("Create an ArrayBuffer from a Blob: There was an error in trying to read a Blob.");
		}
		sample_reader.readAsArrayBuffer(sample_blob);
	}
	catch (error) {
		document.getElementById("arraybufferfromblobtest").textContent = "FAIL";
		document.getElementById("arraybufferfromblobtest").style.color = "red";
		console.log("Create an ArrayBuffer from a Blob: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Create a Blob URL from a Blob test */
	try {
		let sample_blob = new Blob(["The fish was delish and it made quite a dish."], { type: "text/plain" });
		let sample_bloburl = URL.createObjectURL(sample_blob);
		let bloburl_test = (typeof sample_bloburl === "string" && sample_bloburl.startsWith("blob:"));
		document.getElementById("bloburlfromblobtest").textContent = bloburl_test ? "PASS" : "FAIL";
		document.getElementById("bloburlfromblobtest").style.color = bloburl_test ? "green" : "red";
		if (bloburl_test === false) {
			console.log("Create Blob URL from a Blob: Your browser does not support creation of Blob URLs from Blobs.");
		}
		URL.revokeObjectURL(sample_blob);
	}
	catch (error) {
		document.getElementById("bloburlfromblobtest").textContent = "FAIL";
		document.getElementById("bloburlfromblobtest").style.color = "red";
		console.log("Create Blob URL from a Blob: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* USER INTERACTION */
	
	/* Draggable attribute test */
	try {
		var sample_div = document.createElement("div");
		let draggable_test = "draggable" in sample_div;
		document.getElementById("draggabletest").textContent = draggable_test ? "PASS" : "FAIL";
		document.getElementById("draggabletest").style.color = draggable_test ? "green" : "red";
		if (draggable_test === false) {
			console.log("\"draggable\" attribute: Your browser does not support the \"draggable\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("draggabletest").textContent = "FAIL";
		document.getElementById("draggabletest").style.color = "red";
		console.log("\"draggable\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ondrag event test */
	try {
		var sample_div = document.createElement("div");
		let ondrag_test = "ondrag" in sample_div;
		document.getElementById("ondragtest").textContent = ondrag_test ? "PASS" : "FAIL";
		document.getElementById("ondragtest").style.color = ondrag_test ? "green" : "red";
		if (ondrag_test === false) {
			console.log("\"ondrag\" event: Your browser does not support the \"ondrag\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragtest").textContent = "FAIL";
		document.getElementById("ondragtest").style.color = "red";
		console.log("\"ondrag\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ondragstart event test */
	try {
		var sample_div = document.createElement("div");
		let ondragstart_test = "ondragstart" in sample_div;
		document.getElementById("ondragstarttest").textContent = ondragstart_test ? "PASS" : "FAIL";
		document.getElementById("ondragstarttest").style.color = ondragstart_test ? "green" : "red";
		if (ondragstart_test === false) {
			console.log("\"ondragstart\" event: Your browser does not support the \"ondragstart\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragstarttest").textContent = "FAIL";
		document.getElementById("ondragstarttest").style.color = "red";
		console.log("\"ondragstart\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ondragenter event test */
	try {
		var sample_div = document.createElement("div");
		let ondragenter_test = "ondragenter" in sample_div;
		document.getElementById("ondragentertest").textContent = ondragenter_test ? "PASS" : "FAIL";
		document.getElementById("ondragentertest").style.color = ondragenter_test ? "green" : "red";
		if (ondragenter_test === false) {
			console.log("\"ondragenter\" event: Your browser does not support the \"ondragenter\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragentertest").textContent = "FAIL";
		document.getElementById("ondragentertest").style.color = "red";
		console.log("\"ondragenter\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ondragover event test */
	try {
		var sample_div = document.createElement("div");
		let ondragover_test = "ondragover" in sample_div;
		document.getElementById("ondragovertest").textContent = ondragover_test ? "PASS" : "FAIL";
		document.getElementById("ondragovertest").style.color = ondragover_test ? "green" : "red";
		if (ondragover_test === false) {
			console.log("\"ondragover\" event: Your browser does not support the \"ondragover\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragovertest").textContent = "FAIL";
		document.getElementById("ondragovertest").style.color = "red";
		console.log("\"ondragover\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ondragleave event test */
	try {
		var sample_div = document.createElement("div");
		let ondragleave_test = "ondragleave" in sample_div;
		document.getElementById("ondragleavetest").textContent = ondragleave_test ? "PASS" : "FAIL";
		document.getElementById("ondragleavetest").style.color = ondragleave_test ? "green" : "red";
		if (ondragleave_test === false) {
			console.log("\"ondragleave\" event: Your browser does not support the \"ondragleave\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragleavetest").textContent = "FAIL";
		document.getElementById("ondragleavetest").style.color = "red";
		console.log("\"ondragleave\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ondragend event test */
	try {
		var sample_div = document.createElement("div");
		let ondragend_test = "ondragend" in sample_div;
		document.getElementById("ondragendtest").textContent = ondragend_test ? "PASS" : "FAIL";
		document.getElementById("ondragendtest").style.color = ondragend_test ? "green" : "red";
		if (ondragend_test === false) {
			console.log("\"ondragend\" event: Your browser does not support the \"ondragend\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondragendtest").textContent = "FAIL";
		document.getElementById("ondragendtest").style.color = "red";
		console.log("\"ondragend\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ondrop event test */
	try {
		var sample_div = document.createElement("div");
		let ondrop_test = "ondrop" in sample_div;
		document.getElementById("ondroptest").textContent = ondrop_test ? "PASS" : "FAIL";
		document.getElementById("ondroptest").style.color = ondrop_test ? "green" : "red";
		if (ondrop_test === false) {
			console.log("\"ondrop\" event: Your browser does not support the \"ondrop\" event.");
		}
	}
	catch (error) {
		document.getElementById("ondroptest").textContent = "FAIL";
		document.getElementById("ondroptest").style.color = "red";
		console.log("\"ondrop\" event: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("editabletest").style.color = "red";
				break;
			case 1:
				document.getElementById("editabletest").textContent = "PARTIAL";
				break;
			case 2:
				document.getElementById("editabletest").textContent = "PASS";
				document.getElementById("editabletest").style.color = "green";
				break;
		}
	}
	catch (error) {
		document.getElementById("editabletest").textContent = "FAIL";
		document.getElementById("editabletest").style.color = "red";
		console.log("Editable elements test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* designMode attribute test */
	try {
		if ("designMode" in document) {
			document.getElementById("designmodetest").textContent = "PASS";
			document.getElementById("designmodetest").style.color = "green";
		}
		else {
			document.getElementById("designmodetest").textContent = "FAIL";
			document.getElementById("designmodetest").style.color = "red";
			console.log("\"designMode\" attribute: Your browser does not support the \"designMode\" attribute for editing documents.");
		}
	}
	catch (error) {
		document.getElementById("designmodetest").textContent = "FAIL";
		document.getElementById("designmodetest").style.color = "red";
		console.log("\"designMode\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("clipboardtest").style.color = (tests_passed === 4) ? "green" : "black";
			}
			else {
				document.getElementById("clipboardtest").textContent = "FAIL";
				document.getElementById("clipboardtest").style.color = "red";
				console.log("Clipboard interface: Your browser does not support the Clipboard interface.");
			}
		}
		else {
			document.getElementById("clipboardtest").textContent = "FAIL";
			document.getElementById("clipboardtest").style.color = "red";
			console.log("Clipboard interface: The Clipboard interface requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("clipboardtest").textContent = "FAIL";
		document.getElementById("clipboardtest").style.color = "red";
		console.log("Clipboard interface: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("clipboardeventtest").style.color = (tests_passed === 4) ? "green" : "black";
		}
		else {
			document.getElementById("clipboardeventtest").textContent = "FAIL";
			document.getElementById("clipboardeventtest").style.color = "red";
			console.log("Clipboard Event interface: Your browser does not support the Clipboard Event interface.");
		}
	}
	catch (error) {
		document.getElementById("clipboardeventtest").textContent = "FAIL";
		document.getElementById("clipboardeventtest").style.color = "red";
		console.log("Clipboard Event interface: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("clipboarditemtest").style.color = (tests_passed === 4) ? "green" : "black";
			}
			else {
				document.getElementById("clipboarditemtest").textContent = "FAIL";
				document.getElementById("clipboarditemtest").style.color = "red";
				console.log("Clipboard Item interface: Your browser does not support the Clipboard Item interface.");
			}
		}
		else {
			document.getElementById("clipboarditemtest").textContent = "FAIL";
			document.getElementById("clipboarditemtest").style.color = "red";
			console.log("Clipboard Item interface: The Clipboard Item interface requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("clipboarditemtest").textContent = "FAIL";
		document.getElementById("clipboarditemtest").style.color = "red";
		console.log("Clipboard Item interface: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Spellcheck attribute test */
	try {
		var sample_textarea = document.createElement("textarea");
		if ("spellcheck" in sample_textarea) {
			document.getElementById("spellchecktest").textContent = "PASS";
			document.getElementById("spellchecktest").style.color = "green";
		}
		else {
			document.getElementById("spellchecktest").textContent = "FAIL";
			document.getElementById("spellchecktest").style.color = "red";
			console.log("\"spellcheck\" attribute: Your browser does not support the \"spellcheck\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("spellchecktest").textContent = "FAIL";
		document.getElementById("spellchecktest").style.color = "red";
		console.log("\"spellcheck\" attribute: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* SCRIPTING */
	
	/* Asynchronous script execution test */
	try {
		sample_script = document.createElement("script");
		if ("async" in sample_script) {
			document.getElementById("asyncscriptexectest").textContent = "PASS";
			document.getElementById("asyncscriptexectest").style.color = "green";
		}
		else {
			document.getElementById("asyncscriptexectest").textContent = "FAIL";
			document.getElementById("asyncscriptexectest").style.color = "red";
			console.log("Asynchronous script execution: Your browser does not support asynchronous script execution.");
		}
	}
	catch (error) {
		document.getElementById("asyncscriptexectest").textContent = "FAIL";
		document.getElementById("asyncscriptexectest").style.color = "red";
		console.log("Asynchronous script execution: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Defered script execution test */
	try {
		sample_script = document.createElement("script");
		if ("defer" in sample_script) {
			document.getElementById("deferedscriptexectest").textContent = "PASS";
			document.getElementById("deferedscriptexectest").style.color = "green";
		}
		else {
			document.getElementById("deferedscriptexectest").textContent = "FAIL";
			document.getElementById("deferedscriptexectest").style.color = "red";
			console.log("Defered script execution: Your browser does not support defered script execution.");
		}
	}
	catch (error) {
		document.getElementById("deferedscriptexectest").textContent = "FAIL";
		document.getElementById("deferedscriptexectest").style.color = "red";
		console.log("Defered script execution: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Runtime script error reporting test */
	try {
		if ("onerror" in window) {
			document.getElementById("runtimeerrortest").textContent = "PASS";
			document.getElementById("runtimeerrortest").style.color = "green";
		}
		else {
			document.getElementById("runtimeerrortest").textContent = "FAIL";
			document.getElementById("runtimeerrortest").style.color = "red";
			console.log("Runtime script error reporting: Your browser does not support runtime script error reporting.");
		}
	}
	catch (error) {
		document.getElementById("runtimeerrortest").textContent = "FAIL";
		document.getElementById("runtimeerrortest").style.color = "red";
		console.log("Runtime script error reporting: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("jsonendectest").style.color = (tests_passed === 2) ? "green" : "black";
		}
		else {
			document.getElementById("jsonendectest").textContent = "FAIL";
			document.getElementById("jsonendectest").style.color = "red";
			console.log("JSON encoding and decoding: Your browser does not support JSON encoding and decoding.");
		}
	}
	catch (error) {
		document.getElementById("jsonendectest").textContent = "FAIL";
		document.getElementById("jsonendectest").style.color = "red";
		console.log("JSON encoding and decoding: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("modulestest").style.color = "red";
				console.log("Modules: Your browser does not support scripts of type \"module.\"");
			}
			else {
				document.getElementById("modulestest").style.color = "green";
			}
		}, 100);
		if (document.getElementById("modulestest").textContent === "PASS") {
			document.getElementById("modulestest").style.color = "green";
		}
	}
	catch (error) {
		document.getElementById("modulestest").textContent = "FAIL";
		document.getElementById("modulestest").style.color = "red";
		console.log("Modules: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Classes test */
	try {
		new Function("class my_class {}")();
		document.getElementById("classestest").textContent = "PASS";
		document.getElementById("classestest").style.color = "green";
	}
	catch (error) {
		document.getElementById("classestest").textContent = "FAIL";
		document.getElementById("classestest").style.color = "red";
		console.log("Classes: Your browser does not support JavaScript classes. If you believe this to be incorrect, please file a bug report.");
	}
	
	/* Arrow functions test */
	try {
		new Function("return (() => {})()")();
		document.getElementById("arrowfunctest").textContent = "PASS";
		document.getElementById("arrowfunctest").style.color = "green";
	}
	catch (error) {
		document.getElementById("arrowfunctest").textContent = "FAIL";
		document.getElementById("arrowfunctest").style.color = "red";
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
			document.getElementById("promisestest").style.color = (tests_passed === 10) ? "green" : "black";
		}
		else {
			document.getElementById("promisestest").textContent = "FAIL";
			document.getElementById("promisestest").style.color = "red";
			console.log("Promises: Your browser does not support promises.");
		}
	}
	catch (error) {
		document.getElementById("promisestest").textContent = "FAIL";
		document.getElementById("promisestest").style.color = "red";
		console.log("Promises: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Template literals test */
	try {
		let my_literal = `TEST`;
		if (my_literal === "TEST") {
			document.getElementById("templateliteralstest").textContent = "PASS";
			document.getElementById("templateliteralstest").style.color = "green";
		}
		else {
			document.getElementById("templateliteralstest").textContent = "FAIL";
			document.getElementById("templateliteralstest").style.color = "red";
			console.log("Template literals: Your browser does not support template literals.");
		}
	}
	catch (error) {
		document.getElementById("templateliteralstest").textContent = "FAIL";
		document.getElementById("templateliteralstest").style.color = "red";
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
				document.getElementById("typedarraystest").style.color = "red";
				break;
			case 52:
				document.getElementById("typedarraystest").textContent = "PASS";
				document.getElementById("typedarraystest").style.color = "green";
				break;
			default:
				document.getElementById("typedarraystest").textContent = "PARTIAL";
		}
	}
	catch (error) {
		document.getElementById("typedarraystest").textContent = "FAIL";
		document.getElementById("typedarraystest").style.color = "red";
		console.log("Typed arrays: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
					document.getElementById("internationaltest").style.color = "red";
					break;
				case 53:
					document.getElementById("internationaltest").textContent = "PASS";
					document.getElementById("internationaltest").style.color = "green";
					break;
				default:
					document.getElementById("internationaltest").textContent = "PARTIAL";
			}
		}
		else {
			document.getElementById("internationaltest").textContent = "FAIL";
			document.getElementById("internationaltest").style.color = "red";
			console.log("Internationalization: Your browser does not support the Intl object.");
		}
	}
	catch (error) {
		document.getElementById("internationaltest").textContent = "FAIL";
		document.getElementById("internationaltest").style.color = "red";
		console.log("Internationalization: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Async and Await test */
	try {
		new Function("return async function(){}")();
		new Function("return async function(){ await Promise.resolve(); }")();
		document.getElementById("asyncawaittest").textContent = "PASS";
		document.getElementById("asyncawaittest").style.color = "green";
	}
	catch (error) {
		document.getElementById("asyncawaittest").textContent = "FAIL";
		document.getElementById("asyncawaittest").style.color = "red";
		console.log("Async and Await: Your browser does not support the async and await functions. If you believe this to be incorrect, please file a bug report.");
	}
	
	/* Base64 encoding and decoding test */
	try {
		if (typeof window.atob === "function") {
			document.getElementById("base64endectest").textContent = "PASS";
			document.getElementById("base64endectest").style.color = "green";
		}
		else {
			document.getElementById("base64endectest").textContent = "FAIL";
			document.getElementById("base64endectest").style.color = "red";
			console.log("Base64 encoding and decoding: Your browser does not support the \"atob\" method which is required for Base64 encoding and decoding.");
		}
	}
	catch (error) {
		document.getElementById("base64endectest").textContent = "FAIL";
		document.getElementById("base64endectest").style.color = "red";
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
			document.getElementById("mutationobservertest").style.color = (tests_passed === 3) ? "green" : "black";
		}
		else {
			document.getElementById("mutationobservertest").textContent = "FAIL";
			document.getElementById("mutationobservertest").style.color = "red";
			console.log("Mutation Observer test: Your browser does not support the MutationObserver interface.");
		}
	}
	catch (error) {
		document.getElementById("mutationobservertest").textContent = "FAIL";
		document.getElementById("mutationobservertest").style.color = "red";
		console.log("Mutation Observer test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("intersectionobservertest").style.color = (tests_passed === 7) ? "green" : "black";
		}
		else {
			document.getElementById("intersectionobservertest").textContent = "FAIL";
			document.getElementById("intersectionobservertest").style.color = "red";
			console.log("Intersection Observer test: Your browser does not support the IntersectionObserver interface.");
		}
	}
	catch (error) {
		document.getElementById("intersectionobservertest").textContent = "FAIL";
		document.getElementById("intersectionobservertest").style.color = "red";
		console.log("Intersection Observer test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("resizeobservertest").style.color = (tests_passed === 3) ? "green" : "black";
		}
		else {
			document.getElementById("resizeobservertest").textContent = "FAIL";
			document.getElementById("resizeobservertest").style.color = "red";
			console.log("Resize Observer test: Your browser does not support the ResizeObserver interface.");
		}
	}
	catch (error) {
		document.getElementById("resizeobservertest").textContent = "FAIL";
		document.getElementById("resizeobservertest").style.color = "red";
		console.log("Resize Observer test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("urlinttest").style.color = (tests_passed === 20) ? "green" : "black";
		}
		else {
			document.getElementById("urlinttest").textContent = "FAIL";
			document.getElementById("urlinttest").style.color = "red";
			console.log("URL interface: Your browser does not support the URL API.");
		}
	}
	catch (error) {
		document.getElementById("urlinttest").textContent = "FAIL";
		document.getElementById("urlinttest").style.color = "red";
		console.log("URL interface: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("urlspinttest").style.color = (tests_passed === 14) ? "green" : "black";
		}
		else {
			document.getElementById("urlspinttest").textContent = "FAIL";
			document.getElementById("urlspinttest").style.color = "red";
			console.log("URLSearchParams interface: Your browser does not support the URLSearchParams interface.");
		}
	}
	catch (error) {
		document.getElementById("urlspinttest").textContent = "FAIL";
		document.getElementById("urlspinttest").style.color = "red";
		console.log("URLSearchParams interface: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
				document.getElementById("anapitest").style.color = "red";
				break;
			case 15:
				document.getElementById("enapitest").textContent = "PASS";
				document.getElementById("enapitest").style.color = "green";
				break;
			default:
				document.getElementById("enapitest").textContent = "PARTIAL";
		}
	}
	catch (error) {
		document.getElementById("enapitest").textContent = "FAIL";
		document.getElementById("anapitest").style.color = "red";
		console.log("Encoding API test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
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
			document.getElementById("webassemblytest").style.color = (tests_passed === 29) ? "green" : "black";
		}
		else {
			document.getElementById("webassemblytest").textContent = "FAIL";
			document.getElementById("webassemblytest").style.color = "red";
			console.log("WebAssembly test: Your browser does not support WebAssembly.");
		}
	}
	catch (error) {
		document.getElementById("webassemblytest").textContent = "FAIL";
		document.getElementById("webassemblytest").style.color = "red";
		console.log("WebAssembly test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* PERFORMANCE TESTS */
	
	/* Web Workers test */
	try {
		if (typeof Worker !== "undefined") {
			document.getElementById("webworkerstest").textContent = "PASS";
			document.getElementById("webworkerstest").style.color = "green";
		}
		else {
			document.getElementById("webworkerstest").textContent = "FAIL";
			document.getElementById("webworkerstest").style.color = "red";
			console.log("Web Workers: Your browser does not support Web Workers.");
		}
	}
	catch (error) {
		document.getElementById("webworkerstest").textContent = "FAIL";
		document.getElementById("webworkerstest").style.color = "red";
		console.log("Web Workers test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Shared Workers test */
	try {
		if (typeof SharedWorker !== "undefined") {
			document.getElementById("sharedworkerstest").textContent = "PASS";
			document.getElementById("sharedworkerstest").style.color = "green";
		}
		else {
			document.getElementById("sharedworkerstest").textContent = "FAIL";
			document.getElementById("sharedworkerstest").style.color = "red";
			console.log("Shared Workers: Your browser does not support Shared Workers.");
		}
	}
	catch (error) {
		document.getElementById("sharedworkerstest").textContent = "FAIL";
		document.getElementById("sharedworkerstest").style.color = "red";
		console.log("Shared Workers test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* requestIdleCallback method */
	try {
		if (typeof window.requestIdleCallback === "function") {
			document.getElementById("rictest").textContent = "PASS";
			document.getElementById("rictest").style.color = "green";
		}
		else {
			document.getElementById("rictest").textContent = "FAIL";
			document.getElementById("rictest").style.color = "red";
			console.log("\"requestIdleCallback\" method: Your browser does not support the \"requestIdleCallback\" method.");
		}
	}
	catch (error) {
		document.getElementById("rictest").textContent = "FAIL";
		document.getElementById("rictest").style.color = "red";
		console.log("\"requestIdleCallback\" method: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* RESOURCE LOADING TESTS */
	
	/* CSS Font Loading API test */
	try {
		if ("FontFace" in  window) {
			var tests_passed = 0;
			let sample_font = new FontFace("sample_font", "url(test_files/slkscr.ttf)");
			if ("ascentOverride" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"ascentOverride\" property."); }
			if ("descentOverride" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"descentOverride\" property."); }
			if ("display" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"display\" property."); }
			if ("display" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"display\" property."); }
			if ("family" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"family\" property."); }
			if ("featureSettings" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"featureSettings\" property."); }
			if ("lineGapOverride" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"lineGapOverride\" property."); }
			if (typeof sample_font.load === "function") { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"load\" method."); }
			if ("loaded" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"loaded\" property."); }
			if ("status" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"status\" property."); }
			if ("stretch" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"stretch\" property."); }
			if ("style" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"style\" property."); }
			if ("unicodeRange" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"unicodeRange\" property."); }
			if ("variant" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"variant\" property."); }
			if ("weight" in sample_font) { tests_passed++; }
			else { console.log("CSS Font Loading API: Your browser does not support the \"weight\" property."); }
			document.getElementById("fontloadingapitest").textContent = (tests_passed === 15) ? "PASS" : "PARTIAL";
			document.getElementById("fontloadingapitest").style.color = (tests_passed === 15) ? "green" : "black";
		}
		else {
			document.getElementById("fontloadingapitest").textContent = "FAIL";
			document.getElementById("fontloadingapitest").style.color = "red";
			console.log("CSS Font Loading API: Your browser does not support the FontFace interface.");
		}
	}
	catch (error) {
		document.getElementById("fontloadingapitest").textContent = "FAIL";
		document.getElementById("fontloadingapitest").style.color = "red";
		console.log("\"dns-prefetch\" resource hint: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* dns-prefetch resource hint test */
	try {
		let dns_prefetch_test = document.createElement("link");
		dns_prefetch_test.rel = "dns-prefetch";
		if (dns_prefetch_test.rel === "dns-prefetch") {
			document.getElementById("dnsprefetchrhtest").textContent = "PASS";
			document.getElementById("dnsprefetchrhtest").style.color = "green";
		}
		else {
			document.getElementById("dnsprefetchrhtest").textContent = "FAIL";
			document.getElementById("dnsprefecthrhtest").style.color = "red";
			console.log("\"dns-prefetch\" resource hint: Your browser does not support \"link rel=dns-prefetch.\"");
		}
	}
	catch (error) {
		document.getElementById("dnsprefetchrhtest").textContent = "FAIL";
		document.getElementById("dnsprefecthrhtest").style.color = "red";
		console.log("\"dns-prefetch\" resource hint: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* prefetch resource hint test */
	try {
		let prefetch_test = document.createElement("link");
		prefetch_test.rel = "prefetch";
		if (prefetch_test.rel === "prefetch") {
			document.getElementById("prefetchrhtest").textContent = "PASS";
			document.getElementById("prefetchrhtest").style.color = "green";
		}
		else {
			document.getElementById("prefetchrhtest").textContent = "FAIL";
			document.getElementById("prefetchrhtest").style.color = "red";
			console.log("\"prefetch\" resource hint: Your browser does not support \"link rel=prefetch.\"");
		}
	}
	catch (error) {
		document.getElementById("prefetchrhtest").textContent = "FAIL";
		document.getElementById("prefetchrhtest").style.color = "red";
		console.log("\"prefetch\" resource hint: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* preconnect resource hint test */
	try {
		let preconnect_test = document.createElement("link");
		preconnect_test.rel = "preconnect";
		if (preconnect_test.rel === "preconnect") {
			document.getElementById("preconnectrhtest").textContent = "PASS";
			document.getElementById("preconnectrhtest").style.color = "green";
		}
		else {
			document.getElementById("preconnectrhtest").textContent = "FAIL";
			document.getElementById("preconnectrhtest").style.color = "red";
			console.log("\"preconnect\" resource hint: Your browser does not support \"link rel=preconnect.\"");
		}
	}
	catch (error) {
		document.getElementById("preconnectrhtest").textContent = "FAIL";
		document.getElementById("preconnectrhtest").style.color = "red";
		console.log("\"preconnect\" resource hint: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* preload resource hint test */
	try {
		let preload_test = document.createElement("link");
		preload_test.rel = "preload";
		if (preload_test.rel === "preload") {
			document.getElementById("preloadrhtest").textContent = "PASS";
			document.getElementById("preloadrhtest").style.color = "green";
		}
		else {
			document.getElementById("preloadrhtest").textContent = "FAIL";
			document.getElementById("preloadrhtest").style.color = "red";
			console.log("\"preload\" resource hint: Your browser does not support \"link rel=preload.\"");
		}
	}
	catch (error) {
		document.getElementById("preloadrhtest").textContent = "FAIL";
		document.getElementById("preloadrhtest").style.color = "red";
		console.log("\"preload\" resource hint: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Performance Timing test */
	try {
		if ("performance" in window && "timing" in window.performance) {
			document.getElementById("performancetimingtest").textContent = "PASS";
			document.getElementById("performancetimingtest").style.color = "green";
		}
		else {
			document.getElementById("performancetimingtest").textContent = "FAIL";
			document.getElementById("performancetimingtest").style.color = "red";
			console.log("Performance timing: Your browser does not support performance timing.");
		}
	}
	catch (error) {
		document.getElementById("performancetimingtest").textContent = "FAIL";
		document.getElementById("performancetimingtest").style.color = "red";
		console.log("Performance timing: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Performance Observer test */
	try {
		if ("PerformanceObserver" in window) {
			var tests_passed = 0;
			let sample_observer = new PerformanceObserver(function() {});
			if (typeof sample_observer.disconnect === "function") { tests_passed++; }
			else { console.log("Performance Observer: Your browser does not support the \"disconnect\" method."); }
			if (typeof sample_observer.observe === "function") { tests_passed++; }
			else { console.log("Performance Observer: Your browser does not support the \"observe\" method."); }
			if ("supportedEntryTypes" in PerformanceObserver) { tests_passed++; }
			else { console.log("Performance Observer: Your browser does not support the \"supportedEntryTypes\" static property/method."); }
			if (typeof sample_observer.takeRecords === "function") { tests_passed++; }
			else { console.log("Performance Observer: Your browser does not support the \"takeRecords\" method."); }
			document.getElementById("performanceobservertest").textContent = (tests_passed === 4) ? "PASS" : "PARTIAL";
			document.getElementById("performanceobservertest").style.color = (tests_passed === 4) ? "green" : "black";
		}
		else {
			document.getElementById("performanceobservertest").textContent = "FAIL";
			document.getElementById("performanceobservertest").style.color = "red";
			console.log("Performance Observer: Your browser does not support the PerformanceObserver interface.");
		}
	}
	catch (error) {
		document.getElementById("performanceobservertest").textContent = "FAIL";
		document.getElementById("performanceobservertest").style.color = "red";
		console.log("Performance Observer: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* SECURITY AND PRIVACY TESTS */
	
	/* No DRM test */
	/* NOTE: Some browsers will complain about a lack of robustness. Turns out the test will not run correctly with it. */
	try {
		if ("MediaKeys" in window || "WebKitMediaKeys" in window || "MSMediaKeys" in window) {
			let	config = [{
				initDataTypes: ["cenc"],
				audioCapabilities: [{
					contentType: "audio/mp4;codecs=\"mp4a.40.2\""
				}],
				videoCapabilities: [{
					contentType: "video/mp4;codecs=\"avc1.42E01E\""
				}]
			}];
			let cdm_systems = [
				"com.widevine.alpha",		// Widevine
				"com.microsoft.playready",	// PlayReady
				"com.adobe.primetime",		// Adobe Primetime
				"com.apple.fps.1_0",		// FairPlay
				"org.w3.clearkey"			// Clearkey
			];
			async function check_for_cdm() {
				var cdm_found = false;
				for (let a of cdm_systems) {
					try {
						await navigator.requestMediaKeySystemAccess(a, config);
						cdm_found = true;
						console.log(`No DRM: Your browser has the \"${a}\" Digital Restrictions Management technology that is compromising your freedom, privacy, and security.`);
					}
					catch (error) {}
				}
				document.getElementById("nodrmtest").textContent = (cdm_found === true) ? "DANGER" : "PASS";
				document.getElementById("nodrmtest").style.color = (cdm_found === true) ? "red" : "green";
			}
			check_for_cdm();
		}
		else {
			document.getElementById("nodrmtest").textContent = "PASS";
			document.getElementById("nodrmtest").style.color = "green";
		}
	}
	catch (error) {
		document.getElementById("nodrmtest").textContent = "FAIL";
		document.getElementById("nodrmtest").style.color = "red";
		console.log("No DRM: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* No ActiveX test */
	try {
		var no_activex = true;
		try {
			var sample_activex = new ActiveXObject("SomeActiveX.Object");
			no_activex = false;
			sample_activex = null;
		}
		catch (error) {
			sample_activex = null;
		}
		if (no_activex === true) {
			document.getElementById("noactivextest").textContent = "PASS";
			document.getElementById("noactivextest").style.color = "green";
		}
		else {
			document.getElementById("noactivextest").textContent = "DANGER";
			document.getElementById("noactivextest").style.color = "red";
			console.log("No ActoveX: Your browser supports ActiveX which is a major security risk.");
		}
	}
	catch (error) {
		document.getElementById("noactivextest").textContent = "FAIL";
		document.getElementById("noactivextest").style.color = "red";
		console.log("No ActoveX: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* No WebRTC test */
	try {
		if (window.RTCPeerConnection) {
			document.getElementById("nowebrtctest").textContent = "DANGER";
			document.getElementById("nowebrtctest").style.color = "red";
			console.log("No WebRTC: Your browser supports WebRTC which presents a privacy and security risk due to IP address leakage.");
		}
		else {
			document.getElementById("nowebrtctest").textContent = "PASS";
			document.getElementById("nowebrtctest").style.color = "green";
		}
	}
	catch (error) {
		document.getElementById("nowebrtctest").textContent = "FAIL";
		document.getElementById("nowebrtctest").style.color = "red";
		console.log("No WebRTC: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Web Crypto API test */
	try {
		if (window.isSecureContext) {
			if (window.crypto) {
				var tests_passed = 0;
				if (typeof window.crypto.getRandomValues === "function") { tests_passed++; }
				else { console.log("Web Crypto API: Your browser does not support the \"getRandomValues\" method."); }
				if ("subtle" in window.crypto) { tests_passed++; }
				else { console.log("Web Crypto API: Your browser does not support the \"subtle\" property."); }
				if (typeof window.crypto.randomUUID === "function") { tests_passed++; }
				else { console.log("Web Crypto API: Your browser does not support the \"randomUUID\" method."); }
				document.getElementById("webcryptoapitest").textContent = (tests_passed === 3) ? "PASS" : "PARTIAL";
				document.getElementById("webcryptoapitest").style.color = (tests_passed === 3) ? "green" : "black";
			}
			else {
				document.getElementById("webcryptoapitest").textContent = "FAIL";
				document.getElementById("webcryptoapitest").style.color = "red";
				console.log("Web Crypto API: Your browser does not support the Web Crypto API.");
			}
		}
		else {
			document.getElementById("webcryptoapitest").textContent = "FAIL";
			document.getElementById("webcryptoapitest").style.color = "red";
			console.log("Web Crypto API: requires a secure context in order to operate.");
		}
	}
	catch (error) {
		document.getElementById("webcryptoapitest").textContent = "FAIL";
		document.getElementById("webcryptoapitest").style.color = "red";
		console.log("Web Crypto API: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Content Security Policy 1 test */
	try {
		var iframe = document.createElement("iframe");
		iframe.style.display = "none";
		document.body.appendChild(iframe);
		iframe.contentDocument.write(`
			<!DOCTYPE html>
			<html>
				<head>
					<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self'\">
				</head>
				<body></body>
			</html>
		`);
		iframe.contentDocument.close();
		let csp1_header = iframe.contentDocument.querySelector("meta[http-equiv=\"Content-Security-Policy\"]").getAttribute("content");
		if (csp1_header.includes("default-src")) {
			document.getElementById("csp1test").textContent = "PASS";
			document.getElementById("csp1test").style.color = "green";
		}
		else {
			document.getElementById("csp1test").textContent = "FAIL";
			document.getElementById("csp1test").style.color = "red";
			console.log("Content Security Policy 1: Your browser does not support Content Security Policy 1.");
		}
		document.body.removeChild(iframe);
	}
	catch (error) {
		document.getElementById("csp1test").textContent = "FAIL";
		document.getElementById("csp1test").style.color = "red";
		console.log("Content Security Policy 1: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Content Security Policy 2 test */
	try {
		var iframe = document.createElement("iframe");
		iframe.style.display = "none";
		document.body.appendChild(iframe);
		iframe.contentDocument.write(`
			<!DOCTYPE html>
			<html>
				<head>
					<meta http-equiv=\"Content-Security-Policy\" content=\"script-src 'self' 'unsafe-inline'\">
				</head>
				<body></body>
			</html>
		`);
		iframe.contentDocument.close();
		let csp2_header = iframe.contentDocument.querySelector("meta[http-equiv=\"Content-Security-Policy\"]").getAttribute("content");
		if (csp2_header.includes("script-src")) {
			document.getElementById("csp2test").textContent = "PASS";
			document.getElementById("csp2test").style.color = "green";
		}
		else {
			document.getElementById("csp2test").textContent = "FAIL";
			document.getElementById("csp2test").style.color = "red";
			console.log("Content Security Policy 2: Your browser does not support Content Security Policy 2.");
		}
		document.body.removeChild(iframe);
	}
	catch (error) {
		document.getElementById("csp2test").textContent = "FAIL";
		document.getElementById("csp2test").style.color = "red";
		console.log("Content Security Policy 2: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Cross-Origin Resource Sharing test*/
	try {
		var my_xhr = new XMLHttpRequest();
		let data_url = "data:text/plain;base64,SGVsbG8gd29ybGQ=";
		my_xhr.open("GET", data_url, true);
		my_xhr.onreadystatechange = function() {
			if (my_xhr.readyState === 4) {
				if (my_xhr.status === 200) {
					document.getElementById("corstest").textContent = "PASS";
					document.getElementById("corstest").style.color = "green";
				}
				else {
					document.getElementById("corstest").textContent = "FAIL";
					document.getElementById("corstest").style.color = "red";
					console.log("Cross-Origin Resource Sharing: Your browser does not support Cross-Origin Resource Sharing.");
				}
			}
		};
		try {
			my_xhr.send();
		}
		catch (error) {
			document.getElementById("corstest").textContent = "FAIL";
			document.getElementById("corstest").style.color = "red";
			console.log("Cross-Origin Resource Sharing: Your browser does not support Cross-Origin Resource Sharing.");
		}
	}
	catch (error) {
		document.getElementById("corstest").textContent = "FAIL";
		document.getElementById("corstest").style.color = "red";
		console.log("Cross-Origin Resource Sharing: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Subresource integrity test */
	try {
		let sample_link = document.createElement("link");
		let sample_script = document.createElement("script");
		let link_integrity_test = "integrity" in sample_link;
		let script_integrity_test = "integrity" in sample_script;
		if (link_integrity_test && script_integrity_test) {
			document.getElementById("sritest").textContent = "PASS";
			document.getElementById("sritest").style.color = "green";
		}
		else {
			document.getElementById("sritest").textContent = "FAIL";
			document.getElementById("sritest").style.color = "red";
			console.log("Subresource integrity test: Your browser did not support the \"integrity\" attribute.");
		}
	}
	catch (error) {
		document.getElementById("sritest").textContent = "FAIL";
		document.getElementById("sritest").style.color = "red";
		console.log("Subresource integrity test: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Cross-document messaging test */
	try {
		if (typeof window.postMessage === "function") {
			let channel = new MessageChannel();
			var msg_port = channel.port2;
			msg_port.onmessage = function(event) {
				let rcv_data = event.data;
				if (rcv_data instanceof ArrayBuffer) {
					document.getElementById("crossdoctest").textContent = "PASS";
					document.getElementById("crossdoctest").style.color = "green";
				}
				else {
					document.getElementById("crossdoctest").textContent = "PARTIAL";
					console.log("Cross-document messaging: Your browser did not support the \"transfer\" parameter.");
				}
			};
			let sample_buffer = new ArrayBuffer(16);
			channel.port1.postMessage(sample_buffer, [sample_buffer]);
		}
		else {
			document.getElementById("crossdoctest").textContent = "FAIL";
			document.getElementById("crossdoctest").style.color = "red";
			console.log("Cross-document messaging: Your browser did not support the \"postMessage\" method.");
		}
	}
	catch (error) {
		document.getElementById("crossdoctest").textContent = "FAIL";
		document.getElementById("crossdoctest").style.color = "red";
		console.log("Cross-document messaging: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* FIDO2 test */
	try {
		if (typeof PublicKeyCredential === "function") {
			var tests_passed = 0;
			let sample_public_key = PublicKeyCredential.prototype;
			if ("authenticatorAttachment" in sample_public_key) { tests_passed++; }
			else { console.log("FIDO2: Your browser does not support the \"authenticatorAttachment\" property."); }
			if (typeof sample_public_key.getClientExtensionResults === "function") { tests_passed++; }
			else { console.log("FIDO2: Your browser does not support the \"getClientExtensionResults\" method."); }
			if (typeof PublicKeyCredential.isConditionalMediationAvailable === "function") { tests_passed++; }
			else { console.log("FIDO2: Your browser does not support the \"isConditionalMediationAvailable\" static method."); }
			if (typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === "function") { tests_passed++; }
			else { console.log("FIDO2: Your browser does not support the \"isUserVerifyingPlatformAuthenticatorAvailable\" static method."); }
			if ("rawId" in sample_public_key) { tests_passed++; }
			else { console.log("FIDO2: Your browser does not support the \"rawId\" property."); }
			if ("response" in sample_public_key) { tests_passed++; }
			else { console.log("FIDO2: Your browser does not support the \"response\" property."); }
			document.getElementById("fido2test").textContent = (tests_passed === 6) ? "PASS" : "PARTIAL";
			document.getElementById("fido2test").style.color = (tests_passed === 6) ? "green" : "black";
		}
		else {
			document.getElementById("fido2test").textContent = "FAIL";
			document.getElementById("fido2test").style.color = "red";
			console.log("FIDO2: Your browser does not support FIDO2.");
		}
	}
	catch (error) {
		document.getElementById("fido2test").textContent = "FAIL";
		document.getElementById("fido2test").style.color = "red";
		console.log("FIDO2: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Credential management test */
	try {
		if ("credentials" in navigator) {
			var tests_passed = 0;
			if (typeof navigator.credentials.create === "function") { tests_passed++; }
			else { console.log("Credential Management Level 1: Your browser does not support the \"create\" method."); }
			if (typeof navigator.credentials.get === "function") { tests_passed++; }
			else { console.log("Credential Management Level 1: Your browser does not support the \"get\" method."); }
			if (typeof navigator.credentials.store === "function") { tests_passed++; }
			else { console.log("Credential Management Level 1: Your browser does not support the \"store\" method."); }
			document.getElementById("credentialmantest").textContent = (tests_passed === 3) ? "PASS" : "PARTIAL";
			document.getElementById("credentialmantest").style.color = (tests_passed === 3) ? "green" : "black";
		}
		else {
			document.getElementById("credentialmantest").textContent = "FAIL";
			document.getElementById("credentialmantest").style.color = "red";
			console.log("Credential Management Level 1: Your browser does not support Credential Management Level 1.");
		}
	}
	catch (error) {
		document.getElementById("credentialmantest").textContent = "FAIL";
		document.getElementById("credentialmantest").style.color = "red";
		console.log("Credential Management Level 1: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Sandboxed iframes test */
	try {
		let sample_iframe = document.createElement("iframe");
		if ("sandbox" in sample_iframe) {
			document.getElementById("sandboxediframetest").textContent = "PASS";
			document.getElementById("sandboxediframetest").style.color = "green";
		}
		else {
			document.getElementById("sandboxediframetest").textContent = "FAIL";
			document.getElementById("sandboxediframetest").style.color = "red";
			console.log("Sandboxed iframes: Your browser does not support sandboxed iframes.");
		}
	}
	catch (error) {
		document.getElementById("sandboxediframetest").textContent = "FAIL";
		document.getElementById("sandboxediframetest").style.color = "red";
		console.log("Sandboxed iframes: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* iframes with inline content test */
	try {
		/*
		// This test works, but it flashes the iframe on screen, which is annoying.
		let sample_iframe = document.createElement("iframe");
		sample_iframe.setAttribute("srcdoc", "<p>The fish was delish and it made quite a dish.</p>");
		sample_iframe.onload = function() {
			let iframedoc = sample_iframe.contentDocument || sample_iframe.contentWindow.document;
			let inline_iframe_test = iframedoc.body.innerHTML.includes("The fish was delish and it made quite a dish.");
			if (inline_iframe_test === true) {
				document.getElementById("iframeinlinetest").textContent = "PASS";
			}
			else {
				document.getElementById("iframeinlinetest").textContent = "FAIL";
				console.log("iframes with inline contents: Your browser does not iframes with inline contents.");
			}
			document.body.removeChild(sample_iframe);
		}
		document.body.appendChild(sample_iframe);
		*/
		let sample_iframe = document.createElement("iframe");
		if ("srcdoc" in sample_iframe) {
			document.getElementById("iframeinlinetest").textContent = "PASS";
			document.getElementById("iframeinlinetest").style.color = "green";
		}
		else {
			document.getElementById("iframeinlinetest").textContent = "FAIL";
			document.getElementById("iframeinlinetest").style.color = "red";
			console.log("iframes with inline contents: Your browser does not iframes with inline contents.");
		}
	}
	catch (error) {
		document.getElementById("iframeinlinetest").textContent = "FAIL";
		document.getElementById("iframeinlinetest").style.color = "red";
		console.log("iframes with inline contents: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Ad/Tracker blocking test */
	try {
		document.getElementById("adblocktest").textContent = "Testing...";
		let sample_tracker = new Image();
		sample_tracker.onload = function() {
			document.getElementById("adblocktest").textContent = "DANGER";
			document.getElementById("adblocktest").style.color = "red";
			console.log("Ad/Tracker blocking: Your browser does not block ads/trackers, which constitutes a privacy and security concern.");
		}
		sample_tracker.onerror = function() {
			document.getElementById("adblocktest").textContent = "PASS";
			document.getElementById("adblocktest").style.color = "green";
		}
		sample_tracker.src = "https://www.google-analytics.com/r/collect?v=1&_v=j79&a=1733153560&t=pageview&_s=1&dl=http%3A%2F%2Fexample.com&ul=en-us&de=UTF-8&dt=Example&sd=24-bit&sr=1920x1080&vp=1903x969&je=0&_u=IEBAAEQ~&jid=1889738150&gjid=1027089335&cid=555&t=pageview&z=400476707";
	}
	catch (error) {
		document.getElementById("adblocktest").textContent = "FAIL";
		document.getElementById("adblocktest").style.color = "red";
		console.log("Ad/Tracker blocking: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Global Privacy Control test */
	try {
		if (navigator.globalPrivacyControl === true) {
			document.getElementById("gpctest").textContent = "PASS";
			document.getElementById("gpctest").style.color = "green";
		}
		else {
			document.getElementById("gpctest").textContent = "FAIL";
			document.getElementById("gpctest").style.color = "red";
			console.log("Global Privacy Control: Either your browser does not support GPC, or it is not enabled.");
		}
	}
	catch (error) {
		document.getElementById("gpctest").textContent = "FAIL";
		document.getElementById("gpctest").style.color = "red";
		console.log("Global Privacy Control: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* MISCELLANEOUS TESTS */
	
	/* Blink tag test */
	try {
		let blink_test = !(document.createElement("blink") instanceof HTMLUnknownElement);
		document.getElementById("blinktest").textContent = blink_test ? "PASS" : "FAIL";
		document.getElementById("blinktest").style.color = blink_test ? "green" : "red";
		if (blink_test === false) {
			console.log("<blink>: Your browser does not support the \"blink\" element.");
		}
	}
	catch (error) {
		document.getElementById("blinktest").textContent = "FAIL";
		document.getElementById("blinktest").style.color = "red";
		console.log("<blink>: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Session history test */
	try {
		if ("history" in window) {
			var tests_passed = 0;
			if (typeof window.history.back === "function") { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"back\" method."); }
			if (typeof window.history.forward === "function") { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"forward\" method."); }
			if (typeof window.history.go === "function") { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"go\" method."); }
			if ("length" in window.history) { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"length\" property."); }
			if (typeof window.history.pushState === "function") { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"pushState\" method."); }
			if (typeof window.history.replaceState === "function") { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"replaceState\" method."); }
			if ("scrollRestoration" in window.history) { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"scrollRestoration\" property."); }
			if ("state" in window.history) { tests_passed++; }
			else { console.log("Session history: Your browser does not support the \"state\" property."); }
			document.getElementById("sessionhisttest").textContent = (tests_passed === 8) ? "PASS" : "PARTIAL";
			document.getElementById("sessionhisttest").style.color = (tests_passed === 8) ? "green" : "red";
		}
		else {
			document.getElementById("sessionhisttest").textContent = "FAIL";
			document.getElementById("sessionhisttest").style.color = "red";
			console.log("Session history: Your browser does not support the History API.");
		}
	}
	catch (error) {
		document.getElementById("sessionhisttest").textContent = "FAIL";
		document.getElementById("sessionhisttest").style.color = "red";
		console.log("Session history: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Page visibility test */
	try {
		if ("visibilityState" in document) {
			document.getElementById("pagevisibilitytest").textContent = "PASS";
			document.getElementById("pagevisibilitytest").style.color = "green";
		}
		else {
			document.getElementById("pagevisibilitytest").textContent = "FAIL";
			document.getElementById("pagevisibilitytest").style.color = "red";
			console.log("Page visibility: Your browser does not support the \"visibilityState\" property.");
		}
	}
	catch (error) {
		document.getElementById("pagevisibilitytest").textContent = "FAIL";
		document.getElementById("pagevisibilitytest").style.color = "red";
		console.log("Page visibility: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Selection API test */
	try {
		if (typeof window.getSelection === "function") {
			var tests_passed = 0;
			let sample_selection = window.getSelection();
			if (typeof sample_selection.addRange === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"addRange\" method."); }
			if ("anchorNode" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"anchorNode\" property."); }
			if ("anchorOffset" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"anchorOffset\" property."); }
			if (typeof sample_selection.collapse === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"collapse\" method."); }
			if (typeof sample_selection.collapseToEnd === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"collapseToEnd\" method."); }
			if (typeof sample_selection.collapseToStart === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"collapseToStart\" method."); }
			if (typeof sample_selection.containsNode === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"containsNode\" method."); }
			if (typeof sample_selection.deleteFromDocument === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"deleteFromDocument\" method."); }
			if ("direction" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"direction\" property."); }
			if (typeof sample_selection.empty === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support \"empty\" as an alias of \"removeAllRanges\"."); }
			if (typeof sample_selection.extend === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"extend\" method."); }
			if ("focusNode" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"focusNode\" property."); }
			if ("focusOffset" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"focusOffset\" property."); }
			if (typeof sample_selection.getRangeAt === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"getRangeAt\" method."); }
			if ("isCollapsed" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"isCollapsed\" property."); }
			if (typeof sample_selection.modify === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"modify\" method."); }
			if ("rangeCount" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"rangeCount\" property."); }
			if (typeof sample_selection.removeAllRanges === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"removeAllRanges\" method."); }
			if (typeof sample_selection.removeRange === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"removeRange\" method."); }
			if (typeof sample_selection.selectAllChildren === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"selectAllChildren\" method."); }
			if (typeof sample_selection.setBaseAndExtent === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"setBaseAndExtent\" method."); }
			if (typeof sample_selection.setPosition === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support \"setPosition\" as an alias of \"collapse\"."); }
			if (typeof sample_selection.toString === "function") { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"toString\" method."); }
			if ("type" in sample_selection) { tests_passed++; }
			else { console.log("Selection API: Your browser does not support the \"type\" property."); }
			document.getElementById("selectiontest").textContent = (tests_passed === 24) ? "PASS" : "PARTIAL";
			document.getElementById("selectiontest").style.color = (tests_passed === 24) ? "green" : "black";
		}
		else {
			document.getElementById("selectiontest").textContent = "FAIL";
			document.getElementById("selectiontest").style.color = "red";
			console.log("Selection API: Your browser does not support the Selection API.");
		}
	}
	catch (error) {
		document.getElementById("selectiontest").textContent = "FAIL";
		document.getElementById("selectiontest").style.color = "red";
		console.log("Selection API: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* scrollIntoView method test */
	try {
		if (typeof Element.prototype.scrollIntoView === "function") {
			document.getElementById("scrollviewtest").textContent = "PASS";
			document.getElementById("scrollviewtest").style.color = "green";
		}
		else {
			document.getElementById("scrollviewtest").textContent = "FAIL";
			document.getElementById("scrollviewtest").style.color = "red";
			console.log("\"scrollIntoView\" method: Your browser does not support the \"scrollIntoView\" method.");
		}
	}
	catch (error) {
		document.getElementById("scrollviewtest").textContent = "FAIL";
		document.getElementById("scrollviewtest").style.color = "red";
		console.log("\"scrollIntoView\" method: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Amiga ProTracker modules test */
	try {
		var sample_audio = document.createElement("audio");
		let protracker_test = (sample_audio.canPlayType("audio/mod") || sample_audio.canPlayType("audio/x-mod"));
		if (protracker_test === "probably" || protracker_test === "maybe") {
			document.getElementById("xmodtest").textContent = "PASS";
			document.getElementById("xmodtest").style.color = "green";
		}
		else {
			document.getElementById("xmodtest").textContent = "FAIL";
			document.getElementById("xmodtest").style.color = "red";
			console.log("Amiga ProTracker modules: Your browser does not support the MOD or X-MOD mime type.");
		}
	}
	catch (error) {
		document.getElementById("xmodtest").textContent = "FAIL";
		document.getElementById("xmodtest").style.color = "red";
		console.log("Amiga ProTracker modules: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
	
	/* Autoplay blocking test */
	try {
		document.getElementById("autoplayblocktest").textContent = "Testing...";
		let sample_audio = document.createElement('audio');
		sample_audio.src = "test_files/KDE_Beep_ClassicBeep.wav";
		sample_audio.type = "audio/wav";
		sample_audio.autoplay = true;
		sample_audio.muted = true;
		var autoplay_blocked = true;
		var play_promise = new Promise(function(resolve, reject) {
			sample_audio.addEventListener('play', function() {
				setTimeout(function() {
					if (sample_audio.paused === false) {
						autoplay_blocked = false;
					}
					resolve();
				}, 300);
			}, { once: true });
			setTimeout(resolve, 3000);
		});
		document.body.appendChild(sample_audio);
		play_promise.then(function() {
			document.body.removeChild(sample_audio);
			if (autoplay_blocked === true) {
				document.getElementById("autoplayblocktest").textContent = "PASS";
				document.getElementById("autoplayblocktest").style.color = "green";
			}
			else {
				document.getElementById("autoplayblocktest").textContent = "FAIL";
				document.getElementById("autoplayblocktest").style.color = "red";
				console.log("Autoplay blocking: Your browser did not stop Autoplay from running, which is annoying for most users.");
			}
		});
	}
	catch (error) {
		document.getElementById("autoplayblocktest").textContent = "FAIL";
		document.getElementById("autoplayblocktest").style.color = "red";
		console.log("Autoplay blocking: There was an error in running this test. If you suspect this to be a bug in the test, please file a bug report.");
	}
};