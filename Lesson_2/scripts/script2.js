// Реализуйте класс Country (Страна), который будет иметь следующие свойства: 
// name (название страны), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса


class Country{

  constructor(name, capital, population, climat){
      this.name = name;
      this.capital = capital;
      this.population = population;

      if (climat === true) {
        this.climat = 'climate is warm';
      } else {
        this.climat = 'climate is cold';
      }
  }

  get_info(){
    return `Столица:${this.capital}, Численность населения:${this.population}, Климат:${this.climat}`;
  }

}

const country_1 = new Country('Germany','Berlin', 20000000, true);
const country_2 = new Country('France', 'Paris', 1500000, false);
const country_3 = new Country('Spain', 'Madrid', 7000000, true);

// true => 'Climate is warm'
// false => 'Climate is cold'

console.log(`In ${country_1.name}, ${country_1.climat}.`); 
console.log(country_2.name, country_2.capital, country_2.population, country_2.climat); 



