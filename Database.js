class Course {
    constructor (name, time, date, rooms) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;
    }
    toString () {
        return this.name;
    }
}
class Student {
    constructor (id, name, gpa, courses) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
    }
    toString () {
        return this.id+'';
    }
}
class Point {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    toString () {
        return '(' +this.x + ', ' + this.y+ ')';
    }
}
class Point3D extends Point {
    constructor (x, y, z) {
        super(x,y);
        this.z = z;
    }
    toString () {
        return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
    }
}
class Distance {
    constructor (km = 0) {
        this.km = Math.round(km);
    }
    get miles () {
        return Math.round(this.km * 2.5);
    }
    set miles (value = 0) {
        this.km = Math.round(value / 3.4);
    }
    toString () {
        return this.km + " km"; 
    }
    static fromMiles(value) {
        let d = new Distance();
        d.miles = value;
        return d;
    }
}
class CW4 extends Menu {
    constructor () {
        super()
        var ders = new Course("ileri", "12:00", new Date("2017-11-23"), ["B101"]);
        this.student = new Student(20, "ummugulsum", 3.4, ders);
        this.course = ders;
        this.distance = new Distance(300);
        this.point = new Point(3,4);
        this.point3d = new Point3D(3,4,5);
    }
}