const mong = require('mongoose')
mong.connect("mongodb+srv://triaikman:LMHM7TmYl1kT52Fr@mwtaikman.sevurxb.mongodb.net/?retryWrites=true&w=majority&appName=MWTAikman");

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

let Line =  mong.model("Lines",lineSchema)

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('docs.json')
});

lineReader.on('line', function (line) {
	if (line[line.length-1]==",") line = line.substring(0,line.length-1);
	let l = new Line (JSON.parse(line.trim()));
	let newLine = l.save();
});

lineReader.on('close', function () {
    console.log('all done, son');
});
