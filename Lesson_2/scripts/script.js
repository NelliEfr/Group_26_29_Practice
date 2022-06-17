class Car {

  constructor(name, model, color, volume){
    this.name = name;
    this.model = model;
    this.color = color;
    this.volume = volume;
  }

  get_info() {
    console.log(`Марка машины: ${this.name}, Модель: ${this.model}, Цвет: ${this.color}, Объем двигателя: ${this.volume}`);
  }

  change_color(new_color) {
    this.color = new_color;
  }

  change_model(new_model){
    this.model = new_model;
  }
}

const car_1 = new Car('Toyota', 'RAV4', 'black', 2.4);
const car_2 = new Car('BMW', 'A4', 'white', 2.0);

// console.log(car_1.color);
// car_1.change_color('red');
// console.log(car_1.color);

// console.log(car_1.model); //RAV4
// car_1.change_model('Prado'); //RAV4 -> Prado
// console.log(car_1.model); // Prado

car_1.change_color('white')
console.log(car_1.color);
console.log(car_1.color);
car_1.change_color('purple')
console.log(car_1.color);



//Свойства машины: объем двигателя, марка, модель, цвет





