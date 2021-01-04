$(document).ready(function () {

    $(document).foundation();

    var history = JSON.parse(localStorage.getItem("gameHistory")) || [];

    function saveScore(state, win, lose) {

        var stateScore = history.filter(score => score.state === state)
        if (stateScore.length === 0) {
            var winLosses = { state: state, wins: win, losses: lose }
            history.push(winLosses)
        } else {
            stateScore[0].wins += win
            stateScore[0].losses += lose
        }
        localStorage.setItem("gameHistory", JSON.stringify(history))
        history = JSON.parse(localStorage.getItem("gameHistory"))
    }

    function loadScore(state) {
        var stateScore = history.filter(score => score.state === state)
        if (stateScore.length === 0) {
            var winLosses = { state: state, wins: 0, losses: 0 }
            return winLosses
        } else {
            return stateScore[0]
        }

    }

    var queryURL1 = "https://disease.sh/v3/covid-19/all"
    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response1) {
        console.log(response1)
        $(".ticker-item1").text("Total Cases: " + response1.cases.toLocaleString());
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item2").text("New Cases: " + response1.todayCases.toLocaleString());
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item3").text("Recovered: " + response1.recovered.toLocaleString());
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");

    });

    var queryURL2 = "https://api.covidtracking.com/v1/states/current.json"

    $("#battle").on("click", function () {

        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function (response2) {
            const userState1 = $("#states1").val()
            const userState2 = $("#states2").val()

            var result1 = parseFloat(getRating1(userState1))
            var result2 = parseFloat(getRating2(userState2))
            console.log(userState1)
            console.log(result1)
            console.log(userState2)
            console.log(result2)
            function getRating1(state) {
                var resulting = 0
                for (var i = 0; i < 56; i++) {
                    if (response2[i].state === state) {

                        var positive = (response2[i].positive)
                        var positiveNeg = (response2[i].posNeg)
                        resulting = ((positive / positiveNeg) * 100).toFixed(2)


                        $("#leftStatePosRate").html("Positivity Rate: " + ((positive / positiveNeg) * 100).toFixed(2) + "%")
                        var html = "Total cases: " + response2[i].total.toLocaleString() + "<br>"
                            + "Deaths: " + response2[i].death.toLocaleString() + "<br>"

                        $("#state-card-left").html(html)
                    }
                };
                return resulting
            }
            function getRating2(state) {
                var resulting = 0
                for (var i = 0; i < 56; i++) {
                    if (response2[i].state === state) {

                        var positive = (response2[i].positive)
                        var positiveNeg = (response2[i].posNeg)
                        resulting = ((positive / positiveNeg) * 100).toFixed(2)

                        $("#rightStatePosRate").html("Positivity Rate: " + ((positive / positiveNeg) * 100).toFixed(2) + "%")
                        var html = "Total cases: " + response2[i].total.toLocaleString() + "<br>"
                            + "Deaths: " + response2[i].death.toLocaleString() + "<br>"

                        $("#state-card-right").html(html)
                    }
                };
                return resulting
            }
            if (userState1 === userState2) {
                $("#modal-text").text("Choose two DIFFERENT states...")
            } else if (result1 > result2) {
                saveScore(userState1, 0, 1)
                saveScore(userState2, 1, 0)
                $("#modal-text").text(userState2 + " wins!");
                $("#stImg2").attr("class", "colorize-blue")
                $("#stImg1").attr("class", "colorize-pink")
            } else if (result1 < result2) {
                saveScore(userState2, 0, 1)
                saveScore(userState1, 1, 0)
                $("#modal-text").text(userState1 + " wins!");
                $("#stImg1").attr("class", "colorize-blue")

                $("#stImg2").attr("class", "colorize-pink")
            }
            else {
                $("#modal-text").text("It's a tie!");
            }

            var scores1 = loadScore(userState1)
            var html = "wins: " + scores1.wins + " losses: " + scores1.losses

            $("#state-card-left").append(html)
            var scores2 = loadScore(userState2)
            var html = "wins: " + scores2.wins + " losses: " + scores2.losses

            $("#state-card-right").append(html)
        });
    })



    //Date display in the DOM
    var currentDate = moment().format('dddd, MMMM Do, YYYY');
    $("#currentDate").text(currentDate)



    // Click listener to display states in card
    $("#states2").on("change", function (event) {
        var state = event.target.value
        // console.log(state, "right")
        $("#rightStatePosRate").text("")
        $("#state-card-right").text("")
        $("#stImg2").removeAttr("class")
        $("#stImg2").attr({ "type": "image/svg", "src": "images/" + state + ".svg", "alt": state })
    })
    $("#states1").on("change", function (event) {
        var state = event.target.value
        // console.log(state, "left")
        $("#leftStatePosRate").text("")
        $("#state-card-left").text("")
        $("#stImg1").removeAttr("class")
        $("#stImg1").attr({ "type": "image/svg", "src": "images/" + state + ".svg", "alt": state })
    })

})


// Covid news links
var queryURL3 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Covid&api-key=WbAAM3rxTCRiSJsmekEsFKXaDF8DceLA"
$.ajax({
    url: queryURL3,
    method: "GET"
}).then(function (response) {

    // console.log(response)
    var link1 = response.response.docs[0]
    var link2 = response.response.docs[1]
    var link3 = response.response.docs[2]
    var link4 = response.response.docs[3]
    // console.log(link1)
    // console.log(link2)
    // console.log(link3)
    // console.log(link4)

    $('#link1').append("<a href=" + link1.web_url + " target='_blank'>" + link1.headline.main + "</a>");
    $('#link1').append("<a href=" + link2.web_url + " target='_blank'>" + link2.headline.main + "</a>");
    $('#link1').append("<a href=" + link3.web_url + " target='_blank'>" + link3.headline.main + "</a>");
    $('#link1').append("<a href=" + link4.web_url + " target='_blank'>" + link4.headline.main + "</a>");

    // $('#link1').text(response.)



})
