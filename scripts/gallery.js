//When DOM is loaded:
$(document).ready(function () {
  // List of images. Source: Cornell Club Tennis
  var images = [
    "images/team1718.jpg",
    "images/tennis2.JPG",
    "images/tennis4.JPG",
    "images/tennis6.JPG",
    "images/tennis7.JPG",
    "images/tennis1.jpg",
    "images/tennis3.JPG",
    "images/tennis5.JPG"
  ];

  //Select the first image of the array by default
  var imageIndex = 0;
  //Check how many images there are so we can add images without changing the following code
  var length = images.length;

  // When the next button is clicked
  $("#slideshowNext").on("click", function () {
    //Check if we need to wrap back to the first image
    if (imageIndex == length-1){
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
    //Change the displayed image to the newly selected one.
    $("#slideshowImage").attr("src", images[imageIndex]);
  });

  //When the back button is clicked
  $("#slideshowBack").on("click", function () {
    //Check if we need to wrap back to the last image
    if (imageIndex == 0){
      imageIndex = length-1;
    } else {
      imageIndex -= 1;
    }
    //Change the displayed image to the newly selected one.
    $("#slideshowImage").attr("src", images[imageIndex]);
  });
});
