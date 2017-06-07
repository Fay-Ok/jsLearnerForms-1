(function() {
    'use strict';

    function greet(greeting) {
        if (greeting === 'Salutations') {
            return 'Salutations!';
        }
        return 'Hello!';
    }

    function square(value) {
        return Math.pow(value, 2);
    }

    function squareRoot(value) {
        return Math.sqrt(value);
    }

    function sum(value) {
        var result = 0;
        value.forEach(function(item) {
            result += item;
        });
        return result;
    }

    function squareAll(values) {
        var result = [];
        values.forEach(function(item) {
            result.push(square(item));
        })
        return result;
    }

    function sumOfSquares(values) {
        return sum(squareAll(values));
    }

    function buildVector(initialArray) {
        let vector = initialArray.slice();

        vector.valueOf = function() {
            return vector.slice();
        }
        vector.toString = function() {
            return '<' + vector + '>';
        }

        return vector;
    }

    function magnitude(values) {

        if (values.length === 1) {
            return squareRoot(square(values));
        } else {
            let result = sum(squareAll(values));
            return squareRoot(result);
        }

    }

    function getVectorsShorterThan(length, vectors) {

        var magnitudeVec = [];

        for (let i = 0; i < vectors.length; i++) {
            if (magnitude(vectors[i]) < length) {
                magnitudeVec[magnitudeVec.length] = vectors[i];
            }
        }
        return magnitudeVec;
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
    };

})();