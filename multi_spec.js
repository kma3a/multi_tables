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
	
	it("9 will give the ones and twos", function() {
		var expected = [[1,2,3,4,5,6,7,8,9],[2,4,6,8,10,12,14,16,18],[3,6,9,12,15,18,21,24,27],[4,8,12,16,20,24,28,32,36],[5,10,15,20,25,30,35,40,45],[6,12,18,24,30,36,42,48,54],[7,14,21,28,35,42,49,56,63],[8,16,24,32,40,48,56,64,72],[9,18,27,36,45,54,63,72,81]];
		expect(multiTable(9)).toEqual(expected);
	})


	it("will throw error if you don't pass in a number", function(){
		expect(function(){multiTable("banana");}).toThrow(new Error("Please input a number"));
	})

})


