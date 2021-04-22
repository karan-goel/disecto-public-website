var text = ["Analytics", "Sharing"];
var counter = 0;
var elem = document.getElementById("changeText");
setInterval(change, 2500);

function change() {
    elem.classList.add('hide');
    setTimeout(function () {
        elem.innerHTML = text[counter];
        elem.classList.remove('hide');
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }, 500);
}