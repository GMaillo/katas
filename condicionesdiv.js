function condicionesdiv(val, s) {
	if (val % 3 === 0) {
		s.push("Foo");
	}

	if (val % 5 === 0) {
		s.push("Bar");
	}

	if (val % 7 === 0) {
		s.push("Quix");
	}

	return s;
}

module.exports = condicionesdiv;