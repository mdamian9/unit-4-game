$(document).ready(function () {

    var randNum = Math.floor(Math.random() * (102)) + 19; // rand number from 19-120 inclusive
    var btc = Math.floor(Math.random() * 12) + 1
    var eth = Math.floor(Math.random() * 12) + 1
    var ltc = Math.floor(Math.random() * 12) + 1
    var xrp = Math.floor(Math.random() * 12) + 1

    var wins = 0;
    var losses = 0;
    var total = 0;
    var newGame = false;

    $("#random-num").text(randNum);

    $(".btn").on("click", function () {

        var a = $(this).attr("id");
        console.log(a);

        if (a == "coin-1") {
            $(this).val(btc);
        } else if (a == "coin-2") {
            $(this).val(eth);
        } else if (a == "coin-3") {
            $(this).val(ltc);
        } else if (a == "coin-4") {
            $(this).val(xrp);
        }

        total = total + (parseInt($(this).val()));
        $("#total-score").text(total);

        if (total == randNum) {
            wins++;
            $("#wins").text(wins);
            alert("You won!");
            newGame = true;
        } else if (total > randNum) {
            losses++;
            $("#losses").text(losses);
            alert("You lost!");
            newGame = true;
        }

        if (newGame) {
            alert("New game!");
            randNum = Math.floor(Math.random() * (102)) + 19; // rand number from 19-120 inclusive
            btc = Math.floor(Math.random() * 12) + 1
            eth = Math.floor(Math.random() * 12) + 1
            ltc = Math.floor(Math.random() * 12) + 1
            xrp = Math.floor(Math.random() * 12) + 1
            $("#random-num").text(randNum);
            total = 0;
            $("#total-score").text("0");
            newGame = false;
        }

    });

});