function getSequence(n, k) {

    let sequence = []
    sequence.push(1)

    for (let i = 1; i < n; i++) {
        let sum = sequence
            .slice(Math.max(0, sequence.length - k), i + k)
            .reduce((a, b) => {
                return a + b
            }, 0)

        sequence[i] = sum
    }

    console.log(sequence)
}