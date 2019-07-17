const express = require('express');
const fs = require('fs');

let app = express();
app.use(express.static('./'));
app.use((req,res)=>{
	let content = fs.readFileSync('./index.html','utf-8');
	res.set('Content-Type','text/html; charset=utf-8');
	res.send(content);
})

app.listen(5858,()=>{
	console.log("Server is running on http://localhost:5858");
})