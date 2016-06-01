// function constructor
function Emitter() {
    this.events = {};
}

// add handler to prototype
Emitter.prototype.on = function (key, listener) {
    this.events[key] = this.events[key] || [];
    this.events[key].push(listener);
};

// add emitter to prototype
Emitter.prototype.emit = function (key) {
    // bail as early as possible
    if (!this.events[key]) {
        return;
    }

    // loop through events with given key
    this.events[key].forEach(function (listener) {
        // execute the listener function
        listener();
    });
}

// export the object
module.exports = Emitter;