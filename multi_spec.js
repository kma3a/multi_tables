var multiTable = require('./multi.js');

describe('Multi Table', function() {	

	it("1 to be 1", function() {
		expect(multiTable(1)).toEqual([[1]]);
	})
	
	it("2 will give the ones and twos", function() {
		var expected = [[1,2],[2,4]];
		expect(multiTable(2)).toEqual(expected);
	})


	it("5 will give the ones and twos", function() {
		var expected = [[1,2,3,4,5],[2,4,6,8,10],[3,6,9,12,15],[4,8,12,16,20],[5,10,15,20,25]];
		expect(multiTable(5)).toEqual(expected);
	})
	
	it("will throw error if you don't pass in a number", function(){
		expect(function(){multiTable("banana");}).toThrow(new Error("Please input a number"));
	})

})


