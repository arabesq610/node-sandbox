var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function () {
    console.log('something said hello');
});

emtr.on('greet', function () {
    console.log('a greeting occurred');
});

emtr.emit('greet');