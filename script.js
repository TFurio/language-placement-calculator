function determinePlacement(score) {
    if (score < 101) {
        return "Pre A1";
    } else if (score <= 120) {
        return "A1";
    } else if (score <= 140) {
        return "A2";
    } else if (score <= 160) {
        return "B1";
    } else if (score <= 180) {
        return "B2";
    } else if (score <= 200) {
        return "C1";
    } else if (score <= 230) {
        return "C2";
    } else {
        return "Invalid score";
    }
}


function calculatePlacement() {
    var score = parseInt(document.getElementById("score").value);
    var placement = determinePlacement(score);
    document.getElementById("placement").innerHTML = "Placement: " + placement;
}
