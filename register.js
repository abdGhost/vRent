function register() {
    document.querySelector("header").style.filter = "blur(3px)";
    document.querySelector(".about").style.filter = "blur(3px)";
    document.querySelector(".register").style.display = "block";
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("sub").disabled = true;
    document.getElementById("forget-pass").disabled = true;
}