main(List<String> args) {
  //匿名函数
  test(() {
    print("W shi 匿名");
    return 10;
  });

  //箭头函数不能有多行，只有一行，不然不能使用箭头函数
}

void test(Function foo) {
  var fooname = foo();
  print(fooname);
}

void bar() {
  print("我是bar");
}

//箭头函数
