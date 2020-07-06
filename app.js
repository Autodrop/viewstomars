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



function setURL() {
  url = inputID.value;
  VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  console.log(url.match(VID_REGEX)[1]);

  $.getJSON(
    "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + url.match(VID_REGEX)[1] + "&key=AIzaSyC2MigHEEIeECmx6PjX-4R6AqgMiLqesBo",

    function (data) {
      console.log(data);

      $(".inputViews").val(data.items[0].statistics.viewCount);
    }
  );

}



/* function setID() {
  $.getJSON(
    "https://www.googleapis.com/youtube/v3/videos?part=statistics&id=" + inputID.value + "&key=AIzaSyC2MigHEEIeECmx6PjX-4R6AqgMiLqesBo",

    function (data) {
      console.log(data);

      $(".inputViews").val(data.items[0].statistics.viewCount);
    }
  );
  console.log(inputID.value);
} */
