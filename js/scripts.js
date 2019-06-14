$(document).ready(function(){
  $(".numberInput").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    console.log(userInput);
    var arr = [];
    for (i=0;i<userInput;i++) {
      arr.push(i);
    };
    console.log(arr);
    $("#result").append(arr);
  });
});
