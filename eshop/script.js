// https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses – адрес API;
// /catalogData.json – получить список товаров;
// /getBasket.json – получить содержимое корзины;
// /addToBasket.json – добавить товар в корзину;
// /deleteFromBasket.json – удалить товар из корзины.

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
  return new Promise((resolve, reject) => {
    let xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) resolve(xhr.responseText)
        else reject('Error')
      }
    }

    xhr.open('GET', `${API_URL}${url}`, true);
    xhr.send();
  })
};



class GoodsItem {
  constructor(product_name, price, id_product) {
    this.product_name = product_name;
    this.price = price;
    this.id_product = id_product;
  }

  render() {
    return `<div class="goods-item">
      <h3>${this.product_name}</h3>
      <p>${this.price}</p>
      <button id="${this.id_product}">Добавить</button>
      </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }

  fetchGoods() {
    return makeGETRequest(`/catalogData.json`)
    .then((goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    })
  }

  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    this.render();
  }

  render() {
    let listHtml = '';
    this.filteredGoods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  getTotalSum() {
    return this.goods.reduce((sum, item) => sum += item.price, 0);
  }
}

class GoodsCart extends GoodsList {
  constructor() {
    super();
  }

  fetchGoods() {}

  clear() {}

  buyAll() {}
}

class CartItem extends GoodsItem {
  constructor() {
    super();
  }

  delete() {}

  addOne() {}

  removeOne() {}
}

const list = new GoodsList();
list.fetchGoods()
  .then(() => list.render());

// const searchButton = document.querySelector('.search-button');

// searchButton.addEventListener('click', (e) => {
//   const value = searchInput.value;
//   list.filterGoods(value);
// });

const searchInput = document.querySelector('.goods-search');
searchInput.addEventListener('input', ({ target }) => {
  const { value } = target;
  list.filterGoods(value);
})