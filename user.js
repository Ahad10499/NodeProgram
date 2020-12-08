router.post('/change', function (req, res) {
var name = req.body.name,
surname = req.body.surname,
age = req.body.age

User.findOneAndUpdate({_id: req.user._id}, {$set:{name: name, surname: surname, age: age}}, {new: true}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(req);
    console.log('req received');
    res.redirect('/user/'+req.user._id);
});
});