
/* Waarde geven aan progressbalk door input */
function func() {
  var x = document.getElementById("myProgress");

  x.value = document.getElementById("inputValue").value;
}

/* Enter om input to geven aan progressbalk */
var input = document.getElementById("inputValue");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("marsKnop").click();
  }
});

/* const YOUTUBE_API_KEY = "AIzaSyDKm9l4BiqkUY_PjA_YYWfhCWNgA45-__g"; */

/* var inputVal = document.getElementById("inputID").value; */
  



 function setID(){
  $.getJSON(
  "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + inputID.value + "&key=AIzaSyDoPDFwoLr0xAK66w82LqrMqfAFnfd-jX0",

  function (data) {
    console.log(data);

    $(".inputViews").val(data.items[0].statistics.viewCount);
  });
  console.log(inputID.value);  
}






