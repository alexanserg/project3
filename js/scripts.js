$(document).ready(function(){
  $(".numberInput").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    var arr = [];
    for (i=0;i<=userInput;i++) {
      arr.push(i);


      if (arr[i].toString().includes("3")){
        arr.splice(i,1,"I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (arr[i].toString().includes("2")){
        arr.splice(i,1,"Boop!")
      } else if (arr[i].toString().includes("1")){
        arr.splice(i,1,"Beep!")
      }
    };
    $("#result").text(arr);

  });
});
