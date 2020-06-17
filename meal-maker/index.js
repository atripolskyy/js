const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },

  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains.push(mainIn);
  },

  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts.push(dessertIn);
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this[courseName] = dish;
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizer');
    const main = this.getRandomDishFromCourse('main');
    const dessert = this.getRandomDishFromCourse('dessert');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizer', 'Salad', 10);
menu.addDishToCourse('appetizer', 'Sausage Cheese Balls', 35);
menu.addDishToCourse('appetizer', 'Fried Mozzarella Puffs', 50);

menu.addDishToCourse('main', 'Lobster Lasagna', 60);
menu.addDishToCourse('main', 'Mainely Fish', 45);
menu.addDishToCourse('main', 'Maine Venison Stew', 22);

menu.addDishToCourse('dessert', 'Cake', 5);
menu.addDishToCourse('dessert', 'Dessert Crepes', 25);
menu.addDishToCourse('dessert', 'Chocolate Eclair Dessert', 27);

const meal = menu.generateRandomMeal();
console.log(meal);
