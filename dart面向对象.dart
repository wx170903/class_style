main(List<String> args) {
  var p = Person.na('19', 1);
  print(p.name);
}

class Person {
  String name;
  int age;

  Person.na(this.name, this.age);
}
