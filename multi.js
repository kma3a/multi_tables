
var multiTable = function(input) {
	if (!isNaN(input)){
		var output = [];
		for (var count = 1; count <= input; count++){
			var currentRow = []
			for (var multiplyer = 1; multiplyer <= input; multiplyer++){
				currentRow.push(multiplyer*count);
			}
			output.push(currentRow);
		}
		return output;
	}
	throw new Error('Please input a number');
}

module.exports = multiTable;
