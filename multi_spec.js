var multiTable = require('./multi.js');

describe('Multi Table', function() {	

	it("1 to be 1", function() {
		expect(multiTable(1)).toEqual("1");
	})
})


