function createElement(data) {
    let para = document.createElement("P");
    let paraText = document.createTextNode(data);
    para.appendChild(paraText);
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let req = new XMLHttpRequest();
    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow", true);
    //req.withCredentials = true;
    //req.setRequestHeader("Access-Control-Allow-Headers", "https://en.wikipedia.org/");
    //req.setRequestHeader("Content-Type", "application/json");
    req.onload = (x)=>(callback(x.extract));
    req.send();
}

queryWikipedia(createElement);


