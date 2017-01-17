// -*- mode: typescript -*-
/**
 * @fileoverview
 * @author Taketoshi Aono
 */
"use strict";
var Rx_1 = require("rxjs/Rx");
function update(initial) {
    var patterns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        patterns[_i - 1] = arguments[_i];
    }
    return Rx_1.Observable.create(function (observer) {
        var streams = patterns.filter(function (_, i) { return i % 2 === 0; });
        var callbacks = patterns.filter(function (_, i) { return i % 2 !== 0; });
        var value = initial;
        var subscription = new Rx_1.Subscription();
        streams.forEach(function (_, i) { return subscription.add(streams[i].subscribe(function (v) {
            value = callbacks[i](value, v);
            observer.next(value);
        })); });
        return function () { return subscription.unsubscribe(); };
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = update;
