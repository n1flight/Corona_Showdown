# Corona Showdown
Corona showdown is an application that allows the user to intuitively interact with up to date Covid-19 statistics in a new and fun way.

When a user loads the page they are met with a few places to interact with the data. First, starting from the top and working down is a Coronavirus News navigation bar.

Once hovered over, the navigation bar will display the top four Covid-19 related news articles that the user can explore. 

<img width="205" alt="Screen Shot 2021-01-03 at 3 08 00 PM" src="https://user-images.githubusercontent.com/71091515/103488952-5c313180-4dd6-11eb-96aa-9b065192c10f.png">

Upon clicking an article the user is taken to *The New York Times* article of their choosing for further research into the topic.

Moving down the page the user will  come across a scrolling ticker of world-wide coronavirus statistics displaying:
* Total Cases
* New Cases
* Recovered Cases

<img width="577" alt="Screen Shot 2021-01-03 at 3 08 46 PM" src="https://user-images.githubusercontent.com/71091515/103488976-7bc85a00-4dd6-11eb-836b-62a8f2a052b4.png">

These numbers display all currently logged global statistics for the previous day and update daily. If the ticker is moving too quickly the user can simply hover over the data and it will pause.

Next displayed is the main content and interaction point of the page. A user is given the choice to select two states. 


<img width="581" alt="Screen Shot 2021-01-03 at 3 11 34 PM" src="https://user-images.githubusercontent.com/71091515/103488983-8a167600-4dd6-11eb-989a-3065a382efc4.png">

Once these two states are selected their image will be displayed. In between the two states there is a Battle Button. This is the Corona Showdown. Once pressed the application will compare the two states positivity rates for the coronavirus and award one of the two states a "winner" based on their lower positivity rate. A modal will pop up declaring the winner. 

<img width="598" alt="Screen Shot 2021-01-02 at 7 28 05 PM" src="https://user-images.githubusercontent.com/71091515/103469909-b24b9980-4d30-11eb-8fad-bcfd9f77f56c.png">

After exiting the modal the user is presented with further information on each state, displaying total cases, Covid-19 deaths for each state, and the chosen states record after each battle. Additionally, the background of the winning state will change to blue, while the losing state will change to hot pink. 

<img width="577" alt="Screen Shot 2021-01-03 at 3 13 16 PM" src="https://user-images.githubusercontent.com/71091515/103488988-9a2e5580-4dd6-11eb-94dd-222deaae8e1b.png">

The color coordinated backgrounds and displayed data will reset once the user choses new states to battle. The battle function can be performed again and again, however, the wins and losses of each state are recorded and will persist. If the user choses the same state to compare to itself a modal will direct the user to pick two different states as a winner can not be awarded in this case.

<img width="601" alt="Screen Shot 2021-01-02 at 7 25 46 PM" src="https://user-images.githubusercontent.com/71091515/103469891-6ef12b00-4d30-11eb-99d1-c74ab242b492.png">


## Technologies
---
This site was made using:
* HTML
* CSS
* JavaScript
* jQuery
* Foundation 6
* Animate.css
* Font Awesome 
* Moment.js

## Server-side APIs
---
* https://corona.lmao.ninja/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19 - for global statistics

* https://api.covidtracking.com - for state comparison statistics

* https://api.nytimes.com/svc/search/v2/articlesearch.json - for current top Covid-19 news articles




## Link to deployed site
---

[Corona Showdown](https://n1flight.github.io/Project_1_multiple-api-s/.)

This site was built using GitHub Pages.

## Contributors
---
* Geoffrey Zimmerman
* Aika Kuo
* Nader Salem
* Rachel Thompson
 

## License
---
Licensed under the [MIT License](LICENSE)

