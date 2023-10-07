class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo) {
        let dx = pointOne.x - pointTwo.x;
        let dy = pointOne.y - pointTwo.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
