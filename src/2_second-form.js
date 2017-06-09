(function() {
    'use strict';

    function greet(greeting) {

        return typeof greeting === 'string' ? greeting + '!' : 'Hello!';

    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        let result = 0;

        nums.forEach(
            item => result = add(item, result)
        );

        return result;
    }

    function squareAll(nums) {
        let result = [];

        result = nums.map((item) => square(item));

        return result;
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function buildVector(points) {
        let vector = points.slice(0);

        vector.valueOf = function() { return points.slice(0); };
        vector.toString = function() { return '<' + points.join(',') + '>'; };

        return vector;
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        let result = [];

        for (let index = 0; index < vectors.length; index += 1) {
            if (magnitude(vectors[index]) < length) {
                result[result.length] = vectors[index];
            }
        }

        return result;
    }

    module.exports = {
        buildVector: buildVector,
        getVectorsShorterThan: getVectorsShorterThan,
        greet: greet,
        magnitude: magnitude,
        square: square,
        squareAll: squareAll,
        squareRoot: squareRoot,
        sum: sum,
        sumOfSquares: sumOfSquares
    };

})();