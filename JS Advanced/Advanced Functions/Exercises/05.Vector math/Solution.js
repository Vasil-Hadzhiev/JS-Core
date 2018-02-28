let solution = (() => {
    
    function add(vec1, vec2) {
        let [xA, xB] = vec1;
        let [yA, yB] = vec2;
        let result = [];
        result.push(xA + yA);
        result.push(xB + yB);
        return result;
    }
    
    function multiply(vec1, scalar) {
        let [xA, yA] = vec1;
        let result =[];
        result.push(xA * scalar);
        result.push(yA * scalar);
        return result;
    }

    function length(vec1) {
        let [xA, yA] = vec1;
        return Math.sqrt((xA * xA) + (yA * yA));
    }

    function dot(vec1, vec2) {
        let [xA, xB] = vec1;
        let [yA, yB] = vec2;
        return (xA * yA) + (xB * yB);
    }

    function cross(vec1, vec2) {
        let [xA, xB] = vec1;
        let [yA, yB] = vec2;
        return (xA * yB) - (yA * xB);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross,
    };
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));


