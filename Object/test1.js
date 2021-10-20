function People(name){
	this.name = name;
	this.Introduce = function(){
		console.log("My name is " + this.name);
	}
}

People.Run = function(){
console.log('I can run');
}


var p1 = new People("windking");
p1.Introduce();
People.Run();
p1.IntroduceChinese();
