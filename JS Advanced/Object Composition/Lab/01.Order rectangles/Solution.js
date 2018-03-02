function solve(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let width = matrix[i][0];
        let height = matrix[i][1];

        matrix[i] = {
            width: width,
            height: height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let diff = other.area() - this.area();
                return diff || other.width - this.width;
            }
        };
    }
    matrix.sort((a, b) => a.compareTo(b));
    return matrix;
}

console.log(solve([[10,5], [3,20], [5,12]]))