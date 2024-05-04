const mong = require("mongoose");

const lineSchema = mong.Schema({
	emotion: {
		type: String,
		required: true,
	},
	source: {
		type: String,
		required: true
	},
	content: {
		type:String,
		required: true
	}
})

module.exports = mong.model("Lines",lineSchema)
