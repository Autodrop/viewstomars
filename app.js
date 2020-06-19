
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

$.getJSON(
  "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + ["bvim4rsNHkQ"] + "&key=AIzaSyDoPDFwoLr0xAK66w82LqrMqfAFnfd-jX0",

  function (data) {
    console.log(data);

    /*  var views = data.items[0].statistics.viewCount; */

    /* $(".views").append(data.items[0].statistics.viewCount); */

    $(".inputViews").val(data.items[0].statistics.viewCount);
  }
);
