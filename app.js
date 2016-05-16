var person = {
    firstname: 'Elise',
    lastname: 'Linn',
    greet: function () {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname + '.');
    }
};

person.greet();
console.log('What\'s that person\'s first name again? ' + person['firstname']);
