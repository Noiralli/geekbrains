// https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=ru

const API_URL = 'http://127.0.0.1:3000';

const app = new Vue({
  el: '#app',
  data: () => ({
    goods: [],
    filteredGoods: [],
    searchLine: '',
  }),
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData`, (goods) => {
      // API который мы исполььзуем возвращает нам массив в строчном представлении (JSON)
      // для работы с ним в приложение, необходимо выполнить процесс десериализации
      
      // к вопросу о том, почему в доме появлялось там много пустых значений -> строка это в некотором роде массив букв
      // vue просто проходился по нашей строке и пытался работать с каждой буквой в строке как с отдельным объектом
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    });
    this.makePOSTRequest(`${API_URL}/addToCart`, JSON.stringify({ data: 'obj from front' }), () => null)
  },
  methods: {
    filterGoods() {
      const regexp = new RegExp(this.searchLine, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    makeGETRequest(url, callback) {
      var xhr;

      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      }

      xhr.open('GET', url, true);
      xhr.send();
    },
    makePOSTRequest(url, data, callback) {
      let xhr;
  
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      }
  
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  
      xhr.send(data);
    }
  },
});
