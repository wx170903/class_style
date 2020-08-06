/**
 * data:2020-08-06
 * （class）
 * 面向对象思维特点
 * 类（class），是指某一个范围，某一个类别，例如（一部手机，可以根据类生产无数部手机）；
 * 1.抽取对象公共属性和行为封装成一个类（也就是模板）
 * 2.对类进行实例化，获取类的对象；
 */



// =========================创建类（class）======================
//1.创建一个人物的类
//1-1 类constructor()构造函数，用于传递参数，返回实例对象，通过new命令生成对象实例时候，自动调用该方法。
//1-2 如果没有显示定义，类内部会自动给我们创建一个constructor();

class People {
    heigth = 12;//公共属性
    constructor(name, age = 1) {// ="" ，默认为1
        this.name = name;
        this.age = age;
    }
}

//2.利用类创建对象 new
var p = new People('bob', 2);
var p2 = new People('tony');
// console.log(p);
// console.log(p2);

//=========================方法属性==============================

class People2 {
    heigth = 12;//公共属性
    constructor(name, age = 1) {// ="" ，默认为1
        this.name = name;
        this.age = age;
    }
    sing(music) {
        console.log(music);
    }
}

var pt = new People2('bob', 2);
// pt.sing("sing Music");

//=========================继承属性==============================

//extends 关键词 继承父类属性和方法
class PeopleSon extends People2 {

}

var son1 = new PeopleSon();
// son1.sing("111");//调用父类的方法
// console.log(son1.heigth);获取父类的公共属性

//==================super关键字==================================

//用于访问和调用对象父类上的函数， 也可以调用父类的普通函数;

class Father {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    sum() {
        console.log(this.x + this.y);
    }
}

class Son_no1 extends Father {
    constructor(x, y) {
        super(x, y)
    }
}

var son2 = new Son_no1(1, 2);
// son2.sum();

//1.继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的；没有就查找父类有没有这个方法，如果有就执行父类的；
//(继承的就近原则)；

class Father2 {
    say() {
        return 'baba'
    }
}

class Son_no2 extends Father2 {
    say() {
        console.log(super.say() + 'of son');
    }
}
// var son3 = new Son_no2();
// son3.say();

//===========子类继承父类的加法，同时，扩展减法方法================

class Father3 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    sum() {
        console.log(this.x + this.y);
    }
}

class Son_no3 extends Father3 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    sum() {
        console.log(this.x - this.y);
    }
}

var son3 = new Son_no3(5, 3);
son3.sum()