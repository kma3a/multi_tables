var multiTable = require('./multi.js');

describe('Multi Table', function() {	

	it("1 to be 1", function() {
		expect(multiTable(1)).toEqual(1);
	})
	
	it("if 2 will give the ones and twos", function() {
		var expected = [[1,2],[2,4]];
		expect(multiTable(2)).toEqual(expected);
	})
})


