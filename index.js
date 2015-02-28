/*
    EABCS:  I'm ee 4 abc studio
    Date:   2015-02-28 15:29:59
    Author: cava.zhang
    Email:  admin@cavacn.com
    Version:0.0.1
*/

var Class = require("oop4js").Class;
var Mongoose4 = require("oop4js/mongoose4").Mongoose4;
var Mongoose = require("mongoose");

var Abcs = Class.extends("Abcs",{
    $:function(){
        this.version = "0.0.1";
        this.author = "cava.zhang";
        this.email = "admin@cavacn.com";
        console.log("\t -=[ version:\t%s ]=-",this.version);
        console.log("\t -=[ author:\t%s ]=-",this.author);
        console.log("\t -=[ email:\t%s ]=-",this.email);
    },
    init:function(config){
        this.config = config||{};
        for(var key in this.config){
            console.log("\t -=> Config [ %s:\t%s ]",key,typeof(this.config[key])=="object"?JSON.stringify(this.config[key]):this.config[key]);
        }
        console.log("\t -=> %s","Thanks 4 to use the -=[ EABCS ]=-");
    },
    model:function(){
        if(arguments.length == 1){
            return this.getModel.apply(this,arguments);
        }else{
            return this.createModel.apply(this,arguments);
        }
    },
    //name      model's name
    getModel:function(name){
        name = name||"index";
        if(!this.models){
            this.models = {};
        }
        var m = this.models[name];
        if(!m){
            try{
                require(process.cwd()+"/"+(this.config.path||"")+"/models/"+name.toLocaleLowerCase());
            }catch(e){
                console.error(e);
            }
            m = this.models[name];
        }
        return m;
    },
    //name      model's name
    //schema    the data struct
    //params    the class's method and variable
    createModel:function(name,schema,params){
        if(!this.conn){
            this.conn = Mongoose.createConnection(this.config.mongodb||"");
        }
        if(!this.models){
            this.models = {};
        }
        if(!this.models[name]){
            this.models[name] = Mongoose4.define(this.conn,name,schema)(params||{});
        }
        return this.models[name];
    }
});

Abcs.getInstance = function(){
    if(!global.__eabcs){
        global.__eabcs = new Abcs({});
    }
    return global.__eabcs;
}
global.Eabcs = this.Eabcs = Abcs;