async function loadHTML(element, file) {
    const response = await fetch(file);
    element.innerHTML = await response.text();
}

loadHTML(document.getElementById("navbar"), "nav.html");