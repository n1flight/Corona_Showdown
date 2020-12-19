$(document).foundation();

// https://corona.lmao.ninja/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries

var queryURL = "https://disease.sh/v3/covid-19/all"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response1) {
    // console.log(response1)
    $("#gTotal").text("Total Cases: " + response1.cases);
    $("#gNew").text("New Cases: " + response1.todayCases);
    $("#gRecovered").text("Recovered: " + response1.recovered);
});


//https://api.covidtracking.com

var queryURL = "https://api.covidtracking.com/v1/states/current.json"

$("#battle").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response2) {
        // console.log(response2)
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

                }
            };
            return resulting

        }

        if (userState1 === userState2) {
            console.log("Choose two DIFFERENT states...")
        } else if (result1 > result2) {
            console.log(userState2 + " wins!");
        } else if (result1 < result2) {
            console.log(userState1 + " wins!");
        }
        else {
            console.log("It's a tie!");
        }
    });
})



var currentDate = moment().format('dddd, MMMM Do, YYYY');
// console.log(currentDate);
$("#currentDate").text(currentDate)



// Click listener to display states in card
$("#states2").on("click", function(event) {
    var state = event.target.value
    $("#stImg2").attr({"type": "image/svg", "src": "images/" + state + ".svg",  "width": "300", "height": "200",
    "alt": state})
})
$("#states1").on("click", function(event) {
    var state = event.target.value
    $("#stImg1").attr({"type": "image/svg", "src": "images/" + state + ".svg",  "width": "300", "height": "200",
    "alt": state})
})
{/* <img type="image/svg" src="" width="300" height="200"> */}
// Math.floor(response[1].);