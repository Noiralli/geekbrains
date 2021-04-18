// const menuItem = {
//   color: 'blue',
//   name: 'Bar',
//   makeRed: function () {
//     this.color = 'red';
//   }
// }

// ==========================

// function MenuItem() {
//   this.color = 'blue',
//   this.name = 'Bar',
//   this.makeRed = function () {
//     this.color = 'red';
//   }
// }

// const item1 = new MenuItem();
// const item2 = new MenuItem();

// item1.makeRed()

// console.log(item1);
// console.log(item2);

// ======================

function MenuItem(color = 'aaaa', name = 'oooo') {
  this.color = color,
  this.name = name,
  this.setColor = function (color = 'red') {
    this.color = color;
  }
}

const item1 = new MenuItem('black', 'Foo');
const item2 = new MenuItem('white', 'Bar');
const item3 = new MenuItem();

item1.setColor()
item2.setColor('green')

console.log(item1.color);
console.log(item2.color);
console.log(item3)