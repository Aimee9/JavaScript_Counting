var numbersList = function(userNumber) {
  var arrayList = [];
  for (var i =1; i <= userNumber; i++) {
    arrayList.push(i);
  } return arrayList;
}



//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
