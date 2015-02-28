#Eabcs#
---
##How to use##
	
	npm install eabcs

##code##

	require("eabcs");

	Eabcs.getInstance().init({
		//configs....
	});

	//define model
	Eabcs.getInstance().model("Demo",{
		//schema,mongoose's schema
		//such as :  uname:{type:String}
		name:{type:String}
	},{
		//the class's methods and variable
		demo:function(){
			console.log("method:demo",this.name);
		}
	});
	//get model
	var Demo = Eabcs.getInstance().model("Demo");

	var demo = new Demo({name:"demo"});

	demo.demo();
	
	## method:demo	demo