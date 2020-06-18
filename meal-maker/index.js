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

  },

  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {

  },

  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {

  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish); // also try using your setter method!
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);

    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
  },
};

menu.addDishToCourse('appetizers', 'Salad', 10);
menu.addDishToCourse('appetizers', 'Sausage Cheese Balls', 35);
menu.addDishToCourse('appetizers', 'Fried Mozzarella Puffs', 50);

menu.addDishToCourse('mains', 'Lobster Lasagna', 60);
menu.addDishToCourse('mains', 'Mainely Fish', 45);
menu.addDishToCourse('mains', 'Maine Venison Stew', 22);

menu.addDishToCourse('desserts', 'Cake', 5);
menu.addDishToCourse('desserts', 'Dessert Crepes', 25);
menu.addDishToCourse('desserts', 'Chocolate Eclair Dessert', 27);

const meal = menu.generateRandomMeal();
console.log(meal);
