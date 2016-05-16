var firstname = 'Christy';

(function (lastname) {
    'use strict';
    var firstname = 'Elise';
    console.log('IIFE name: ' + firstname + ' ' + lastname);
}('Linn'));

console.log('Global name: ' + firstname);
