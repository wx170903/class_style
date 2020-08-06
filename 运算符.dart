main(List<String> args) {
  var bane = 'wgy';
  //??=运算符,原来的变量有值时。那么??=不执行---原来变量null就赋值；
  bane ??= 'eli';
  // print(bane);

  //??
  //??前面数据有值就使用前面的，前面数据为null就使用后面的
  var age;
  var height = age ?? "180";
  // print(height);

  //级联运算符
  var p = Person()
    ..name = "thy"
    ..eat();
}

class Person {
  String name;
  void run() {
    print("run");
  }

  void eat() {
    print("eat");
  }
}
