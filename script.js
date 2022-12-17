
const goods = [
    { title: 'N1', price: 150, image: 'img/1.jpg'},
    { title: 'N2', price: 50, image: 'img/2.jpg' },
    { title: 'N3', price: 350, image: 'img/3.jpg' },
    { title: 'N4', price: 250, image: 'img/4.jpg' },
    { title: 'N5', price: 450, image: 'img/5.jpg' },
    { title: 'N6', price: 550, image: 'img/6.jpg' },

  ];

  const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
  const GET_BASKET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';



  function service (url) {
  return fetch(url).then((res) => res.json())
}

  

class GoodsItem {
    constructor ({product_name = 'Carpet', price = 100, image}) {
        this.product_name = product_name;
        this.price = price;
        this.image = image;
    }
    render () {
        return `
        <div class="goods-item">
          <h3 class="goods-item-text">${this.product_name}</h3>
          <p class="goods-item-price">${this.price}</p>
          <button class="goods-item-button"><image class="goods-item-image" src="${this.image}"></image></button>
          </div>`;
    }
}

class GoodsList {
    items = [];
    sortItems = [];
    fetchGoods () {
        return service(GET_GOODS_ITEMS).then((data) => {
            this.items = data;
            this.sortItems = data;
        });

    }
        calculatePrice() {
            return this.items.reduce((prev, { price }) => {
              return prev + price;
            }, 0)
          }
    render () {
        const goods = this.sortItems.map(item => {
            const goodItem = new GoodsItem(item);
            return goodItem.render()
        }).join('')
        document.querySelector('.goods-list').innerHTML = goods;
    }



    filterItems(value) {
        this.sortItems = this.items.filter(({ product_name }) => {
          return product_name.match(new RegExp(value, 'gui'))
        })
      }
}

class GoodsBasket {
    items = [];
    fetchGoods () {
       return service(GET_BASKET_GOODS_ITEMS).then((data) => {
            this.items = data.contents;
        });
    };
};
  
const goodsList = new GoodsList ();
goodsList.fetchGoods().then(() => {
        goodsList.render();
})

const basketGoodsList = new basketGoodsList();
basketGoodsList.fetchGoods();

const button = document.getElementsByClassName('search-button')[0];
button.addEventListener('click', () => {
    const value = document.getElementsByClassName('goods-search')[0].value
    goodsList.filterItems(value);

    goodsList.render();

})