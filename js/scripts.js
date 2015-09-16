var multipleList = function(userNumber, multipleNumber) {
  var multipleList = "";
  for (var i = multipleNumber; i <= userNumber; i+=multipleNumber) {
    multipleList += (i);
    multipleList += (" ");
  }
  return multipleList;
}


$(document).ready(function() {
  $("form#inputtedNumbers").submit(function(event) {
    $(".result").remove();
    var number= parseInt($("input#number").val());
    var multiple= parseInt($("input#multiple").val());
    var count= multipleList(number, multiple);
      $(".results").text(count);
       $("#result").show()



    event.preventDefault();
  });
});
