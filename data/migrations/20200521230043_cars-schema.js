exports.up = function (knex) {
	return knex.schema.createTable("cars", table => {
		table.increments("id");
		table.string("vin").unique().notNullable();
		table.decimal("mileage");
		table.string("make");
		table.string("model");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("cars");
};
