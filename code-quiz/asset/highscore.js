var scores = localStorage.getItem("local");
var max_length = 2;
var clearEL = document.querySelector("#clear-btn");
var ulEl = document.querySelector("#highscores");
var goBackEl = document.querySelector("#back-btn");

goBackEl.addEventListener("click", function () {
    window.location.replace("./index.html")
});

clearEL.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

var display = function () {
    scores = JSON.parse(scores);
     for (var k =1; k < scores.length; k++) {
         for (var i = 0; i < scores.length - k; i++){
             if (scores[i].score <= scores [i + 1].score )
             var temp = scores[i];
             scores[i] = scores[ i +1];
             scores[i + 1] = temp;
         }
     }
}

if (scores != null) {
    for (let i = 0; i < max_length; i++) {
        var liEL = document.createElement("li");
        liEL.setAttribute("style", "background-color:plum");
        liEL.textContent = i + 1 + "." + scores[i].initials + "-" + scores[i].score;
        ulEl.appendChild(liEL);
    }
};

display();