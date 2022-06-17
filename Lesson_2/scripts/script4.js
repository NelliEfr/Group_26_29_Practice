// Реализуйте класс Student (студент), который будет иметь следующие свойства: 
// name (имя), lastname(фамилия), major (специализация), grade (оценка)

// Реализйуте метод get_info (выводит в консоль строку 'Имя: <Имя>, Фамилия: <Фамилия>, Специализация <специализация>, Средний балл: <оценка>')

// Создайте у класса статическое свойство majors (массив со значениями 'JS', 'Java', 'Php')

// Реализуйте метод change_major (принимает в качестве аргумента новую специализацию и задает ее, если она входит в список допустимых специализаций из статического свойства majors.).

// Если специализации нет в списке, то вывести в консоль сообщение "Указана неверная специализация. Укажите одну из следующих <данные из массива majors>"


class Student {

  static majors = ['JS', 'Java', 'Php'];

  constructor(name, lastname, major, grade){
    this.name = name;
    this.lastname = lastname;
    this.major = major;
    this.grade = grade;
  }

  get_info() {
    console.log(`Имя: ${this.name}, Фамилия: ${this.lastname}, Специализация: ${this.major}, Средний балл: ${this.grade}`);
  }

  change_major(new_major) {
    for (let i = 0; i < Student.majors.length; i++){
      if (Student.majors[i] === new_major) {
        this.major = new_major;
        return
      } 
    }
    console.log(`Указана неверная специализация. Укажите одну из следующих ${Student.majors}`)
  }
}

const student_1 = new Student('Nelli', 'Efremyan', 'Python', 4);


student_1.change_major('JS');
console.log(student_1.major);
student_1.change_major('JS1');






