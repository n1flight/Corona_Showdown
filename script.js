$(document).ready(function () {

    $(document).foundation();

    // https://corona.lmao.ninja/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries

    var queryURL = "https://disease.sh/v3/covid-19/all"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response1) {
        // console.log(response1)
        $(".ticker-item1").text("Total Cases: " + response1.cases);
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item2").text("New Cases: " + response1.todayCases);
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item-space").text("");
        $(".ticker-item3").text("Recovered: " + response1.recovered);
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


                        $("#leftStatePosRate").html("Positivity Rate: " + ((positive / positiveNeg) * 100).toFixed(2) + "%")
                        $("#state-card-left").html("Total cases: " + response2[i].total + "<br>"
                            + "Deaths: " + response2[i].death)

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
                        $("#state-card-right").html("Total cases: " + response2[i].total + "<br>"
                            + "Deaths: " + response2[i].death)

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
    $("#states2").on("change", function (event) {
        var state = event.target.value
        console.log(state, "right")
        $("#stImg2").attr({ "type": "image/svg", "src": "images/" + state + ".svg", "alt": state })
    })
    $("#states1").on("change", function (event) {
        var state = event.target.value
        console.log(state, "left")
        $("#stImg1").attr({ "type": "image/svg", "src": "images/" + state + ".svg", "alt": state })
    })
    {/* <img type="image/svg" src="" width="300" height="200"> */ }
    // Math.floor(response[1].);

})


// Covid news links
var queryURL2 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Covid&api-key=WbAAM3rxTCRiSJsmekEsFKXaDF8DceLA"
$.ajax({
    url: queryURL2,
    method: "GET"
}).then(function(response) {

    console.log(response)
    var link1 = response.response.docs[0]
    var link2 = response.response.docs[1]
    var link3 = response.response.docs[2]
    var link4 = response.response.docs[3]
    console.log(link1)
    console.log(link2)
    console.log(link3)
    console.log(link4)

    $('#link1').append("<a href=" + link1.web_url + ">" + link1.headline.main + "</a>");
    $('#link1').append("<a href=" + link2.web_url + ">" + link2.headline.main + "</a>");
    $('#link1').append("<a href=" + link3.web_url + ">" + link3.headline.main + "</a>");
    $('#link1').append("<a href=" + link4.web_url + ">" + link4.headline.main + "</a>");
    
    // $('#link1').text(response.)
   
    
    
})
