const svg = document.getElementById("svgCanvas");
let drawing = false;
let path;
let d = "";

function getMousePosition(evt) {
    const rect = svg.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

svg.addEventListener("mousedown", (e) => {
    drawing = true;
    const pos = getMousePosition(e);
    d = `M ${pos.x} ${pos.y}`;

    path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("stroke", "#333");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    svg.appendChild(path);
});

svg.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    const pos = getMousePosition(e);
    d += ` L ${pos.x} ${pos.y}`;
    path.setAttribute("d", d);
});

svg.addEventListener("mouseup", () => drawing = false);
svg.addEventListener("mouseleave", () => drawing = false);

function clearCanvas() {
    svg.innerHTML = "";
}
