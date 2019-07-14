const condicionesdiv = require("./condicionesdiv.js");
const equivalencias = require("./equivalencias.js");


const FooBarQuix = async (val=1, s=[]) => {

	async function task() {
		await condicionesdiv(val, s);
		await equivalencias(val, s);


		await console.log(val, s.join(""));

		s = [];
	}

	while (val < 101) {
		await task();
		val++;
	}

	if (val >100) {
		console.log(
			"Has excedido el número 100"
		);
	}
};

module.exports = FooBarQuix;

FooBarQuix();