var answer = 0;
var inputOne;
var inputTwo;
var calc = document.getElementById('calculateBtn').addEventListener('click', function(event){
  document.getElementById('answer').innerText = answer;
});

var add = document.getElementById('add').addEventListener('click', function(){
  inputOne = document.getElementById('num_one').value;
  inputTwo = document.getElementById('num_two').value;
  answer = (parseFloat(inputOne) + parseFloat(inputTwo))
});

var subtact = document.getElementById('subtract').addEventListener('click', function(){
  inputOne = document.getElementById('num_one').value;
  inputTwo = document.getElementById('num_two').value;
  answer = (parseFloat(inputOne) - parseFloat(inputTwo))
});

var divide = document.getElementById('divide').addEventListener('click', function(){
  inputOne = document.getElementById('num_one').value;
  inputTwo = document.getElementById('num_two').value;
  answer = (parseFloat(inputOne) / parseFloat(inputTwo))
});

var multiple = document.getElementById('multiply').addEventListener('click', function(){
  inputOne = document.getElementById('num_one').value;
  inputTwo = document.getElementById('num_two').value;
  answer = (parseFloat(inputOne) * parseFloat(inputTwo))
});
