// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
//rate (ставка за день работы), days (количество отработанных дней). 

// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

// С помощью класса создайте двух рабочих и найдите сумму их зарплат.

// Реализйуте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

class Worker {
  constructor(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days
  }

  addDays(amount) {
    this.days += amount;
  }

  deleteDays(amount) {
    this.days -= amount;
  }
}

const worker_1 = new Worker('Anton', 'Antonov', 10, 30);
const worker_2 = new Worker('Olga', 'Orlova', 15, 30);

// let sum = worker_1.getSalary() + worker_2.getSalary()

console.log(worker_1.getSalary()) //300
worker_1.deleteDays(5);
console.log(worker_1.getSalary()) //250
worker_1.addDays(3);
console.log(worker_1.getSalary()) //280



