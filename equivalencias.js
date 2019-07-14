function equivalencias(val, s) {

	let valS = val.toString().split("");

	for (var i = 0; i < valS.length; i++) {
		if (valS[i] === "0") {
			s.push("*");
		} else if (valS[i] === "3") {
			s.push("Foo");
		} else if (valS[i] === "5") {
			s.push("Bar");
		} else if (valS[i] === "7") {
			s.push("Quix");
		}
	}

	return s;
}

module.exports = equivalencias;