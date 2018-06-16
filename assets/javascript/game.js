var randNum = Math.floor(Math.random() * (102)) + 19; // rand number from 19-120 inclusive

$(document).ready(function() {
    $("#random-num").text(randNum);
    console.log(randNum);
});