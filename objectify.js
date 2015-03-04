var objectify = function(obj) {
	var php = [];
	var json = [];
	var js = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			php.push("'" + key + "' => '" + escape_single_quote(obj[key]) + "'");
			json.push('"' + key + '": "' + escape_double_quote(obj[key]) + '"');
			js.push(key + ": '" + escape_single_quote(obj[key]) + "'");
		}
	}

	var output = [
		"php:\narray(\n\t" + php.join(",\n\t") + "\n)",
		"json:\n{\n\t" + json.join(",\n\t") + "\n}",
		"javascript:\n{\n\t" + js.join(",\n\t") + "\n}",
	];

	return output.join("\n\n");
};

var escape_single_quote = function(text) {
	return text.replace(/\'/g, "\\'");
}

var escape_double_quote = function(text) {
	return text.replace(/\"/g, '\\"');
}
