var phparise = function(obj) {
	var output = [];

	for (var key in obj) {
	   if (obj.hasOwnProperty(key)) {
	      output.push("'" + key + "' => '" + obj[key] + "'");
	   }
	}

	return "array(\n\t" + output.join(",\n\t") + "\n)";
};