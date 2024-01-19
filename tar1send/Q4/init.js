class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get X() { return this.x };
    get Y() { return this.y };
    Show() {
        return `${x,y}`;
    }
    Equals(p) {
        if (p.x==this.x && p.y==this.y) {
            return true;
        }
        return false;
    }
}
function f1(points, x, y) {
    for (var i = 0; i < points.length; i++) {
        if (points[i].X==x && points[i].Y==y) {
            return true;
        }
    }
    return false;
}
function f2(points, p1) {
    for (var i = 0; i < points.length; i++) {
        if (p1.Equals(points[i])) {
            return true;
        }
    }
    return false;
}
function f3(points) {
    var distance = 0;
    for (var i = 1; i < points.length; i++) {
        var p2 = points[i];
        var p1 = points[i - 1];
        distance += Math.sqrt(Math.pow(p1.X - p2.X, 2) + Math.pow(p1.Y - p2.Y, 2));
    }
    return distance;
}
//Q2
pointsArr = [new Point(2, 1), new Point(-4, -2), new Point(-2, 1)];
thex = 4;
they = -2;
console.log(f1(pointsArr, thex, they));
//Q3
pointsArr = [new Point(2, 1), new Point(-4, -2), new Point(-2, 1)];
thex = 4;
they = -2;
console.log(f2(pointsArr, new Point(thex, they)));
newArr = [];
function f4() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    newArr.push(new Point(x, y));
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
   // document.getElementById("ph").innerHTML = f3(newArr);
}
function f5() {
    document.getElementById("ph").innerHTML = f3(newArr);
}