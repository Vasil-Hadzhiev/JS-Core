function extractText() {
    let elements = [];
    $("#items li").each((index, element) => elements.push(element.textContent));
    $("#result").text(elements.join(", "))
}
