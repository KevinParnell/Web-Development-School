/*
Filename: m6a1.js
By: Kevin Parnell
Created: 11/14/2018
Last Edited: 11/15/2018
*/

function reset() {
    document.getElementById("heading").innerHTML = "";
    document.getElementById("output").innerHTML = "";
    if (document.createElement("canvas").getContext) {
        var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function browser() {
    reset();
    var txt = "<ul>";
    txt += "<li>Browser CodeName: " + navigator.appCodeName + "</li>";
    txt += "<li>Browser Name: " + navigator.appName + "</li>";
    txt += "<li>Browser Version: " + navigator.appVersion + "</li>";
    txt += "<li>Cookies Enabled: " + navigator.cookieEnabled + "</li>";
    txt += "<li>Browser Language: " + navigator.language + "</li>";
    txt += "<li>Browser Online: " + navigator.onLine + "</li>";
    txt += "<li>Platform: " + navigator.platform + "</li>";
    txt += "<li>User-agent header: " + navigator.userAgent + "</li></ul>";

    document.getElementById("heading").innerHTML = "<h1>Browser Information</h1>";
    document.getElementById("output").innerHTML = txt;
}

function htmlDetection() {
    reset();
    document.getElementById("heading").innerHTML = "<h1>Compatible HTML5 Features</h1>"
    var inputs = ["search", "number", "range", "color", "tel", "url", "email", "date", "month", "week", "time", "datetime", "datetime-local"];
    var inp = document.createElement("input");

    for (i = 0; i < 13; i++) {
        inp.setAttribute("type", inputs[i]);
        if (inp.type == "text") {
            document.getElementById("output").innerHTML += "<ul><li>" + inputs[i] + ": No" + "</li></ul>";
        } else {
            document.getElementById("output").innerHTML += "<ul><li>" + inputs[i] + ": Yes" + "</li></ul>";
        }
    }
}

function widthandheight() {
    reset();
    var txt = "";
    txt += "<ul><li>Total Width: " + screen.width + "</li>";
    txt += "<li>Total Height: " + screen.height + "</li></ul>";

    document.getElementById("heading").innerHTML = "<h1>Mobile Screen Information</h1>"
    document.getElementById("output").innerHTML = txt;
}

function orientation() {
    reset();
    document.getElementById("heading").innerHTML = "<h1>Mobile Screen Information</h1>"
    if (window.screen.innerHeight > window.screen.innerWidth) {
        document.getElementById("output").innerHTML = ("<ul><li>Orientation = portrait-primary</li></ul>");

    } else {
        document.getElementById("output").innerHTML = ("<ul><li>Orientation = landscape-primary</li></ul>");
    }
}

function canvasSupport() {
    reset();
    document.getElementById("heading").innerHTML = "<h1>Canvas Information</h1>"
    var canvasSup = document.createElement('canvas');
    if (!canvasSup.getContext) {
        document.getElementById("output").innerHTML = ("<p>Canvas support is false</p>");
    } else {
        document.getElementById("output").innerHTML = ("<p>Canvas support is true</p>");
    }
}

function canvasTextSupport() {
    reset();
    document.getElementById("heading").innerHTML = "<h1>Canvas Information</h1>"
    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    supportsTxt = typeof context.fillText;
    if (supportsTxt == 'function') {
        document.getElementById("output").innerHTML = ("<p>This browser supports canvas text.</p>");
    } else {
        document.getElementById("output").innerHTML = ("<p>This browser does not support canvas text.</p>");
    }
}

function canvasImageSupport() {
    reset();
    document.getElementById("heading").innerHTML = "<h1>Canvas Information</h1>"
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    var image = new Image();
    image.src = "numale.png";
    image.onload = function () {
        context.drawImage(image, 0, 0, context.canvas.width, context.canvas.height);
    }
}