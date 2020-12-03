var express = require('express'); 
const path = require('path'); 
var app = express(); 
var PORT = 4000; 

// With middleware 

app.use('/middleware', function(req, res, next){ 
	
	var options = { 
		root: path.join(__dirname) 
	}; 
	
	var fileName = 'f1.txt'; 
	res.sendFile(fileName, options, function (err) { 
		if (err) { 
			next(err); 
		} else { 
			console.log('Sent:', fileName); 
			next(); 
		} 
	}); 
}); 

app.get('/middleware', function(req, res){ 
	console.log("File Sent") 
	res.send(); 
}); 

app.listen(PORT, function(err){ 
	if (err) console.log(err); 
	console.log("Server listening on PORT", PORT); 
});
