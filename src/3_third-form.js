(function () {
    'use strict';


    function eitherType(typeName, defaultValue, actualValue) {
        return typeof actualValue === typeName ? actualValue : defaultValue;
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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

    function sum(params) {
         let result = 0;
        return params.reduce(add,0);

    }

    function squareAll(nums) {
        return nums.valueOf().map(square);
    }

    function sumOfSquares(nums) {
        let squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(points) {

        let vector = this instanceof Vector? this: new Vector(points);
        Vector.valueAttachment(vector,points);
        
        return vector;
    }
    
    Object.defineProperty= (vector,key,{
        writeable:false,
        value : value
    });

    Vector.valueAttachment = function (vector, points){
        vector.points = points;
        points.forEach((value, index) => vector[index] = value);
    }
    Vector.prototype = {
        valueOf: function () { return this.points.valueOf(); },
        toString: function () { return '<' + this.points.join(',') + '>'; }
    };

    function magnitude(vector) {
        let squaredMagnitude = sumOfSquares(vector);
        return squareRoot(squaredMagnitude);
    }

    function getVectorsShorterThan(length, vectors) {
        return vectors.filter((vector) => magnitude(vector) < length);
    }

    module.exports = {
        buildVector: Vector,
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
