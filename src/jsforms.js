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
        return values;
    }


    module.exports = {
        greet: greet,
        square: square,
        squareRoot: squareRoot,
        sum: sum,
        squareAll: squareAll,
        sumOfSquares: sumOfSquares,
        buildVector: buildVector,
        magnitude: magnitude
    };

})();