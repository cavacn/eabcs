require("../index");

Eabcs.getInstance().init({
    mongodb:"mongodb://127.0.0.1/demo",
    title:"title",
    path:"."
})

var Demo = Eabcs.getInstance().model("Demo");
console.log(new Demo);
var demo = new Demo({uname:"iamee",upass:"iameepass"});
Demo.findOne()
// demo.create(function(err,_demo){
    // console.log("create",err,_demo);
    // demo.changePass("upass---",function(err,_upcode){
        // console.log("changePass",err,_upcode);
        // demo.me(function(err,_me){
            // console.log("me",err,_me);
        // });
    // });
// });

// demo.me(function(err,_me){
    // console.log(err,_me);
// });