const mong = require("mongoose");

const lineSchema = mong.Schema({

	content: {
		type:String,
		required: true
	},
	emotion: {
		type: String,
		required: true,
	}
})

module.exports = mong.model("Lines",lineSchema)
