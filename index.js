let express=require('express');

let app=express();

let router=express.Router();
let usersRepo=require('./Repos/usersRepo');

app.use(express.json());
app.use('/api/',router);


router.get('/',function(req,res,next) {

usersRepo.get(function(data){
        res.status(200).json({
        "status":200,
        "statusText":"Ok",
        "message":"User data fetched successfuly",
        "data":data
    });

},function(error){
    next(error);
});

    
});


router.get('/:id',function(req,res,next) {
    let id=req.params.id;
usersRepo.getById(function(data){
        res.status(200).json({
        "status":200,
        "statusText":"Ok",
        "message":"User data fetched successfuly",
        "data":data
    });

},function(error){
    next(error);
});

    
});
// Creating user
router.post('/',function(req,res,next) {
usersRepo.insert(req.body,function(data){
        res.status(200).json({
        "status":200,
        "statusText":"Ok",
        "message":"User created successfuly",
        "data":data
    });

},function(error){
    next(error);
});

    
});
// Updating user
router.put('/:id',function(req,res,next) {
usersRepo.update(rep.params.id,req.body,function(data){
        res.status(200).json({
        "status":200,
        "statusText":"Update",
        "message":"User updated successfuly",
        "data":data
    });

},function(error){
    next(error);
});

    
});

// Deleting user
router.delete('/:id',function(req,res,next) {
usersRepo.delete(rep.params.id,function(data){
        res.status(200).json({
        "status":200,
        "statusText":"Delete",
        "message":"User Deleted successfuly",
        "data":data
    });

},function(error){
    next(error);
});

    
});
app.listen(3000,function(){
    console.log("app running on http://localhost:3000");
});