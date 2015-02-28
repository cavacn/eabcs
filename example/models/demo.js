var Demo = Eabcs.getInstance().model(
    "Demo",
    {
        uname:String,
        upass:String,
    },
    {
        create:function(cb){
            this.save(cb);
        },
        changePass:function(upass,cb){
            this.update({uname:this.uname},{$set:{upass:upass}},cb);
        }
    }
)