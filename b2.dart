main(List<String> args) {
  //1.明确是声明
  String name = 'eli';
  //2.类型推到（var/final/const）
  // final，const 定义常量；
  // satHello(name);
  satHello2(name, 1);
}

// 3.dart没有函数的重载
// 实参和行参在进行匹配时，是根据位置来匹配的
// 只有可选参数才能有默认值
//
void satHello(String name) {
  print(name);
}

void satHello2(String name, [int age, double height = 10]) {
  print(name);
  print(age);
  print(height);
}

/*
  函数是第一公民
  
*/
