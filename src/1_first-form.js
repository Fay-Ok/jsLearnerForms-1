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

    function buildVector(value) {


        let vectore = value.slice();

        vectore.valueOf = function() {
            return value;
        };

        vectore.toString = function() {
            return '<' + value + '>';
        }

        return vectore;

    }

    function magnitude(value) {
        return squareRoot(sumOfSquares(value));
    }

    function getVectorsShorterThan(length, vectors) {
        let result = [];

        for (let i = 0; i < vectors.length; i++) {
            if (magnitude(vectors[i]) < length) {
                result.push(vectors[i]);
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