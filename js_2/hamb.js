const HUMB_SIZES = {
  'small': {
    price: 50,
    cal: 20,
  },
  'big': {
    price: 100,
    cal: 40,
  },
}

const REQUIRED_HUMB_STUFF = {
  'salad': {
    price: 20,
    cal: 5,
  },
  'cheese': {
    price: 10,
    cal: 20,
  },
  'potato': {
    price: 15,
    cal: 10,
  },
}

const OPTIONAL_HUMB_STUFF = {
  'mayonnaise': {
    price: 20,
    cal: 5,
  },
  'seasoning': {
    price: 15,
    cal: 0,
  },
}

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = [stuffing];
  }

  addTopping(topping) {
    this.stuffing.push(topping);
  }

  removeTopping(topping) {
    this.stuffing = this.stuffing.filter((item) => item !== topping);
  }

  getToppings(topping) {
    console.log(Object.keys(OPTIONAL_HUMB_STUFF))
  }

  getSize() {
    console.log(this.size);
  }

  getStuffing() {
    console.log(this.stuffing);
  }

  calculatePrice() {
    const stuff = {
      ...OPTIONAL_HUMB_STUFF,
      ...REQUIRED_HUMB_STUFF,
    };

    let price = HUMB_SIZES[this.size].price;
    this.stuffing.forEach((item) => price += stuff[item].price);

    console.log(price);
  }

  calculateCalories() {
    const stuff = {
      ...OPTIONAL_HUMB_STUFF,
      ...REQUIRED_HUMB_STUFF,
    };
    let cal = HUMB_SIZES[this.size].cal;
    this.stuffing.forEach((item) => cal += stuff[item].cal);

    console.log(cal);
  }
}

const humb = new Hamburger('big', 'salad')

humb.calculateCalories()
humb.calculatePrice()

humb.addTopping('mayonnaise')

humb.calculateCalories()
humb.calculatePrice()
