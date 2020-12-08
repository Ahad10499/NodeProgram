const express = require('express')
const app = express()
const PORT = 5000;
const path = require('path') 
const multer = require('multer')
const upload = multer()
var bodyParser = require("body-parser")


app.use(express.static('public'));

// View Engine Setup 
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/myajax',upload.none(), (req, res) => {

    // var num1 = Number(req.body.num1)
    // var num2 = Number(req.body.num2); 

    var num1 = req.body.a;
    var num2 = req.body.b;


    console.log(num1)
    console.log(num2)
  
    var result = parseInt(num1) + parseInt(num2);

    console.log(result)

    res.send("Addition : " + result);

});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));