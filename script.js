 const GET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';
  const GET_BASKET_GOODS_ITEMS = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';



  function service (url) {
  return fetch(url).then((res) => res.json())
}

  function init() {

    const goodItem = Vue.component('goods-item', {
      props: [
         'item',
         'title',
         'price'
      ],
      template: `
        <div class="goodsItem">
           <h3 class="goodsItem_text">{{ item.product_name }}</h3>
           <p class="goodsItem_price">{{ item.price }}</p>
        </div>
      `
    })
  }

/*class GoodsItem {
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
};*/
  
function init() {
const app = new Vue({
el: '#root',
data: {
    items: [],
    sortItems: [],
    search: '',
    show: false, 

},
methods: {
    fetchGoods() {
         service(GET_GOODS_ITEMS).then((data) => {
            this.items = data;
            this.sortItems = data;
        });
    },
    filterItems(value) {
        this.sortItems = this.items.filter(({ product_name }) => {
          return product_name.match(new RegExp(this.search, 'gui'))
        })
      },
}, 
computed: {
   calculatePrice() {
       return this.sortItems.reduce((prev, { price }) => {
         return prev + price;
    }, 0)
    }
},    
mounted() {
    this.fetchGoods();
}
  })  
}
window.onload = init;