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
        var result1 = getRating1(userState1)
        var result2 = getRating2(userState2)
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
    });
})



   


// Math.floor(response[1].);