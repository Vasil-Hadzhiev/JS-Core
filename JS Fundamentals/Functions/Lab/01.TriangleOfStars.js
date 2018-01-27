function drawTriangle(n) {
    for (let i = 1; i <= n; i++) {
        print(i)
    }

    for (let i = n - 1; i > 0; i--) {
        print(i)
    }

    function print(n) {
        console.log("*".repeat(n).trim())
    }
}