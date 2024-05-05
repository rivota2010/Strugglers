const spawn = require("child_process").spawn;
const mong = require('mongoose')
const express = require('express')

const app = express()
const uri = "mongodb+srv://triaikman:LMHM7TmYl1kT52Fr@mwtaikman.sevurxb.mongodb.net/?retryWrites=true&w=majority&appName=MWTAikman";

mong.connect(uri)

const Schema = mong.Schema({
	emotion: String,
	source: String,
	content: String
})

const LinesModel = mong.model("Lines",Schema)

app.get('/', (req,res) =>{
	res.sendfile('index.html')
})

//The below is 80% implemented approach for updating the database while the server is running
//
//app.get("/update", (req,res) =>{
//	console.log("updating")
//	let runUpdate = new Promise(function(success,fail) {
//		const updateQuotes = spawn('python3',["py_quotes/update_db.py","py_quotes/quotes.csv"])
//		updateQuotes.stdout.on('data',function(data) {
//			console.log("Data: "+data)
//			for(let i = 0; i < data.length; i++){
//				jobj = JSON.parse(data[i])
//				console.log(data[i])
//				LinesModel.create({emotion: `${jobj["emotion"]}`, source: `${jobj["source"]}`, content: `${jobj["content"]}`})
//			}
//		success(data)
//	})
//	updateQuotes.on("close", (code) => {
//	      if (code !== 0) {
//			console.log(`Spawned program exited with code: ${code}`);
//	      }
//})
//})
//	runUpdate.then(function(output){
//		console.log(output)
//
//	})
//})

app.get("/pickSad", (req,res) => {
	LinesModel.find({emotion: "sad"}, {_id:0}).then(function(data){
		console.log((data))
		const rand_index = Math.floor(Math.random() * data.length)
		if(data[rand_index]) res.send((data[rand_index]).content)
	})
})
app.get("/pickHappy", (req,res) => {
	LinesModel.find({emotion: "Happy"},{ }).then(function(data){
		console.log(data)
		const rand_index = Math.floor(Math.random() * data.length)
		if(data[rand_index]) res.send((data[rand_index]).content)
	})
})
app.get("/pickMad", (req,res) => {
	LinesModel.find({emotion: "Mad"}, {}).then(function(data){
		console.log(data)
		const rand_index = Math.floor(Math.random() * data.length)
		if(data[rand_index]) res.send((data[rand_index]).content)
	})
})
app.get("/pickFear", (req,res) => {
	LinesModel.find({emotion: "Fear"}, {}).then(function(data){
		console.log(data)
		const rand_index = Math.floor(Math.random() * data.length)
		if(data[rand_index]) res.send((data[rand_index]).content)
	})
})
app.get("/pickDisgust", (req,res) => {
	LinesModel.find({emotion: "Disgust"}, {}).then(function(data){
		console.log(data)
		const rand_index = Math.floor(Math.random() * data.length)
		if(data[rand_index]) res.send((data[rand_index]).content)
	})
})
app.get("/pickLove", (req,res) => {
	LinesModel.find({emotion: "Love"}, {}).then(function(data){
		console.log(data)
		const rand_index = Math.floor(Math.random() * data.length)
		if(data[rand_index]) res.send((data[rand_index]).content)
	})
})

app.listen(3000, () => {
	console.log('Server is running')
})
