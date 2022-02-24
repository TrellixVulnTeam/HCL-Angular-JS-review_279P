"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    setX(num) {
        this._x = num;
    }
    setY(num) {
        this._y = num;
    }
    getInfo() {
        return `x=${this._x}, y=${this._y}`;
    }
}
exports.Shape = Shape;
