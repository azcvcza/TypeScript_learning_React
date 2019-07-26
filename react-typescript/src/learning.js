var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone = false;
var lines = 42;
var name1 = 'Anders';
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
function bigHorribleAlert() {
    alert('func call alert');
}
var f1 = function (i) {
    return i * i;
};
var f2 = function (i) {
    return i * i;
};
var f3 = function (i) {
    return i * i;
};
var f4 = function (i) {
    return i * i;
};
var f5 = function (i) { return i * i; };
var p = {
    name: 'Bobby',
    move: function () {
        alert('Booby move');
    }
};
var validPerson = {
    name: 'Bobby',
    age: 42,
    move: function () {
        alert('Booby move2');
    }
};
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    Point.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.origin = new Point(0, 0);
    return Point;
}());
var PointPerson = /** @class */ (function () {
    function PointPerson() {
    }
    PointPerson.prototype.move = function () { };
    return PointPerson;
}());
var p1 = new Point(10, 20);
var p2 = new Point(25);
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
var Geometry;
(function (Geometry) {
    var Square = /** @class */ (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
var G = Geometry;
var s2 = new G.Square(10);
var Tuple = /** @class */ (function () {
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Tuple;
}());
var pairToTuple = function (p) {
    return new Tuple(p.item1, p.item2);
};
var tuple = pairToTuple({
    item1: 'hello',
    item2: 'world'
});
