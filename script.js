var textBox1 = document.querySelector("#inputBox1");
var textBox2 = document.querySelector("#inputBox2");
var inputBox = document.querySelector("#button");

button.addEventListener("click", function(){
	localStorage.name= textBox1.value;
	localStorage.age= textBox2.value;



});
alert("User's name is " + localStorage.name + " User's age is " + localStorage.age);


