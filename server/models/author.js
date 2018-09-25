

var mongoose = require('mongoose');
var AuthorSchema = new mongoose.Schema(
	{
		name: { 
		type: String, 
		required: [true, "--name is required"],
		minlength: [5, "--name must be more than 4 characters"]
		},
	},
	{ timestamps: true }
)

mongoose.model('Author', AuthorSchema); 



