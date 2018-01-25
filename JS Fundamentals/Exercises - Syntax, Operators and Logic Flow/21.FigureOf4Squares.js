function drawFigure(n) {
    let lines = n % 2 === 0 ? n - 1 : n

    let output = "+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+\n"

    for (let i = 0; i < (lines - 3) / 2; i++) {
        output += "|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|\n"
    }

    output += "+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+\n"

    for (let i = 0; i < (lines - 3) / 2; i++) {
        output += "|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|\n"
    }

    output += "+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+\n"

    console.log(output)
}