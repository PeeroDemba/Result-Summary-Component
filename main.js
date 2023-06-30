"use strict";

const Reaction = document.getElementById("reaction");
const Memory = document.getElementById("memory");
const Verbal = document.getElementById("verbal");
const Visual = document.getElementById("visual");
const Total = document.getElementById("total");
const img = document.getElementsByTagName("img");

fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {
      for (var prop in data[i]) {
        if (data[i].category == "Reaction") {
          var reactionscore = data[i].score;
          var reactionicon = data[i].icon;
          Reaction.innerHTML = reactionscore;
          img[0].setAttribute("src", reactionicon);
        }
        if (data[i].category == "Memory") {
          var memoryscore = data[i].score;
          var memoryicon = data[i].icon;
          Memory.innerHTML = memoryscore;
          img[1].setAttribute("src", memoryicon);
        }
        if (data[i].category == "Verbal") {
          var verbalscore = data[i].score;
          var verbalicon = data[i].icon;
          Verbal.innerHTML = verbalscore;
          img[2].setAttribute("src", verbalicon);
        }
        if (data[i].category == "Visual") {
          var visualscore = data[i].score;
          var visualicon = data[i].icon;
          Visual.innerHTML = visualscore;
          img[3].setAttribute("src", visualicon);
        }
        let totalscore = Math.floor(
          (reactionscore + memoryscore + verbalscore + visualscore) / 4
        );
        Total.innerHTML = totalscore;
      }
    }
  });
