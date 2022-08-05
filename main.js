function changedHTML(data) {
    document.querySelector("img").setAttribute("src", data.imgSrc);
    document.querySelector(".text").innerHTML = data.text;
}
function rand(index) {
    let rand = Math.floor(Math.random() * index);
    return rand
}

let button = document.querySelector("button");

async function getData() {
    const requestURL = "https://raw.githubusercontent.com./agnekauk/14-person/main/data.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const JSON = await response.json();
    changedHTML(JSON[rand(JSON.length)]);
}
button.addEventListener("click", function (e) {
    confetti({
        particleCount: 300,
        spread: 180,
        startVelocity: 60
    });
    getData();
})