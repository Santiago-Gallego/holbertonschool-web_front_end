function changeMode(size, weight, transform, background, color) {
    document.documentElement.style["font-size"] = size;
    document.documentElement.style["font-weight"] = weight;
    document.documentElement.style["text-transform"] = transform;
    document.documentElement.style["background-color"] = background;
    document.documentElement.style["color"] = color;
}
let spooky = function(){changeMode(9,"bold","uppercase","pink","green")};
let darkMode = function(){changeMode(12,"bold","capitalize","black","white")};
let screamMode = function(){changeMode(12,"normal","lowercase","white","black")};

function main() {
    let body = document.body;
    let para = document.createElement("P");
    let paraText = document.createTextNode("Welcome Holberton!");

    let spook = document.createElement("BUTTON");
    let spookText = document.createTextNode("Spooky");
    spook.setAttribute("onClick", "spooky()");

    let dark = document.createElement("BUTTON");
    let darkText = document.createTextNode("Dark mode");
    dark.setAttribute("onClick", "darkMode()");

    let scream = document.createElement("BUTTON");
    let screamText = document.createTextNode("Scream mode");
    scream.setAttribute("onClick", "screamMode()");

    para.appendChild(paraText);
    spook.appendChild(spookText);
    dark.appendChild(darkText);
    scream.appendChild(screamText);

    body.appendChild(para);
    body.appendChild(spook);
    body.appendChild(dark);
    body.appendChild(scream);
}

window.onload = main;
