(function() {
    'use strict';

    function greet(greeting) {

        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(value) {
        return Math.pow(value, 2);
    }

    function squareRoot(value) {
        return Math.sqrt(value);
    }

    function sum(value) {
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += value[i];
        }
        return sum;
    }

    function squareAll(values) {
        let result = [];
        for (let i = 0; i < values.length; i++) {
            result[i] = square(values[i]);
        }
        return result;
    }

    function sumOfSquares(value) {
        return sum(squareAll(value));
    }

    function buildVector(points) {
        let vector = points.slice();

        vector.valueOf = function() {
            return points.slice();
        }
        vector.toString = function() {
            return '<' + points + '>';
        }
        return vector;
    }

    function magnitude(value) {
        return squareRoot(sum(squareAll(value)));
    }

    function getVectorsShorterThan(length, vectores) {
        let result = [];

        for (var index = 0; index < vectores.length; index++) {
            if (magnitude(vectores[index]) < length) {
                result.push(vectores[index]);
            }
        }
        return result;
    }

    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot,
        sum: sum,
        squareAll: squareAll,
        sumOfSquares: sumOfSquares,
        buildVector: buildVector,
        magnitude: magnitude,
        getVectorsShorterThan: getVectorsShorterThan
    }
})();