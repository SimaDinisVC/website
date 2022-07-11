var username = document.getElementById('username');
var type_this = "Open Sesame";
var index1 = 0;
window.next_letter = function() {
    if (index1 <= type_this.length) {
        username.value = type_this.substr(0, index1++);
        setTimeout("next_letter()", 300);
    }
}
next_letter();
function password() {
    var password = document.getElementById('password');
    var type_this = "I like this place";
    var index = 0;
    window.letter = function() {
        if (index <= type_this.length) {
            password.value = type_this.substr(0, index++);
            setTimeout("letter()", 150);
        }
    }
    letter();
}
setTimeout(password, 4000) // 6550 ms to occur this function

function EnableBTNafterTimeOut() {
    const button = document.getElementById("btn-login")
    button.style.background = "#00ff88"
    button.style.boxShadow = "0px 10px 40px 5px #00ff8052"
    button.disabled = false
}
setTimeout(EnableBTNafterTimeOut, 6600) // I use 6600 and not 6550 because of some activation delay