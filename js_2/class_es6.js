class MenuItem {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }

  makeRed() {
    this.color = 'red';
  }
}

class MainMenuItem extends MenuItem {
  constructor(color, name, width) {
    super(color, name)
    this.width = width
  }

  notifyUser() {
    console.log(`Color was changed to ${this.color}`)
  }

  makeBlue() {
    this.color = 'blue';

    this.notifyUser();
  }
}

const mainMenuItem = new MainMenuItem('white', 'Foo', 200)

console.log(mainMenuItem)

mainMenuItem.makeBlue()

// console.log(mainMenuItem)

// mainMenuItem.makeBlue()

// console.log(mainMenuItem)
