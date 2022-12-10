
const goods = [
    { title: 'N1', price: 150, image: 'img/1.jpg'},
    { title: 'N2', price: 50, image: 'img/2.jpg' },
    { title: 'N3', price: 350, image: 'img/3.jpg' },
    { title: 'N4', price: 250, image: 'img/4.jpg' },
    { title: 'N5', price: 450, image: 'img/5.jpg' },
    { title: 'N6', price: 550, image: 'img/6.jpg' },

  ];
  
class GoodsItem {
    constructor ({title = 'Carpet', price = 100, image}) {
        this.title = title;
        this.price = price;
        this.image = image;
    }
    render () {
        return `
        <div class="goods-item">
          <h3 class="goods-item-text">${this.title}</h3>
          <p class="goods-item-price">${this.price}</p>
          <button class="goods-item-button"><image class="goods-item-image" src="${this.image}"></image></button>
          </div>`;
    }
}

class GoodsList {
    items = [];
    fetchGoods () {
        this.items = goods;
    }
        calculatePrice() {
            return this.items.reduce((prev, { price }) => {
              return prev + price;
            }, 0)
          }
    render () {
        const goods = this.items.map(item => {
            const goodItem = new GoodsItem(item);
            return goodItem.render()
        }).join('')
        document.querySelector('.goods-list').innerHTML = goods;
    }
}
  
const goodsList = new GoodsList;
goodsList.fetchGoods();
goodsList.render();