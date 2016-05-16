var a, c;

// this function wants a primitive value
function changePrimitive(b) {
    'use strict';
    b = 2;
}

a = 1;

// we feed the function a primitive value
changePrimitive(a);

// still 1! passed by value
console.log(a);


// now time for some pass by reference...

// this function wants a complex value
function changeComplex(d) {
    'use strict';
    d.prop1 = function () {};
    d.prop2 = {};
}

// c is an empty object
c = {};

// c.prop1 is an empty object
c.prop1 = {};

// now pass by reference to the hungry function
changeComplex(c);

// lo and behold, it is now a function because it was passed by reference
console.log(c);
