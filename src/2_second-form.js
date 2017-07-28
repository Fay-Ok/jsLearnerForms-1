(function () {
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
        return nums.valueOf().map(square);
<<<<<<< HEAD
=======

>>>>>>> 813667c064266c7b5ac95e7faa8c2e697c508864
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }
    //Points: Using "New" keyword 
    //using new keyword will create new object with similar type
    //this will point to the newly created function
    //executes constuctor function whenever this is used and this points to the new object

    function Vector(points) {
        this.points = points;
        points.forEach((value, index) => this[index] = value);
    }

    Vector.prototype = {
<<<<<<< HEAD
        valueOf: function() { return this.points.valueOf(); },
        toString: function() { return '<' + this.points.join(',') + '>'; }
=======
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
>>>>>>> 813667c064266c7b5ac95e7faa8c2e697c508864
    }

    function buildVector(points) {
        return new Vector(points);
    }

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
<<<<<<< HEAD
        return vectors.filter((value) => magnitude(value) < length);;
=======
        return vectors.filter((value) => magnitude(value) < length);
>>>>>>> 813667c064266c7b5ac95e7faa8c2e697c508864
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