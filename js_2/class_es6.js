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

  makeBlue() {
    this.color = 'blue';
  }
}

const mainMenuItem = new MainMenuItem('white', 'Foo', 200)

console.log(mainMenuItem)

mainMenuItem.makeRed()

console.log(mainMenuItem)

mainMenuItem.makeBlue()

console.log(mainMenuItem)
