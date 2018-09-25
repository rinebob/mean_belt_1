

var mongoose = require('mongoose');
var ReviewSchema = new mongoose.Schema(
	{
		name: { 
			type: String, 
			required: [true, "Your name is required"],
			minlength: [5, "Your name must be more than 4 characters"]
		},
		comment: { 
			type: String, 
			required: [true, "A review is required"],
			minlength: [5, "Your review must be more than 4 characters"]
		},
		rating: { 
			type: Number, 
			required: [true, "A rating is required"],
			min: [1, "A rating is required"],
			max: 5
		},
	},
	{ timestamps: true }
)
mongoose.model('Review', ReviewSchema); 



var MovieSchema = new mongoose.Schema(
	{
		title: { 
			type: String, 
			required: [true, "Movie title is required"],
			minlength: [5, "Movie title must be more than 4 characters"]
		},
		name: { 
			type: String, 
			required: [true, "Your name is required"],
			minlength: [5, "Your name must be more than 4 characters"]
		},
		initReview: { 
			type: String, 
			required: [true, "A review is required"],
			minlength: [5, "Your review must be more than 4 characters"]
		},
		reviews: [ReviewSchema]
	},
	{ timestamps: true }
)

mongoose.model('Movie', MovieSchema); 



