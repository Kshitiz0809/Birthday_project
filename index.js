var x;

function startCountdown() {
    var inputDate = document.getElementById("date-input").value;
    if (!inputDate) {
        alert("Please enter a valid date and time.");
        return;
    }
    var countDownDate = new Date(inputDate).getTime();
    if (x) {
        clearInterval(x);
    }
    x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-timer").innerHTML = "HAPPY BIRTHDAY!";
        }
    }, 1000);
}
