$(document).ready(function(){
  $(".numberInput").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    var arr = [];
    for (i=0;i<=userInput;i++) {
      arr.push(i);

      if ("3".includes(arr[i])){
        arr.splice(i,1,"I'm sorry, Dave. I'm afraid I can't do that.")
      } else if ("2".includes(arr[i])){
        arr.splice(i,1,"Boob!")
      } else if ("1".includes(arr[i])){
        arr.splice(i,1,"Beep!")
      }
    };
    $("#result").text(arr);

  });
});
