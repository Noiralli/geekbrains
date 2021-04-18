function MenuItem(color, name, width) {
  this.color = color;
  this.name = name;
  this.width = width;
}

MenuItem.prototype.makeRed = function () {
  this.color = 'red';
}

const item = new MenuItem('white', 'Foo', 200);

item.makeRed();

// ==================

function MainMenuItem(color, name, width) {
  MenuItem.call(this, color, name, width);
}

MainMenuItem.prototype = Object.create(MenuItem.prototype);
MainMenuItem.prototype.constructor = MainMenuItem;

const mainItem = new MainMenuItem('black', 'Bar', 100);

mainItem.makeRed()

console.log(mainItem);
