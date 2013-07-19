var phparise = function(obj) {
	var output = [];

	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			output.push("'" + key + "' => '" + escape_quote(obj[key]) + "'");
		}
	}

	return "array(\n\t" + output.join(",\n\t") + "\n)";
};

var escape_quote = function(text) {
	return text.replace(/\'/g, "\\'");
}