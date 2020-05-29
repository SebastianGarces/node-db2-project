exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("cars")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("cars").insert([
				{
					vin: 'f53g13g1s54g987s635',
					mileage: 6513.35,
					make: 'chevy',
					model: 'malibu',
				},
				{
					vin: 'f53g13kjha54g987s635',
					mileage: 6513.35,
					make: 'chevy',
					model: 'cruze',
				},				{
					vin: 'f53g13g1s54gasds635',
					mileage: 6513.35,
					make: 'chevy',
					model: 'trax',
				},				{
					vin: 'f53asdf1s54g987s635',
					mileage: 6513.35,
					make: 'chevy',
					model: 'equinox',
				},				{
					vin: 'f53g13g1sasdf7s635',
					mileage: 6513.35,
					make: 'chevy',
					model: 'blazer',
				},				{
					vin: 'asdf13g1s54g987s635',
					mileage: 6513.35,
					make: 'chevy',
					model: 'traverse',
				},
			]);
		});
};
