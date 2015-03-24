var people = [
{ name: "Bob",
occupation: "programmer",
awesomeIndex: 7 },
{ name: "Alice",
occupation: "programmer",
awesomeIndex: 9 },
{ name: "Zaphod",
occupation: "President of the Galaxy" } ];

// Using Native JS to obtain the average awesome-index
function sumAwesomeIndexNS(array) {
  var sum = 0;
  var numOfProgrammers = 0;

  array.forEach(function(element, index) {
    if (element.occupation === "programmer") {
      numOfProgrammers++;
      sum += element.awesomeIndex;
    }
  });
 return sum / numOfProgrammers;
}

// Using JQuery and Underscore to obtain the average awesome-index
function sumAwesomeIndexUJ(array) {
  var memo = 0;
  var numOfProgrammers = 0;

  var theSumIndex = _.reduce(array, function(memo, programmers) {
    if (programmers.occupation === "programmer") {
      numOfProgrammers++;
      return memo + programmers.awesomeIndex;
    }

  return memo;

  }, 0);

  return theSumIndex / numOfProgrammers;

 }

$(function() {
  $("button").on("click", function() {

  var clicked = $(this).attr("id");

      var resText;
      if (clicked === "Underscore/jQuery") {
        resText = sumAwesomeIndexUJ(people);
        $("#awesome-index").text("This result is due to " + clicked + ": " + resText);
      } else {
        resText = sumAwesomeIndexNS(people);
        document.getElementById("awesome-index").innerHTML = "This result is due to Native JavaScript: " + resText;
      }
    });
});
